#!/usr/bin/env python3
"""Build a study-count Sankey, statistics, and auditable links from studies.js.

Run: MPLCONFIGDIR=/tmp/hvi-matplotlib python3 scripts/build_review_overview.py
Requires matplotlib. Every record contributes one unit to every Sankey stage.
"""
import json
from collections import Counter
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.path import Path as DrawPath
from matplotlib.patches import PathPatch, Rectangle
from matplotlib.offsetbox import AnnotationBbox, TextArea, VPacker

ROOT = Path(__file__).resolve().parents[1]
source = (ROOT / "data/studies.js").read_text()
studies = json.loads(source[source.index("["):].strip().removesuffix(";"))
N = len(studies)
assert N and len({s["id"] for s in studies}) == N, "Expected unique study IDs"

FOCUS = {
    "Human Behavior Understanding and Prediction": "Behavior understanding\n& prediction",
    "Communication Design + Behavior Evaluation": "Communication design\n& behavior evaluation",
    "Data Collection Methods Comparison": "Data collection\nmethods comparison",
}
ROAD = {"pedestrian": "Pedestrians only", "cyclist": "Cyclists only", "both": "Pedestrians & cyclists"}
SCENARIO = {"unsignalized": "Unsignalized only", "shared": "Shared space only",
            "intersection": "Intersection only", "signalized": "Signalized only", "unclear": "Unclear"}
SYSTEM = {"AV/car": "Autonomous car", "Shuttle/pod": "Autonomous shuttle", "Delivery vehicle": "Delivery vehicle"}
MODEL = {"statistics": "Statistical tests / description", "linear": "Linear models",
         "discrete-choice": "Discrete-choice models", "hybrid": "Hybrid models",
         "deep-learning": "Deep learning", "psychological": "Psychological models", "causal": "Causal models"}
SURVEYS = {"Online Video Survey", "Photo Survey", "Web Survey"}


def method_group(study):
    methods = set(study["method"])
    if len(methods) > 1:
        return "Multiple methods"
    if not methods:
        return "Unspecified"
    value = next(iter(methods))
    if value in SURVEYS:
        return "Video / photo / web survey"
    if value in {"AR", "AR HMD", "360 Video VR"}:
        return "AR / 360° video VR"
    return value


def scenario_group(study):
    tags = set(study["scenario_types"])
    if len(tags) > 1:
        return "Multiple scenario tags"
    return SCENARIO[next(iter(tags))] if tags else "Unspecified"


def model_group(study):
    families = {r["model_family"] for r in study["model_rows"] if r.get("model_family")}
    if len(families) > 1:
        return "Multiple model families"
    return MODEL[next(iter(families))] if families else "Unspecified"


paths = [{"id": s["id"], "stages": [FOCUS[s["section"]], method_group(s),
          ROAD[s["road_users_type"]], SYSTEM[s["av_type"]], scenario_group(s), model_group(s)]} for s in studies]
stage_names = ["Research focus", "Study method", "Road-user group", "Autonomous systems", "Scenario classification", "Modeling methods"]
stage_count = len(stage_names)
counts = [Counter(p["stages"][i] for p in paths) for i in range(stage_count)]
orders = [sorted(c, key=lambda k: (-c[k], k)) for c in counts]
# Put VR-related groups next to each other without changing study membership.
method_order = ["VR HMD", "VR CAVE", "VR screen", "AR / 360° video VR",
                "Wizard-of-Oz", "Field Study", "Video / photo / web survey", "Multiple methods"]
orders[1] = [label for label in method_order if label in counts[1]] + [
    label for label in orders[1] if label not in method_order]
links = [Counter((p["stages"][i], p["stages"][i + 1]) for p in paths) for i in range(stage_count - 1)]
for i, c in enumerate(counts):
    assert sum(c.values()) == N
    for label, count in c.items():
        if i:
            assert sum(v for (_, b), v in links[i - 1].items() if b == label) == count
        if i < stage_count - 1:
            assert sum(v for (a, _), v in links[i].items() if a == label) == count


def table(counter):
    return [{"category": k.replace("\n", " "), "studies": v, "percent": round(v / N * 100, 1)}
            for k, v in counter.most_common()]


