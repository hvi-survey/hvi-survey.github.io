#!/usr/bin/env python3
"""
Parse paper-tex/all_studies.tex + paper-tex/reference.bib → data/studies.js

Run from the repo root:
    python3 scripts/parse_studies.py
"""

import re
import json
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEX_PATH = os.path.join(BASE, "data", "all_studies.tex")
BIB_PATH = os.path.join(BASE, "data", "reference.bib")
OUT_PATH = os.path.join(BASE, "data", "studies.js")


# ---------------------------------------------------------------------------
# 1. BibTeX parsing
# ---------------------------------------------------------------------------

def extract_bib_field(body: str, field: str) -> str:
    """Extract a field value from a BibTeX entry body (brace-counting aware for nested braces)."""
    # Find field name followed by =
    pat = re.compile(rf'(?<![a-zA-Z]){re.escape(field)}\s*=\s*', re.IGNORECASE)
    m = pat.search(body)
    if not m:
        return ""
    pos = m.end()
    if pos >= len(body):
        return ""
    if body[pos] == '{':
        # Brace-counting extraction to handle nested braces
        depth = 1
        start = pos + 1
        i = start
        while i < len(body) and depth > 0:
            if body[i] == '{':
                depth += 1
            elif body[i] == '}':
                depth -= 1
            i += 1
        return body[start:i - 1].strip()
    elif body[pos] == '"':
        end = body.find('"', pos + 1)
        return body[pos + 1:end].strip() if end != -1 else ""
    else:
        # Bare value (number)
        m2 = re.match(r'(\d+)', body[pos:])
        return m2.group(1) if m2 else ""


def clean_latex_text(text: str) -> str:
    """Remove common LaTeX formatting from a string."""
    # Remove \textit{...}, \textbf{...}, \emph{...}, etc.
    for cmd in ['textit', 'textbf', 'emph', 'text', 'textrm', 'texttt', 'textsf']:
        text = re.sub(rf'\\{cmd}\{{([^}}]*)\}}', r'\1', text)
    # Remove {{\it ...}} style
    text = re.sub(r'\{\\[a-z]+\s+([^}]*)\}', r'\1', text)
    # Remove remaining braces that wrap text
    text = re.sub(r'\{([^{}]*)\}', r'\1', text)
    text = re.sub(r'\{([^{}]*)\}', r'\1', text)  # second pass for nested
    # Remove ~ (non-breaking space)
    text = text.replace('~', ' ')
    # Collapse whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text


def parse_bib(bib_path: str) -> dict:
    """Parse reference.bib → {key: {display_label, title, authors_full, authors_short, venue, year, doi}}"""
    text = open(bib_path, encoding='utf-8', errors='replace').read()

    entries = {}
    # Match @type{key, ...body...} — use a simple brace-counting approach
    pos = 0
    while pos < len(text):
        m = re.search(r'@(\w+)\s*\{(\s*[\w\-:\.]+)\s*,', text[pos:])
        if not m:
            break
        entry_type = m.group(1).lower()
        key = m.group(2).strip()
        start = pos + m.end()

        # Find the matching closing brace
        depth = 1
        i = start
        while i < len(text) and depth > 0:
            if text[i] == '{':
                depth += 1
            elif text[i] == '}':
                depth -= 1
            i += 1
        body = text[start:i - 1]
        pos = i

        if entry_type in ('string', 'preamble', 'comment'):
            continue

        raw_title = extract_bib_field(body, 'title')
        raw_author = extract_bib_field(body, 'author')
        raw_year = extract_bib_field(body, 'year')
        raw_doi = extract_bib_field(body, 'doi')
        raw_journal = extract_bib_field(body, 'journal')
        raw_booktitle = extract_bib_field(body, 'booktitle')

        title = clean_latex_text(raw_title)
        authors_full = clean_latex_text(raw_author)
        year = clean_latex_text(raw_year)
        doi = clean_latex_text(raw_doi) if raw_doi else None
        venue = clean_latex_text(raw_journal or raw_booktitle)

        # Build authors_short and display_label
        if authors_full:
            people = [p.strip() for p in re.split(r'\band\b', authors_full, flags=re.IGNORECASE)]
            people = [p for p in people if p]
            first = people[0]
            # Last name: if "Last, First" format
            if ',' in first:
                last_name = first.split(',')[0].strip()
            else:
                last_name = first.split()[-1] if first.split() else first

            if len(people) == 1:
                authors_short = last_name
                display_label = f"{last_name} ({year})"
            elif len(people) == 2:
                second = people[1]
                if ',' in second:
                    last2 = second.split(',')[0].strip()
                else:
                    last2 = second.split()[-1] if second.split() else second
                authors_short = f"{last_name} and {last2}"
                display_label = f"{last_name} and {last2} ({year})"
            else:
                authors_short = f"{last_name} et al."
                display_label = f"{last_name} et al. ({year})"
        else:
            authors_short = key
            display_label = f"{key} ({year})"

        entries[key] = {
            "display_label": display_label,
            "title": title,
            "authors_full": authors_full,
            "authors_short": authors_short,
            "venue": venue,
            "year": year,
            "doi": doi if doi else None,
        }

    return entries


