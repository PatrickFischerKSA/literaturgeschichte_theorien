(function () {
  const SUPPORTED_LANGUAGES = ["de", "en", "fr", "es", "ru"];

  function lang(state) {
    return SUPPORTED_LANGUAGES.includes(state?.settings?.language) ? state.settings.language : "de";
  }

  function copy(state, variants) {
    return variants[lang(state)] || variants.en || variants.de || "";
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
      alle: { de: "alle", en: "all", fr: "tous", es: "todos", ru: "все" },
      Deutsch: { de: "Deutsch", en: "German", fr: "allemand", es: "alemán", ru: "немецкий" },
      Englisch: { de: "Englisch", en: "English", fr: "anglais", es: "inglés", ru: "английский" },
      Französisch: { de: "Französisch", en: "French", fr: "français", es: "francés", ru: "французский" },
      Spanisch: { de: "Spanisch", en: "Spanish", fr: "espagnol", es: "español", ru: "испанский" },
      Russisch: { de: "Russisch", en: "Russian", fr: "russe", es: "ruso", ru: "русский" },
      männlich: { de: "männlich", en: "male", fr: "masculin", es: "masculino", ru: "мужской" },
      weiblich: { de: "weiblich", en: "female", fr: "féminin", es: "femenino", ru: "женский" },
      kanonisch: { de: "kanonisch", en: "canonical", fr: "canonique", es: "canónico", ru: "канонический" },
      revidiert: { de: "revidiert", en: "revised", fr: "révisé", es: "revisado", ru: "пересмотренный" },
      marginalisiert: { de: "marginalisiert", en: "marginalized", fr: "marginalisé", es: "marginado", ru: "маргинализированный" },
      Bildung: { de: "Bildung", en: "education", fr: "éducation", es: "educación", ru: "образование" },
      Macht: { de: "Macht", en: "power", fr: "pouvoir", es: "poder", ru: "власть" },
      Nation: { de: "Nation", en: "nation", fr: "nation", es: "nación", ru: "нация" },
      Gesellschaft: { de: "Gesellschaft", en: "society", fr: "société", es: "sociedad", ru: "общество" },
      Entfremdung: { de: "Entfremdung", en: "alienation", fr: "aliénation", es: "alienación", ru: "отчуждение" },
      Krieg: { de: "Krieg", en: "war", fr: "guerre", es: "guerra", ru: "война" },
      Subjektivität: { de: "Subjektivität", en: "subjectivity", fr: "subjectivité", es: "subjetividad", ru: "субъективность" },
      Erinnerung: { de: "Erinnerung", en: "memory", fr: "mémoire", es: "memoria", ru: "память" },
      Schuld: { de: "Schuld", en: "guilt", fr: "culpabilité", es: "culpa", ru: "вина" },
      Wissen: { de: "Wissen", en: "knowledge", fr: "savoir", es: "conocimiento", ru: "знание" },
      Gender: { de: "Gender", en: "gender", fr: "genre", es: "género", ru: "гендер" },
      Moderne: { de: "Moderne", en: "modernity", fr: "modernité", es: "modernidad", ru: "модерность" },
      Begehren: { de: "Begehren", en: "desire", fr: "désir", es: "deseo", ru: "желание" },
      Absurdität: { de: "Absurdität", en: "absurdity", fr: "absurdité", es: "absurdidad", ru: "абсурдность" },
      Fiktion: { de: "Fiktion", en: "fiction", fr: "fiction", es: "ficción", ru: "фикция" },
      Identität: { de: "Identität", en: "identity", fr: "identité", es: "identidad", ru: "идентичность" },
      Labyrinth: { de: "Labyrinth", en: "labyrinth", fr: "labyrinthe", es: "laberinto", ru: "лабиринт" },
      Klasse: { de: "Klasse", en: "class", fr: "classe", es: "clase", ru: "класс" },
      Bürokratie: { de: "Bürokratie", en: "bureaucracy", fr: "bureaucratie", es: "burocracia", ru: "бюрократия" },
      "Staatliche Gewalt": { de: "Staatliche Gewalt", en: "state violence", fr: "violence d'État", es: "violencia estatal", ru: "государственное насилие" },
      Zensur: { de: "Zensur", en: "censorship", fr: "censure", es: "censura", ru: "цензура" },
      Drama: { de: "Drama", en: "drama", fr: "drame", es: "drama", ru: "драма" },
      Versepos: { de: "Versepos", en: "verse epic", fr: "épopée en vers", es: "epopeya en verso", ru: "стихотворный эпос" },
      Roman: { de: "Roman", en: "novel", fr: "roman", es: "novela", ru: "роман" },
      Erzählung: { de: "Erzählung", en: "narrative", fr: "récit", es: "relato", ru: "повествование" },
      Novelle: { de: "Novelle", en: "novella", fr: "nouvelle", es: "novela corta", ru: "новелла" },
      Essay: { de: "Essay", en: "essay", fr: "essai", es: "ensayo", ru: "эссе" },
      Lyrik: { de: "Lyrik", en: "poetry", fr: "poésie", es: "poesía", ru: "лирика" },
      Versroman: { de: "Versroman", en: "verse novel", fr: "roman en vers", es: "novela en verso", ru: "роман в стихах" }
    };
    return translations[value]?.[lang(state)] || translations[value]?.en || value;
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
        <h4>${escapeHtml(copy(state, {
          de: "Netzwerkartige Themenansicht",
          en: "Network-like thematic view",
          fr: "Vue thématique en réseau",
          es: "Vista temática en red",
          ru: "Сетевой тематический вид"
        }))}</h4>
        <p>${escapeHtml(copy(state, {
          de: "Didaktisch reduziert: Themen fungieren hier als Knoten, an die Autor*innen und Texte angeschlossen werden.",
          en: "Didactically reduced: themes function as nodes to which authors and texts are connected.",
          fr: "Version didactiquement réduite : les thèmes fonctionnent ici comme des nœuds auxquels sont reliés auteur·rices et textes.",
          es: "Versión didácticamente reducida: los temas funcionan aquí como nodos a los que se conectan autores y textos.",
          ru: "Дидактически упрощённый вариант: темы здесь выступают узлами, к которым подключаются авторы и тексты."
        }))}</p>
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
              <th>${escapeHtml(copy(state, { de: "Titel", en: "Title", fr: "Titre", es: "Título", ru: "Название" }))}</th>
              <th>${escapeHtml(copy(state, { de: "Autor*in", en: "Author", fr: "Auteur·rice", es: "Autor/a", ru: "Автор" }))}</th>
              <th>${escapeHtml(copy(state, { de: "Jahr", en: "Year", fr: "Année", es: "Año", ru: "Год" }))}</th>
              <th>${escapeHtml(copy(state, { de: "Sprache", en: "Language", fr: "Langue", es: "Lengua", ru: "Язык" }))}</th>
              <th>${escapeHtml(copy(state, { de: "Kanonstatus", en: "Canon status", fr: "Statut canonique", es: "Estado canónico", ru: "Статус канона" }))}</th>
              <th>${escapeHtml(copy(state, { de: "Gender", en: "Gender", fr: "Genre", es: "Género", ru: "Гендер" }))}</th>
              <th>${escapeHtml(copy(state, { de: "Thema", en: "Theme", fr: "Thème", es: "Tema", ru: "Тема" }))}</th>
              <th>${escapeHtml(copy(state, { de: "Form", en: "Form", fr: "Forme", es: "Forma", ru: "Форма" }))}</th>
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
            <h3>${escapeHtml(copy(state, {
              de: "DH-Mini-Simulation",
              en: "DH mini-simulation",
              fr: "Mini-simulation DH",
              es: "Mini-simulación DH",
              ru: "DH-мини-симуляция"
            }))}</h3>
            <p>${escapeHtml(copy(state, {
              de: "Filtere das Mini-Korpus und beobachte, wie sich der Blick verändert.",
              en: "Filter the mini-corpus and observe how the perspective changes.",
              fr: "Filtre le mini-corpus et observe comment le regard se transforme.",
              es: "Filtra el minicorpus y observa cómo cambia la perspectiva.",
              ru: "Фильтруй мини-корпус и наблюдай, как меняется перспектива."
            }))}</p>
          </div>
          <div class="dh-filter-grid">
            ${renderFilterControl(state, copy(state, { de: "Sprache", en: "Language", fr: "Langue", es: "Lengua", ru: "Язык" }), "language", uniqueValues(corpus, "language"), filters.language)}
            ${renderFilterControl(state, copy(state, { de: "Kanonstatus", en: "Canon status", fr: "Statut canonique", es: "Estado canónico", ru: "Статус канона" }), "canonStatus", uniqueValues(corpus, "canonStatus"), filters.canonStatus)}
            ${renderFilterControl(state, copy(state, { de: "Gender", en: "Gender", fr: "Genre", es: "Género", ru: "Гендер" }), "gender", uniqueValues(corpus, "gender"), filters.gender)}
            ${renderFilterControl(state, copy(state, { de: "Thema", en: "Theme", fr: "Thème", es: "Tema", ru: "Тема" }), "theme", uniqueValues(corpus, "theme"), filters.theme)}
            ${renderFilterControl(state, copy(state, { de: "Form", en: "Form", fr: "Forme", es: "Forma", ru: "Форма" }), "form", uniqueValues(corpus, "form"), filters.form)}
          </div>
          <div class="dh-filter-actions">
            <button type="button" class="btn ghost" data-action="reset-dh">${escapeHtml(copy(state, {
              de: "Filter zurücksetzen",
              en: "Reset filters",
              fr: "Réinitialiser les filtres",
              es: "Restablecer filtros",
              ru: "Сбросить фильтры"
            }))}</button>
          </div>
        </div>

        <div class="dh-stats-grid">
          <article class="stat-card">
            <small>${escapeHtml(copy(state, {
              de: "Aktuelle Treffermenge",
              en: "Current selection",
              fr: "Sélection actuelle",
              es: "Selección actual",
              ru: "Текущая выборка"
            }))}</small>
            <strong>${filtered.length}</strong>
            <span>${escapeHtml(copy(state, {
              de: `von ${corpus.length} Korpuseinträgen`,
              en: `of ${corpus.length} corpus entries`,
              fr: `sur ${corpus.length} entrées du corpus`,
              es: `de ${corpus.length} entradas del corpus`,
              ru: `из ${corpus.length} записей корпуса`
            }))}</span>
          </article>
          <article class="stat-card">
            <small>${escapeHtml(copy(state, {
              de: "Kanonischer Blick",
              en: "Canonical view",
              fr: "Vue canonique",
              es: "Mirada canónica",
              ru: "Канонический взгляд"
            }))}</small>
            <strong>${canonicalOnly.length}</strong>
            <span>${escapeHtml(copy(state, {
              de: "Einträge mit Status „kanonisch“",
              en: "entries marked as canonical",
              fr: "entrées marquées comme canoniques",
              es: "entradas marcadas como canónicas",
              ru: "записи со статусом «канонический»"
            }))}</span>
          </article>
          <article class="stat-card">
            <small>${escapeHtml(copy(state, {
              de: "Korpusblick",
              en: "Corpus view",
              fr: "Vue du corpus",
              es: "Mirada del corpus",
              ru: "Корпусный взгляд"
            }))}</small>
            <strong>${overlooked.length}</strong>
            <span>${escapeHtml(copy(state, {
              de: "revidierte oder marginalisierte Einträge",
              en: "revised or marginalized entries",
              fr: "entrées révisées ou marginalisées",
              es: "entradas revisadas o marginadas",
              ru: "пересмотренные или маргинализированные записи"
            }))}</span>
          </article>
          <article class="stat-card">
            <small>${escapeHtml(copy(state, {
              de: "Didaktische Pointe",
              en: "Didactic point",
              fr: "Point didactique",
              es: "Idea didáctica central",
              ru: "Дидактическая суть"
            }))}</small>
            <strong>${filtered.length ? Math.round((overlooked.length / filtered.length) * 100) : 0}%</strong>
            <span>${escapeHtml(copy(state, {
              de: "nicht ausschliesslich kanonische Einträge",
              en: "entries beyond a purely canonical set",
              fr: "entrées au-delà d'un ensemble purement canonique",
              es: "entradas más allá de un conjunto puramente canónico",
              ru: "записи за пределами сугубо канонического набора"
            }))}</span>
          </article>
        </div>

        <div class="dh-insight-boxes">
          <article class="info-box definition">
            <h4>${escapeHtml(copy(state, {
              de: "Kanonischer Blick",
              en: "Canonical view",
              fr: "Vue canonique",
              es: "Mirada canónica",
              ru: "Канонический взгляд"
            }))}</h4>
            <p>${escapeHtml(copy(state, {
              de: "Wenn nur kanonische Einträge dominieren, entsteht leicht der Eindruck, literarische Bedeutung sei bereits abschliessend entschieden.",
              en: "If only canonical entries dominate, literary importance quickly looks already settled.",
              fr: "Si seules les entrées canoniques dominent, l'importance littéraire paraît vite déjà tranchée.",
              es: "Si solo dominan las entradas canónicas, la importancia literaria parece rápidamente ya decidida.",
              ru: "Если доминируют только канонические записи, литературная значимость быстро начинает казаться уже окончательно решённой."
            }))}</p>
          </article>
          <article class="info-box criticism">
            <h4>${escapeHtml(copy(state, {
              de: "Korpusblick",
              en: "Corpus view",
              fr: "Vue du corpus",
              es: "Mirada del corpus",
              ru: "Корпусный взгляд"
            }))}</h4>
            <p>${escapeHtml(copy(state, {
              de: "Die vollständige Treffermenge zeigt schneller, wo Gender-, Sprach- oder Themenverteilungen unausgeglichen sind.",
              en: "The full selection reveals more quickly where distributions of gender, language, or theme are uneven.",
              fr: "La sélection complète montre plus vite où les répartitions selon le genre, la langue ou le thème sont déséquilibrées.",
              es: "La selección completa muestra más rápidamente dónde las distribuciones de género, lengua o tema son desiguales.",
              ru: "Полная выборка быстрее показывает, где распределения по гендеру, языку или теме неравномерны."
            }))}</p>
          </article>
        </div>

        <div class="dh-chart-grid">
          ${renderBarGroup(state, copy(state, {
            de: "Sprachen im aktuellen Filter",
            en: "Languages in the current filter",
            fr: "Langues dans le filtre actuel",
            es: "Lenguas en el filtro actual",
            ru: "Языки в текущем фильтре"
          }), countBy(filtered, "language"))}
          ${renderBarGroup(state, copy(state, {
            de: "Kanonstatus im aktuellen Filter",
            en: "Canon status in the current filter",
            fr: "Statut canonique dans le filtre actuel",
            es: "Estado canónico en el filtro actual",
            ru: "Статус канона в текущем фильтре"
          }), countBy(filtered, "canonStatus"))}
          ${renderBarGroup(state, copy(state, {
            de: "Gender im aktuellen Filter",
            en: "Gender in the current filter",
            fr: "Genre dans le filtre actuel",
            es: "Género en el filtro actual",
            ru: "Гендер в текущем фильтре"
          }), countBy(filtered, "gender"))}
          ${renderBarGroup(state, copy(state, {
            de: "Formen im aktuellen Filter",
            en: "Forms in the current filter",
            fr: "Formes dans le filtre actuel",
            es: "Formas en el filtro actual",
            ru: "Формы в текущем фильтре"
          }), countBy(filtered, "form"))}
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