raw = {
    "Research focus": Counter(s["section"] for s in studies),
    "Study method (overlapping)": Counter(m for s in studies for m in set(s["method"])),
    "Road-user group": Counter(ROAD[s["road_users_type"]] for s in studies),
    "Scenario tag (overlapping)": Counter(t for s in studies for t in set(s["scenario_types"])),
    "Model family (overlapping)": Counter(f for s in studies for f in {r["model_family"] for r in s["model_rows"]}),
    "Autonomous-system group": Counter(SYSTEM[s["av_type"]] for s in studies),
    "Modeling methods (exclusive groups)": Counter(model_group(s) for s in studies),
    "Publication year": Counter(s["year"] for s in studies),
}
years = sorted(raw["Publication year"])
summary = {
    "source": "data/studies.js", "unique_studies": N, "year_range": [years[0], years[-1]],
    "scope_note": f"The website describes 99 articles; this export covers only the {N} unique records in the local dataset.",
    "counting": "One study per Sankey stage; multiple study methods, scenario tags and model families form explicit exclusive groups. Raw tag statistics overlap and count each study once per tag. Links are adjacent-stage cross-tabulations, not causal or temporal transitions.",
    "statistics": {k: table(c) for k, c in raw.items()},
    "sankey_stages": [{"name": name, "nodes": table(c)} for name, c in zip(stage_names, counts)],
    "sankey_links": [{"stage": i, "source": a.replace("\n", " "), "target": b.replace("\n", " "), "studies": n,
                      "study_ids": [p["id"] for p in paths if p["stages"][i:i + 2] == [a, b]]}
                     for i, pairs in enumerate(links) for (a, b), n in pairs.items()],
    "study_paths": paths,
}
(ROOT / "data/review-overview-summary.json").write_text(json.dumps(summary, indent=2, ensure_ascii=False) + "\n")

# Draw a proportional, six-stage Sankey with a common study-to-height scale.
plt.rcParams.update({"font.family": "DejaVu Sans", "svg.fonttype": "none"})
fig, ax = plt.subplots(figsize=(16, 9), dpi=100)
fig.subplots_adjust(0, 0, 1, 1)
ax.set(xlim=(0, 1920), ylim=(1080, 0))
ax.axis("off")
ink = "#303B3C"
# User-specified palette. Reuse blue for the sixth column.
slide_theme = {"blue": "#809BCE", "sky": "#95B8D1", "mint": "#B8E0D2",
               "pale_mint": "#D6EADF", "rose": "#EAC4D5", "heading": "#37494B"}
stage_colors = [slide_theme[k] for k in ("blue", "sky", "mint", "pale_mint", "rose", "blue")]
# Independent thesis characteristics, not a shared cohort or continuous path.
highlight_categories = [(0, FOCUS["Human Behavior Understanding and Prediction"]),
                        (1, "VR HMD"), (2, "Pedestrians only"),
                        (3, "Autonomous shuttle"), (4, "Shared space only"), (5, "Deep learning")]
# A separate plum accent distinguishes thesis categories from the data palette.
highlights = {key: ("#1C3AA9", "#E3E8FB") for key in highlight_categories}

# Fixed 16:9 canvas. Short display labels leave the audit categories unchanged.
headings = ["Research focus", "Study method", "Road user", "AV type", "Scenario", "Modeling approach"]
slide_labels = {
    "Behavior understanding\n& prediction": "Behavior prediction\n& understanding",
    "Communication design\n& behavior evaluation": "Communication\n& evaluation",
    "Data collection\nmethods comparison": "Data collection\ncomparison",
    "Video / photo / web survey": "Video / photo / web",
    "Multiple methods": "Multiple methods",
    "Pedestrians & cyclists": "Pedestrians & cyclists",
    "Multiple scenario tags": "Multiple scenarios",
    "Statistical tests / description": "Statistical analysis",
    "Discrete-choice models": "Discrete choice",
    "Multiple model families": "Multiple families",
    "Psychological models": "Psychological",
}
xs, top, bottom, scale, gap, width = [285, 560, 850, 1200, 1550, 1850], 125, 1025, 6.0, 50, 20
nodes = []
for i, order in enumerate(orders):
    ax.text(xs[i], 125, headings[i], ha="right", fontsize=11, weight="bold", color=slide_theme["heading"])
    height = N * scale + (len(order) - 1) * gap
    y = (top + bottom - height) / 2
    column = {}
    for label in order:
        column[label] = (y, counts[i][label] * scale)
        y += counts[i][label] * scale + gap
    nodes.append(column)

for i, pairs in enumerate(links):
    outgoing, incoming = Counter(), Counter()
    for a in orders[i]:
        for b in orders[i + 1]:
            n = pairs.get((a, b), 0)
            if not n:
                continue
            x0, x1 = xs[i] + width + 9, xs[i + 1] - 9
            y0 = nodes[i][a][0] + outgoing[a]
            y1 = nodes[i + 1][b][0] + incoming[b]
            h, dx = n * scale, (x1 - x0) * 0.46
            vertices = [(x0, y0), (x0 + dx, y0), (x1 - dx, y1), (x1, y1),
                        (x1, y1 + h), (x1 - dx, y1 + h), (x0 + dx, y0 + h), (x0, y0 + h), (x0, y0)]
            codes = [DrawPath.MOVETO, *([DrawPath.CURVE4] * 3), DrawPath.LINETO,
                     *([DrawPath.CURVE4] * 3), DrawPath.CLOSEPOLY]
            ax.add_patch(PathPatch(DrawPath(vertices, codes), facecolor=stage_colors[i], alpha=0.30, edgecolor="none"))
            outgoing[a] += h
            incoming[b] += h

