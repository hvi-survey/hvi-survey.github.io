#!/usr/bin/env python3
"""Generate a second 16:9 alluvial plot, colored by focus × method.

Run: MPLCONFIGDIR=/tmp/hvi-matplotlib python3 scripts/build_review_combinations.py
Rebuilds the original figure first to share its data, grouping and layout.
"""
import json
import runpy
from collections import Counter
from pathlib import Path
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
base = runpy.run_path(str(ROOT / "scripts/build_review_overview.py"))
plt, DrawPath = base["plt"], base["DrawPath"]
PathPatch, Rectangle = base["PathPatch"], base["Rectangle"]
paths, orders, nodes = base["paths"], base["orders"], base["nodes"]
xs, width, scale = base["xs"], base["width"], base["scale"]
counts, N = base["counts"], base["N"]
rank = [{label: i for i, label in enumerate(order)} for order in orders]
full_counts = Counter(tuple(p["stages"]) for p in paths)
signatures = sorted(full_counts, key=lambda s: tuple(rank[i][v] for i, v in enumerate(s)))
combinations = sorted({s[:2] for s in signatures}, key=lambda s: (rank[0][s[0]], rank[1][s[1]]))
# Use the overview's five reference colors, alternating color families.
# Nine darker derivatives distinguish the remaining focus–method combinations.
theme = base["slide_theme"]
palette = [theme["blue"], theme["rose"], theme["mint"], theme["sky"], theme["pale_mint"],
           "#526FA3", "#B17C96", "#629A88", "#597F9D", "#99B5A6",
           "#3D557F", "#8E5B75", "#427261", "#719CAD"]
assert len(combinations) <= len(palette), "Extend the palette for new focus–method combinations"
colors = dict(zip(combinations, palette))

# Every full path occupies the same slot on both sides of each node.
# This preserves actual joint membership instead of suggesting paths from marginals.
positions = {}
for i, column in enumerate(nodes):
    for label, (start, height) in column.items():
        cursor = start
        for signature in signatures:
            if signature[i] == label:
                positions[i, signature] = cursor
                cursor += full_counts[signature] * scale
        assert abs(cursor - start - height) < 1e-8
assert sum(full_counts.values()) == N

fig, ax = plt.subplots(figsize=(16, 9), dpi=100)
fig.subplots_adjust(0, 0, 1, 1)
ax.set(xlim=(0, 1920), ylim=(1080, 0))
ax.axis("off")
tooltips = {}
audit = []
for k, signature in enumerate(signatures):
    n = full_counts[signature]
    color = colors[signature[:2]]
    study_ids = [p["id"] for p in paths if tuple(p["stages"]) == signature]
    assert len(study_ids) == n
    audit.append({"stages": list(signature), "studies": n, "study_ids": study_ids, "color": color})
    description = " → ".join(v.replace("\n", " ") for v in signature) + f": {n} studies"
    for i in range(len(nodes) - 1):
        x0, x1 = xs[i] + width, xs[i + 1]
        y0, y1 = positions[i, signature], positions[i + 1, signature]
        h, dx = n * scale, (x1 - x0) * 0.46
        vertices = [(x0, y0), (x0 + dx, y0), (x1 - dx, y1), (x1, y1),
                    (x1, y1 + h), (x1 - dx, y1 + h), (x0 + dx, y0 + h), (x0, y0 + h), (x0, y0)]
        codes = [DrawPath.MOVETO, *([DrawPath.CURVE4] * 3), DrawPath.LINETO,
                 *([DrawPath.CURVE4] * 3), DrawPath.CLOSEPOLY]
        gid = f"cohort-{k}-link-{i}"
        patch = PathPatch(DrawPath(vertices, codes), facecolor=color, alpha=0.88,
                          edgecolor="white", linewidth=0.25, gid=gid)
        ax.add_patch(patch)
        tooltips[gid] = description
    for i in range(len(nodes)):
        ax.add_patch(Rectangle((xs[i], positions[i, signature]), width, n * scale,
                               facecolor=color, edgecolor="none", alpha=0.95))