# ---------------------------------------------------------------------------
# 2. LaTeX table parsing helpers
# ---------------------------------------------------------------------------

def split_brace_aware(text: str, delimiter: str) -> list:
    """Split text on delimiter, but not when inside {} braces."""
    parts = []
    depth = 0
    current = []
    i = 0
    dlen = len(delimiter)
    while i < len(text):
        ch = text[i]
        if ch == '{':
            depth += 1
            current.append(ch)
            i += 1
        elif ch == '}':
            depth -= 1
            current.append(ch)
            i += 1
        elif depth == 0 and text[i:i + dlen] == delimiter:
            parts.append(''.join(current))
            current = []
            i += dlen
        else:
            current.append(ch)
            i += 1
    parts.append(''.join(current))
    return parts


def split_rows(table_body: str) -> list:
    """Split table body into row strings on \\ (brace-depth-aware)."""
    rows = []
    depth = 0
    current = []
    i = 0
    while i < len(table_body):
        ch = table_body[i]
        if ch == '{':
            depth += 1
            current.append(ch)
            i += 1
        elif ch == '}':
            depth -= 1
            current.append(ch)
            i += 1
        elif ch == '\\' and i + 1 < len(table_body) and table_body[i + 1] == '\\' and depth == 0:
            rows.append(''.join(current))
            current = []
            i += 2
        else:
            current.append(ch)
            i += 1
    if ''.join(current).strip():
        rows.append(''.join(current))
    return rows


def clean_cell(text: str) -> str:
    """Clean a table cell of LaTeX markup."""
    # Strip inline % comments (not at start — those were already removed)
    text = re.sub(r'(?<!\\)%[^\n]*', '', text)
    # Replace \newline with our separator
    text = text.replace('\\newline', ' | ')
    text = text.replace('\\\\', ' ')
    # Remove \vspace{...}, \hspace{...}
    text = re.sub(r'\\[vh]space\{[^}]*\}', '', text)
    # Remove \cline{...}, \hline, \toprule, etc.
    text = re.sub(r'\\(cline|hline|toprule|midrule|bottomrule)\{?[^}]*\}?', '', text)
    # Replace math $...$  with content
    text = re.sub(r'\$([^$]*)\$', r'\1', text)
    # Remove \leq, \geq etc. in math that leaked out
    text = text.replace(r'\leq', '≤').replace(r'\geq', '≥').replace(r'\neq', '≠')
    text = text.replace(r'\in', '∈').replace(r'\times', '×')
    # Remove \textit{}, \textbf{}, \emph{} wrappers
    for _ in range(3):
        for cmd in ['textit', 'textbf', 'emph', 'textrm', 'texttt', 'text', 'RaggedRight']:
            text = re.sub(rf'\\{cmd}\{{([^{{}}]*)\}}', r'\1', text)
    # Remove \multirow{N}{spec}{...} — extract content
    text = re.sub(r'\\multirow\{[^}]*\}\{[^}]*\}\{(.*?)\}', r'\1', text, flags=re.DOTALL)
    # Remove \multicolumn{N}{spec}{...}
    text = re.sub(r'\\multicolumn\{[^}]*\}\{[^}]*\}\{(.*?)\}', r'\1', text, flags=re.DOTALL)
    # Remove remaining LaTeX commands with no args
    text = re.sub(r'\\[a-zA-Z]+\b\*?', '', text)
    # Remove remaining braces
    text = re.sub(r'[{}]', '', text)
    # Collapse whitespace and pipes
    text = re.sub(r'\s*\|\s*', ' | ', text)
    text = re.sub(r'\s+', ' ', text).strip()
    # Clean up leading/trailing pipes
    text = text.strip(' |').strip()
    return text


