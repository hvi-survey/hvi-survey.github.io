#!/usr/bin/env python3
"""Create an interaction-setup Sankey and an auditable classification of all studies.
Run: MPLCONFIGDIR=/tmp/hvi-matplotlib python3 scripts/build_review_interactions.py
"""
import json
import re
import runpy
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
b = runpy.run_path(str(ROOT / 'scripts/build_review_overview.py'))
SINGLE = '1 road user × 1 vehicle'
MULTI_USER = 'Multiple road users × 1 vehicle'
MULTI_VEHICLE = '1 road user × multiple vehicles'
MULTI_BOTH = 'Multiple road users × multiple vehicles'
MIXED = 'Multiple setups tested'
UNKNOWN = 'Unclear / not reported'
# Explicit alternatives in road_users_raw change actor counts, not just user/vehicle type.
MULTIPLE_IDS = {
    'li_-road_2020', 'zou_pedestrian_2023', 'figueroa-medina_analysis_2023',
    'kalatian_decoding_2021', 'jiang_action_2016', 'jiang_acting_2018',
    'jiang_joint_2019', 'oneal_how_2019', 'joisten_communication_2021',
    'jiang_crossing_2021', 'lanzer_interaction_2023', 'feng_does_2023',
    'wilbrink_scaling_2021', 'hubner_external_2022', 'colley_scalability_2023',
}
OVERRIDES = {key: (MIXED, 'The description explicitly includes alternatives with different actor counts.') for key in MULTIPLE_IDS}
OVERRIDES.update({
    'mahadevan_av-pedestrian_2019': (MULTI_BOTH, 'Explicit multi peds–multi AVs; includes CG agents.'),
    'tapiro_pedestrian_2020': (MULTI_VEHICLE, 'Explicit 1 ped–multi AV.'),
    'wang_effect_2022': (MULTI_VEHICLE, 'Explicit 1 ped–2 AVs.'),
    'watanabe_analysis_2023': (MULTI_VEHICLE, 'Explicit 1 ped–2 AVs.'),
    'dey_towards_2021': (MULTI_USER, 'Explicit 2 peds–1 AV, with one CG agent.'),
    'de_ceunynck_interact_2022': (UNKNOWN, 'User and vehicle types are listed without counts; plurals do not establish simultaneous multiplicity.'),
})
# Fail rather than silently assigning newly encountered, unreviewed descriptions.
PAIR = re.compile(r'1\s+(?:ped|cyc|driver)\s*-\s*1\s+(?:AV|HDV|pod|shuttle|delivery vehicle|automated bus|automated golf cart)(?:\s*\(eHMI\))?(?=\s*(?:[,|]|$))', re.I)
records = []
for study in b['studies']:
    raw = study['road_users_raw']
    if study['id'] in OVERRIDES:
        group, reason = OVERRIDES[study['id']]
    else:
        assert PAIR.search(raw), f'Unreviewed setup: {study["id"]}: {raw}'
        remainder = PAIR.sub('', raw)
        remainder = re.sub(r'mixed environment|\(presence of other users\)|[\s,|]', '', remainder)
        assert not remainder, f'Unreviewed extra setup: {study["id"]}: {remainder}'
        group, reason = SINGLE, 'All explicitly counted focal interactions are 1:1; changes in actor type alone do not create a different count setup.'
    annotations = []
    if re.search(r'\bCG\b', raw):
        annotations.append('Explicit CG actors; not evidence of multiple human participants')
    if '(human)' in raw or 'both CG and human' in raw:
        annotations.append('Explicit human co-actor annotation')
    if 'mixed env' in raw or 'presence of other users' in raw:
        annotations.append('Background traffic/users mentioned; use explicit focal counts only')
    if study['id'] == 'lanzer_interaction_2023':
        annotations.append('Second condition says 4 peds–AVs without a precise vehicle count; alternative road-user counts establish multiple setups')
    records.append({'id': study['id'], 'label': study['display_label'], 'road_users_raw': raw,
                    'setup': group, 'reason': reason, 'annotations': annotations,
                    'stages': [b['FOCUS'][study['section']], b['ROAD'][study['road_users_type']], b['SYSTEM'][study['av_type']],
                               group, b['scenario_group'](study), b['method_group'](study), b['model_group'](study)]})
