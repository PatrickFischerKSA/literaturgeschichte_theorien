(function () {
  const siteData = window.LIT_SITE_DATA;
  const modules = siteData.modules;
  const glossaryApi = window.LitGlossary;
  const progressApi = window.LitProgress;
  const tasksApi = window.LitTasks;
  const dhDemoApi = window.LitDhDemo;
  const state = progressApi.loadState();

  let glossaryQuery = "";

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function normalizePassword(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[_-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function teacherPasswordValid(value) {
    const accepted = [
      siteData.site.teacherPassword,
      ...(siteData.site.teacherPasswordAliases || [])
    ].map(normalizePassword);
    return accepted.includes(normalizePassword(value));
  }

  function renderKeyTerms() {
    return siteData.site.englishFocus
      .map(
        (pair) => `
          <span class="term-chip">
            <strong>${escapeHtml(pair.de)}</strong>
            ${state.settings.showEnglish ? `<span>${escapeHtml(pair.en)}</span>` : ""}
          </span>
        `
      )
      .join("");
  }

  function renderHeroCards() {
    return modules
      .map((module) => {
        const progress = progressApi.getTaskProgress(state, module);
        return `
          <a class="module-card-link" href="#${escapeHtml(module.id)}" data-module-link="${escapeHtml(module.id)}">
            <article class="module-card">
              <p class="module-card-kicker">${escapeHtml(module.navTitle)}</p>
              <h3>${escapeHtml(module.title.replace(/^Modul \d+: /, ""))}</h3>
              <p>${escapeHtml(module.subtitle)}</p>
              <div class="progress-mini">
                <div class="progress-track">
                  <div class="progress-fill" style="width:${progress.percent}%"></div>
                </div>
                <span>${progress.completed}/${progress.total}</span>
              </div>
            </article>
          </a>
        `;
      })
      .join("");
  }

  function renderSidebar() {
    return `
      <nav class="sidebar-nav" aria-label="Modulnavigation">
        ${modules
          .map((module) => {
            const progress = progressApi.getTaskProgress(state, module);
            return `
              <a href="#${escapeHtml(module.id)}" data-module-link="${escapeHtml(module.id)}">
                <span>${escapeHtml(module.navTitle)}</span>
                <small>${progress.percent}%</small>
              </a>
            `;
          })
          .join("")}
        <a href="#glossary" data-module-link="glossary"><span>Glossar</span><small>DE/EN</small></a>
        <a href="#teacher-area" data-module-link="teacher-area"><span>Lehrpersonen</span><small>${state.settings.teacherAuthorized ? "aktiv" : "geschützt"}</small></a>
      </nav>
    `;
  }

  function renderGoals(items) {
    return `
      <ul class="goal-list">
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    `;
  }

  function renderApproaches(module) {
    if (!module.approaches) return "";
    return `
      <section class="subsection">
        <div class="subsection-head">
          <h3>Theorieblöcke im Akkordeon</h3>
          <p>Jeder Ansatz enthält Definition, historische Einordnung, Grundannahme, Fragen, Chancen, Kritik, Übung und Mini-Transfer.</p>
        </div>
        <div class="accordion-stack">
          ${module.approaches
            .map(
              (approach) => `
                <details class="approach-card">
                  <summary>
                    <div>
                      <h4>${escapeHtml(approach.name)}</h4>
                      <p>${escapeHtml(approach.keyTerms.join(" | "))}</p>
                    </div>
                  </summary>
                  <div class="approach-grid">
                    <article><h5>Kurzdefinition</h5><p>${escapeHtml(approach.definition)}</p></article>
                    <article><h5>Historische Einordnung</h5><p>${escapeHtml(approach.history)}</p></article>
                    <article><h5>Erkenntnistheoretische Grundannahme</h5><p>${escapeHtml(approach.epistemology)}</p></article>
                    <article><h5>Typische Fragestellungen</h5><ul>${approach.questions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></article>
                    <article><h5>Chancen</h5><ul>${approach.chances.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></article>
                    <article><h5>Probleme / Kritik</h5><ul>${approach.critique.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></article>
                    <article><h5>Kurze Übungsaufgabe</h5><p>${escapeHtml(approach.exercise)}</p></article>
                    <article><h5>Mini-Transfer</h5><p>${escapeHtml(approach.transfer)}</p></article>
                  </div>
                </details>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderStations(module) {
    if (!module.stations) return "";
    return `
      <section class="subsection">
        <div class="subsection-head">
          <h3>Fallstationen</h3>
          <p>Die Stationen verbinden textnahe Signale mit methodischen Fragen. Die dazugehörigen Aufgaben im Arbeitsblock greifen sie auf.</p>
        </div>
        <div class="station-grid">
          ${module.stations
            .map(
              (station) => `
                <article class="station-card">
                  <div class="station-head">
                    <h4>${escapeHtml(station.title)}</h4>
                    <p>${escapeHtml(station.signal)}</p>
                  </div>
                  <p><strong>Situierung:</strong> ${escapeHtml(station.situation)}</p>
                  <p><strong>Warum literaturgeschichtlich interessant?</strong> ${escapeHtml(station.significance)}</p>
                  <div>
                    <strong>Ansatzperspektiven</strong>
                    <ul>${station.lenses.map((lens) => `<li>${escapeHtml(lens)}</li>`).join("")}</ul>
                  </div>
                  <div class="station-question">
                    <strong>Arbeitsimpuls</strong>
                    <p>${escapeHtml(station.question)}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderSections(module) {
    return (module.sections || [])
      .map(
        (section) => `
          <section class="subsection">
            <div class="subsection-head">
              <h3>${escapeHtml(section.title)}</h3>
            </div>
            <div class="subsection-content">${section.html}</div>
          </section>
        `
      )
      .join("");
  }

  function renderModuleSection(module) {
    const progress = progressApi.getTaskProgress(state, module);
    return `
      <section class="module-panel" id="${escapeHtml(module.id)}">
        <div class="module-top">
          <div>
            <p class="section-kicker">${escapeHtml(module.navTitle)}</p>
            <h2>${escapeHtml(module.title)}</h2>
            <p class="module-subtitle">${escapeHtml(module.subtitle)}</p>
          </div>
          <div class="module-actions">
            <button type="button" class="btn ghost" data-reset-module="${escapeHtml(module.id)}">Modul zurücksetzen</button>
          </div>
        </div>
        <p class="module-intro">${escapeHtml(module.intro)}</p>
        ${renderGoals(module.goals)}
        <div class="progress-block">
          <div class="progress-track">
            <div class="progress-fill" style="width:${progress.percent}%"></div>
          </div>
          <span>${progress.completed} von ${progress.total} Aufgaben abgeschlossen</span>
        </div>
        ${renderSections(module)}
        ${renderApproaches(module)}
        ${renderStations(module)}
        <section class="tasks-shell" data-task-module="${escapeHtml(module.id)}"></section>
        ${module.id === "mod-7" ? `<section class="dh-demo-anchor"><div class="dh-demo-container"></div></section>` : ""}
      </section>
    `;
  }

  function renderGlossary() {
    const results = glossaryApi.search(glossaryQuery);
    return `
      <section class="module-panel" id="glossary">
        <div class="module-top">
          <div>
            <p class="section-kicker">Glossar</p>
            <h2>Glossar DE/EN</h2>
            <p class="module-subtitle">Zentrale Fachbegriffe der Einheit zweisprachig und kommentiert.</p>
          </div>
        </div>
        <div class="glossary-toolbar">
          <label class="glossary-search">
            <span>Begriff suchen</span>
            <input id="glossary-search-input" type="search" placeholder="z. B. Kanon, discourse, distant reading" value="${escapeHtml(glossaryQuery)}" />
          </label>
          <p>${results.length} Treffer</p>
        </div>
        <div class="glossary-grid">
          ${results
            .map(
              (term) => `
                <article class="glossary-card">
                  <h3>${escapeHtml(term.de)}</h3>
                  <p class="glossary-english">${escapeHtml(term.en)}</p>
                  <p><strong>DE:</strong> ${escapeHtml(term.definitionDe)}</p>
                  <p><strong>EN:</strong> ${escapeHtml(term.definitionEn)}</p>
                  <p><strong>Kommentar:</strong> ${escapeHtml(term.notes)}</p>
                  <p><strong>Verwandt:</strong> ${escapeHtml((term.related || []).join(", "))}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderTeacherArea() {
    if (!state.settings.teacherAuthorized) {
      return `
        <section class="module-panel" id="teacher-area">
          <div class="module-top">
            <div>
              <p class="section-kicker">Lehrpersonenbereich</p>
              <h2>Geschützter Lösungs- und Planungsbereich</h2>
              <p class="module-subtitle">Frontend-Passwortschutz für den Schulalltag auf GitHub Pages.</p>
            </div>
          </div>
          <p>${escapeHtml(siteData.teacherGuide.overview)}</p>
          <form id="teacher-login-form" class="teacher-login-form">
            <label>
              <span>Passwort</span>
              <input type="password" id="teacher-password-input" autocomplete="current-password" placeholder="Passwort eingeben" />
            </label>
            <button type="submit" class="btn primary">Lehrpersonenmodus öffnen</button>
          </form>
          <p class="teacher-small-note">Hinweis: Die Sperre ist bewusst niedrigschwellig und rein clientseitig.</p>
        </section>
      `;
    }

    return `
      <section class="module-panel teacher-panel" id="teacher-area">
        <div class="module-top">
          <div>
            <p class="section-kicker">Lehrpersonenbereich</p>
            <h2>Solutions, Dashboard und didaktische Hinweise</h2>
            <p class="module-subtitle">${escapeHtml(siteData.teacherGuide.overview)}</p>
          </div>
          <div class="module-actions">
            <button type="button" class="btn ghost" id="teacher-logout-button">Lehrpersonenmodus schliessen</button>
          </div>
        </div>
        <div class="teacher-overview-grid">
          <article class="info-box example">
            <h4>Unterrichtsvorschläge</h4>
            <ul>${siteData.teacherGuide.suggestions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </article>
          <article class="info-box criticism">
            <h4>Technischer Hinweis</h4>
            <p>${escapeHtml(siteData.teacherGuide.note)}</p>
          </article>
        </div>
        <div class="teacher-module-stack">
          ${modules
            .map(
              (module) => `
                <details class="teacher-module-card">
                  <summary>
                    <div>
                      <strong>${escapeHtml(module.title)}</strong>
                      <span>${escapeHtml(module.teacher.use)}</span>
                    </div>
                  </summary>
                  <div class="teacher-module-body">
                    <p><strong>Didaktischer Fokus:</strong> ${escapeHtml(module.teacher.didactics)}</p>
                    <p><strong>Geeignete Sozialformen:</strong> ${escapeHtml(module.teacher.socialForms.join(", "))}</p>
                    <p><strong>Beobachtung für Beurteilung:</strong> ${escapeHtml(module.teacher.assessment)}</p>
                    <div class="teacher-task-list">
                      ${(module.tasks || [])
                        .map(
                          (task) => `
                            <article class="teacher-task-card">
                              <h4>${escapeHtml(task.title)}</h4>
                              <p><strong>Aufgabe:</strong> ${escapeHtml(task.prompt)}</p>
                              <p><strong>Musterlösung:</strong> ${escapeHtml(task.modelAnswer || task.explanation || "Keine Musterlösung hinterlegt.")}</p>
                              <p><strong>Hinweis:</strong> ${escapeHtml(task.help || "Auf Präzision und Begründung achten.")}</p>
                            </article>
                          `
                        )
                        .join("")}
                    </div>
                  </div>
                </details>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderApp() {
    const root = document.getElementById("app");
    const overall = progressApi.getOverallProgress(state, modules);

    root.innerHTML = `
      <div class="page-shell">
        <header class="hero-panel">
          <div class="hero-main">
            <p class="eyebrow">Digitale Lerneinheit | bilingual DE/EN</p>
            <h1>${escapeHtml(siteData.site.title)}</h1>
            <p class="hero-subtitle">${escapeHtml(siteData.site.subtitle)}</p>
            <p class="hero-copy">${escapeHtml(siteData.site.shortDescription)}</p>
            ${renderGoals(siteData.site.heroGoals)}
            <div class="hero-actions">
              <a class="btn primary" href="#mod-1">Mit Modul 1 beginnen</a>
              <button type="button" class="btn ghost" id="toggle-language-button">${state.settings.showEnglish ? "EN-Hilfen ausblenden" : "EN-Hilfen einblenden"}</button>
              <button type="button" class="btn ghost" id="reset-all-button">Gesamten Lernstand zurücksetzen</button>
            </div>
            <div class="term-chip-wrap">${renderKeyTerms()}</div>
          </div>
          <aside class="hero-side">
            <article class="stat-card">
              <small>Gesamtfortschritt</small>
              <strong>${overall.percent}%</strong>
              <span>${overall.completed} von ${overall.total} Aufgaben erledigt</span>
            </article>
            <article class="info-box definition">
              <h4>Leitfrage</h4>
              <p>Wie lässt sich Literaturgeschichte lehren, wenn sie zugleich notwendig, konstruiert und umstritten ist?</p>
            </article>
            <article class="info-box english">
              <h4>English focus</h4>
              <p>How do historiography, canonization, and digital methods shape what counts as literary history?</p>
            </article>
            <article class="info-box example">
              <h4>Vergleichsachsen</h4>
              <ul>${siteData.site.comparisonAxes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </article>
          </aside>
        </header>

        <section class="overview-panel">
          <div class="progress-block progress-block--overall">
            <div class="progress-track">
              <div class="progress-fill" style="width:${overall.percent}%"></div>
            </div>
            <span>Gesamt: ${overall.completed} / ${overall.total} Aufgaben</span>
          </div>
          <div class="module-card-grid">${renderHeroCards()}</div>
        </section>

        <div class="content-layout">
          <aside class="sidebar-panel">
            <div class="sidebar-head">
              <h2>Navigation</h2>
              <p>Springe direkt in ein Modul oder zum Glossar.</p>
            </div>
            ${renderSidebar()}
          </aside>
          <main class="main-column">
            ${modules.map((module) => renderModuleSection(module)).join("")}
            ${renderGlossary()}
            ${renderTeacherArea()}
          </main>
        </div>

        <footer class="footer-panel">
          <p>${escapeHtml(siteData.site.footerNote)}</p>
        </footer>
      </div>
    `;

    modules.forEach((module) => {
      const taskContainer = root.querySelector(`[data-task-module="${module.id}"]`);
      if (taskContainer) {
        tasksApi.renderTaskList(taskContainer, module, state, renderApp);
      }
    });

    const dhContainer = root.querySelector(".dh-demo-container");
    if (dhContainer) {
      dhDemoApi.renderDemo(dhContainer, state, siteData.dhCorpus, renderApp);
    }

    bindGlobalEvents();
  }

  function bindGlobalEvents() {
    document.getElementById("toggle-language-button")?.addEventListener("click", () => {
      progressApi.setShowEnglish(state, !state.settings.showEnglish);
      renderApp();
    });

    document.getElementById("reset-all-button")?.addEventListener("click", () => {
      const confirmed = window.confirm("Soll der gesamte Lernstand auf diesem Gerät wirklich zurückgesetzt werden?");
      if (!confirmed) return;
      progressApi.resetAll(state);
      glossaryQuery = "";
      renderApp();
    });

    document.querySelectorAll("[data-reset-module]").forEach((button) => {
      button.addEventListener("click", () => {
        const module = modules.find((entry) => entry.id === button.dataset.resetModule);
        if (!module) return;
        const confirmed = window.confirm(`Soll ${module.title} wirklich zurückgesetzt werden?`);
        if (!confirmed) return;
        progressApi.resetModule(state, module);
        renderApp();
      });
    });

    document.querySelectorAll("[data-module-link]").forEach((link) => {
      link.addEventListener("click", () => {
        progressApi.markModuleVisited(state, link.dataset.moduleLink);
      });
    });

    document.getElementById("glossary-search-input")?.addEventListener("input", (event) => {
      glossaryQuery = event.target.value;
      renderApp();
      document.getElementById("glossary-search-input")?.focus();
      document.getElementById("glossary-search-input")?.setSelectionRange(glossaryQuery.length, glossaryQuery.length);
    });

    document.getElementById("teacher-login-form")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.getElementById("teacher-password-input");
      if (!teacherPasswordValid(input?.value || "")) {
        window.alert("Passwort nicht korrekt.");
        return;
      }
      progressApi.setTeacherAuthorized(state, true);
      renderApp();
      window.location.hash = "#teacher-area";
    });

    document.getElementById("teacher-logout-button")?.addEventListener("click", () => {
      progressApi.setTeacherAuthorized(state, false);
      renderApp();
    });
  }

  document.addEventListener("DOMContentLoaded", renderApp);
})();