def extract_multirow(cell: str):
    """
    If cell starts with \multirow{N}{...}{content}, return (N, content).
    Otherwise return (1, cell).
    """
    m = re.match(r'\s*\\multirow\{(\d+)\}\{[^}]*\}\{(.*)\}\s*$', cell, re.DOTALL)
    if m:
        return int(m.group(1)), m.group(2)
    return 1, cell


def extract_citet(cell: str):
    """Extract \citet{key} key from a cell."""
    m = re.search(r'\\citet\{([\w\-:\.]+)\}', cell)
    return m.group(1) if m else None


def is_section_header(row: str):
    """If row is a section header \multicolumn{9}{c}{...}, return the text."""
    m = re.search(r'\\multicolumn\{9\}\{[^}]*\}\{\\textbf\{\\textit\{([^}]*)\}\}\}', row)
    if m:
        return m.group(1).strip()
    # Also handle \textit inside \textbf or just bold
    m2 = re.search(r'\\multicolumn\{9\}\{[^}]*\}\{([^}]+)\}', row)
    if m2:
        inner = m2.group(1)
        text = re.sub(r'\\(textbf|textit|emph)\{([^}]*)\}', r'\2', inner).strip()
        if text and not text.startswith('\\'):
            return text
    return None


# ---------------------------------------------------------------------------
# 3. Normalize filter fields
# ---------------------------------------------------------------------------

METHOD_CANONICAL = {
    'wizard': 'Wizard-of-Oz',
    'vr hmd': 'VR HMD',
    'vr cave': 'VR CAVE',
    'vr screen': 'VR screen',
    'field study': 'Field Study',
    'field': 'Field Study',
    'online video': 'Online Video Survey',
    'video-based survey': 'Online Video Survey',
    'video based survey': 'Online Video Survey',
    'photo': 'Photo Survey',
    '360': '360 Video VR',
    'ar hmd': 'AR HMD',
    'ar ': 'AR',
    'web browser': 'Web Survey',
    'survey': 'Online Video Survey',
}

def normalize_method(raw: str) -> list:
    raw_lower = raw.lower()
    found = []
    # Order matters — check more specific before less specific
    if 'wizard' in raw_lower or 'woz' in raw_lower:
        found.append('Wizard-of-Oz')
    if 'vr hmd' in raw_lower or 'vr headset' in raw_lower or 'head-mounted' in raw_lower or 'google cardboard' in raw_lower:
        found.append('VR HMD')
    if 'vr cave' in raw_lower or 'cave' in raw_lower:
        found.append('VR CAVE')
    if 'vr screen' in raw_lower:
        found.append('VR screen')
    if '360' in raw_lower:
        found.append('360 Video VR')
    if 'ar hmd' in raw_lower:
        found.append('AR HMD')
    elif ' ar ' in f' {raw_lower} ':
        found.append('AR')
    if 'field study' in raw_lower or 'field' in raw_lower and 'study' in raw_lower:
        found.append('Field Study')
    if 'photo' in raw_lower:
        found.append('Photo Survey')
    if 'web browser' in raw_lower or 'web-based' in raw_lower:
        found.append('Web Survey')
    if 'video' in raw_lower and 'survey' in raw_lower:
        if 'Online Video Survey' not in found:
            found.append('Online Video Survey')
    if 'online' in raw_lower and 'survey' in raw_lower:
        if 'Online Video Survey' not in found:
            found.append('Online Video Survey')
    if not found:
        # fallback: use cleaned raw
        found.append(raw.strip())
    return found