assert set(OVERRIDES) <= {r['id'] for r in records}
N = len(records)
counts = [Counter(r['stages'][i] for r in records) for i in range(7)]
orders = [sorted(c, key=lambda k: (-c[k], k)) for c in counts]
orders[5] = b['orders'][1]
orders[3] = [k for k in [SINGLE, MULTI_USER, MULTI_VEHICLE, MULTI_BOTH, MIXED, UNKNOWN] if k in counts[3]]
links = [Counter((r['stages'][i], r['stages'][i+1]) for r in records) for i in range(6)]
for i, counter in enumerate(counts):
    assert sum(counter.values()) == N
    for label, n in counter.items():
        if i: assert sum(v for (a, z), v in links[i-1].items() if z == label) == n
        if i < 6: assert sum(v for (a, z), v in links[i].items() if a == label) == n

plt, Rectangle, PathPatch, DrawPath = (b[k] for k in ['plt', 'Rectangle', 'PathPatch', 'DrawPath'])
fig, ax = plt.subplots(figsize=(16, 9), dpi=100)
fig.subplots_adjust(0, 0, 1, 1)
ax.set(xlim=(20, 1920), ylim=(1080, 0)); ax.axis('off')
headings = ['Research focus', 'Road user type', 'AV type', 'Interaction setup', 'Scenario', 'Study method', 'Modeling approach']
xs, scale, gap, width = [260, 525, 790, 1060, 1325, 1590, 1855], 6, 50, 20
colors = [b['slide_theme'][k] for k in ['blue','sky','mint','pale_mint','rose','blue','sky']]
labels = dict(b['slide_labels'])
labels.update({SINGLE:'1 road user\n× 1 vehicle', MULTI_USER:'Multiple road users\n× 1 vehicle',
               MULTI_VEHICLE:'1 road user\n× multiple vehicles', MULTI_BOTH:'Multiple road users\n× multiple vehicles',
               MIXED:'Multiple setups tested', UNKNOWN:'Unclear / not reported'})
nodes = []
for i, order in enumerate(orders):
    ax.text(xs[i], 125, headings[i], ha='right', fontsize=10, weight='bold', color=b['ink'])
    column_gap = 64 if i == 3 else gap
    y = (125 + 1025 - (N * scale + (len(order)-1)*column_gap))/2
    column = {}
    for label in order:
        column[label] = (y, counts[i][label]*scale)
        y += counts[i][label]*scale + column_gap
    nodes.append(column)
for i, pairs in enumerate(links):
    outgoing, incoming = Counter(), Counter()
    for a in orders[i]:
        for z in orders[i+1]:
            n = pairs.get((a,z),0)
            if not n: continue
            x0, x1 = xs[i]+width+9, xs[i+1]-9
            y0, y1 = nodes[i][a][0]+outgoing[a], nodes[i+1][z][0]+incoming[z]
            h, dx = n*scale, (x1-x0)*.46
            vertices = [(x0,y0),(x0+dx,y0),(x1-dx,y1),(x1,y1),(x1,y1+h),(x1-dx,y1+h),(x0+dx,y0+h),(x0,y0+h),(x0,y0)]
            codes = [DrawPath.MOVETO,*([DrawPath.CURVE4]*3),DrawPath.LINETO,*([DrawPath.CURVE4]*3),DrawPath.CLOSEPOLY]
            ax.add_patch(PathPatch(DrawPath(vertices,codes),facecolor=colors[i],alpha=.38,edgecolor='none'))
            outgoing[a]+=h; incoming[z]+=h
# Map existing thesis categories to the seven-column layout, and add setup.
overview_to_interaction = {0: 0, 1: 5, 2: 1, 3: 2, 4: 4, 5: 6}
selected = {(overview_to_interaction[i], label): value
            for (i, label), value in b['highlights'].items()}
selected[(3, MULTI_VEHICLE)] = next(iter(b['highlights'].values()))