for i, column in enumerate(nodes):
    for label, (y, h) in column.items():
        emphasis = highlights.get((i, label))
        node_color = emphasis[0] if emphasis else stage_colors[i]
        ax.add_patch(Rectangle((xs[i], y), width, h, facecolor=node_color,
                               edgecolor=node_color if emphasis else "#8B9492", lw=1.2 if emphasis else 0.5))
        n = counts[i][label]
        category = TextArea(slide_labels.get(label, label), textprops={
            "fontsize": 11.5, "weight": "bold" if emphasis else "medium",
            "color": node_color if emphasis else ink, "ha": "right", "linespacing": 1.12})
        statistic = f"{n} {'study' if n == 1 else 'studies'}"
        if n >= 5:
            statistic += f" · {n / N:.1%}"
        detail = TextArea(statistic, textprops={"fontsize": 9, "color": "#697577", "ha": "right"})
        label_box = VPacker(children=[category, detail], align="right", pad=0, sep=3)
        ax.add_artist(AnnotationBbox(label_box, (xs[i] - 14, y + h / 2),
                      xycoords="data", box_alignment=(1, 0.5), frameon=True, pad=0.35,
                      bboxprops={"facecolor": emphasis[1] if emphasis else "white",
                                 "edgecolor": node_color if emphasis else "none",
                                 "linewidth": 1 if emphasis else 0, "alpha": 0.98}))

for ext in ("svg", "png"):
    fig.savefig(ROOT / f"assets/img/review-overview.{ext}", dpi=240, facecolor="white")
plt.close(fig)

report = ["# Review dataset overview", "", f"Source: `data/studies.js`. **{N} unique study records, {years[0]}–{years[-1]}.**", "",
          summary["scope_note"], "", "![Study landscape Sankey](../assets/img/review-overview.svg)", "",
          "## How to read the figure", "", summary["counting"], "",
          "The method stage keeps VR HMD, VR CAVE, VR screen, Wizard-of-Oz and field studies separate. Single-method online video, photo and web surveys are grouped; single-method AR and 360° video VR studies are grouped. Any study listing multiple methods goes only into ‘Multiple methods’. The scenario stage retains single tags and groups records with multiple tags, without imposing a primary scenario. Autonomous-system groups map directly from av_type: AV/car, Shuttle/pod (displayed as Autonomous shuttle) and Delivery vehicle. The study-method column places VR HMD, VR CAVE, VR screen and the combined AR / 360° video VR group together. One deep-plum accent independently highlights Behavior prediction & understanding, VR HMD, Pedestrians only, Autonomous shuttle, Shared space only and Deep learning as thesis-related categories. These highlights do not imply a shared subset of studies. No record matches all six highlighted categories: all three studies in the exclusive Deep learning group use Autonomous car, not Autonomous shuttle. Therefore the figure does not draw a continuous highlighted ribbon. Background-flow opacity is 0.30, approximately 62% lower than 0.78. Labels keep full counts, while percentages are omitted for groups below five studies. All percentages remain available in this report. Modeling methods use distinct model_family values within each study: one family retains its label, multiple families go into ‘Multiple model families’. ‘Hybrid models’ is an existing dataset family and is not synonymous with multiple families. The report’s overlapping model-family statistics include those multi-family studies, so they can exceed the exclusive Sankey node counts. The figure uses a 16:9 slide layout. Short labels refer to the same audit categories: Statistical analysis = statistical tests / description; Multiple families = multiple model families; Video / photo / web = survey methods. Complete categories and percentages remain in the tables below.", "",
          "These are descriptive coverage statistics, not pooled effect sizes or tests of statistical significance. The dataset does not provide harmonized effect estimates for a quantitative synthesis. Sample descriptions mix participants, trials and decisions, so they are not summed.", ""]
for name, counter in raw.items():
    report += [f"## {name}", "", f"| Category | Studies | % of {N} |", "| --- | ---: | ---: |"]
    report += [f"| {r['category']} | {r['studies']} | {r['percent']:.1f}% |" for r in table(counter)]
    report += [""]
report += ["## Reproduce and audit", "", "Run `MPLCONFIGDIR=/tmp/hvi-matplotlib python3 scripts/build_review_overview.py` (requires matplotlib).",
           "The generator checks unique IDs, stage totals and flow conservation. `data/review-overview-summary.json` contains category statistics, every link’s contributing study IDs, and each study’s six-stage path.", ""]
(ROOT / "docs").mkdir(exist_ok=True)
(ROOT / "docs/review-overview.md").write_text("\n".join(report))
print(f"Generated SVG, PNG, report and audit JSON for {N} unique studies; all stage and link totals validated.")
