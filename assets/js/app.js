/* =========================================================
   H-AVI Survey Website – Interactive Table Logic
   ========================================================= */

(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────
  let allStudies = [];
  let filteredStudies = [];
  let currentPage = 1;
  let perPage = 25;
  let sortKey = null;
  let sortDir = 1; // 1 = asc, -1 = desc

  const filters = {
    section: 'all',
    method: 'all',
    roadUsers: 'all',
    avType: 'all',
    scenarioType: 'all',
    modelFamily: 'all',
    search: '',
  };

  // ── Method badge mapping ───────────────────────────────
  const METHOD_CLASS = {
    'Wizard-of-Oz':       'm-woz',
    'VR HMD':             'm-vrhmd',
    'VR CAVE':            'm-vrcave',
    'VR screen':          'm-vrscreen',
    'Field Study':        'm-field',
    'Online Video Survey':'m-video',
    'Photo Survey':       'm-photo',
    '360 Video VR':       'm-360',
    'AR':                 'm-ar',
    'AR HMD':             'm-ar',
    'Web Survey':         'm-web',
  };

  // ── Section badge mapping ──────────────────────────────
  const SEC_CLASS = {
    'Human Behavior Understanding and Prediction': 'sec-behavior',
    'Data Collection Methods Comparison':          'sec-data',
    'Communication Design + Behavior Evaluation':  'sec-comm',
  };
  const SEC_SHORT = {
    'Human Behavior Understanding and Prediction': 'Human Behavior',
    'Data Collection Methods Comparison':          'Data Collection',
    'Communication Design + Behavior Evaluation':  'Communication',
  };

  // ── Scenario badge mapping ─────────────────────────────
  const SCENARIO_BADGE = {
    'shared':       { label: 'Shared Space',  cls: 'scen-shared' },
    'intersection': { label: 'Intersection',  cls: 'scen-intersection' },
    'signalized':   { label: 'Signalized',    cls: 'scen-signalized' },
    'unsignalized': { label: 'Unsignalized',  cls: 'scen-unsignalized' },
    'unclear':      { label: 'Unclear',       cls: 'scen-unclear' },
  };

  // ── Model family badge mapping ─────────────────────────
  const MODEL_FAMILY_BADGE = {
    'statistics':     { label: 'Statistics',     cls: 'model-statistics' },
    'linear':          { label: 'Linear Model',    cls: 'model-linear' },
    'discrete-choice': { label: 'Discrete Choice', cls: 'model-discrete-choice' },
    'hybrid':          { label: 'Hybrid',          cls: 'model-hybrid' },
    'deep-learning':   { label: 'Deep Learning',   cls: 'model-deep-learning' },
    'causal':          { label: 'Causal',          cls: 'model-causal' },
    'psychological':   { label: 'Psychological',   cls: 'model-psychological' },
  };

  // ── Init ───────────────────────────────────────────────
  function init() {
    if (typeof STUDIES_DATA === 'undefined') {
      document.getElementById('table-body').innerHTML =
        '<tr><td colspan="9" class="text-center text-danger py-4">Error: studies data not loaded.</td></tr>';
      return;
    }
    allStudies = STUDIES_DATA;
    buildMethodChart();
    buildModelFamilyChart();
    buildScenarioTypeChart();
    buildRoadUserChart();
    updateStatCards();
    bindEvents();
    applyFilters();
  }

  // ── Stats ──────────────────────────────────────────────
  function updateStatCards() {
    const total = allStudies.length;
    const ped   = allStudies.filter(s => s.road_users_type === 'pedestrian').length;
    const cyc   = allStudies.filter(s => s.road_users_type === 'cyclist').length;
    const both  = allStudies.filter(s => s.road_users_type === 'both').length;
    const methodSet = new Set(allStudies.flatMap(s => s.method));

    setText('stat-total',   total);
    setText('stat-ped',     ped);
    setText('stat-cyc',     cyc + '+' + both);
    setText('stat-methods', methodSet.size);
  }

  function buildMethodChart() {
    const counts = {};
    allStudies.forEach(s => s.method.forEach(m => { counts[m] = (counts[m] || 0) + 1; }));
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const max = sorted[0][1];
    const container = document.getElementById('method-chart');
    if (!container) return;
    container.innerHTML = sorted.map(([method, count]) => `
      <div class="d-flex align-items-center gap-2 mb-1">
        <span class="method-bar-label">${method}</span>
        <div class="method-bar-track flex-grow-1">
          <div class="method-bar-fill" style="width:${Math.round(count/max*100)}%;background:${methodColor(method)}"></div>
        </div>
        <span class="method-bar-count">${count}</span>
      </div>`).join('');
  }

  function buildModelFamilyChart() {
    const counts = {};
    allStudies.forEach(s => s.model_rows.forEach(mr => {
      const f = mr.model_family;
      counts[f] = (counts[f] || 0) + 1;
    }));
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const max = sorted[0][1];
    const container = document.getElementById('model-family-chart');
    if (!container) return;
    const colorMap = {
      // Matches .model-* CSS classes in style.css
      'statistics':      '#FFF1E6',
      'linear':          '#FDE2E4',
      'discrete-choice': '#FAD2E1',
      'hybrid':          '#C5DEDD',
      'deep-learning':   '#DBE7E4',
      'causal':          '#BCD4E6',
      'psychological':   '#99C1DE',
    };
    container.innerHTML = sorted.map(([family, count]) => {
      const b = MODEL_FAMILY_BADGE[family] || { label: family };
      return `
      <div class="d-flex align-items-center gap-2 mb-1">
        <span class="method-bar-label">${b.label}</span>
        <div class="method-bar-track flex-grow-1">
          <div class="method-bar-fill" style="width:${Math.round(count/max*100)}%;background:${colorMap[family] || '#888'}"></div>
        </div>
        <span class="method-bar-count">${count}</span>
      </div>`;
    }).join('');
  }

  function buildScenarioTypeChart() {
    const counts = {};
    allStudies.forEach(s => s.scenario_types.forEach(t => {
      counts[t] = (counts[t] || 0) + 1;
    }));
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const max = sorted[0][1];
    const container = document.getElementById('scenario-type-chart');
    if (!container) return;
    const colorMap = {
      // Matches .scen-* CSS classes in style.css
      'shared':       '#f4c9d7',
      'intersection': '#a68e8e',
      'signalized':   '#d7ebcd',
      'unsignalized': '#a0c3a6',
      'unclear':      '#dccabc',
    };
    container.innerHTML = sorted.map(([type, count]) => {
      const b = SCENARIO_BADGE[type] || { label: type };
      return `
      <div class="d-flex align-items-center gap-2 mb-1">
        <span class="method-bar-label">${b.label}</span>
        <div class="method-bar-track flex-grow-1">
          <div class="method-bar-fill" style="width:${Math.round(count/max*100)}%;background:${colorMap[type] || '#888'}"></div>
        </div>
        <span class="method-bar-count">${count}</span>
      </div>`;
    }).join('');
  }

  function buildRoadUserChart() {
    const counts = {};
    allStudies.forEach(s => s.road_users_display.forEach(rd => {
      counts[rd.label] = (counts[rd.label] || 0) + 1;
    }));
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const max = sorted[0][1];
    const container = document.getElementById('road-user-chart');
    if (!container) return;
    // Map label → cssClass via road_users_display entries
    const labelToClass = {};
    allStudies.forEach(s => s.road_users_display.forEach(rd => {
      labelToClass[rd.label] = rd.cssClass;
    }));
    const cssColorMap = {
      // Matches .ru-* CSS classes in style.css
      'ru-ped-av':       '#797D62',
      'ru-ped-shuttle':  '#9B9B7A',
      'ru-ped-delivery': '#D9AE94',
      'ru-multi':        '#F1DCA7',
      'ru-cyc-av':       '#FFCB69',
      'ru-cyc-shuttle':  '#D08C60',
      'ru-mixed-users':  '#997B66',
      'ru-mixed-traffic':'#CABBB1',
    };
    container.innerHTML = sorted.map(([label, count]) => {
      const cls = labelToClass[label] || 'ru-ped-av';
      const color = cssColorMap[cls] || '#888';
      return `
      <div class="d-flex align-items-center gap-2 mb-1">
        <span class="method-bar-label">${label}</span>
        <div class="method-bar-track flex-grow-1">
          <div class="method-bar-fill" style="width:${Math.round(count/max*100)}%;background:${color}"></div>
        </div>
        <span class="method-bar-count">${count}</span>
      </div>`;
    }).join('');
  }

  function methodColor(m) {
    // Matches --m-* CSS variables in style.css
    const map = {
      'Wizard-of-Oz':       '#F76F8E',
      'Field Study':        '#EE6C4D',
      'AR':                 '#F38D68',
      'AR HMD':             '#F38D68',
      'Online Video Survey':'#FABC2A',
      'Photo Survey':       '#FFCAB1',
      'Web Survey':         '#F2BAC9',
      'VR HMD':             '#7FD8BE',
      'VR CAVE':            '#519872',
      'VR screen':          '#A1FCDF',
      '360 Video VR':       '#3B5249',
    };
    return map[m] || '#6B7280';
  }

  // ── Events ─────────────────────────────────────────────
  function bindEvents() {
    // Filters
    on('filter-section',      'change', e => { filters.section       = e.target.value; applyFilters(); });
    on('filter-method',       'change', e => { filters.method        = e.target.value; applyFilters(); });
    on('filter-roadusers',    'change', e => { filters.roadUsers     = e.target.value; applyFilters(); });
    on('filter-avtype',       'change', e => { filters.avType        = e.target.value; applyFilters(); });
    on('filter-scenariotype', 'change', e => { filters.scenarioType  = e.target.value; applyFilters(); });
    on('filter-modelfamily',  'change', e => { filters.modelFamily   = e.target.value; applyFilters(); });
    on('search-input',        'input',  e => { filters.search        = e.target.value.toLowerCase().trim(); applyFilters(); });
    on('btn-reset',           'click',  resetFilters);

    // Pagination
    on('per-page',   'change', e => { perPage = e.target.value === '0' ? 0 : parseInt(e.target.value); currentPage = 1; renderTable(); renderPagination(); });
    on('btn-first',  'click', () => goPage(1));
    on('btn-prev',   'click', () => goPage(currentPage - 1));
    on('btn-next',   'click', () => goPage(currentPage + 1));
    on('btn-last',   'click', () => goPage(totalPages()));

    // Sort headers
    document.querySelectorAll('#studies-table thead th[data-sort]').forEach(th => {
      th.addEventListener('click', () => {
        const key = th.dataset.sort;
        if (sortKey === key) {
          sortDir = -sortDir;
        } else {
          sortKey = key;
          sortDir = 1;
        }
        updateSortIcons(key, sortDir);
        applyFilters();
      });
    });

    // Copy BibTeX
    const copyBtn = document.getElementById('copy-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const text = document.getElementById('bibtex-block').textContent;
        navigator.clipboard.writeText(text).then(() => {
          copyBtn.textContent = '✓ Copied!';
          setTimeout(() => { copyBtn.textContent = 'Copy BibTeX'; }, 2000);
        });
      });
    }
  }

  function resetFilters() {
    filters.section = filters.method = filters.roadUsers = filters.avType = 'all';
    filters.scenarioType = filters.modelFamily = 'all';
    filters.search = '';
    setValue('filter-section', 'all');
    setValue('filter-method', 'all');
    setValue('filter-roadusers', 'all');
    setValue('filter-avtype', 'all');
    setValue('filter-scenariotype', 'all');
    setValue('filter-modelfamily', 'all');
    setValue('search-input', '');
    applyFilters();
  }

  // ── Filter & Sort ──────────────────────────────────────
  function applyFilters() {
    const q = filters.search;

    filteredStudies = allStudies.filter(s => {
      if (filters.section      !== 'all' && s.section                        !== filters.section)      return false;
      if (filters.method       !== 'all' && !s.method.includes(filters.method))                        return false;
      if (filters.roadUsers    !== 'all' && s.road_users_type                !== filters.roadUsers)    return false;
      if (filters.avType       !== 'all' && s.av_type                        !== filters.avType)       return false;
      if (filters.scenarioType !== 'all' && !s.scenario_types.includes(filters.scenarioType))          return false;
      if (filters.modelFamily  !== 'all' && !s.model_rows.some(mr => mr.model_family === filters.modelFamily)) return false;
      if (q) {
        const haystack = [
          s.display_label, s.title, s.authors_full,
          s.scenario, s.criticality, s.input_factors,
          s.behavior_indicators, s.behavioral_model,
          s.road_users_raw, s.method.join(' '),
        ].join(' ').toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });

    if (sortKey) {
      filteredStudies.sort((a, b) => {
        let va = (a[sortKey] || '');
        let vb = (b[sortKey] || '');
        if (Array.isArray(va)) va = va.join(', ');
        if (Array.isArray(vb)) vb = vb.join(', ');
        va = va.toString().toLowerCase();
        vb = vb.toString().toLowerCase();
        if (va < vb) return -sortDir;
        if (va > vb) return  sortDir;
        return 0;
      });
    }

    currentPage = 1;
    renderTable();
    renderPagination();
    updateCount();
  }

  // ── Render table ───────────────────────────────────────
  function renderTable() {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;

    const start = perPage === 0 ? 0 : (currentPage - 1) * perPage;
    const end   = perPage === 0 ? filteredStudies.length : start + perPage;
    const page  = filteredStudies.slice(start, end);

    if (page.length === 0) {
      tbody.innerHTML = '<tr><td colspan="9" class="text-center text-muted py-4">No studies match the current filters.</td></tr>';
      return;
    }

    const rows = [];
    page.forEach(s => {
      const nRows = s.model_rows.length;
      s.model_rows.forEach((mr, i) => {
        const tr = [];
        tr.push('<tr>');

        if (i === 0) {
          // Paper cell (rowspan)
          const secClass  = SEC_CLASS[s.section]  || 'sec-behavior';
          const secShort  = SEC_SHORT[s.section]  || s.section;
          const labelHtml = s.doi
            ? `<a href="https://doi.org/${esc(s.doi)}" target="_blank" rel="noopener">${esc(s.display_label)}</a>`
            : esc(s.display_label);
          tr.push(`<td rowspan="${nRows}" class="paper-cell">
            <span class="sec-badge ${secClass}">${esc(secShort)}</span><br>
            <span class="paper-label">${labelHtml}</span>
            ${s.title ? `<div class="paper-title" title="${esc(s.title)}">${esc(truncate(s.title, 90))}</div>` : ''}
            ${s.venue ? `<div class="paper-venue">${esc(truncate(s.venue, 60))} ${s.year ? '(' + esc(s.year) + ')' : ''}</div>` : ''}
          </td>`);

          // Method
          const methodBadges = s.method.map(m =>
            `<span class="method-badge ${METHOD_CLASS[m] || 'm-web'}">${esc(m)}</span>`
          ).join(' ');
          tr.push(`<td rowspan="${nRows}">${methodBadges}</td>`);

          // Sample
          tr.push(`<td rowspan="${nRows}" style="min-width:90px;max-width:85px">${esc(s.sample)}</td>`);

          // Road users — emoji + color-coded badges
          const ruHtml = s.road_users_display.map(rd =>
            `<span class="ru-badge ${esc(rd.cssClass)}">${esc(rd.label)}</span>`
          ).join('<br>');
          tr.push(`<td rowspan="${nRows}" style="min-width:110px">${ruHtml}</td>`);

          // Scenario — type badges + truncated text
          const scenBadges = s.scenario_types.map(t => {
            const b = SCENARIO_BADGE[t] || { label: t, cls: 'scen-unclear' };
            return `<span class="scen-badge ${b.cls}">${b.label}</span>`;
          }).join(' ');
          tr.push(`<td rowspan="${nRows}" class="d-md-none-col">${scenBadges}<br><span class="cell-truncate" title="${esc(s.scenario)}">${esc(s.scenario)}</span></td>`);

          // Criticality (truncated)
          tr.push(`<td rowspan="${nRows}" class="d-md-none-col"><span class="cell-truncate" title="${esc(s.criticality)}">${esc(s.criticality)}</span></td>`);
        }

        // Input factors (per model row)
        tr.push(`<td><span class="cell-truncate" title="${esc(mr.input_factors)}">${esc(mr.input_factors)}</span></td>`);

        // Behavior indicators
        tr.push(`<td><span class="cell-truncate" title="${esc(mr.behavior_indicators)}">${esc(mr.behavior_indicators)}</span></td>`);

        // Behavioral model — family badge + truncated text
        const mfb = MODEL_FAMILY_BADGE[mr.model_family] || { label: mr.model_family, cls: 'model-statistics' };
        tr.push(`<td><span class="model-badge ${mfb.cls}">${mfb.label}</span><br><span class="cell-truncate" title="${esc(mr.behavioral_model)}">${esc(mr.behavioral_model)}</span></td>`);

        tr.push('</tr>');
        rows.push(tr.join(''));
      });
    });

    tbody.innerHTML = rows.join('');

    // Bootstrap tooltips on truncated cells
    if (window.bootstrap) {
      tbody.querySelectorAll('[title]').forEach(el => {
        if (!el._tt) el._tt = new bootstrap.Tooltip(el, { trigger: 'hover', placement: 'top', container: 'body' });
      });
    }
  }

  // ── Pagination ─────────────────────────────────────────
  function totalPages() {
    if (perPage === 0) return 1;
    return Math.max(1, Math.ceil(filteredStudies.length / perPage));
  }

  function goPage(n) {
    n = Math.max(1, Math.min(n, totalPages()));
    if (n === currentPage) return;
    currentPage = n;
    renderTable();
    renderPagination();
    document.getElementById('table-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderPagination() {
    const tp = totalPages();
    const start = perPage === 0 ? 1 : (currentPage - 1) * perPage + 1;
    const end   = perPage === 0 ? filteredStudies.length : Math.min(currentPage * perPage, filteredStudies.length);
    setText('page-info', `Showing ${filteredStudies.length ? start : 0}–${end} of ${filteredStudies.length}`);
    setText('page-indicator', `Page ${currentPage} of ${tp}`);
    setDisabled('btn-first', currentPage === 1);
    setDisabled('btn-prev',  currentPage === 1);
    setDisabled('btn-next',  currentPage === tp);
    setDisabled('btn-last',  currentPage === tp);
  }

  function updateCount() {
    setText('result-count', `${filteredStudies.length} of ${allStudies.length} studies`);
  }

  // ── Sort icons ─────────────────────────────────────────
  function updateSortIcons(activeKey, dir) {
    document.querySelectorAll('#studies-table thead th[data-sort]').forEach(th => {
      const icon = th.querySelector('.sort-icon');
      if (!icon) return;
      if (th.dataset.sort === activeKey) {
        icon.textContent = dir === 1 ? '↑' : '↓';
        icon.style.opacity = '1';
      } else {
        icon.textContent = '↕';
        icon.style.opacity = '0.5';
      }
    });
  }

  // ── Helpers ────────────────────────────────────────────
  function esc(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function truncate(str, len) {
    if (!str) return '';
    return str.length > len ? str.slice(0, len) + '…' : str;
  }

  function on(id, evt, fn) {
    const el = document.getElementById(id);
    if (el) el.addEventListener(evt, fn);
  }
  function setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }
  function setValue(id, val) {
    const el = document.getElementById(id);
    if (el) el.value = val;
  }
  function setDisabled(id, val) {
    const el = document.getElementById(id);
    if (el) el.disabled = val;
  }

  // ── Start ──────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