for i, column in enumerate(nodes):
    ax.text(xs[i], 125, base["headings"][i], ha="right", fontsize=11, weight="bold", color=base["slide_theme"]["heading"])
    for label, (y, h) in column.items():
        n = counts[i][label]
        ax.text(xs[i] - 13, y + h / 2, f"{base['slide_labels'].get(label, label)}\n{n} ({n / N:.1%})",
                ha="right", va="center", fontsize=11.5,
                weight="medium", color=base["ink"], linespacing=1.15,
                bbox={"facecolor": "white", "edgecolor": "none", "linewidth": 0,
                      "alpha": 0.94, "pad": 2})

for ext in ("svg", "png"):
    fig.savefig(ROOT / f"assets/img/review-combinations.{ext}", dpi=240, facecolor="white")
plt.close(fig)

# Native SVG titles expose the complete joint classification when opened in a browser.
svg_path = ROOT / "assets/img/review-combinations.svg"
ET.register_namespace("", "http://www.w3.org/2000/svg")
ET.register_namespace("xlink", "http://www.w3.org/1999/xlink")
tree = ET.parse(svg_path)
for element in tree.iter():
    if element.get("id") in tooltips:
        title = ET.Element("{http://www.w3.org/2000/svg}title")
        title.text = tooltips[element.get("id")]
        element.insert(0, title)
tree.write(svg_path, encoding="utf-8", xml_declaration=True)

color_key = [{"focus": combo[0].replace("\n", " "), "method": combo[1], "color": colors[combo],
              "studies": sum(n for s, n in full_counts.items() if s[:2] == combo)} for combo in combinations]
(ROOT / "data/review-combinations-summary.json").write_text(json.dumps({
    "source": "data/studies.js", "studies": N,
    "color_encoding": "Research focus × exclusive study-method group. Color persists across every dimension.",
    "path_encoding": "Each ribbon represents an observed full six-dimension combination; its width is the number of studies. Identical colors can split across downstream categories.",
    "slide_theme": base["slide_theme"], "color_key": color_key, "full_paths": audit,
}, indent=2, ensure_ascii=False) + "\n")
report = ["# Study combinations", "", "![Combination-colored study paths](../assets/img/review-combinations.svg)", "",
          f"This second plot covers the same {N} records and preserves the original category counts and ordering. It keeps the header-free and footer-free 16:9 layout.", "",
          f"The {len(combinations)} colors encode **research focus × study method**. Each color stays the same through all six dimensions. The {len(signatures)} ribbons represent observed full combinations, with matched incoming and outgoing positions at every node. A color can split into several ribbons when studies have different downstream classifications. The supplied blue (#809BCE), sky (#95B8D1), mint (#B8E0D2), pale mint (#D6EADF) and rose (#EAC4D5) palette supplies the base colors. Nine darker variations distinguish the remaining combinations. Colors do not encode effect size, quality or significance.", "",
          "Open the SVG in a browser and hover over a ribbon to see its full classification and count. The color key below provides the complete mapping. All categories use neutral labels without thesis highlights. The source dataset covers 82 records, while the review describes 99 articles.", "",
          "| Research focus | Study method | Color (hex) | Studies |", "| --- | --- | --- | ---: |"]
report += [f"| {row['focus']} | {row['method']} | {row['color']} | {row['studies']} |" for row in color_key]
report += ["", "Rebuild with `MPLCONFIGDIR=/tmp/hvi-matplotlib python3 scripts/build_review_combinations.py`. Study IDs for every full path are in `data/review-combinations-summary.json`.", ""]
(ROOT / "docs/review-combinations.md").write_text("\n".join(report))
print(f"Second plot generated: {len(combinations)} color combinations, {len(signatures)} observed full paths, {N} studies.")