def draw_labels(highlight=False):
    artists = []
    category_size = 10 if highlight else 11.5
    statistic_size = 8.5 if highlight else 9.5
    for i, column in enumerate(nodes):
        for label, (y, h) in column.items():
            emphasis = selected.get((i, label)) if highlight else None
            color = emphasis[0] if emphasis else b['ink']
            bar = Rectangle((xs[i], y), width, h,
                            facecolor=color if emphasis else colors[i],
                            edgecolor=color if emphasis else '#8B9492', lw=1.2 if emphasis else .5)
            ax.add_patch(bar)
            artists.append(bar)
            n = counts[i][label]
            category = b['TextArea'](labels.get(label, label), textprops={
                'fontsize': category_size, 'color': color,
                'weight': 'bold' if emphasis else ('normal' if highlight else 'medium'),
                'ha': 'right', 'linespacing': 1.1})
            detail = f"{n} {'study' if n == 1 else 'studies'}" + (f' · {n/N:.1%}' if n >= 5 else '')
            statistic = b['TextArea'](detail, textprops={'fontsize': statistic_size, 'color': '#697577' if highlight else '#505D60', 'ha': 'right'})
            box = b['VPacker'](children=[category, statistic], align='right', pad=0, sep=3)
            annotation = b['AnnotationBbox'](box, (xs[i]-14, y+h/2), xycoords='data',
                         box_alignment=(1, .5), frameon=True, pad=.3,
                         bboxprops={'facecolor': emphasis[1] if emphasis else 'white',
                                    'edgecolor': color if emphasis else 'none',
                                    'linewidth': 1 if emphasis else 0, 'alpha': .98 if highlight else 1})
            ax.add_artist(annotation)
            artists.append(annotation)
    return artists

artists = draw_labels()
for ext in ['svg', 'png']:
    fig.savefig(ROOT/f'assets/img/review-interactions.{ext}', dpi=240, facecolor='white')
for artist in artists:
    artist.remove()
draw_labels(highlight=True)
for ext in ['svg', 'png']:
    fig.savefig(ROOT/f'assets/img/review-interactions-highlighted.{ext}', dpi=240, facecolor='white')
plt.close(fig)
summary={'source':'data/studies.js','unique_studies':N,
         'counting':'Study-level focal actor configurations, including explicitly described CG actors. Multiple setups tested means count configurations differ within a study. No inference of simultaneous human participation from plural words or road-user types.',
         'setup_counts':dict(counts[3]),
         'stages':[{'name':h,'counts':dict(c)} for h,c in zip(headings,counts)],
         'links':[{'stage':i,'source':a,'target':z,'studies':n,'study_ids':[r['id'] for r in records if r['stages'][i:i+2]==[a,z]]}
                  for i,pairs in enumerate(links) for (a,z),n in pairs.items()], 'records':records}
(ROOT/'data/review-interactions-summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n')
report=['# Interaction setup in the review dataset','', '![Interaction-setup Sankey](../assets/img/review-interactions.svg)','',
        f'This figure covers {N} unique available records, not all 99 articles described in the review. Each column totals {N}. It retains research focus and adds interaction setup, giving seven columns in a 16:9 layout.','',
        'The unhighlighted and [highlighted](../assets/img/review-interactions-highlighted.svg) versions show identical counts. The highlighted version retains the overview’s thesis categories and adds 1 road user × multiple vehicles (3 studies). Highlights identify independent categories, not an observed continuous study path.','',
        '## Counting rules','',summary['counting'],'',
        'A study comparing a pedestrian and a cyclist separately at 1:1 remains 1:1. Comparing an AV and an HDV separately at 1:1 also remains 1:1. Explicitly adding an HDV alongside an AV creates a different vehicle-count setup. Mixed traffic or presence of other users alone does not establish a number of simultaneous interacting actors. “Multiple setups tested” includes observational records with multiple configurations; it does not necessarily imply a controlled manipulation.','',
        'Computer-generated actors count as actors, but do not demonstrate multi-human experimentation. Agent annotations below retain this distinction; their absence means not specified in the database, not necessarily human-only. These classifications derive from the database descriptions, not a new full-paper review.','',
        '| Interaction setup | Studies | Percentage |','| --- | ---: | ---: |']
report += [f'| {k} | {counts[3][k]} | {counts[3][k]/N:.1%} |' for k in orders[3]]
report += ['', '## Study-level classification audit','', '| Study | Source description | Assigned setup | Notes |','| --- | --- | --- | --- |']
for r in records:
    values=[r['label'],r['road_users_raw'],r['setup'],r['reason']+' '+'; '.join(r['annotations'])]
    report.append('| '+' | '.join(v.replace('|',' / ') for v in values)+' |')
report += ['', 'Run `MPLCONFIGDIR=/tmp/hvi-matplotlib python3 scripts/build_review_interactions.py` to rebuild. Full study IDs and link membership appear in `data/review-interactions-summary.json`.','']
(ROOT/'docs/review-interactions.md').write_text('\n'.join(report))
print('Interaction setup counts:',dict(counts[3]))
print('Generated interaction SVG, PNG, report and audit JSON; unique study counts and all flows validated.')