def normalize_road_users(raw: str) -> str:
    raw_lower = raw.lower()
    has_ped = 'ped' in raw_lower
    has_cyc = 'cyc' in raw_lower
    if has_ped and has_cyc:
        return 'both'
    elif has_cyc:
        return 'cyclist'
    elif has_ped:
        return 'pedestrian'
    else:
        return 'pedestrian'  # default


def normalize_av_type(road_users_raw: str, scenario: str) -> str:
    combined = (road_users_raw + ' ' + scenario).lower()
    if 'delivery' in combined:
        return 'Delivery vehicle'
    if 'shuttle' in combined or 'pod' in combined or 'bus' in combined or 'golf cart' in combined:
        return 'Shuttle/pod'
    return 'AV/car'


def classify_road_users_display(road_users_raw: str) -> list:
    """Return a list of {label, cssClass} objects — one per pipe-separated segment."""
    segments = [s.strip() for s in road_users_raw.split('|')]
    result = []
    for seg in segments:
        if not seg:
            continue
        sl = seg.lower()
        has_ped = 'ped' in sl
        has_cyc = 'cyc' in sl
        has_multi = 'multi' in sl or bool(re.search(r'\b[2-9]\+?\s*(ped|peds|pedestrian)', sl))
        has_delivery = 'delivery' in sl
        has_shuttle = 'pod' in sl or 'shuttle' in sl or 'bus' in sl
        has_mixed_env = 'mixed env' in sl or 'hdv' in sl

        if has_ped and has_cyc:
            result.append({'label': '🚶🚴 Ped & Cyc', 'cssClass': 'ru-mixed-users'})
        elif has_mixed_env:
            result.append({'label': 'Mixed Traffic', 'cssClass': 'ru-mixed-traffic'})
        elif has_multi and has_ped:
            result.append({'label': '👥 Multi Ped × AV', 'cssClass': 'ru-multi'})
        elif has_ped and has_delivery:
            result.append({'label': '🚶 Ped × Robot', 'cssClass': 'ru-ped-delivery'})
        elif has_ped and has_shuttle:
            result.append({'label': '🚶 Ped × Shuttle', 'cssClass': 'ru-ped-shuttle'})
        elif has_ped:
            result.append({'label': '🚶 Ped × AV', 'cssClass': 'ru-ped-av'})
        elif has_cyc and has_shuttle:
            result.append({'label': '🚴 Cyc × Shuttle', 'cssClass': 'ru-cyc-shuttle'})
        elif has_cyc:
            result.append({'label': '🚴 Cyc × AV', 'cssClass': 'ru-cyc-av'})
        else:
            result.append({'label': seg, 'cssClass': 'ru-ped-av'})
    return result


def classify_scenario_types(scenario: str) -> list:
    """Return a list of scenario type strings (may be multiple for studies covering several contexts)."""
    sl = scenario.lower()
    types = []
    if 'shared' in sl:
        types.append('shared')
    if 'intersection' in sl or 't-junction' in sl or 'roundabout' in sl:
        types.append('intersection')
    if 'unsignalized' in sl or 'uncontrolled' in sl:
        types.append('unsignalized')
    elif 'signalized' in sl:
        types.append('signalized')
    if not types:
        types.append('unclear')
    return types


def classify_model_family(behavioral_model: str) -> str:
    """Classify a behavioral model string into a family. Returns the highest-priority match."""
    ml = behavioral_model.lower()
    if any(k in ml for k in ['lstm', 'gat', 'deep cph', 'deep learning', 'deep ']):
        return 'deep-learning'
    if any(k in ml for k in ['structural equation', 'sem']):
        return 'causal'
    if any(k in ml for k in ['diffusion model', 'drift diffusion']):
        return 'psychological'
    if any(k in ml for k in ['hybrid automaton', 'svm', 'multiple stakeholder']):
        return 'hybrid'
    if any(k in ml for k in ['logistic', 'logit', 'mnl', 'ordinal', 'binomial']):
        return 'discrete-choice'
    if any(k in ml for k in ['lmm', 'ols', 'linear regression', 'functional linear',
                              'hierarchical linear', 'mlmr', 'multivariate regression']):
        return 'linear'
    if any(k in ml for k in ['anova', 't-test', 'chi-square', 'mcnemar', 'mann', 'whitney',
                              'cochran', 'friedman', 'descriptive', 'statistic']):
        return 'statistics'
    return 'statistics'


