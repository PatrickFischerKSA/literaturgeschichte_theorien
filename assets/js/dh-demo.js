(function () {
  function lang(state) {
    return state?.settings?.language === "en" ? "en" : "de";
  }

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

  function displayValue(state, value) {
    const translations = {
      alle: { de: "alle", en: "all" },
      Deutsch: { de: "Deutsch", en: "German" },
      Englisch: { de: "Englisch", en: "English" },
      Französisch: { de: "Französisch", en: "French" },
      Spanisch: { de: "Spanisch", en: "Spanish" },
      Russisch: { de: "Russisch", en: "Russian" },
      männlich: { de: "männlich", en: "male" },
      weiblich: { de: "weiblich", en: "female" },
      kanonisch: { de: "kanonisch", en: "canonical" },
      revidiert: { de: "revidiert", en: "revised" },
      marginalisiert: { de: "marginalisiert", en: "marginalized" },
      Bildung: { de: "Bildung", en: "education" },
      Macht: { de: "Macht", en: "power" },
      Nation: { de: "Nation", en: "nation" },
      Gesellschaft: { de: "Gesellschaft", en: "society" },
      Entfremdung: { de: "Entfremdung", en: "alienation" },
      Krieg: { de: "Krieg", en: "war" },
      Subjektivität: { de: "Subjektivität", en: "subjectivity" },
      Erinnerung: { de: "Erinnerung", en: "memory" },
      Schuld: { de: "Schuld", en: "guilt" },
      Wissen: { de: "Wissen", en: "knowledge" },
      Gender: { de: "Gender", en: "gender" },
      Moderne: { de: "Moderne", en: "modernity" },
      Begehren: { de: "Begehren", en: "desire" },
      Absurdität: { de: "Absurdität", en: "absurdity" },
      Fiktion: { de: "Fiktion", en: "fiction" },
      Identität: { de: "Identität", en: "identity" },
      Labyrinth: { de: "Labyrinth", en: "labyrinth" },
      Klasse: { de: "Klasse", en: "class" },
      Bürokratie: { de: "Bürokratie", en: "bureaucracy" },
      "Staatliche Gewalt": { de: "Staatliche Gewalt", en: "state violence" },
      Zensur: { de: "Zensur", en: "censorship" },
      Drama: { de: "Drama", en: "drama" },
      Versepos: { de: "Versepos", en: "verse epic" },
      Roman: { de: "Roman", en: "novel" },
      Erzählung: { de: "Erzählung", en: "narrative" },
      Novelle: { de: "Novelle", en: "novella" },
      Essay: { de: "Essay", en: "essay" },
      Lyrik: { de: "Lyrik", en: "poetry" },
      Versroman: { de: "Versroman", en: "verse novel" }
    };
    return translations[value]?.[lang(state)] || value;
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

  function renderBarGroup(state, title, counts) {
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
                  <span>${escapeHtml(displayValue(state, label))}</span>
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

  function renderNetworkView(state, corpus) {
    const grouped = corpus.reduce((accumulator, entry) => {
      accumulator[entry.theme] ||= [];
      accumulator[entry.theme].push(entry.author);
      return accumulator;
    }, {});

    return `
      <section class="dh-network-card">
        <h4>Netzwerkartige Themenansicht</h4>
        <p>${escapeHtml(lang(state) === "en" ? "Didactically reduced: themes function as nodes to which authors and texts are connected." : "Didaktisch reduziert: Themen fungieren hier als Knoten, an die Autor*innen und Texte angeschlossen werden.")}</p>
        <div class="theme-cluster-wrap">
          ${Object.entries(grouped)
            .map(
              ([theme, authors]) => `
                <article class="theme-cluster">
                  <strong>${escapeHtml(displayValue(state, theme))}</strong>
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

  function renderTable(state, corpus) {
    return `
      <div class="table-wrap">
        <table class="dh-table">
          <thead>
            <tr>
              <th>${escapeHtml(lang(state) === "en" ? "Title" : "Titel")}</th>
              <th>${escapeHtml(lang(state) === "en" ? "Author" : "Autor*in")}</th>
              <th>${escapeHtml(lang(state) === "en" ? "Year" : "Jahr")}</th>
              <th>${escapeHtml(lang(state) === "en" ? "Language" : "Sprache")}</th>
              <th>${escapeHtml(lang(state) === "en" ? "Canon status" : "Kanonstatus")}</th>
              <th>Gender</th>
              <th>${escapeHtml(lang(state) === "en" ? "Theme" : "Thema")}</th>
              <th>${escapeHtml(lang(state) === "en" ? "Form" : "Form")}</th>
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
                    <td>${escapeHtml(displayValue(state, entry.language))}</td>
                    <td>${escapeHtml(displayValue(state, entry.canonStatus))}</td>
                    <td>${escapeHtml(displayValue(state, entry.gender))}</td>
                    <td>${escapeHtml(displayValue(state, entry.theme))}</td>
                    <td>${escapeHtml(displayValue(state, entry.form))}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderFilterControl(state, label, key, options, selectedValue) {
    return `
      <label class="filter-control">
        <span>${escapeHtml(label)}</span>
        <select data-filter-key="${escapeHtml(key)}">
          ${options
            .map((option) => `<option value="${escapeHtml(option)}" ${option === selectedValue ? "selected" : ""}>${escapeHtml(displayValue(state, option))}</option>`)
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
            <h3>${escapeHtml(lang(state) === "en" ? "DH mini-simulation" : "DH-Mini-Simulation")}</h3>
            <p>${escapeHtml(lang(state) === "en" ? "Filter the mini-corpus and observe how the perspective changes." : "Filtere das Mini-Korpus und beobachte, wie sich der Blick verändert.")}</p>
          </div>
          <div class="dh-filter-grid">
            ${renderFilterControl(state, lang(state) === "en" ? "Language" : "Sprache", "language", uniqueValues(corpus, "language"), filters.language)}
            ${renderFilterControl(state, lang(state) === "en" ? "Canon status" : "Kanonstatus", "canonStatus", uniqueValues(corpus, "canonStatus"), filters.canonStatus)}
            ${renderFilterControl(state, "Gender", "gender", uniqueValues(corpus, "gender"), filters.gender)}
            ${renderFilterControl(state, lang(state) === "en" ? "Theme" : "Thema", "theme", uniqueValues(corpus, "theme"), filters.theme)}
            ${renderFilterControl(state, lang(state) === "en" ? "Form" : "Form", "form", uniqueValues(corpus, "form"), filters.form)}
          </div>
          <div class="dh-filter-actions">
            <button type="button" class="btn ghost" data-action="reset-dh">${escapeHtml(lang(state) === "en" ? "Reset filters" : "Filter zurücksetzen")}</button>
          </div>
        </div>

        <div class="dh-stats-grid">
          <article class="stat-card">
            <small>${escapeHtml(lang(state) === "en" ? "Current selection" : "Aktuelle Treffermenge")}</small>
            <strong>${filtered.length}</strong>
            <span>${escapeHtml(lang(state) === "en" ? `of ${corpus.length} corpus entries` : `von ${corpus.length} Korpuseinträgen`)}</span>
          </article>
          <article class="stat-card">
            <small>${escapeHtml(lang(state) === "en" ? "Canonical view" : "Kanonischer Blick")}</small>
            <strong>${canonicalOnly.length}</strong>
            <span>${escapeHtml(lang(state) === "en" ? "entries marked as canonical" : "Einträge mit Status „kanonisch“")}</span>
          </article>
          <article class="stat-card">
            <small>${escapeHtml(lang(state) === "en" ? "Corpus view" : "Korpusblick")}</small>
            <strong>${overlooked.length}</strong>
            <span>${escapeHtml(lang(state) === "en" ? "revised or marginalized entries" : "revidierte oder marginalisierte Einträge")}</span>
          </article>
          <article class="stat-card">
            <small>${escapeHtml(lang(state) === "en" ? "Didactic point" : "Didaktische Pointe")}</small>
            <strong>${filtered.length ? Math.round((overlooked.length / filtered.length) * 100) : 0}%</strong>
            <span>${escapeHtml(lang(state) === "en" ? "entries beyond a purely canonical set" : "nicht ausschliesslich kanonische Einträge")}</span>
          </article>
        </div>

        <div class="dh-insight-boxes">
          <article class="info-box definition">
            <h4>${escapeHtml(lang(state) === "en" ? "Canonical view" : "Kanonischer Blick")}</h4>
            <p>${escapeHtml(lang(state) === "en" ? "If only canonical entries dominate, literary importance quickly looks already settled." : "Wenn nur kanonische Einträge dominieren, entsteht leicht der Eindruck, literarische Bedeutung sei bereits abschliessend entschieden.")}</p>
          </article>
          <article class="info-box criticism">
            <h4>${escapeHtml(lang(state) === "en" ? "Corpus view" : "Korpusblick")}</h4>
            <p>${escapeHtml(lang(state) === "en" ? "The full selection reveals more quickly where distributions of gender, language, or theme are uneven." : "Die vollständige Treffermenge zeigt schneller, wo Gender-, Sprach- oder Themenverteilungen unausgeglichen sind.")}</p>
          </article>
        </div>

        <div class="dh-chart-grid">
          ${renderBarGroup(state, lang(state) === "en" ? "Languages in the current filter" : "Sprachen im aktuellen Filter", countBy(filtered, "language"))}
          ${renderBarGroup(state, lang(state) === "en" ? "Canon status in the current filter" : "Kanonstatus im aktuellen Filter", countBy(filtered, "canonStatus"))}
          ${renderBarGroup(state, lang(state) === "en" ? "Gender in the current filter" : "Gender im aktuellen Filter", countBy(filtered, "gender"))}
          ${renderBarGroup(state, lang(state) === "en" ? "Forms in the current filter" : "Formen im aktuellen Filter", countBy(filtered, "form"))}
        </div>

        ${renderNetworkView(state, filtered)}
        ${renderTable(state, filtered)}
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
