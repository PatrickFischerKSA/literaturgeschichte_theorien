(function () {
  const siteData = window.LIT_SITE_DATA;
  const modules = siteData.modules;
  const glossaryApi = window.LitGlossary;
  const progressApi = window.LitProgress;
  const tasksApi = window.LitTasks;
  const dhDemoApi = window.LitDhDemo;
  const disputesApi = window.LitDisputes;
  const i18n = window.LitI18n;
  const taskI18n = window.LitTaskI18n;
  const state = progressApi.loadState();
  const SUPPORTED_LANGUAGES = ["de", "en", "fr", "es", "ru"];
  const LANGUAGE_BUTTONS = [
    { code: "de", key: "languageDe" },
    { code: "en", key: "languageEn" },
    { code: "fr", key: "languageFr" },
    { code: "es", key: "languageEs" },
    { code: "ru", key: "languageRu" }
  ];

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
    return SUPPORTED_LANGUAGES.includes(state.settings.language) ? state.settings.language : "de";
  }

  function copy(variants) {
    return variants[lang()] || variants.en || variants.de || "";
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

  function titleParts(module) {
    const localizedTitle = moduleText(module, "title");
    const match = localizedTitle.match(/^([^:]+):\s*(.+)$/);
    if (match) {
      return { prefix: match[1], label: match[2] };
    }
    return { prefix: module.navTitle, label: localizedTitle };
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
          "Du musst die Theorieansätze nicht auswendig kennen. Wichtiger ist, dass du zwischen methodischer Grundlage, heutigen Schwerpunkten und eher historischem Hintergrund unterscheiden kannst.",
        core:
          "Ein Ansatz ist ein Fragewerkzeug. Textnahe Präzision bleibt grundlegend, aber die heutigen Schwerpunkte liegen stärker bei Macht-, Diskurs-, Transnationalitäts- und Kanonfragen.",
        steps: [
          "Leitfrage des Ansatzes benennen.",
          "Seine heutige Stellung im Feld einschätzen.",
          "Sichtbar gemachte Ebene und Grenze reflektieren."
        ],
        pitfalls: [
          "Alle Ansätze als gleich gegenwartsrelevant behandeln.",
          "Einen Ansatz absolut setzen.",
          "Theorie auf ein Schlagwort verkürzen.",
          "Methoden mit Wahrheiten verwechseln."
        ],
        terms: ["Werkimmanenz", "New Historicism", "Poststrukturalismus", "postkoloniale Erweiterungen"]
      },
      "mod-3": {
        question: "Warum sind Epochenbegriffe nützlich und zugleich gefährlich?",
        bridge:
          "Wenn ein Begriff Orientierung schafft, bedeutet das noch nicht, dass er eine objektive Tatsache bezeichnet. Aber auch seine pauschale Verwerfung löst das Problem nicht.",
        core:
          "Epochenbegriffe reduzieren Komplexität. Das ist ihre Stärke. Dieselbe Reduktion kann Grenzfälle und Teleologien erzeugen; reine Epochenkritik kann umgekehrt den Blick auf den Text verstellen.",
        steps: [
          "Nutzen des Epochenbegriffs benennen.",
          "Grenzfälle und Mischformen prüfen.",
          "Fragen, wo Kritik erhellt und wo sie selbst zum Raster wird."
        ],
        pitfalls: [
          "Alle Texte einer Epoche homogen lesen.",
          "Heuristik mit Naturtatsache verwechseln.",
          "Eurozentrische Raster unbemerkt übernehmen.",
          "Zu glauben, ohne Periodisierung arbeite man automatisch textnäher."
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
        const primary = lang() === "de" ? pair.de : pair.en;
        const secondary = lang() === "de" ? pair.en : pair.de;
        return `
          <span class="term-chip">
            <strong>${escapeHtml(primary)}</strong>
            <span>${escapeHtml(secondary)}</span>
          </span>
        `;
      })
      .join("");
  }

  function renderLanguageSwitcher() {
    return `
      <div class="language-switcher" role="group" aria-label="${escapeHtml(copy({
        de: "Sprachauswahl",
        en: "Language selection",
        fr: "Choix de la langue",
        es: "Selección de idioma",
        ru: "Выбор языка"
      }))}">
        ${LANGUAGE_BUTTONS.map((entry) => {
          const active = lang() === entry.code;
          return `
            <button type="button" class="btn ghost language-pill ${active ? "is-active" : ""}" data-language="${escapeHtml(entry.code)}" aria-pressed="${active ? "true" : "false"}">
              ${escapeHtml(ui(entry.key))}
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderHeroCards() {
    return modules
      .map((module) => {
        const progress = progressApi.getTaskProgress(state, module);
        const { prefix, label } = titleParts(module);
        return `
          <a class="module-card-link" href="#${escapeHtml(module.id)}" data-module-link="${escapeHtml(module.id)}">
            <article class="module-card">
              <p class="module-card-kicker">${escapeHtml(prefix)}</p>
              <h3>${escapeHtml(label)}</h3>
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
            const { prefix } = titleParts(module);
            return `
              <a href="#${escapeHtml(module.id)}" data-module-link="${escapeHtml(module.id)}">
                <span>${escapeHtml(prefix)}</span>
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
    const orderedApproaches = [...module.approaches].sort(
      (left, right) => (left.priority ?? 99) - (right.priority ?? 99)
    );
    return `
      <div class="accordion-stack">
        ${orderedApproaches
          .map(
            (approach) => `
              <details class="approach-card">
                <summary>
                  <div class="approach-summary-head">
                    <div>
                      ${approach.priorityLabel ? `<span class="approach-priority">${escapeHtml(approach.priorityLabel)}</span>` : ""}
                    </div>
                    <div>
                      <h4>${escapeHtml(approach.name)}</h4>
                      <p>${escapeHtml(approach.keyTerms.join(" | "))}</p>
                      ${approach.todayStatus ? `<p class="approach-status-inline">${escapeHtml(approach.todayStatus)}</p>` : ""}
                    </div>
                  </div>
                </summary>
                <div class="approach-grid">
                  ${
                    approach.todayStatus
                      ? `<article><h5>Heutige Stellung</h5><p>${escapeHtml(approach.todayStatus)}</p></article>`
                      : ""
                  }
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
                ${
                  entry.priority
                    ? `<p><strong>${escapeHtml(copy({
                        de: "Stellung",
                        en: "Status today",
                        fr: "Statut actuel",
                        es: "Situación actual",
                        ru: "Современный статус"
                      }))}:</strong> ${escapeHtml(entry.priority)}</p>`
                    : ""
                }
                <p><strong>${escapeHtml(copy({
                  de: "Fokus",
                  en: "Focus",
                  fr: "Focalisation",
                  es: "Foco",
                  ru: "Фокус"
                }))}:</strong> ${escapeHtml(entry.focus)}</p>
                <p><strong>${escapeHtml(copy({
                  de: "Stärke",
                  en: "Good for",
                  fr: "Atout",
                  es: "Fortaleza",
                  ru: "Сильная сторона"
                }))}:</strong> ${escapeHtml(entry.strength)}</p>
                <p><strong>${escapeHtml(copy({
                  de: "Blindstelle",
                  en: "Blind spot",
                  fr: "Angle mort",
                  es: "Punto ciego",
                  ru: "Слепое пятно"
                }))}:</strong> ${escapeHtml(entry.blindSpot)}</p>
                ${
                  entry.todayStatus
                    ? `<p><strong>${escapeHtml(copy({
                        de: "Kommentar",
                        en: "Comment",
                        fr: "Commentaire",
                        es: "Comentario",
                        ru: "Комментарий"
                      }))}:</strong> ${escapeHtml(entry.todayStatus)}</p>`
                    : ""
                }
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

  function renderControversyDossier(module) {
    if (module.id !== "mod-6" || !disputesApi) return "";

    const dossier = disputesApi.get(lang());
    const labels = disputesApi.getUi(lang());

    return `
      <section class="subsection controversy-section">
        <div class="subsection-head">
          <h3>${escapeHtml(labels.title)}</h3>
          <p>${escapeHtml(dossier.intro)}</p>
        </div>
        <div class="info-box english">
          <h4>${escapeHtml(labels.kicker)}</h4>
          <p>${escapeHtml(labels.translationNote)}</p>
        </div>
        <div class="controversy-grid">
          ${dossier.cases
            .map((entry, index) => {
              const popupId = `${lang()}-quote-${index}`;
              return `
                <article class="controversy-card">
                  <h4>${escapeHtml(entry.title)}</h4>
                  <p><strong>${escapeHtml(copy({
                    de: "Streitpunkt",
                    en: "Core dispute",
                    fr: "Nœud du conflit",
                    es: "Núcleo de la disputa",
                    ru: "Узел спора"
                  }))}:</strong> ${escapeHtml(entry.debate)}</p>
                  <p><strong>${escapeHtml(copy({
                    de: "Warum literaturgeschichtlich wichtig?",
                    en: "Why it matters for literary history",
                    fr: "Pourquoi cela compte pour l'histoire littéraire",
                    es: "Por qué importa para la historia literaria",
                    ru: "Почему это важно для литературной истории"
                  }))}:</strong> ${escapeHtml(entry.stakes)}</p>
                  <div class="quote-shell">
                    <blockquote>${escapeHtml(entry.quote.original)}</blockquote>
                    <div class="quote-toolbar">
                      <button type="button" class="btn ghost quote-toggle" data-quote-toggle="${escapeHtml(popupId)}" aria-expanded="false">
                        ${escapeHtml(labels.quoteButton)}
                      </button>
                      <a class="quote-source-link" href="${escapeHtml(entry.quote.sourceUrl)}" target="_blank" rel="noreferrer noopener">${escapeHtml(entry.quote.sourceLabel)}</a>
                    </div>
                    <div class="quote-popover" data-quote-popover="${escapeHtml(popupId)}" hidden>
                      <div class="quote-popover-head">
                        <strong>${escapeHtml(labels.quoteTitle)}</strong>
                        <button type="button" class="quote-close" data-quote-close="${escapeHtml(popupId)}" aria-label="${escapeHtml(copy({
                          de: "Schließen",
                          en: "Close",
                          fr: "Fermer",
                          es: "Cerrar",
                          ru: "Закрыть"
                        }))}">×</button>
                      </div>
                      <p><strong>DE:</strong> ${escapeHtml(entry.quote.de)}</p>
                      <p><strong>EN:</strong> ${escapeHtml(entry.quote.en)}</p>
                    </div>
                  </div>
                  <div class="source-list">
                    <strong>${escapeHtml(labels.sourceLabel)}:</strong>
                    ${entry.links
                      .map(
                        (link) =>
                          `<a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer noopener">${escapeHtml(link.label)}</a>`
                      )
                      .join("")}
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
        <div class="subsection-head">
          <h3>${escapeHtml(labels.otherTitle)}</h3>
        </div>
        <div class="summary-card-grid">
          ${dossier.others
            .map(
              (entry) => `
                <article class="deep-card controversy-summary-card">
                  <h4>${escapeHtml(entry.title)}</h4>
                  <p>${escapeHtml(entry.summary)}</p>
                  <button type="button" class="btn ghost" data-open-language-dossier="${escapeHtml(entry.language)}">
                    ${escapeHtml(labels.switchLabel)} ${escapeHtml(entry.language.toUpperCase())}
                  </button>
                </article>
              `
            )
            .join("")}
        </div>
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
    const { prefix } = titleParts(module);

    return `
      <section class="module-panel" id="${escapeHtml(module.id)}">
        <div class="module-top">
          <div>
            <p class="section-kicker">${escapeHtml(prefix)}</p>
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
        ${renderControversyDossier(module)}
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
            <h2>${escapeHtml(copy({
              de: "Glossar DE/EN",
              en: "Glossary DE/EN",
              fr: "Glossaire DE/EN",
              es: "Glosario DE/EN",
              ru: "Глоссарий DE/EN"
            }))}</h2>
            <p class="module-subtitle">${escapeHtml(copy({
              de: "Zentrale Fachbegriffe der Einheit zweisprachig und kommentiert.",
              en: "Core key terms of the unit in two languages.",
              fr: "Les termes clés de l'unité, commentés de manière bilingue.",
              es: "Los conceptos clave de la unidad, comentados de forma bilingüe.",
              ru: "Ключевые понятия курса в двуязычном и комментированном формате."
            }))}</p>
          </div>
        </div>
        <div class="glossary-toolbar">
          <label class="glossary-search">
            <span>${escapeHtml(ui("searchTerm"))}</span>
            <input id="glossary-search-input" type="search" placeholder="${escapeHtml(copy({
              de: "z. B. Kanon, discourse, distant reading",
              en: "e.g. canon, discourse, distant reading",
              fr: "par ex. canon, discourse, distant reading",
              es: "p. ej. canon, discourse, distant reading",
              ru: "например: canon, discourse, distant reading"
            }))}" value="${escapeHtml(glossaryQuery)}" />
          </label>
          <p>${results.length} ${escapeHtml(ui("matches"))}</p>
        </div>
        <div class="glossary-grid">
          ${results
            .map(
              (term) => `
                <article class="glossary-card">
                  <h3>${escapeHtml(lang() === "de" ? term.de : term.en)}</h3>
                  <p class="glossary-english">${escapeHtml(lang() === "de" ? term.en : term.de)}</p>
                  <p><strong>DE:</strong> ${escapeHtml(term.definitionDe)}</p>
                  <p><strong>EN:</strong> ${escapeHtml(term.definitionEn)}</p>
                  <p><strong>${escapeHtml(copy({
                    de: "Kommentar",
                    en: "Comment",
                    fr: "Commentaire",
                    es: "Comentario",
                    ru: "Комментарий"
                  }))}:</strong> ${escapeHtml(term.notes)}</p>
                  <p><strong>${escapeHtml(copy({
                    de: "Verwandt",
                    en: "Related",
                    fr: "Associé",
                    es: "Relacionado",
                    ru: "Связано"
                  }))}:</strong> ${escapeHtml((term.related || []).join(", "))}</p>
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
              <h2>${escapeHtml(copy({
                de: "Geschützter Lösungs- und Planungsbereich",
                en: "Protected teacher area",
                fr: "Espace enseignant protégé",
                es: "Área docente protegida",
                ru: "Защищённая зона для преподавателей"
              }))}</h2>
              <p class="module-subtitle">${escapeHtml(ui("teacherProtected"))}</p>
            </div>
          </div>
          <p>${escapeHtml(teacherGuideText("overview"))}</p>
          <form id="teacher-login-form" class="teacher-login-form">
            <label>
              <span>${escapeHtml(copy({
                de: "Passwort",
                en: "Password",
                fr: "Mot de passe",
                es: "Contraseña",
                ru: "Пароль"
              }))}</span>
              <input type="password" id="teacher-password-input" autocomplete="current-password" placeholder="${escapeHtml(copy({
                de: "Passwort eingeben",
                en: "Enter password",
                fr: "Saisir le mot de passe",
                es: "Introducir contraseña",
                ru: "Введите пароль"
              }))}" />
            </label>
            <button type="submit" class="btn primary">${escapeHtml(ui("teacherOpen"))}</button>
          </form>
          <p class="teacher-small-note">${escapeHtml(copy({
            de: "Hinweis: Die Sperre ist bewusst niedrigschwellig und rein clientseitig.",
            en: "The lock is intentionally lightweight and fully client-side.",
            fr: "Remarque : la protection reste volontairement légère et entièrement côté client.",
            es: "Nota: la protección es deliberadamente ligera y totalmente del lado del cliente.",
            ru: "Примечание: защита намеренно упрощена и полностью работает на стороне клиента."
          }))}</p>
        </section>
      `;
    }

    return `
      <section class="module-panel teacher-panel" id="teacher-area">
        <div class="module-top">
          <div>
            <p class="section-kicker">${escapeHtml(ui("teacher"))}</p>
            <h2>${escapeHtml(copy({
              de: "Lehrpersonenmodus: gleiche Module, mehr Sichtbarkeit",
              en: "Teacher mode: same modules, extra visibility",
              fr: "Mode enseignant : mêmes modules, visibilité accrue",
              es: "Modo docente: mismos módulos, más visibilidad",
              ru: "Режим учителя: те же модули, больше видимости"
            }))}</h2>
            <p class="module-subtitle">${escapeHtml(copy({
              de: "Der Lehrpersonenmodus erzeugt keine eigene Inhaltsversion mehr. Er nutzt dieselben Module wie die Schüleransicht und blendet nur Lösungen und didaktische Hinweise zusätzlich ein.",
              en: "Teacher mode no longer creates a separate content version. It uses the same modules as the student view and only reveals solutions and didactic notes inline.",
              fr: "Le mode enseignant ne crée plus de version de contenu séparée. Il utilise les mêmes modules que la vue élève et n'affiche en plus que les solutions et remarques didactiques en ligne.",
              es: "El modo docente ya no crea una versión separada del contenido. Utiliza los mismos módulos que la vista del alumnado y solo añade soluciones y notas didácticas integradas.",
              ru: "Режим учителя больше не создаёт отдельную версию содержания. Он использует те же модули, что и ученический режим, и лишь дополнительно показывает решения и дидактические примечания."
            }))}</p>
          </div>
          <div class="module-actions">
            <button type="button" class="btn ghost" id="teacher-logout-button">${escapeHtml(ui("teacherClose"))}</button>
          </div>
        </div>
        <div class="teacher-overview-grid">
          <article class="info-box example">
            <h4>${escapeHtml(copy({
              de: "Was sich im Lehrpersonenmodus ändert",
              en: "What changes in teacher mode",
              fr: "Ce qui change en mode enseignant",
              es: "Qué cambia en el modo docente",
              ru: "Что меняется в режиме учителя"
            }))}</h4>
            <ul>
              <li>${escapeHtml(copy({
                de: "Alle Module bleiben identisch mit den Schülermodulen.",
                en: "All modules remain identical to the student modules.",
                fr: "Tous les modules restent identiques à ceux de la vue élève.",
                es: "Todos los módulos siguen siendo idénticos a los de la vista del alumnado.",
                ru: "Все модули остаются идентичными ученической версии."
              }))}</li>
              <li>${escapeHtml(copy({
                de: "Musterlösungen erscheinen direkt in denselben Aufgabenkarten.",
                en: "Model answers appear directly inside the same task cards.",
                fr: "Les solutions types apparaissent directement dans les mêmes cartes d'exercices.",
                es: "Las soluciones modelo aparecen directamente en las mismas tarjetas de actividades.",
                ru: "Образцовые ответы появляются прямо в тех же карточках заданий."
              }))}</li>
              <li>${escapeHtml(copy({
                de: "Der Lehrpersonenbereich dient nur noch der Orientierung und Planung.",
                en: "The teacher panel serves only as orientation and planning support.",
                fr: "L'espace enseignant sert uniquement d'aide à l'orientation et à la planification.",
                es: "El área docente sirve únicamente como apoyo para la orientación y la planificación.",
                ru: "Раздел для преподавателей служит только для ориентации и планирования."
              }))}</li>
            </ul>
          </article>
          <article class="info-box example">
            <h4>${escapeHtml(copy({
              de: "Unterrichtsvorschläge",
              en: "Teaching suggestions",
              fr: "Suggestions didactiques",
              es: "Sugerencias didácticas",
              ru: "Методические предложения"
            }))}</h4>
            <ul>${teacherGuideText("suggestions").map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </article>
          <article class="info-box criticism">
            <h4>${escapeHtml(copy({
              de: "Technischer Hinweis",
              en: "Technical note",
              fr: "Note technique",
              es: "Nota técnica",
              ru: "Техническое замечание"
            }))}</h4>
            <p>${escapeHtml(teacherGuideText("note"))}</p>
          </article>
        </div>
        <div class="teacher-overview-grid">
          ${modules
            .map(
              (module) => `
                <article class="teacher-task-card">
                  <h4>${escapeHtml(moduleText(module, "title"))}</h4>
                  <p><strong>${escapeHtml(copy({
                    de: "Einsatz",
                    en: "Use",
                    fr: "Usage",
                    es: "Uso",
                    ru: "Применение"
                  }))}:</strong> ${escapeHtml(teacherModuleText(module, "use"))}</p>
                  <p><strong>${escapeHtml(copy({
                    de: "Didaktischer Fokus",
                    en: "Didactic focus",
                    fr: "Focalisation didactique",
                    es: "Foco didáctico",
                    ru: "Дидактический фокус"
                  }))}:</strong> ${escapeHtml(teacherModuleText(module, "didactics"))}</p>
                  <p><strong>${escapeHtml(copy({
                    de: "Geeignete Sozialformen",
                    en: "Suitable social forms",
                    fr: "Formes sociales adaptées",
                    es: "Formas sociales adecuadas",
                    ru: "Подходящие формы работы"
                  }))}:</strong> ${escapeHtml(teacherModuleText(module, "socialForms").join(", "))}</p>
                  <p><strong>${escapeHtml(copy({
                    de: "Beobachtung für Beurteilung",
                    en: "Assessment focus",
                    fr: "Point d'observation pour l'évaluation",
                    es: "Foco de observación para la evaluación",
                    ru: "Что отслеживать при оценивании"
                  }))}:</strong> ${escapeHtml(teacherModuleText(module, "assessment"))}</p>
                </article>
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
    document.documentElement.lang = lang();

    root.innerHTML = `
      <div class="page-shell">
        <header class="hero-panel">
          <div class="hero-main">
            <p class="eyebrow">${escapeHtml(copy({
              de: "Digitale Lerneinheit | voller Sprachschalter DE/EN/FR/ES/RU",
              en: "Digital learning unit | full language switch DE/EN/FR/ES/RU",
              fr: "Unité d'apprentissage numérique | bascule complète DE/EN/FR/ES/RU",
              es: "Unidad digital de aprendizaje | cambio completo DE/EN/FR/ES/RU",
              ru: "Цифровой учебный модуль | полный переключатель DE/EN/FR/ES/RU"
            }))}</p>
            <h1>${escapeHtml(siteText("title"))}</h1>
            <p class="hero-subtitle">${escapeHtml(siteText("subtitle"))}</p>
            <p class="hero-copy">${escapeHtml(siteText("shortDescription"))}</p>
            ${renderGoals(siteText("heroGoals") || siteData.site.heroGoals)}
            <div class="hero-actions">
              <a class="btn primary" href="#mod-1">${escapeHtml(ui("startModule"))}</a>
              ${renderLanguageSwitcher()}
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
              <p>${escapeHtml(copy({
                de: "Wie lässt sich Literaturgeschichte lehren, wenn sie zugleich notwendig und umstritten ist?",
                en: "How can we teach literary history if it is both necessary and contested?",
                fr: "Comment enseigner l'histoire littéraire si elle est à la fois nécessaire et contestée ?",
                es: "¿Cómo enseñar historia literaria si es a la vez necesaria y discutida?",
                ru: "Как преподавать историю литературы, если она одновременно необходима и спорна?"
              }))}</p>
            </article>
            <article class="info-box english">
              <h4>${escapeHtml(copy({
                de: "Darstellungslogik",
                en: "Display logic",
                fr: "Logique de présentation",
                es: "Lógica de presentación",
                ru: "Логика представления"
              }))}</h4>
              <p>${escapeHtml(ui("guidedTrack"))}</p>
            </article>
            <article class="info-box example">
              <h4>${escapeHtml(copy({
                de: "Vergleichsachsen",
                en: "Comparison axes",
                fr: "Axes de comparaison",
                es: "Ejes de comparación",
                ru: "Оси сравнения"
              }))}</h4>
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
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => {
        progressApi.setLanguage(state, button.dataset.language);
        renderApp();
      });
    });

    document.getElementById("focus-switch-button")?.addEventListener("click", () => {
      progressApi.setFocusMode(state, !state.settings.focusMode);
      renderApp();
    });

    document.getElementById("reset-all-button")?.addEventListener("click", () => {
      const confirmed = window.confirm(copy({
        de: "Soll der gesamte Lernstand auf diesem Gerät wirklich zurückgesetzt werden?",
        en: "Do you really want to reset all local progress on this device?",
        fr: "Veux-tu vraiment réinitialiser toute la progression locale sur cet appareil ?",
        es: "¿De verdad quieres restablecer todo el progreso local en este dispositivo?",
        ru: "Вы действительно хотите сбросить весь локальный прогресс на этом устройстве?"
      }));
      if (!confirmed) return;
      progressApi.resetAll(state);
      glossaryQuery = "";
      renderApp();
    });

    document.querySelectorAll("[data-reset-module]").forEach((button) => {
      button.addEventListener("click", () => {
        const module = modules.find((entry) => entry.id === button.dataset.resetModule);
        if (!module) return;
        const confirmed = window.confirm(copy({
          de: `Soll ${module.title} wirklich zurückgesetzt werden?`,
          en: `Do you really want to reset ${moduleText(module, "title")}?`,
          fr: `Veux-tu vraiment réinitialiser ${moduleText(module, "title")} ?`,
          es: `¿De verdad quieres restablecer ${moduleText(module, "title")}?`,
          ru: `Вы действительно хотите сбросить ${moduleText(module, "title")}?`
        }));
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

    document.querySelectorAll("[data-open-language-dossier]").forEach((button) => {
      button.addEventListener("click", () => {
        progressApi.setLanguage(state, button.dataset.openLanguageDossier);
        window.location.hash = "#mod-6";
        renderApp();
      });
    });

    document.querySelectorAll("[data-quote-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.dataset.quoteToggle;
        const popover = document.querySelector(`[data-quote-popover="${targetId}"]`);
        if (!popover) return;
        const willOpen = popover.hidden;

        document.querySelectorAll("[data-quote-popover]").forEach((element) => {
          element.hidden = true;
        });
        document.querySelectorAll("[data-quote-toggle]").forEach((element) => {
          element.setAttribute("aria-expanded", "false");
        });

        popover.hidden = !willOpen;
        button.setAttribute("aria-expanded", willOpen ? "true" : "false");
      });
    });

    document.querySelectorAll("[data-quote-close]").forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.dataset.quoteClose;
        const popover = document.querySelector(`[data-quote-popover="${targetId}"]`);
        const trigger = document.querySelector(`[data-quote-toggle="${targetId}"]`);
        if (popover) popover.hidden = true;
        if (trigger) trigger.setAttribute("aria-expanded", "false");
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
        window.alert(copy({
          de: "Passwort nicht korrekt.",
          en: "Password not correct.",
          fr: "Mot de passe incorrect.",
          es: "Contraseña incorrecta.",
          ru: "Неверный пароль."
        }));
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