# ---------------------------------------------------------------------------
# 4. Main parsing
# ---------------------------------------------------------------------------

def parse_table(tex_path: str, bib: dict) -> list:
    raw = open(tex_path, encoding='utf-8', errors='replace').read()

    # Remove lines starting with % (commented-out studies)
    lines = raw.split('\n')
    cleaned_lines = []
    for line in lines:
        stripped = line.strip()
        if stripped.startswith('%'):
            continue
        # Remove inline % comments (but keep the line)
        line = re.sub(r'(?<!\\)%[^\n]*', '', line)
        cleaned_lines.append(line)
    cleaned = '\n'.join(cleaned_lines)

    # Extract table body: data rows live between \endlastfoot and \end{longtable}
    m = re.search(r'\\endlastfoot(.*?)\\end\{longtable\}', cleaned, re.DOTALL)
    if not m:
        raise ValueError("Could not find table body in all_studies.tex")

    body = m.group(1)

    # Split into rows on \\
    rows = split_rows(body)

    studies = []
    current_section = ""
    current_study = None
    # carry_over: {col_idx: (remaining_rows, raw_cell_text)}
    carry_over = {}

    for row_text in rows:
        row_stripped = row_text.strip()
        # Skip pure formatting rows
        if not row_stripped:
            continue

        # Strip leading \hline, \cline{...}, \newpage, \vspace from the row
        row_content = re.sub(
            r'^(\s*(\\hline|\\cline\{[^}]*\}|\\toprule|\\midrule|\\bottomrule|\\newpage|\\vspace\{[^}]*\})\s*)+',
            '', row_stripped
        ).strip()

        if not row_content:
            continue

        # Check for section header (use original row_stripped since multicolumn may come after \hline)
        sec = is_section_header(row_stripped) or is_section_header(row_content)
        if sec:
            current_section = sec
            continue

        # Split into cells
        raw_cells = split_brace_aware(row_text, '&')
        # Pad or trim to exactly 9 cells
        while len(raw_cells) < 9:
            raw_cells.append('')
        raw_cells = raw_cells[:9]

        # Resolve multirow carry-over
        resolved = []
        new_carry = {}
        for ci, rc in enumerate(raw_cells):
            # Strip \hline, \cline{...}, \vspace{...} prefixes and whitespace from each cell
            rc_clean = re.sub(r'^[\s\n]*(\\hline|\\cline\{[^}]*\}|\\vspace\{[^}]*\}|\\newpage)\s*', '', rc.strip())
            rc_clean = rc_clean.strip()

            # Check if this cell has a \multirow directive
            mr_match = re.match(r'\\multirow\{(\d+)\}\{[^}]*\}\{(.*)\}\s*$', rc_clean, re.DOTALL)
            if mr_match:
                n = int(mr_match.group(1))
                content = mr_match.group(2)
                if n > 1:
                    new_carry[ci] = [n - 1, content]
                resolved.append(content)
            elif ci in carry_over and carry_over[ci][0] > 0:
                remaining, content = carry_over[ci]
                new_carry[ci] = [remaining - 1, content]
                resolved.append('')  # blank = carried from above
            else:
                resolved.append(rc_clean)

        carry_over = new_carry

        # Is this a sub-row? (col 0 is blank/empty after resolution)
        is_sub_row = (resolved[0].strip() == '')

        if is_sub_row:
            if current_study is not None:
                # If method column (col 1) has new content, merge into method array (Type B multirow)
                method_cell = clean_cell(resolved[1]) if resolved[1].strip() else ''
                if method_cell:
                    for m in normalize_method(method_cell):
                        if m not in current_study['method']:
                            current_study['method'].append(m)

                # Append a model_row for cols 6-8 if they have new content
                input_f = clean_cell(resolved[6]) if resolved[6].strip() else current_study['model_rows'][-1]['input_factors']
                beh_i = clean_cell(resolved[7])
                beh_m = clean_cell(resolved[8])
                if beh_i or beh_m:
                    current_study['model_rows'].append({
                        "input_factors": input_f,
                        "behavior_indicators": beh_i,
                        "behavioral_model": beh_m,
                        "model_family": classify_model_family(beh_m),
                    })
            continue

        # New study row
        if current_study is not None:
            finalize_study(current_study)
            studies.append(current_study)

        # Extract citation key
        citet_key = extract_citet(resolved[0])
        bib_entry = bib.get(citet_key, {}) if citet_key else {}

        method_raw = clean_cell(resolved[1])
        road_users_raw = clean_cell(resolved[3])
        scenario_raw = clean_cell(resolved[4])

        beh_model_0 = clean_cell(resolved[8])
        current_study = {
            "id": citet_key or clean_cell(resolved[0]),
            "display_label": bib_entry.get("display_label", clean_cell(resolved[0])),
            "title": bib_entry.get("title", ""),
            "authors_full": bib_entry.get("authors_full", ""),
            "authors_short": bib_entry.get("authors_short", ""),
            "venue": bib_entry.get("venue", ""),
            "year": bib_entry.get("year", ""),
            "doi": bib_entry.get("doi"),
            "section": current_section,
            "method_raw": method_raw,
            "method": normalize_method(method_raw),
            "sample": clean_cell(resolved[2]),
            "road_users_raw": road_users_raw,
            "road_users_type": normalize_road_users(road_users_raw),
            "road_users_display": classify_road_users_display(road_users_raw),
            "av_type": normalize_av_type(road_users_raw, scenario_raw),
            "scenario": scenario_raw,
            "scenario_types": classify_scenario_types(scenario_raw),
            "criticality": clean_cell(resolved[5]),
            "model_rows": [{
                "input_factors": clean_cell(resolved[6]),
                "behavior_indicators": clean_cell(resolved[7]),
                "behavioral_model": beh_model_0,
                "model_family": classify_model_family(beh_model_0),
            }],
        }

    # Append last study
    if current_study is not None:
        finalize_study(current_study)
        studies.append(current_study)

    return studies


