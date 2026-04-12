(function () {
  const terms = [
    {
      id: "literature-historiography",
      de: "Literaturgeschichtsschreibung",
      en: "literature historiography",
      definitionDe:
        "Die wissenschaftliche und didaktische Praxis, Literatur in Erzählungen, Perioden, Autorgruppen und Deutungsmuster zu ordnen.",
      definitionEn:
        "The scholarly and pedagogical practice of arranging literature into narratives, periods, author constellations, and interpretive frameworks.",
      notes: "Der Begriff betont, dass Literaturgeschichte gemacht und geschrieben wird, nicht einfach vorliegt.",
      related: ["Periodisierung", "Kanon", "Kulturpolitik"]
    },
    {
      id: "canon",
      de: "Kanon",
      en: "canon",
      definitionDe:
        "Eine historisch wandelbare Auswahl von Werken, denen besondere Relevanz, Autorität oder Bildungsfunktion zugeschrieben wird.",
      definitionEn:
        "A historically changeable selection of works that are granted special relevance, authority, or educational value.",
      notes: "Ein Kanon ist nie neutral; er spiegelt institutionelle Entscheidungen und Machtverhältnisse.",
      related: ["Kanonisierung", "Prestige", "Schulkanon"]
    },
    {
      id: "canonization",
      de: "Kanonisierung",
      en: "canonization",
      definitionDe:
        "Der Prozess, durch den Texte, Autor*innen und Gattungen aufgewertet, tradiert und im kulturellen Gedächtnis verankert werden.",
      definitionEn:
        "The process by which texts, authors, and genres are elevated, transmitted, and anchored in cultural memory.",
      notes: "Kanonisierung geschieht über Schule, Universität, Feuilleton, Verlage, Archive und Prüfungsformate.",
      related: ["Kanon", "Kulturelles Kapital", "Ausschluss"]
    },
    {
      id: "epoch",
      de: "Epoche",
      en: "epoch",
      definitionDe:
        "Ein heuristischer Sammelbegriff für Texte und Praktiken, die im Nachhinein als zusammengehörig beschrieben werden.",
      definitionEn:
        "A heuristic label for texts and practices that are retrospectively described as belonging together.",
      notes: "Epochen sind Werkzeuge, keine naturhaften Container.",
      related: ["Periodisierung", "Ungleichzeitigkeit", "Heuristik"]
    },
    {
      id: "periodization",
      de: "Periodisierung",
      en: "periodization",
      definitionDe:
        "Die Einteilung literarischer Entwicklungen in Abschnitte mit Namen, Datierungen und charakteristischen Merkmalen.",
      definitionEn:
        "The division of literary developments into segments with names, dates, and characteristic features.",
      notes: "Periodisierung erzeugt Übersicht, kann aber Brüche glätten und Grenzfälle unsichtbar machen.",
      related: ["Epoche", "Teleologie", "Kontingenz"]
    },
    {
      id: "close-reading",
      de: "textnahe Lektüre",
      en: "close reading",
      definitionDe:
        "Eine Form genauer Analyse, die die sprachliche, formale und semantische Struktur eines einzelnen Textes fokussiert.",
      definitionEn:
        "A mode of detailed analysis that focuses on the linguistic, formal, and semantic structure of a single text.",
      notes: "Close reading gewinnt Präzision, blendet aber leicht institutionelle und historische Rahmen aus.",
      related: ["Werkimmanenz", "New Criticism", "Form"]
    },
    {
      id: "distant-reading",
      de: "distant reading",
      en: "distant reading",
      definitionDe:
        "Eine skalierende Lektürepraxis, die grosse Korpora mit quantitativen Verfahren untersucht, statt nur einzelne Texte eng zu lesen.",
      definitionEn:
        "A scaled reading practice that investigates large corpora with quantitative methods instead of closely reading only individual texts.",
      notes: "Distant reading ersetzt Interpretation nicht, sondern verschiebt die Ebene der Fragestellung.",
      related: ["Digital Humanities", "Korpusanalyse", "Stilometrie"]
    },
    {
      id: "reception-aesthetics",
      de: "Rezeptionsästhetik",
      en: "reception aesthetics",
      definitionDe:
        "Ein Ansatz, der Literatur nicht allein vom Text oder von der Produktion her, sondern von Lektüre, Erwartungshorizonten und Wirkungsgeschichte her denkt.",
      definitionEn:
        "An approach that thinks literature not only from the text or production side, but from reading, horizons of expectation, and reception history.",
      notes: "Rezeptionsästhetik verschiebt die Aufmerksamkeit von der Werkessenz zur historischen Lektüresituation.",
      related: ["Leserschaft", "Wirkungsgeschichte", "Erwartungshorizont"]
    },
    {
      id: "structuralism",
      de: "Strukturalismus",
      en: "structuralism",
      definitionDe:
        "Ein Ansatz, der nach Relationen, Systemen und regelhaften Strukturen sucht, statt einzelne Texte primär biografisch oder moralisch zu erklären.",
      definitionEn:
        "An approach that looks for relations, systems, and regular structures instead of explaining texts primarily through biography or moral judgment.",
      notes: "Strukturalismus interessiert sich für Musterbildung und Differenzrelationen.",
      related: ["System", "Code", "Relation"]
    },
    {
      id: "poststructuralism",
      de: "Poststrukturalismus",
      en: "poststructuralism",
      definitionDe:
        "Ein Bündel von Ansätzen, die stabile Bedeutungszentren, eindeutige Hierarchien und geschlossene Systeme grundsätzlich in Frage stellen.",
      definitionEn:
        "A bundle of approaches that fundamentally question stable centres of meaning, fixed hierarchies, and closed systems.",
      notes: "Poststrukturalismus betont Verschiebung, Instabilität und die Produktivität von Differenz.",
      related: ["Dekonstruktion", "Diskurs", "Differenz"]
    },
    {
      id: "discourse",
      de: "Diskurs",
      en: "discourse",
      definitionDe:
        "Ein historisch situiertes Geflecht aus Aussagen, Regeln, Institutionen und Machtbeziehungen, das bestimmt, was sagbar und plausibel erscheint.",
      definitionEn:
        "A historically situated network of statements, rules, institutions, and power relations that shapes what becomes sayable and plausible.",
      notes: "Der Diskursbegriff verbindet Sprache mit sozialer Ordnung.",
      related: ["Macht", "Kulturpolitik", "Wissen"]
    },
    {
      id: "formalism",
      de: "Formalismus",
      en: "formalism",
      definitionDe:
        "Eine Lesart, die literarische Verfahren, Komposition, Verfremdung und Textstruktur in den Mittelpunkt stellt.",
      definitionEn:
        "A mode of reading that foregrounds literary devices, composition, estrangement, and textual structure.",
      notes: "Russischer Formalismus und anglophoner New Criticism setzen unterschiedliche Akzente, teilen aber den Fokus auf die Form.",
      related: ["Close Reading", "Verfahren", "Werkimmanenz"]
    },
    {
      id: "new-historicism",
      de: "New Historicism",
      en: "New Historicism",
      definitionDe:
        "Ein Ansatz, der literarische Texte als Teil kultureller Aushandlungen versteht und sie mit nichtliterarischen Diskursen und Praktiken verschränkt.",
      definitionEn:
        "An approach that understands literary texts as part of cultural negotiations and relates them to non-literary discourses and practices.",
      notes: "Er fragt weniger nach einem Hintergrund als nach zirkulierenden Energien, Machtformen und Verflechtungen.",
      related: ["Diskurs", "Macht", "Kontext"]
    },
    {
      id: "systems-theory",
      de: "Systemtheorie",
      en: "systems theory",
      definitionDe:
        "Ein Ansatz, der Literatur als Teil eines sozialen Systems mit eigenen Kommunikationsformen, Rollen und Unterscheidungen beschreibt.",
      definitionEn:
        "An approach that describes literature as part of a social system with its own modes of communication, roles, and distinctions.",
      notes: "Nicht Autorintention, sondern Systemoperationen und Anschlussmöglichkeiten stehen im Zentrum.",
      related: ["Autopoiesis", "Funktion", "Kommunikation"]
    },
    {
      id: "teleology",
      de: "Teleologie",
      en: "teleology",
      definitionDe:
        "Die Tendenz, Entwicklungen so zu erzählen, als hätten sie auf ein bestimmtes Ziel oder eine Vollendung hingearbeitet.",
      definitionEn:
        "The tendency to narrate developments as if they had been moving toward a predetermined goal or fulfilment.",
      notes: "Teleologische Literaturgeschichten wirken geschlossen, unterschlagen aber Alternativen und Sackgassen.",
      related: ["Narrativ", "Fortschritt", "Kontingenz"]
    },
    {
      id: "contingency",
      de: "Kontingenz",
      en: "contingency",
      definitionDe:
        "Die Einsicht, dass historische Entwicklungen auch anders hätten verlaufen können und nicht notwendig sind.",
      definitionEn:
        "The insight that historical developments could have unfolded differently and are not necessary outcomes.",
      notes: "Kontingenzdenken schützt vor zu glatten Erfolgserzählungen.",
      related: ["Teleologie", "Selektion", "Alternative"]
    },
    {
      id: "cultural-memory",
      de: "kulturelles Gedächtnis",
      en: "cultural memory",
      definitionDe:
        "Die gesellschaftlich organisierte Erinnerung, in der Texte, Symbole und Rituale dauerhaft präsent gehalten werden.",
      definitionEn:
        "The socially organized memory in which texts, symbols, and rituals are kept present over time.",
      notes: "Literaturgeschichten und Kanones sind zentrale Medien kulturellen Gedächtnisses.",
      related: ["Kanon", "Erinnerungspolitik", "Institution"]
    },
    {
      id: "cultural-capital",
      de: "kulturelles Kapital",
      en: "cultural capital",
      definitionDe:
        "Prestige, Bildungsvorrat und symbolische Geltung, die über kulturelle Kenntnisse und anerkannte Werke erworben werden.",
      definitionEn:
        "Prestige, educational currency, and symbolic legitimacy acquired through cultural knowledge and recognized works.",
      notes: "Kanonwissen verteilt sich nicht gleich; es ist sozial ungleich zugänglich.",
      related: ["Kanonisierung", "Schule", "Prestige"]
    },
    {
      id: "heuristic",
      de: "Heuristik",
      en: "heuristic",
      definitionDe:
        "Ein vereinfachendes Denkwerkzeug, das Orientierung ermöglicht, ohne endgültige Wahrheit zu beanspruchen.",
      definitionEn:
        "A simplifying tool for thinking that creates orientation without claiming final truth.",
      notes: "Epochenbegriffe sind heuristisch sinnvoll, solange ihr Konstruktionscharakter mitgedacht wird.",
      related: ["Epoche", "Modell", "Arbeitshypothese"]
    },
    {
      id: "corpus-analysis",
      de: "Korpusanalyse",
      en: "corpus analysis",
      definitionDe:
        "Die Untersuchung vieler Texte als Datenbestand, zum Beispiel nach Wortfeldern, Themen, Metadaten oder Publikationsmustern.",
      definitionEn:
        "The study of many texts as a dataset, for example through word fields, themes, metadata, or publication patterns.",
      notes: "Korpusanalysen können Sichtbarkeiten und blinde Flecken literaturgeschichtlicher Erzählungen quantifizieren.",
      related: ["Digital Humanities", "Distant Reading", "Metadaten"]
    },
    {
      id: "stylometry",
      de: "Stilometrie",
      en: "stylometry",
      definitionDe:
        "Ein Verfahren, das Stilmerkmale statistisch erfasst, um Muster, Autorschaft oder Nähe zwischen Texten zu untersuchen.",
      definitionEn:
        "A method that statistically measures stylistic features in order to examine patterns, authorship, or proximity between texts.",
      notes: "Stilometrie kann Überraschungen produzieren, sagt aber nicht von selbst, was diese Muster bedeuten.",
      related: ["Digital Humanities", "Autorfrage", "Muster"]
    },
    {
      id: "network-analysis",
      de: "Netzwerkanalyse",
      en: "network analysis",
      definitionDe:
        "Eine Methode, die Beziehungen zwischen Autor*innen, Institutionen, Zeitschriften, Figuren oder Motiven grafisch und rechnerisch sichtbar macht.",
      definitionEn:
        "A method that makes relations among authors, institutions, journals, figures, or motifs visible through graphs and calculations.",
      notes: "Netzwerke zeigen Dichte und Verbindungen, nicht automatisch Hierarchie oder Bedeutung.",
      related: ["Digital Humanities", "Relation", "Zirkulation"]
    }
  ];

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ß/g, "ss")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function getById(termId) {
    return terms.find((term) => term.id === termId) || null;
  }

  function search(query) {
    const normalizedQuery = normalize(query);
    if (!normalizedQuery) return terms.slice();

    return terms.filter((term) => {
      const haystack = [
        term.de,
        term.en,
        term.definitionDe,
        term.definitionEn,
        term.notes,
        ...(term.related || [])
      ]
        .join(" ")
        .toLowerCase();
      return normalize(haystack).includes(normalizedQuery);
    });
  }

  window.LIT_GLOSSARY = terms;
  window.LitGlossary = {
    terms,
    getById,
    search
  };
})();
