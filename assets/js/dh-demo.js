(function () {
  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function uniqueValues(corpus, key) {
    return ["alle", ...new Set(corpus.map((entry) => entry[key]).filter(Boolean))];
  }

  function filterCorpus(corpus, filters) {
    return corpus.filter((entry) => {
      return Object.entries(filters).every(([key, value]) => value === "alle" || entry[key] === value);
    });
  }

  function countBy(corpus, key) {
    return corpus.reduce((accumulator, entry) => {
      const value = entry[key] || "unbekannt";
      accumulator[value] = (accumulator[value] || 0) + 1;
      return accumulator;
    }, {});
  }

  function renderBarGroup(title, counts) {
    const entries = Object.entries(counts);
    const max = Math.max(...entries.map((entry) => entry[1]), 1);
    return `
      <section class="dh-chart-card">
        <h4>${escapeHtml(title)}</h4>
        <div class="dh-bars">
          ${entries
            .map(
              ([label, value]) => `
                <div class="dh-bar-row">
                  <span>${escapeHtml(label)}</span>
                  <div class="dh-bar-track">
                    <div class="dh-bar-fill" style="width:${(value / max) * 100}%"></div>
                  </div>
                  <strong>${value}</strong>
                </div>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderNetworkView(corpus) {
    const grouped = corpus.reduce((accumulator, entry) => {
      accumulator[entry.theme] ||= [];
      accumulator[entry.theme].push(entry.author);
      return accumulator;
    }, {});

    return `
      <section class="dh-network-card">
        <h4>Netzwerkartige Themenansicht</h4>
        <p>Didaktisch reduziert: Themen fungieren hier als Knoten, an die Autor*innen und Texte angeschlossen werden.</p>
        <div class="theme-cluster-wrap">
          ${Object.entries(grouped)
            .map(
              ([theme, authors]) => `
                <article class="theme-cluster">
                  <strong>${escapeHtml(theme)}</strong>
                  <div class="theme-links">
                    ${authors.map((author) => `<span>${escapeHtml(author)}</span>`).join("")}
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderTable(corpus) {
    return `
      <div class="table-wrap">
        <table class="dh-table">
          <thead>
            <tr>
              <th>Titel</th>
              <th>Autor*in</th>
              <th>Jahr</th>
              <th>Sprache</th>
              <th>Kanonstatus</th>
              <th>Gender</th>
              <th>Thema</th>
              <th>Form</th>
            </tr>
          </thead>
          <tbody>
            ${corpus
              .map(
                (entry) => `
                  <tr>
                    <td>${escapeHtml(entry.title)}</td>
                    <td>${escapeHtml(entry.author)}</td>
                    <td>${escapeHtml(entry.year)}</td>
                    <td>${escapeHtml(entry.language)}</td>
                    <td>${escapeHtml(entry.canonStatus)}</td>
                    <td>${escapeHtml(entry.gender)}</td>
                    <td>${escapeHtml(entry.theme)}</td>
                    <td>${escapeHtml(entry.form)}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderFilterControl(label, key, options, selectedValue) {
    return `
      <label class="filter-control">
        <span>${escapeHtml(label)}</span>
        <select data-filter-key="${escapeHtml(key)}">
          ${options
            .map((option) => `<option value="${escapeHtml(option)}" ${option === selectedValue ? "selected" : ""}>${escapeHtml(option)}</option>`)
            .join("")}
        </select>
      </label>
    `;
  }

  function renderDemo(container, state, corpus, onChange) {
    const filters = state.dhFilters;
    const filtered = filterCorpus(corpus, filters);
    const canonicalOnly = filtered.filter((entry) => entry.canonStatus === "kanonisch");
    const overlooked = filtered.filter((entry) => entry.canonStatus !== "kanonisch");

    container.innerHTML = `
      <div class="dh-demo-shell">
        <div class="dh-filter-panel">
          <div>
            <h3>DH-Mini-Simulation</h3>
            <p>Filtere das Mini-Korpus und beobachte, wie sich der Blick verändert.</p>
          </div>
          <div class="dh-filter-grid">
            ${renderFilterControl("Sprache", "language", uniqueValues(corpus, "language"), filters.language)}
            ${renderFilterControl("Kanonstatus", "canonStatus", uniqueValues(corpus, "canonStatus"), filters.canonStatus)}
            ${renderFilterControl("Gender", "gender", uniqueValues(corpus, "gender"), filters.gender)}
            ${renderFilterControl("Thema", "theme", uniqueValues(corpus, "theme"), filters.theme)}
            ${renderFilterControl("Form", "form", uniqueValues(corpus, "form"), filters.form)}
          </div>
          <div class="dh-filter-actions">
            <button type="button" class="btn ghost" data-action="reset-dh">Filter zurücksetzen</button>
          </div>
        </div>

        <div class="dh-stats-grid">
          <article class="stat-card">
            <small>Aktuelle Treffermenge</small>
            <strong>${filtered.length}</strong>
            <span>von ${corpus.length} Korpuseinträgen</span>
          </article>
          <article class="stat-card">
            <small>Kanonischer Blick</small>
            <strong>${canonicalOnly.length}</strong>
            <span>Einträge mit Status „kanonisch“</span>
          </article>
          <article class="stat-card">
            <small>Korpusblick</small>
            <strong>${overlooked.length}</strong>
            <span>revidierte oder marginalisierte Einträge</span>
          </article>
          <article class="stat-card">
            <small>Didaktische Pointe</small>
            <strong>${filtered.length ? Math.round((overlooked.length / filtered.length) * 100) : 0}%</strong>
            <span>nicht ausschliesslich kanonische Einträge</span>
          </article>
        </div>

        <div class="dh-insight-boxes">
          <article class="info-box definition">
            <h4>Kanonischer Blick</h4>
            <p>Wenn nur kanonische Einträge dominieren, entsteht leicht der Eindruck, literarische Bedeutung sei bereits abschliessend entschieden.</p>
          </article>
          <article class="info-box criticism">
            <h4>Korpusblick</h4>
            <p>Die vollständige Treffermenge zeigt schneller, wo Gender-, Sprach- oder Themenverteilungen unausgeglichen sind.</p>
          </article>
        </div>

        <div class="dh-chart-grid">
          ${renderBarGroup("Sprachen im aktuellen Filter", countBy(filtered, "language"))}
          ${renderBarGroup("Kanonstatus im aktuellen Filter", countBy(filtered, "canonStatus"))}
          ${renderBarGroup("Gender im aktuellen Filter", countBy(filtered, "gender"))}
          ${renderBarGroup("Formen im aktuellen Filter", countBy(filtered, "form"))}
        </div>

        ${renderNetworkView(filtered)}
        ${renderTable(filtered)}
      </div>
    `;

    container.querySelectorAll("[data-filter-key]").forEach((select) => {
      select.addEventListener("change", () => {
        window.LitProgress.setDhFilters(state, {
          [select.dataset.filterKey]: select.value
        });
        onChange();
      });
    });

    container.querySelector('[data-action="reset-dh"]')?.addEventListener("click", () => {
      window.LitProgress.setDhFilters(state, {
        language: "alle",
        canonStatus: "alle",
        gender: "alle",
        theme: "alle",
        form: "alle"
      });
      onChange();
    });
  }

  window.LitDhDemo = {
    renderDemo
  };
})();