def finalize_study(study: dict):
    """Aggregate model_rows into top-level fields for search."""
    all_input = ' | '.join(r['input_factors'] for r in study['model_rows'] if r['input_factors'])
    all_beh_i = ' | '.join(r['behavior_indicators'] for r in study['model_rows'] if r['behavior_indicators'])
    all_beh_m = ' | '.join(r['behavioral_model'] for r in study['model_rows'] if r['behavioral_model'])
    study['input_factors'] = all_input
    study['behavior_indicators'] = all_beh_i
    study['behavioral_model'] = all_beh_m
    # Remove internal raw field
    del study['method_raw']


# ---------------------------------------------------------------------------
# 5. Main
# ---------------------------------------------------------------------------

def main():
    print("Parsing reference.bib...")
    bib = parse_bib(BIB_PATH)
    print(f"  Loaded {len(bib)} BibTeX entries")

    print("Parsing all_studies.tex...")
    studies = parse_table(TEX_PATH, bib)
    print(f"  Parsed {len(studies)} studies")

    # Print section breakdown
    from collections import Counter
    section_counts = Counter(s['section'] for s in studies)
    for sec, cnt in section_counts.items():
        print(f"    [{cnt}] {sec}")

    # Print method distribution
    method_counts = Counter(m for s in studies for m in s['method'])
    print("  Method distribution:")
    for method, cnt in method_counts.most_common():
        print(f"    [{cnt}] {method}")

    # Print studies missing bib info
    missing_bib = [s for s in studies if not s['title']]
    if missing_bib:
        print(f"  WARNING: {len(missing_bib)} studies have no BibTeX match:")
        for s in missing_bib:
            print(f"    - {s['id']}")

    os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
    js_content = f"const STUDIES_DATA = {json.dumps(studies, indent=2, ensure_ascii=False)};\n"
    with open(OUT_PATH, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"\nWrote {len(studies)} studies to {OUT_PATH}")
    print(f"File size: {os.path.getsize(OUT_PATH) // 1024} KB")


if __name__ == '__main__':
    main()
