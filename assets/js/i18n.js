(function () {
  const ui = {
    de: {
      startModule: "Mit Modul 1 beginnen",
      hideEnglish: "EN-Hilfen ausblenden",
      showEnglish: "EN-Hilfen einblenden",
      resetAll: "Gesamten Lernstand zurücksetzen",
      languageDe: "DE",
      languageEn: "EN",
      focusOn: "Fokusmodus an",
      focusOff: "Fokusmodus aus",
      navigation: "Navigation",
      jump: "Springe direkt in ein Modul oder zum Glossar.",
      glossary: "Glossar",
      teacher: "Lehrpersonen",
      protected: "geschützt",
      active: "aktiv",
      resetModule: "Modul zurücksetzen",
      completedTasks: "Aufgaben abgeschlossen",
      tasksHeader: "Arbeitsaufträge",
      tasksIntro:
        "Die Aufgaben werden der Reihe nach freigeschaltet. Nach dem dritten Fehlversuch erscheint eine modellhafte Lösung.",
      focusQuestion: "Leitfrage",
      focusBridge: "Vorwissen-Brücke",
      focusCore: "Kernidee",
      focusSteps: "Arbeitsweg in drei Schritten",
      focusPitfalls: "Typische Stolpersteine",
      focusTerms: "Zentrale Begriffe",
      deepening: "Vertiefung öffnen",
      sectionSummary: "Fokussierte Übersicht",
      theoryBlocks: "Theorieblöcke im Akkordeon",
      theoryIntro:
        "Jeder Ansatz enthält Definition, historische Einordnung, Grundannahme, Fragen, Chancen, Kritik, Übung und Mini-Transfer.",
      theorySummary: "Theorieübersicht",
      stationBlocks: "Fallstationen",
      stationIntro:
        "Die Stationen verbinden textnahe Signale mit methodischen Fragen. Die dazugehörigen Aufgaben im Arbeitsblock greifen sie auf.",
      stationSummary: "Vergleichsübersicht",
      searchTerm: "Begriff suchen",
      matches: "Treffer",
      teacherOpen: "Lehrpersonenmodus öffnen",
      teacherClose: "Lehrpersonenmodus schliessen",
      teacherProtected:
        "Frontend-Passwortschutz für den Schulalltag auf GitHub Pages.",
      overallProgress: "Gesamtfortschritt",
      guidedTrack:
        "Fokusmodus bedeutet: zuerst Orientierung, dann Vertiefung. So sinkt die Vorwissenshürde, ohne dass fachliche Tiefe verloren geht.",
      answerAttempts: "Versuche",
      submit: "Prüfen",
      review: "Erneut ansehen",
      task: "Aufgabe",
      open: "offen",
      locked: "gesperrt",
      completed: "abgeschlossen",
      unlockedAfterHint: "freigeschaltet nach Hinweis",
      taskLockedText: "Diese Aufgabe wird freigeschaltet, sobald die vorherige Aufgabe abgeschlossen ist.",
      choose: "Bitte wählen",
      modelAnswer: "Musterlösung",
      teacherSolution: "Musterlösung und Hinweis für Lehrpersonen",
      neutralWrong: "Falsch",
      secondWrong: "Noch nicht überzeugend",
      solved: "Richtig",
      strong: "Treffend"
    },
    en: {
      startModule: "Start with Module 1",
      hideEnglish: "Hide EN support",
      showEnglish: "Show EN support",
      resetAll: "Reset all progress",
      languageDe: "DE",
      languageEn: "EN",
      focusOn: "Focus mode on",
      focusOff: "Focus mode off",
      navigation: "Navigation",
      jump: "Jump directly to a module or the glossary.",
      glossary: "Glossary",
      teacher: "Teacher",
      protected: "protected",
      active: "active",
      resetModule: "Reset module",
      completedTasks: "tasks completed",
      tasksHeader: "Tasks",
      tasksIntro:
        "Tasks unlock step by step. After the third incorrect attempt, a model answer becomes available.",
      focusQuestion: "Guiding question",
      focusBridge: "Bridge from prior knowledge",
      focusCore: "Core idea",
      focusSteps: "Three-step pathway",
      focusPitfalls: "Common pitfalls",
      focusTerms: "Key terms",
      deepening: "Open deepening",
      sectionSummary: "Focused overview",
      theoryBlocks: "Theory blocks",
      theoryIntro:
        "Each approach includes definition, historical frame, epistemology, questions, strengths, criticism, exercise, and mini-transfer.",
      theorySummary: "Theory overview",
      stationBlocks: "Case studies",
      stationIntro:
        "These stations connect short primary-text signals with methodological questions. The related tasks build on them.",
      stationSummary: "Comparative overview",
      searchTerm: "Search term",
      matches: "matches",
      teacherOpen: "Open teacher mode",
      teacherClose: "Close teacher mode",
      teacherProtected:
        "Frontend password protection for everyday classroom use on GitHub Pages.",
      overallProgress: "Overall progress",
      guidedTrack:
        "Focus mode means: orientation first, deepening second. This lowers the threshold of prior knowledge without flattening the content.",
      answerAttempts: "Attempts",
      submit: "Check",
      review: "Review again",
      task: "Task",
      open: "open",
      locked: "locked",
      completed: "completed",
      unlockedAfterHint: "unlocked after hint",
      taskLockedText: "This task unlocks once the previous task has been completed.",
      choose: "Please choose",
      modelAnswer: "Model answer",
      teacherSolution: "Model answer and teacher note",
      neutralWrong: "Incorrect",
      secondWrong: "Not convincing yet",
      solved: "Correct",
      strong: "Strong answer"
    }
  };

  const site = {
    en: {
      title: "Theories of Literary Historiography",
      subtitle:
        "Digital learning unit on literary history, period critique, canonization, cultural politics, and digital humanities",
      shortDescription:
        "A bilingual learning environment for advanced secondary students: theoretically ambitious, text-based, comparative, and interactive.",
      heroGoals: [
        "Understand literary history as construction, selection, and narrative.",
        "Compare theoretical models of literary historiography.",
        "Critically question period labels, canon formation, and cultural politics.",
        "Read primary texts against ordering schemes and across traditions.",
        "Use digital humanities as supplement, irritation, and corrective."
      ],
      comparisonAxes: [
        "text vs. context",
        "author vs. system",
        "textual immanence vs. historical embedding",
        "canon vs. counter-canon",
        "period model vs. non-synchronicity",
        "close reading vs. distant reading",
        "national literary history vs. transnational perspective",
        "German literary history vs. other literary traditions"
      ],
      footerNote:
        "All progress is stored locally in the browser. Teacher mode is fully client-side and therefore designed as a practical classroom solution rather than a high-security feature."
    }
  };

  const modules = {
    "mod-1": {
      en: {
        title: "Module 1: What is Literary History?",
        subtitle: "Construction, selection, narrative, and cultural memory",
        intro:
          "This module builds the conceptual foundation. Literary history does not appear as a neutral list of works, but as a field of interpretation that selects, orders, weighs, and connects.",
        goals: [
          "Explain literary history as a perspectival construction.",
          "Distinguish selectivity, teleology, and contingency.",
          "Reflect on the relation of text, author, institution, and readership.",
          "Name the role of literary history in cultural memory."
        ],
        focus: {
          question: "Why is literary history never just a timeline?",
          bridge:
            "You do not need previous theory knowledge here. Start with a simple distinction: a list of dates is not the same thing as an interpreted story about literature.",
          core:
            "Literary history always chooses, orders, and values. That is why it is useful, but never neutral.",
          steps: [
            "First separate chronology from interpretation.",
            "Then identify who orders literature: schools, universities, publishers, criticism, archives.",
            "Finally ask what becomes visible and what disappears through this ordering."
          ],
          pitfalls: [
            "Treating literary history as a complete mirror of the past.",
            "Assuming canon and historical importance are natural facts.",
            "Forgetting institutions and readers."
          ],
          terms: ["literature historiography", "canon", "periodization", "cultural memory"]
        },
        sections: [
          {
            title: "More than chronology",
            bullets: [
              "Chronology sorts by dates; literary historiography adds meaning, turning points, and value.",
              "Every beginning, label, and representative author already creates a narrative.",
              "Different starting points produce different histories of 'modernity'."
            ]
          },
          {
            title: "Institutions and visibility",
            bullets: [
              "Literary history is shaped by school, university, publishing, criticism, and archives.",
              "It is therefore part of a social order of visibility.",
              "The relation between text, author, institution, readership, and society remains contested."
            ]
          },
          {
            title: "Memory and contingency",
            bullets: [
              "Literary histories stabilize cultural memory by keeping some texts constantly present.",
              "At the same time, every selection could have been different.",
              "This does not make history arbitrary; it makes selection explainable."
            ]
          }
        ]
      }
    },
    "mod-2": {
      en: {
        title: "Module 2: Classical Theoretical Approaches",
        subtitle: "Comparing models of literary historiography",
        intro:
          "These approaches are not interchangeable recipes. Each one asks different questions and therefore makes different things visible.",
        goals: [
          "Place central approaches historically and epistemologically.",
          "Compare questions, strengths, and limits of each model.",
          "Apply mini-transfers to primary texts.",
          "Think relationally instead of absolutizing one model."
        ],
        focus: {
          question: "What changes when I ask a text a different kind of question?",
          bridge:
            "You do not need to memorize schools first. Begin by asking what an approach wants to know: facts, form, reception, power, system, discourse, or historical spirit.",
          core:
            "An approach is best understood as a question-generator. It helps you see one layer of literature more sharply, while pushing another layer into the background.",
          steps: [
            "Identify the central question of the approach.",
            "Check what becomes visible through this question.",
            "Name what remains less visible."
          ],
          pitfalls: [
            "Treating one model as the only correct one.",
            "Reducing an approach to a slogan.",
            "Forgetting that methods are tools, not worldviews to obey."
          ],
          terms: ["close reading", "reception aesthetics", "structuralism", "New Historicism"]
        },
        approachesSummary: [
          {
            title: "Positivism",
            focus: "facts, sources, dates, documented contexts",
            strength: "strong empirical basis",
            blindSpot: "may reduce literature to causes"
          },
          {
            title: "History of ideas",
            focus: "worldviews and intellectual formations",
            strength: "shows larger horizons",
            blindSpot: "can homogenize periods"
          },
          {
            title: "Formalism / New Criticism",
            focus: "form, structure, language, motifs",
            strength: "sharp textual precision",
            blindSpot: "may underplay institutions and politics"
          },
          {
            title: "Marxist theory",
            focus: "class, ideology, material conditions",
            strength: "reveals power and contradiction",
            blindSpot: "may instrumentalize form"
          },
          {
            title: "Reception aesthetics",
            focus: "readers, horizons of expectation, changing reception",
            strength: "explains shifting value",
            blindSpot: "readers can remain abstract"
          },
          {
            title: "Structuralism",
            focus: "relations, codes, recurrent structures",
            strength: "good for pattern analysis",
            blindSpot: "history and agency may fade"
          },
          {
            title: "Poststructuralism / Deconstruction",
            focus: "instability, tensions, hierarchy, difference",
            strength: "reveals ambivalence",
            blindSpot: "can feel abstract and historically thin"
          },
          {
            title: "New Historicism",
            focus: "text and discourse in power-laden circulation",
            strength: "subtle text-context relation",
            blindSpot: "literature may dissolve in context"
          },
          {
            title: "Systems theory",
            focus: "literature as communication system",
            strength: "precise institutional thinking",
            blindSpot: "can sound detached from lived conflict"
          },
          {
            title: "Cultural / postcolonial extensions",
            focus: "media, translation, gender, coloniality, center/periphery",
            strength: "opens the canon and criticizes Eurocentrism",
            blindSpot: "risks becoming too broad if used vaguely"
          }
        ]
      }
    },
    "mod-3": {
      en: {
        title: "Module 3: Period Labels and Their Problems",
        subtitle: "Heuristics, non-synchronicity, transnationality",
        intro:
          "Period labels create orientation, but they also simplify. This module shows why rigid period models are helpful and problematic at the same time.",
        goals: [
          "Understand periods as heuristic tools rather than facts.",
          "Analyze overlaps and non-synchronous developments.",
          "Compare national and transnational periodizations.",
          "Name the DH contribution to period critique."
        ],
        focus: {
          question: "Why are period labels useful, but never the last word?",
          bridge:
            "If a label helps you orient yourself, that does not yet make it a natural truth. Treat period labels as working models.",
          core:
            "Periods reduce complexity. That is their strength. The same reduction can also erase hybrid, transitional, or transnational texts.",
          steps: [
            "Ask what the label helps you see.",
            "Ask which border cases it distorts.",
            "Ask whether the label works across languages and traditions."
          ],
          pitfalls: [
            "Thinking all texts of one period share the same features.",
            "Confusing heuristic clarity with objective fact.",
            "Forgetting transnational and colonial entanglements."
          ],
          terms: ["periodization", "heuristic", "non-synchronicity", "distant reading"]
        },
        sections: [
          {
            title: "Why periods help",
            bullets: [
              "They condense large developments into manageable patterns.",
              "Without them, teaching risks becoming an unconnected list of works.",
              "But usefulness is not the same as truth."
            ]
          },
          {
            title: "Why periods mislead",
            bullets: [
              "Rigid models homogenize heterogeneous texts.",
              "Authors like Heine, Büchner, and Kafka expose mixed forms and overlaps.",
              "National literary histories also cut time differently."
            ]
          },
          {
            title: "What DH can add",
            bullets: [
              "Stylometry and corpus analysis may support existing boundaries.",
              "They may also reveal clusters that do not match textbook period labels.",
              "Data shows patterns, but historical meaning still needs interpretation."
            ]
          }
        ]
      }
    },
    "mod-4": {
      en: {
        title: "Module 4: Canonization and Power",
        subtitle: "Institutions, prestige, exclusion, revision",
        intro:
          "Canonization helps determine which texts are repeatedly taught, edited, discussed, and remembered. That makes the canon a question of power as well as value.",
        goals: [
          "Distinguish canon from canonization.",
          "Name institutions that stabilize visibility.",
          "Reflect on mechanisms of exclusion.",
          "Critically examine the school canon."
        ],
        focus: {
          question: "Who decides what counts as 'important' literature?",
          bridge:
            "Start with a practical observation: the texts you meet in school are already selected. The next step is to ask who selected them and by which criteria.",
          core:
            "Canonization is institutional repetition. A text becomes canonical because it remains available, teachable, and prestigious over time.",
          steps: [
            "Identify institutions of visibility.",
            "Name groups, genres, or languages that are underrepresented.",
            "Ask how revision can broaden the canon without abolishing judgment."
          ],
          pitfalls: [
            "Thinking quality alone automatically produces canon status.",
            "Treating canon critique as 'everything is equal'.",
            "Ignoring translation and infrastructure."
          ],
          terms: ["canon", "canonization", "cultural capital", "school canon"]
        },
        sections: [
          {
            title: "Canon as selection",
            bullets: [
              "A canon is a historically changing selection, not a timeless list.",
              "It distributes symbolic authority and educational legitimacy.",
              "Its criteria must be made visible."
            ]
          },
          {
            title: "Exclusion and revision",
            bullets: [
              "Texts disappear for institutional reasons, not only aesthetic ones.",
              "Gender, class, translation, censorship, and infrastructure matter.",
              "Revision questions criteria rather than simply swapping names."
            ]
          },
          {
            title: "School canon",
            bullets: [
              "School needs manageable, teachable selections.",
              "This practicality can look like natural importance.",
              "That is why the school canon itself should be discussed in class."
            ]
          }
        ]
      }
    },
    "mod-5": {
      en: {
        title: "Module 5: Cultural Politics and National Programs",
        subtitle: "Literature as identity model, educational program, and political instrument",
        intro:
          "Literary history is often closely tied to nation-building, memory politics, and educational programs. This module studies such links without flattening them into simple propaganda models.",
        goals: [
          "Connect nation-building and literary historiography.",
          "Analyze cultural politics as a steering of visibility.",
          "Place German Classicism as a high-cultural model.",
          "Reflect on ideological use and memory politics."
        ],
        focus: {
          question: "How can literature become part of a national or political program?",
          bridge:
            "Do not begin with censorship alone. Cultural politics also works through curricula, editions, commemorations, prizes, and symbolic elevation.",
          core:
            "Literary history often doubles as a story about collective identity. That makes it culturally powerful and politically usable.",
          steps: [
            "Identify the cultural ideal that is being promoted.",
            "Trace the institutions that stabilize it.",
            "Ask which texts are centered and which are marginalized."
          ],
          pitfalls: [
            "Reducing everything to crude propaganda.",
            "Ignoring subtle steering through education and memory.",
            "Assuming culture and politics are fully separate."
          ],
          terms: ["cultural politics", "memory politics", "Classicism", "identity"]
        },
        sections: [
          {
            title: "Collective self-description",
            bullets: [
              "Literary histories often tell communities who they are.",
              "Such narratives can stabilize identity and also produce exclusion.",
              "Nation is therefore one frame of literary order, not a neutral fact."
            ]
          },
          {
            title: "Classicism as high model",
            bullets: [
              "Goethe and Schiller were turned into educational norms.",
              "Classicism is therefore not only an epoch label but also a cultural ideal.",
              "This centrality pushes other forms to the margins."
            ]
          },
          {
            title: "Political steering",
            bullets: [
              "Steering can be direct, as in censorship.",
              "It can also be indirect, through curricula, prestige, and remembrance.",
              "Russian, Spanish, and French examples show different forms of this process."
            ]
          }
        ]
      }
    },
    "mod-6": {
      en: {
        title: "Module 6: Comparing Primary Texts",
        subtitle: "Case studies between canon, period, nation, and method",
        intro:
          "This module returns theory to texts. The stations use short textual signals, paraphrases, and focused tasks rather than long copyright-sensitive quotations.",
        goals: [
          "Read primary texts against models.",
          "Test canon, period, and cultural politics on concrete cases.",
          "Work comparatively across traditions.",
          "Argue what a method reveals and what it hides."
        ],
        focus: {
          question: "Why are concrete texts often more complex than literary-historical labels?",
          bridge:
            "Begin with one simple move: instead of asking 'Which period is this?', ask 'What exactly becomes visible if I read this text with approach A rather than approach B?'",
          core:
            "Primary texts do not merely confirm theory. They often resist neat labels and show the limits of our schemes.",
          steps: [
            "Situate the work briefly.",
            "Identify why it matters for literary history.",
            "Compare what different approaches reveal."
          ],
          pitfalls: [
            "Turning stations into mini-encyclopedia entries.",
            "Reading a text only as proof of one theory.",
            "Ignoring transnational comparison."
          ],
          terms: ["primary text", "case study", "method", "comparison"]
        },
        stationsSummary: [
          {
            title: "Goethe and Schiller",
            lesson: "how literature becomes a cultural norm"
          },
          {
            title: "Heine",
            lesson: "why satire and politics resist smooth period models"
          },
          {
            title: "Büchner",
            lesson: "how reception can make a text look 'ahead of its time'"
          },
          {
            title: "Fontane",
            lesson: "how school canonicity creates visibility and narrowing"
          },
          {
            title: "Kafka",
            lesson: "why nation, language, and epoch do not fit neatly"
          },
          {
            title: "Brecht and Bachmann",
            lesson: "how different centers of postwar literature can be imagined"
          },
          {
            title: "Mary Shelley",
            lesson: "how genre and gender affect later canon status"
          },
          {
            title: "French field",
            lesson: "why there is no single road into modernity"
          },
          {
            title: "Hispanophone field",
            lesson: "why transnational periodization matters"
          },
          {
            title: "Russian field",
            lesson: "how canon, state, censorship, and memory interact"
          }
        ]
      }
    },
    "mod-7": {
      en: {
        title: "Module 7: Digital Humanities and New Approaches",
        subtitle: "Distant reading, corpus analysis, networks, and stylometry",
        intro:
          "Digital humanities expand literary studies through scalable and data-based methods. This module introduces their promise and their limits.",
        goals: [
          "Explain digital humanities in basic terms.",
          "Distinguish distant reading, corpus analysis, network analysis, and stylometry.",
          "Interpret corpus data without absolutizing it.",
          "Connect DH to canon and period critique."
        ],
        focus: {
          question: "What can data show, and what still requires interpretation?",
          bridge:
            "You do not need programming knowledge here. Think of DH first as a change of scale: not only one text, but many texts and their metadata at once.",
          core:
            "DH is powerful when it reveals patterns of visibility, distribution, and absence. It is weak if we expect data to replace interpretation.",
          steps: [
            "Understand what the method measures.",
            "Read the resulting pattern carefully.",
            "State what the pattern cannot tell you by itself."
          ],
          pitfalls: [
            "Believing data is automatically objective.",
            "Treating corpus design as neutral.",
            "Replacing close reading with numbers."
          ],
          terms: ["digital humanities", "distant reading", "stylometry", "network analysis"]
        },
        sections: [
          {
            title: "What DH does",
            bullets: [
              "DH connects literary questions with digital methods.",
              "Methods include corpus analysis, networks, visualisation, and stylometry.",
              "The key issue is always the literary question, not the tool alone."
            ]
          },
          {
            title: "Strengths and limits",
            bullets: [
              "DH can reveal dominant and missing patterns.",
              "But data never explains meaning on its own.",
              "Interpretation remains necessary."
            ]
          },
          {
            title: "Mini-simulation",
            bullets: [
              "The didactic corpus lets you filter language, canon status, gender, theme, and form.",
              "Compare a canonical view with a corpus view.",
              "Then ask what the data shows and what it cannot show."
            ]
          }
        ]
      }
    },
    "mod-8": {
      en: {
        title: "Module 8: Synthesis, Deepening, Transfer",
        subtitle: "Comparing models and drafting an alternative literary history",
        intro:
          "The final module does not ask for repetition, but for synthesis. You now bring together method, canon critique, period critique, and DH.",
        goals: [
          "Evaluate theoretical approaches comparatively.",
          "Connect period critique, canon questions, and DH.",
          "Formulate your own principles of selection.",
          "Draft an alternative literary history."
        ],
        focus: {
          question: "How can we teach literary history critically without giving up orientation?",
          bridge:
            "Use the whole course as a tension field: we need order, but we also need criticism of the order we produce.",
          core:
            "A reflective literary history is neither mere chronology nor pure relativism. It is a justified, revisable form of ordering.",
          steps: [
            "Compare methods rather than isolating them.",
            "Make selection criteria explicit.",
            "Reflect on the limits of your own model."
          ],
          pitfalls: [
            "Falling back into simple timelines.",
            "Turning critique into pure arbitrariness.",
            "Using DH as a replacement for judgment."
          ],
          terms: ["selection criteria", "synthesis", "transfer", "alternative literary history"]
        },
        sections: [
          {
            title: "The core tension",
            bullets: [
              "Order is necessary for teaching.",
              "Critique is necessary so that order does not turn into naturalized truth.",
              "Data can help, but cannot decide alone."
            ]
          }
        ]
      }
    }
  };

  function getUi(lang, key) {
    return ui[lang]?.[key] || ui.de[key] || key;
  }

  function getSite(lang, key) {
    return site[lang]?.[key] || null;
  }

  function getModule(lang, moduleId, key) {
    return modules[moduleId]?.[lang]?.[key] || null;
  }

  window.LitI18n = {
    ui,
    site,
    modules,
    getUi,
    getSite,
    getModule
  };
})();
