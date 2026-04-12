(function () {
  const siteData = window.LIT_SITE_DATA;
  const modules = siteData.modules;
  const glossaryApi = window.LitGlossary;
  const progressApi = window.LitProgress;
  const tasksApi = window.LitTasks;
  const dhDemoApi = window.LitDhDemo;
  const i18n = window.LitI18n;
  const taskI18n = window.LitTaskI18n;
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

  function lang() {
    return state.settings.language === "en" ? "en" : "de";
  }

  function ui(key) {
    return i18n.getUi(lang(), key);
  }

  function siteText(key) {
    return i18n.getSite(lang(), key) || siteData.site[key];
  }

  function moduleText(module, key) {
    return i18n.getModule(lang(), module.id, key) || module[key];
  }

  function teacherGuideText(key) {
    return taskI18n?.getTeacher(lang(), key) || siteData.teacherGuide[key];
  }

  function teacherModuleText(module, key) {
    return taskI18n?.getTeacherModule(lang(), module.id)?.[key] || module.teacher[key];
  }

  function taskText(task, key) {
    return taskI18n?.getTask(lang(), task.id)?.[key] || task[key];
  }

  function fallbackFocus(module) {
    const focusMap = {
      "mod-1": {
        question: "Warum ist Literaturgeschichte nie bloss eine Zeitleiste?",
        bridge:
          "Du brauchst hier kein Spezialwissen. Es reicht, wenn du zwischen einer Liste von Daten und einer erzählten Deutung von Literatur unterscheiden kannst.",
        core:
          "Literaturgeschichte wählt aus, ordnet und wertet. Genau deshalb hilft sie bei der Orientierung, ist aber nie neutral.",
        steps: [
          "Chronologie und Deutung unterscheiden.",
          "Institutionen der Sichtbarkeit erkennen.",
          "Fragen, was durch diese Ordnung sichtbar und unsichtbar wird."
        ],
        pitfalls: [
          "Literaturgeschichte für ein vollständiges Abbild halten.",
          "Kanon und Bedeutung als naturgegeben ansehen.",
          "Leserschaft und Institutionen vergessen."
        ],
        terms: ["Literaturgeschichtsschreibung", "Kanon", "Periodisierung", "kulturelles Gedächtnis"]
      },
      "mod-2": {
        question: "Was verändert sich, wenn ich an einen Text andere Fragen stelle?",
        bridge:
          "Du musst die Theorieansätze nicht auswendig kennen. Beginne immer mit der Frage, was ein Ansatz überhaupt wissen will.",
        core:
          "Ein Ansatz ist ein Fragewerkzeug. Er schärft einen Aspekt von Literatur und schwächt andere Aspekte ab.",
        steps: [
          "Leitfrage des Ansatzes benennen.",
          "Sichtbar gemachte Ebene bestimmen.",
          "Ausblendung oder Grenze reflektieren."
        ],
        pitfalls: [
          "Einen Ansatz absolut setzen.",
          "Theorie auf ein Schlagwort verkürzen.",
          "Methoden mit Wahrheiten verwechseln."
        ],
        terms: ["Werkimmanenz", "Rezeptionsästhetik", "Strukturalismus", "New Historicism"]
      },
      "mod-3": {
        question: "Warum sind Epochenbegriffe nützlich und zugleich gefährlich?",
        bridge:
          "Wenn ein Begriff Orientierung schafft, bedeutet das noch nicht, dass er eine objektive Tatsache bezeichnet. Behandle Epochen als Arbeitsmodelle.",
        core:
          "Epochenbegriffe reduzieren Komplexität. Das ist ihre Stärke. Dieselbe Reduktion kann aber Grenzfälle und Überlagerungen unsichtbar machen.",
        steps: [
          "Nutzen des Epochenbegriffs benennen.",
          "Grenzfälle und Mischformen prüfen.",
          "Nationale und transnationale Unterschiede vergleichen."
        ],
        pitfalls: [
          "Alle Texte einer Epoche homogen lesen.",
          "Heuristik mit Naturtatsache verwechseln.",
          "Eurozentrische Raster unbemerkt übernehmen."
        ],
        terms: ["Epoche", "Heuristik", "Ungleichzeitigkeit", "Periodisierung"]
      },
      "mod-4": {
        question: "Wer entscheidet, was als wichtige Literatur gilt?",
        bridge:
          "Nimm zuerst die eigene Schulerfahrung ernst: Was du liest, wurde bereits ausgewählt. Daraus entsteht die Kanonfrage.",
        core:
          "Kanonisierung ist institutionell stabilisierte Wiederholung. Ein Text wird wichtig, weil er sichtbar, verfügbar und prüfbar bleibt.",
        steps: [
          "Instanzen der Sichtbarkeit identifizieren.",
          "Ausschlüsse und Unterrepräsentationen benennen.",
          "Kanonrevision als Kriterienprüfung verstehen."
        ],
        pitfalls: [
          "Qualität allein als Ursache des Kanons sehen.",
          "Kanonkritik mit Beliebigkeit verwechseln.",
          "Übersetzung und Infrastruktur unterschätzen."
        ],
        terms: ["Kanon", "Kanonisierung", "kulturelles Kapital", "Schulkanon"]
      },
      "mod-5": {
        question: "Wie wird Literatur Teil eines kulturellen oder politischen Programms?",
        bridge:
          "Denk nicht nur an Zensur. Kulturpolitik wirkt auch über Lehrpläne, Editionen, Jubiläen, Preise und Erinnerungsorte.",
        core:
          "Literaturgeschichte erzählt oft auch, wer 'wir' als Gemeinschaft sein sollen. Darum ist sie kulturell wirksam und politisch anschlussfähig.",
        steps: [
          "Leitbild oder Identitätsmodell benennen.",
          "Institutionelle Vermittlung nachzeichnen.",
          "Fragen, welche Texte zentriert und welche marginalisiert werden."
        ],
        pitfalls: [
          "Alles auf plumpe Propaganda reduzieren.",
          "Subtile Steuerung über Bildung übersehen.",
          "Kultur und Politik zu stark trennen."
        ],
        terms: ["Kulturpolitik", "Erinnerungspolitik", "Klassik", "Identität"]
      },
      "mod-6": {
        question: "Warum sind konkrete Texte meist komplexer als unsere Ordnungsschemata?",
        bridge:
          "Frag nicht sofort: Zu welcher Epoche gehört der Text? Frag zuerst: Was macht Ansatz A sichtbar, was Ansatz B?",
        core:
          "Primärtexte bestätigen Theorie nicht einfach. Sie stören, verschieben und präzisieren unsere Modelle.",
        steps: [
          "Werk knapp situieren.",
          "Literaturgeschichtliche Relevanz bestimmen.",
          "Methodische Sichtbarkeiten vergleichen."
        ],
        pitfalls: [
          "Stationen in reine Lexikonartikel verwandeln.",
          "Texte nur als Beleg für eine Theorie lesen.",
          "Vergleich zwischen Traditionen vernachlässigen."
        ],
        terms: ["Primärtext", "Fallstation", "Vergleich", "Methode"]
      },
      "mod-7": {
        question: "Was können Daten zeigen, und was bleibt Interpretationsarbeit?",
        bridge:
          "Du brauchst kein Programmierwissen. Entscheidend ist die Verschiebung der Massstabsebene: viele Texte statt nur ein einzelner Text.",
        core:
          "Digital Humanities sind stark, wenn sie Muster von Sichtbarkeit und Ausschluss zeigen. Sie sind schwach, wenn man von ihnen fertige Bedeutungen erwartet.",
        steps: [
          "Verstehen, was eine Methode überhaupt misst.",
          "Muster vorsichtig lesen.",
          "Explizit sagen, was die Daten nicht entscheiden."
        ],
        pitfalls: [
          "Daten automatisch für objektiv halten.",
          "Korpusbau als neutral missverstehen.",
          "close reading durch Zahlen ersetzen wollen."
        ],
        terms: ["Digital Humanities", "distant reading", "Korpusanalyse", "Stilometrie"]
      },
      "mod-8": {
        question: "Wie bleibt Literaturgeschichte kritisch, ohne orientierungslos zu werden?",
        bridge:
          "Nimm die ganze Einheit als Spannungsfeld: Wir brauchen Ordnung, aber wir müssen auch die Ordnung befragen, die wir herstellen.",
        core:
          "Reflektierte Literaturgeschichte ist weder blosse Chronologie noch reine Beliebigkeit. Sie ist eine begründete und revidierbare Form von Ordnung.",
        steps: [
          "Modelle vergleichen statt isolieren.",
          "Eigene Auswahlkriterien offenlegen.",
          "Grenzen des eigenen Modells mitreflektieren."
        ],
        pitfalls: [
          "In einfache Zeitleisten zurückfallen.",
          "Kritik mit Relativismus verwechseln.",
          "DH als Ersatz für Urteilskraft behandeln."
        ],
        terms: ["Synthese", "Auswahlprinzip", "Transfer", "alternative Literaturgeschichte"]
      }
    };
    return focusMap[module.id] || null;
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

  function renderGoals(items) {
    return `
      <ul class="goal-list">
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    `;
  }

  function renderKeyTerms() {
    return siteData.site.englishFocus
      .map((pair) => {
        const primary = lang() === "en" ? pair.en : pair.de;
        const secondary = lang() === "en" ? pair.de : pair.en;
        return `
          <span class="term-chip">
            <strong>${escapeHtml(primary)}</strong>
            <span>${escapeHtml(secondary)}</span>
          </span>
        `;
      })
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
              <h3>${escapeHtml(moduleText(module, "title").replace(/^Module \d+: /, "").replace(/^Modul \d+: /, ""))}</h3>
              <p>${escapeHtml(moduleText(module, "subtitle"))}</p>
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
      <nav class="sidebar-nav" aria-label="${escapeHtml(ui("navigation"))}">
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
        <a href="#glossary" data-module-link="glossary"><span>${escapeHtml(ui("glossary"))}</span><small>DE/EN</small></a>
        <a href="#teacher-area" data-module-link="teacher-area"><span>${escapeHtml(ui("teacher"))}</span><small>${escapeHtml(state.settings.teacherAuthorized ? ui("active") : ui("protected"))}</small></a>
      </nav>
    `;
  }

  function renderFocusGuide(module) {
    const focus = moduleText(module, "focus") || fallbackFocus(module);
    if (!focus) return "";
    return `
      <section class="focus-guide">
        <div class="focus-grid">
          <article class="focus-card focus-card--question">
            <h3>${escapeHtml(ui("focusQuestion"))}</h3>
            <p>${escapeHtml(focus.question)}</p>
          </article>
          <article class="focus-card">
            <h3>${escapeHtml(ui("focusBridge"))}</h3>
            <p>${escapeHtml(focus.bridge)}</p>
          </article>
          <article class="focus-card">
            <h3>${escapeHtml(ui("focusCore"))}</h3>
            <p>${escapeHtml(focus.core)}</p>
          </article>
          <article class="focus-card">
            <h3>${escapeHtml(ui("focusSteps"))}</h3>
            <ul>${(focus.steps || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </article>
          <article class="focus-card">
            <h3>${escapeHtml(ui("focusPitfalls"))}</h3>
            <ul>${(focus.pitfalls || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </article>
          <article class="focus-card">
            <h3>${escapeHtml(ui("focusTerms"))}</h3>
            <div class="focus-term-list">
              ${(focus.terms || []).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
            </div>
          </article>
        </div>
      </section>
    `;
  }

  function renderGermanSections(module) {
    return (module.sections || [])
      .map(
        (section) => `
          <article class="deep-card">
            <h4>${escapeHtml(section.title)}</h4>
            <div class="subsection-content">${section.html}</div>
          </article>
        `
      )
      .join("");
  }

  function renderEnglishSections(module) {
    const sections = moduleText(module, "sections") || [];
    return sections
      .map(
        (section) => `
          <article class="deep-card">
            <h4>${escapeHtml(section.title)}</h4>
            <ul>${(section.bullets || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </article>
        `
      )
      .join("");
  }

  function renderSections(module) {
    const content = lang() === "de" ? renderGermanSections(module) : renderEnglishSections(module);
    if (!content) return "";

    return `
      <section class="subsection">
        <div class="subsection-head">
          <h3>${escapeHtml(ui("sectionSummary"))}</h3>
          <p>${escapeHtml(ui("guidedTrack"))}</p>
        </div>
        <details class="deepening-block" ${state.settings.focusMode ? "" : "open"}>
          <summary>${escapeHtml(ui("deepening"))}</summary>
          <div class="deepening-stack">${content}</div>
        </details>
      </section>
    `;
  }

  function renderApproachesGerman(module) {
    if (!module.approaches) return "";
    return `
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
    `;
  }

  function renderApproachesEnglish(module) {
    const summary = moduleText(module, "approachesSummary") || [];
    if (!summary.length) return "";
    return `
      <div class="summary-card-grid">
        ${summary
          .map(
            (entry) => `
              <article class="deep-card">
                <h4>${escapeHtml(entry.title)}</h4>
                <p><strong>Focus:</strong> ${escapeHtml(entry.focus)}</p>
                <p><strong>Good for:</strong> ${escapeHtml(entry.strength)}</p>
                <p><strong>Blind spot:</strong> ${escapeHtml(entry.blindSpot)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderApproaches(module) {
    if (!module.approaches) return "";
    return `
      <section class="subsection">
        <div class="subsection-head">
          <h3>${escapeHtml(ui("theoryBlocks"))}</h3>
          <p>${escapeHtml(ui("theoryIntro"))}</p>
        </div>
        <details class="deepening-block" ${state.settings.focusMode ? "" : "open"}>
          <summary>${escapeHtml(ui("deepening"))}</summary>
          ${lang() === "de" ? renderApproachesGerman(module) : renderApproachesEnglish(module)}
        </details>
      </section>
    `;
  }

  function renderStationsGerman(module) {
    return `
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
    `;
  }

  function renderStationsEnglish(module) {
    const summary = moduleText(module, "stationsSummary") || [];
    return `
      <div class="summary-card-grid">
        ${summary
          .map(
            (entry) => `
              <article class="deep-card">
                <h4>${escapeHtml(entry.title)}</h4>
                <p>${escapeHtml(entry.lesson)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderStations(module) {
    if (!module.stations) return "";
    return `
      <section class="subsection">
        <div class="subsection-head">
          <h3>${escapeHtml(ui("stationBlocks"))}</h3>
          <p>${escapeHtml(ui("stationIntro"))}</p>
        </div>
        <details class="deepening-block" ${state.settings.focusMode ? "" : "open"}>
          <summary>${escapeHtml(ui("deepening"))}</summary>
          ${lang() === "de" ? renderStationsGerman(module) : renderStationsEnglish(module)}
        </details>
      </section>
    `;
  }

  function renderModuleSection(module) {
    const progress = progressApi.getTaskProgress(state, module);
    const title = moduleText(module, "title");
    const subtitle = moduleText(module, "subtitle");
    const intro = moduleText(module, "intro");
    const goals = moduleText(module, "goals") || module.goals;

    return `
      <section class="module-panel" id="${escapeHtml(module.id)}">
        <div class="module-top">
          <div>
            <p class="section-kicker">${escapeHtml(module.navTitle)}</p>
            <h2>${escapeHtml(title)}</h2>
            <p class="module-subtitle">${escapeHtml(subtitle)}</p>
          </div>
          <div class="module-actions">
            <button type="button" class="btn ghost" data-reset-module="${escapeHtml(module.id)}">${escapeHtml(ui("resetModule"))}</button>
          </div>
        </div>
        <p class="module-intro">${escapeHtml(intro)}</p>
        ${renderGoals(goals)}
        <div class="progress-block">
          <div class="progress-track">
            <div class="progress-fill" style="width:${progress.percent}%"></div>
          </div>
          <span>${progress.completed} ${escapeHtml(ui("completedTasks"))}: ${progress.total}</span>
        </div>
        ${renderFocusGuide(module)}
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
            <p class="section-kicker">${escapeHtml(ui("glossary"))}</p>
            <h2>${escapeHtml(lang() === "en" ? "Glossary DE/EN" : "Glossar DE/EN")}</h2>
            <p class="module-subtitle">${escapeHtml(lang() === "en" ? "Core key terms of the unit in two languages." : "Zentrale Fachbegriffe der Einheit zweisprachig und kommentiert.")}</p>
          </div>
        </div>
        <div class="glossary-toolbar">
          <label class="glossary-search">
            <span>${escapeHtml(ui("searchTerm"))}</span>
            <input id="glossary-search-input" type="search" placeholder="${escapeHtml(lang() === "en" ? "e.g. canon, discourse, distant reading" : "z. B. Kanon, discourse, distant reading")}" value="${escapeHtml(glossaryQuery)}" />
          </label>
          <p>${results.length} ${escapeHtml(ui("matches"))}</p>
        </div>
        <div class="glossary-grid">
          ${results
            .map(
              (term) => `
                <article class="glossary-card">
                  <h3>${escapeHtml(lang() === "en" ? term.en : term.de)}</h3>
                  <p class="glossary-english">${escapeHtml(lang() === "en" ? term.de : term.en)}</p>
                  <p><strong>DE:</strong> ${escapeHtml(term.definitionDe)}</p>
                  <p><strong>EN:</strong> ${escapeHtml(term.definitionEn)}</p>
                  <p><strong>${escapeHtml(lang() === "en" ? "Comment" : "Kommentar")}:</strong> ${escapeHtml(term.notes)}</p>
                  <p><strong>${escapeHtml(lang() === "en" ? "Related" : "Verwandt")}:</strong> ${escapeHtml((term.related || []).join(", "))}</p>
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
              <p class="section-kicker">${escapeHtml(ui("teacher"))}</p>
              <h2>${escapeHtml(lang() === "en" ? "Protected teacher area" : "Geschützter Lösungs- und Planungsbereich")}</h2>
              <p class="module-subtitle">${escapeHtml(ui("teacherProtected"))}</p>
            </div>
          </div>
          <p>${escapeHtml(teacherGuideText("overview"))}</p>
          <form id="teacher-login-form" class="teacher-login-form">
            <label>
              <span>${escapeHtml(lang() === "en" ? "Password" : "Passwort")}</span>
              <input type="password" id="teacher-password-input" autocomplete="current-password" placeholder="${escapeHtml(lang() === "en" ? "Enter password" : "Passwort eingeben")}" />
            </label>
            <button type="submit" class="btn primary">${escapeHtml(ui("teacherOpen"))}</button>
          </form>
          <p class="teacher-small-note">${escapeHtml(lang() === "en" ? "The lock is intentionally lightweight and fully client-side." : "Hinweis: Die Sperre ist bewusst niedrigschwellig und rein clientseitig.")}</p>
        </section>
      `;
    }

    return `
      <section class="module-panel teacher-panel" id="teacher-area">
        <div class="module-top">
          <div>
            <p class="section-kicker">${escapeHtml(ui("teacher"))}</p>
            <h2>${escapeHtml(lang() === "en" ? "Solutions, dashboard, and didactic notes" : "Solutions, Dashboard und didaktische Hinweise")}</h2>
            <p class="module-subtitle">${escapeHtml(teacherGuideText("overview"))}</p>
          </div>
          <div class="module-actions">
            <button type="button" class="btn ghost" id="teacher-logout-button">${escapeHtml(ui("teacherClose"))}</button>
          </div>
        </div>
        <div class="teacher-overview-grid">
          <article class="info-box example">
            <h4>${escapeHtml(lang() === "en" ? "Teaching suggestions" : "Unterrichtsvorschläge")}</h4>
            <ul>${teacherGuideText("suggestions").map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </article>
          <article class="info-box criticism">
            <h4>${escapeHtml(lang() === "en" ? "Technical note" : "Technischer Hinweis")}</h4>
            <p>${escapeHtml(teacherGuideText("note"))}</p>
          </article>
        </div>
        <div class="teacher-module-stack">
          ${modules
            .map(
              (module) => `
                <details class="teacher-module-card">
                  <summary>
                    <div>
                      <strong>${escapeHtml(moduleText(module, "title"))}</strong>
                      <span>${escapeHtml(teacherModuleText(module, "use"))}</span>
                    </div>
                  </summary>
                  <div class="teacher-module-body">
                    <p><strong>${escapeHtml(lang() === "en" ? "Didactic focus" : "Didaktischer Fokus")}:</strong> ${escapeHtml(teacherModuleText(module, "didactics"))}</p>
                    <p><strong>${escapeHtml(lang() === "en" ? "Suitable social forms" : "Geeignete Sozialformen")}:</strong> ${escapeHtml(teacherModuleText(module, "socialForms").join(", "))}</p>
                    <p><strong>${escapeHtml(lang() === "en" ? "Assessment focus" : "Beobachtung für Beurteilung")}:</strong> ${escapeHtml(teacherModuleText(module, "assessment"))}</p>
                    <div class="teacher-task-list">
                      ${(module.tasks || [])
                        .map(
                          (task) => `
                            <article class="teacher-task-card">
                              <h4>${escapeHtml(taskText(task, "title"))}</h4>
                              <p><strong>${escapeHtml(ui("task"))}:</strong> ${escapeHtml(taskText(task, "prompt"))}</p>
                              <p><strong>${escapeHtml(ui("modelAnswer"))}:</strong> ${escapeHtml(taskText(task, "modelAnswer") || taskText(task, "explanation") || "Keine Musterlösung hinterlegt.")}</p>
                              <p><strong>${escapeHtml(lang() === "en" ? "Hint" : "Hinweis")}:</strong> ${escapeHtml(taskText(task, "help") || "Auf Präzision und Begründung achten.")}</p>
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
    const comparisonAxes = siteText("comparisonAxes") || siteData.site.comparisonAxes;

    root.innerHTML = `
      <div class="page-shell">
        <header class="hero-panel">
          <div class="hero-main">
            <p class="eyebrow">${escapeHtml(lang() === "en" ? "Digital learning unit | full language switch DE/EN" : "Digitale Lerneinheit | voller Sprachschalter DE/EN")}</p>
            <h1>${escapeHtml(siteText("title"))}</h1>
            <p class="hero-subtitle">${escapeHtml(siteText("subtitle"))}</p>
            <p class="hero-copy">${escapeHtml(siteText("shortDescription"))}</p>
            ${renderGoals(siteText("heroGoals") || siteData.site.heroGoals)}
            <div class="hero-actions">
              <a class="btn primary" href="#mod-1">${escapeHtml(ui("startModule"))}</a>
              <button type="button" class="btn ghost" id="language-switch-button">${escapeHtml(lang() === "de" ? ui("languageEn") : ui("languageDe"))}</button>
              <button type="button" class="btn ghost" id="focus-switch-button">${escapeHtml(state.settings.focusMode ? ui("focusOff") : ui("focusOn"))}</button>
              <button type="button" class="btn ghost" id="reset-all-button">${escapeHtml(ui("resetAll"))}</button>
            </div>
            <div class="term-chip-wrap">${renderKeyTerms()}</div>
          </div>
          <aside class="hero-side">
            <article class="stat-card">
              <small>${escapeHtml(ui("overallProgress"))}</small>
              <strong>${overall.percent}%</strong>
              <span>${overall.completed} / ${overall.total}</span>
            </article>
            <article class="info-box definition">
              <h4>${escapeHtml(ui("focusQuestion"))}</h4>
              <p>${escapeHtml(lang() === "en" ? "How can we teach literary history if it is both necessary and contested?" : "Wie lässt sich Literaturgeschichte lehren, wenn sie zugleich notwendig und umstritten ist?")}</p>
            </article>
            <article class="info-box english">
              <h4>${escapeHtml(lang() === "en" ? "Display logic" : "Darstellungslogik")}</h4>
              <p>${escapeHtml(ui("guidedTrack"))}</p>
            </article>
            <article class="info-box example">
              <h4>${escapeHtml(lang() === "en" ? "Comparison axes" : "Vergleichsachsen")}</h4>
              <ul>${comparisonAxes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </article>
          </aside>
        </header>

        <section class="overview-panel">
          <div class="progress-block progress-block--overall">
            <div class="progress-track">
              <div class="progress-fill" style="width:${overall.percent}%"></div>
            </div>
            <span>${escapeHtml(ui("overallProgress"))}: ${overall.completed} / ${overall.total}</span>
          </div>
          <div class="module-card-grid">${renderHeroCards()}</div>
        </section>

        <div class="content-layout">
          <aside class="sidebar-panel">
            <div class="sidebar-head">
              <h2>${escapeHtml(ui("navigation"))}</h2>
              <p>${escapeHtml(ui("jump"))}</p>
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
          <p>${escapeHtml(siteText("footerNote"))}</p>
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
    document.getElementById("language-switch-button")?.addEventListener("click", () => {
      progressApi.setLanguage(state, lang() === "de" ? "en" : "de");
      renderApp();
    });

    document.getElementById("focus-switch-button")?.addEventListener("click", () => {
      progressApi.setFocusMode(state, !state.settings.focusMode);
      renderApp();
    });

    document.getElementById("reset-all-button")?.addEventListener("click", () => {
      const confirmed = window.confirm(
        lang() === "en"
          ? "Do you really want to reset all local progress on this device?"
          : "Soll der gesamte Lernstand auf diesem Gerät wirklich zurückgesetzt werden?"
      );
      if (!confirmed) return;
      progressApi.resetAll(state);
      glossaryQuery = "";
      renderApp();
    });

    document.querySelectorAll("[data-reset-module]").forEach((button) => {
      button.addEventListener("click", () => {
        const module = modules.find((entry) => entry.id === button.dataset.resetModule);
        if (!module) return;
        const confirmed = window.confirm(
          lang() === "en"
            ? `Do you really want to reset ${moduleText(module, "title")}?`
            : `Soll ${module.title} wirklich zurückgesetzt werden?`
        );
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
        window.alert(lang() === "en" ? "Password not correct." : "Passwort nicht korrekt.");
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
