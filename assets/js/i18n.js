(function () {
  const ui = {
    de: {
      startModule: "Mit Modul 1 beginnen",
      hideEnglish: "EN-Hilfen ausblenden",
      showEnglish: "EN-Hilfen einblenden",
      resetAll: "Gesamten Lernstand zurücksetzen",
      languageDe: "DE",
      languageEn: "EN",
      languageFr: "FR",
      languageEs: "ES",
      languageRu: "RU",
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
        "Alle Aufgaben sind offen zugänglich. Nach dem dritten Fehlversuch erscheint eine modellhafte Lösung.",
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
      languageFr: "FR",
      languageEs: "ES",
      languageRu: "RU",
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
        "All tasks are openly accessible. After the third incorrect attempt, a model answer becomes available.",
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

  Object.assign(ui, {
    fr: {
      startModule: "Commencer par le module 1",
      hideEnglish: "Masquer l'aide EN",
      showEnglish: "Afficher l'aide EN",
      resetAll: "Réinitialiser toute la progression",
      languageDe: "DE",
      languageEn: "EN",
      languageFr: "FR",
      languageEs: "ES",
      languageRu: "RU",
      focusOn: "Mode focus activé",
      focusOff: "Mode focus désactivé",
      navigation: "Navigation",
      jump: "Accède directement à un module ou au glossaire.",
      glossary: "Glossaire",
      teacher: "Enseignant·e",
      protected: "protégé",
      active: "actif",
      resetModule: "Réinitialiser le module",
      completedTasks: "tâches terminées",
      tasksHeader: "Tâches",
      tasksIntro: "Toutes les tâches sont accessibles. Après la troisième erreur, une réponse modèle apparaît.",
      focusQuestion: "Question directrice",
      focusBridge: "Pont avec les connaissances préalables",
      focusCore: "Idée centrale",
      focusSteps: "Parcours en trois étapes",
      focusPitfalls: "Écueils fréquents",
      focusTerms: "Termes clés",
      deepening: "Ouvrir l'approfondissement",
      sectionSummary: "Vue d'ensemble focalisée",
      theoryBlocks: "Blocs théoriques",
      theoryIntro: "Chaque approche comprend définition, cadre historique, hypothèse de connaissance, questions, atouts, critique, exercice et mini-transfert.",
      theorySummary: "Vue d'ensemble théorique",
      stationBlocks: "Études de cas",
      stationIntro: "Ces stations relient de brefs signaux textuels à des questions méthodologiques. Les tâches correspondantes s'y appuient.",
      stationSummary: "Vue comparative",
      searchTerm: "Chercher un terme",
      matches: "résultats",
      teacherOpen: "Ouvrir le mode enseignant",
      teacherClose: "Fermer le mode enseignant",
      teacherProtected: "Protection par mot de passe côté client pour un usage scolaire sur GitHub Pages.",
      overallProgress: "Progression globale",
      guidedTrack: "Le mode focus signifie: d'abord l'orientation, ensuite l'approfondissement. Cela réduit le seuil de connaissances préalables sans aplatir le contenu.",
      answerAttempts: "Essais",
      submit: "Vérifier",
      review: "Revoir",
      task: "Tâche",
      open: "ouverte",
      locked: "verrouillée",
      completed: "terminée",
      unlockedAfterHint: "ouverte après indice",
      taskLockedText: "Cette tâche sera ouverte après la tâche précédente.",
      choose: "Choisir",
      modelAnswer: "Réponse modèle",
      teacherSolution: "Réponse modèle et note pour l'enseignant·e",
      neutralWrong: "Incorrect",
      secondWrong: "Pas encore convaincant",
      solved: "Correct",
      strong: "Réponse solide"
    },
    es: {
      startModule: "Empezar con el módulo 1",
      hideEnglish: "Ocultar ayuda EN",
      showEnglish: "Mostrar ayuda EN",
      resetAll: "Restablecer todo el progreso",
      languageDe: "DE",
      languageEn: "EN",
      languageFr: "FR",
      languageEs: "ES",
      languageRu: "RU",
      focusOn: "Modo foco activado",
      focusOff: "Modo foco desactivado",
      navigation: "Navegación",
      jump: "Ve directamente a un módulo o al glosario.",
      glossary: "Glosario",
      teacher: "Profesorado",
      protected: "protegido",
      active: "activo",
      resetModule: "Reiniciar módulo",
      completedTasks: "tareas completadas",
      tasksHeader: "Tareas",
      tasksIntro: "Todas las tareas están abiertas. Tras el tercer error aparece una respuesta modelo.",
      focusQuestion: "Pregunta guía",
      focusBridge: "Puente con los conocimientos previos",
      focusCore: "Idea central",
      focusSteps: "Recorrido en tres pasos",
      focusPitfalls: "Dificultades típicas",
      focusTerms: "Términos clave",
      deepening: "Abrir profundización",
      sectionSummary: "Resumen focalizado",
      theoryBlocks: "Bloques teóricos",
      theoryIntro: "Cada enfoque incluye definición, marco histórico, supuesto epistemológico, preguntas, potencial, crítica, ejercicio y mini-transferencia.",
      theorySummary: "Resumen teórico",
      stationBlocks: "Estaciones de caso",
      stationIntro: "Estas estaciones conectan breves señales textuales con preguntas metodológicas. Las tareas se apoyan en ellas.",
      stationSummary: "Resumen comparativo",
      searchTerm: "Buscar término",
      matches: "resultados",
      teacherOpen: "Abrir modo docente",
      teacherClose: "Cerrar modo docente",
      teacherProtected: "Protección con contraseña en frontend para uso escolar en GitHub Pages.",
      overallProgress: "Progreso general",
      guidedTrack: "El modo foco significa: primero orientación, luego profundización. Así baja el umbral de conocimientos previos sin perder profundidad.",
      answerAttempts: "Intentos",
      submit: "Comprobar",
      review: "Revisar",
      task: "Tarea",
      open: "abierta",
      locked: "bloqueada",
      completed: "completada",
      unlockedAfterHint: "abierta tras la pista",
      taskLockedText: "Esta tarea se desbloqueará después de la anterior.",
      choose: "Elegir",
      modelAnswer: "Respuesta modelo",
      teacherSolution: "Respuesta modelo y nota para el profesorado",
      neutralWrong: "Incorrecto",
      secondWrong: "Todavía no convence",
      solved: "Correcto",
      strong: "Respuesta sólida"
    },
    ru: {
      startModule: "Начать с модуля 1",
      hideEnglish: "Скрыть подсказки EN",
      showEnglish: "Показать подсказки EN",
      resetAll: "Сбросить весь прогресс",
      languageDe: "DE",
      languageEn: "EN",
      languageFr: "FR",
      languageEs: "ES",
      languageRu: "RU",
      focusOn: "Режим фокуса включён",
      focusOff: "Режим фокуса выключен",
      navigation: "Навигация",
      jump: "Перейти прямо к модулю или глоссарию.",
      glossary: "Глоссарий",
      teacher: "Для учителя",
      protected: "защищено",
      active: "активно",
      resetModule: "Сбросить модуль",
      completedTasks: "заданий выполнено",
      tasksHeader: "Задания",
      tasksIntro: "Все задания открыты. После третьей ошибки появляется образцовый ответ.",
      focusQuestion: "Ключевой вопрос",
      focusBridge: "Мост к прежним знаниям",
      focusCore: "Главная идея",
      focusSteps: "Путь в три шага",
      focusPitfalls: "Типичные трудности",
      focusTerms: "Ключевые термины",
      deepening: "Открыть углубление",
      sectionSummary: "Сфокусированный обзор",
      theoryBlocks: "Теоретические блоки",
      theoryIntro: "Каждый подход включает определение, исторический контекст, эпистемологическую установку, вопросы, возможности, критику, упражнение и мини-перенос.",
      theorySummary: "Теоретический обзор",
      stationBlocks: "Кейс-станции",
      stationIntro: "Эти станции связывают короткие текстовые сигналы с методологическими вопросами. Соответствующие задания опираются на них.",
      stationSummary: "Сравнительный обзор",
      searchTerm: "Искать термин",
      matches: "результатов",
      teacherOpen: "Открыть режим учителя",
      teacherClose: "Закрыть режим учителя",
      teacherProtected: "Парольная защита на стороне клиента для школьного использования в GitHub Pages.",
      overallProgress: "Общий прогресс",
      guidedTrack: "Режим фокуса означает: сначала ориентация, затем углубление. Это снижает порог входа без потери содержательной глубины.",
      answerAttempts: "Попытки",
      submit: "Проверить",
      review: "Просмотреть снова",
      task: "Задание",
      open: "открыто",
      locked: "заблокировано",
      completed: "выполнено",
      unlockedAfterHint: "открыто после подсказки",
      taskLockedText: "Это задание откроется после предыдущего.",
      choose: "Выбрать",
      modelAnswer: "Образцовый ответ",
      teacherSolution: "Образцовый ответ и комментарий для учителя",
      neutralWrong: "Неверно",
      secondWrong: "Пока неубедительно",
      solved: "Верно",
      strong: "Сильный ответ"
    }
  });

  Object.assign(site, {
    fr: {
      title: "Théories de l'historiographie littéraire",
      subtitle: "Unité d'apprentissage numérique sur l'histoire littéraire, la critique des périodes, la canonisation, la politique culturelle et les humanités numériques",
      shortDescription: "Un environnement d'apprentissage multilingue pour des élèves avancé·es: exigeant sur le plan théorique, proche des textes, comparatif et interactif.",
      heroGoals: [
        "Comprendre l'histoire littéraire comme construction, sélection et narration.",
        "Comparer les modèles théoriques de l'historiographie littéraire.",
        "Interroger de façon critique les notions de période, le canon et la politique culturelle.",
        "Lire les textes primaires contre les schémas d'ordre et entre différentes traditions.",
        "Utiliser les humanités numériques comme complément, correction et source d'irritation productive."
      ],
      comparisonAxes: [
        "texte vs. contexte",
        "auteur vs. système",
        "immanence textuelle vs. ancrage historique",
        "canon vs. contre-canon",
        "modèle de période vs. non-simultanéité",
        "close reading vs. distant reading",
        "histoire littéraire nationale vs. perspective transnationale",
        "histoire littéraire germanophone vs. autres traditions"
      ],
      footerNote: "Toute la progression est enregistrée localement dans le navigateur. Le mode enseignant fonctionne entièrement côté client et constitue donc une solution pratique pour la classe, non un système de haute sécurité."
    },
    es: {
      title: "Teorías de la historiografía literaria",
      subtitle: "Unidad digital sobre historia literaria, crítica de los periodos, canonización, política cultural y humanidades digitales",
      shortDescription: "Un entorno de aprendizaje multilingüe para alumnado avanzado: exigente en lo teórico, cercano al texto, comparativo e interactivo.",
      heroGoals: [
        "Comprender la historia literaria como construcción, selección y narración.",
        "Comparar modelos teóricos de la historiografía literaria.",
        "Cuestionar críticamente los periodos, el canon y la política cultural.",
        "Leer textos primarios contra los esquemas de orden y entre distintas tradiciones.",
        "Usar las humanidades digitales como complemento, corrección e impulso crítico."
      ],
      comparisonAxes: [
        "texto vs. contexto",
        "autor vs. sistema",
        "inmanencia textual vs. inserción histórica",
        "canon vs. contra-canon",
        "modelo de periodo vs. no simultaneidad",
        "close reading vs. distant reading",
        "historia literaria nacional vs. perspectiva transnacional",
        "historia literaria germanófona vs. otras tradiciones"
      ],
      footerNote: "Todo el progreso se guarda localmente en el navegador. El modo docente funciona completamente en el cliente y, por tanto, es una solución práctica para el aula, no un sistema de alta seguridad."
    },
    ru: {
      title: "Теории литературной историографии",
      subtitle: "Цифровой учебный модуль по истории литературы, критике периодизации, канонизации, культурной политике и цифровым гуманитарным наукам",
      shortDescription: "Многоязычная учебная среда для продвинутых учащихся: теоретически насыщенная, текстоцентричная, сравнительная и интерактивная.",
      heroGoals: [
        "Понять историю литературы как конструкцию, отбор и нарратив.",
        "Сравнить теоретические модели литературной историографии.",
        "Критически рассмотреть периодизацию, канон и культурную политику.",
        "Читать первичные тексты против схем упорядочивания и между традициями.",
        "Использовать цифровые гуманитарные науки как дополнение, корректировку и источник продуктивного сомнения."
      ],
      comparisonAxes: [
        "текст vs. контекст",
        "автор vs. система",
        "текстовая имманентность vs. историческая вписанность",
        "канон vs. контрканон",
        "модель периода vs. несинхронность",
        "close reading vs. distant reading",
        "национальная история литературы vs. транснациональная перспектива",
        "немецкоязычная история литературы vs. другие традиции"
      ],
      footerNote: "Весь прогресс сохраняется локально в браузере. Режим учителя полностью клиентский и поэтому предназначен как практическое школьное решение, а не как высокозащищённая система."
    }
  });

  const extraModules = {
    "mod-1": {
      fr: {
        title: "Module 1: Qu'est-ce que l'histoire littéraire ?",
        subtitle: "Construction, sélection, narration et mémoire culturelle",
        intro: "Ce module pose les bases conceptuelles. L'histoire littéraire n'apparaît pas comme une simple liste neutre d'œuvres, mais comme un champ d'interprétation qui sélectionne, ordonne, hiérarchise et relie.",
        goals: ["Expliquer l'histoire littéraire comme construction perspectiviste.", "Distinguer sélectivité, téléologie et contingence.", "Réfléchir au rapport entre texte, auteur, institution et lectorat.", "Nommer le rôle de l'histoire littéraire dans la mémoire culturelle."],
        focus: {
          question: "Pourquoi l'histoire littéraire n'est-elle jamais une simple chronologie ?",
          bridge: "Aucune connaissance théorique préalable n'est nécessaire ici. Il suffit de distinguer une liste de dates d'un récit interprétatif sur la littérature.",
          core: "L'histoire littéraire choisit, ordonne et valorise. C'est pourquoi elle oriente, mais n'est jamais neutre.",
          steps: ["Distinguer chronologie et interprétation.", "Identifier les institutions de visibilité.", "Demander ce que cet ordre rend visible ou invisible."],
          pitfalls: ["Prendre l'histoire littéraire pour un miroir complet du passé.", "Considérer canon et importance comme des faits naturels.", "Oublier lecteurs et institutions."],
          terms: ["historiographie littéraire", "canon", "périodisation", "mémoire culturelle"]
        }
      },
      es: {
        title: "Módulo 1: ¿Qué es la historia literaria?",
        subtitle: "Construcción, selección, narración y memoria cultural",
        intro: "Este módulo establece la base conceptual. La historia literaria no aparece como una lista neutral de obras, sino como un campo interpretativo que selecciona, ordena, jerarquiza y relaciona.",
        goals: ["Explicar la historia literaria como construcción perspectivista.", "Distinguir selectividad, teleología y contingencia.", "Reflexionar sobre la relación entre texto, autor, institución y lectorado.", "Nombrar el papel de la historia literaria en la memoria cultural."],
        focus: {
          question: "¿Por qué la historia literaria nunca es solo una cronología?",
          bridge: "Aquí no necesitas conocimientos teóricos previos. Basta con distinguir una lista de fechas de un relato interpretativo sobre la literatura.",
          core: "La historia literaria selecciona, ordena y valora. Por eso orienta, pero nunca es neutral.",
          steps: ["Distinguir cronología e interpretación.", "Identificar las instituciones de visibilidad.", "Preguntar qué hace visible o invisible ese orden."],
          pitfalls: ["Tomar la historia literaria como un espejo completo del pasado.", "Considerar el canon y la importancia como hechos naturales.", "Olvidar lectores e instituciones."],
          terms: ["historiografía literaria", "canon", "periodización", "memoria cultural"]
        }
      },
      ru: {
        title: "Модуль 1: Что такое история литературы?",
        subtitle: "Конструкция, отбор, нарратив и культурная память",
        intro: "Этот модуль создаёт понятийную основу. История литературы предстает не как нейтральный список произведений, а как поле интерпретации, которое отбирает, упорядочивает, взвешивает и связывает.",
        goals: ["Объяснить историю литературы как перспективную конструкцию.", "Различать селективность, телеологию и контингентность.", "Осмыслить связь текста, автора, институции и читательской аудитории.", "Показать роль истории литературы в культурной памяти."],
        focus: {
          question: "Почему история литературы никогда не сводится к одной хронологии?",
          bridge: "Здесь не нужны специальные теоретические знания. Достаточно различать список дат и интерпретирующий рассказ о литературе.",
          core: "История литературы отбирает, упорядочивает и оценивает. Поэтому она помогает ориентироваться, но никогда не бывает нейтральной.",
          steps: ["Различить хронологию и интерпретацию.", "Опознать институции видимости.", "Спросить, что такой порядок делает видимым и невидимым."],
          pitfalls: ["Считать историю литературы полным зеркалом прошлого.", "Считать канон и значимость естественными фактами.", "Забывать о читателях и институциях."],
          terms: ["литературная историография", "канон", "периодизация", "культурная память"]
        }
      }
    },
    "mod-2": {
      fr: {
        title: "Module 2: Approches théoriques classiques",
        subtitle: "Comparer des modèles d'historiographie littéraire",
        intro: "Ces approches ne sont pas des recettes interchangeables. Chacune pose d'autres questions et rend donc visibles d'autres aspects.",
        goals: ["Situer les approches majeures historiquement et épistémologiquement.", "Comparer questions, potentiels et limites.", "Appliquer des mini-transferts à des textes primaires.", "Penser les modèles de manière relationnelle plutôt qu'absolue."],
        focus: {
          question: "Que change le fait de poser à un texte un autre type de question ?",
          bridge: "Il n'est pas nécessaire de mémoriser d'abord les écoles. Commence par demander ce qu'un approche veut savoir.",
          core: "Un approche fonctionne comme un générateur de questions. Il rend une couche plus visible et en relègue d'autres à l'arrière-plan.",
          steps: ["Identifier la question centrale.", "Nommer ce qu'elle rend visible.", "Dire ce qu'elle laisse moins visible."],
          pitfalls: ["Prendre un modèle pour le seul bon.", "Réduire une théorie à un slogan.", "Confondre méthode et vérité."],
          terms: ["close reading", "esthétique de la réception", "structuralisme", "New Historicism"]
        }
      },
      es: {
        title: "Módulo 2: Enfoques teóricos clásicos",
        subtitle: "Comparar modelos de historiografía literaria",
        intro: "Estos enfoques no son recetas intercambiables. Cada uno plantea preguntas distintas y por eso vuelve visibles cosas distintas.",
        goals: ["Situar los enfoques centrales histórica y epistemológicamente.", "Comparar preguntas, potencial y límites.", "Aplicar mini-transferencias a textos primarios.", "Pensar los modelos de forma relacional y no absoluta."],
        focus: {
          question: "¿Qué cambia cuando hago a un texto otro tipo de preguntas?",
          bridge: "No necesitas memorizar primero las escuelas. Empieza preguntando qué quiere saber cada enfoque.",
          core: "Un enfoque funciona como generador de preguntas. Hace una capa más visible y desplaza otras al fondo.",
          steps: ["Identificar la pregunta central.", "Nombrar qué hace visible.", "Decir qué deja menos visible."],
          pitfalls: ["Tomar un modelo como el único correcto.", "Reducir una teoría a un eslogan.", "Confundir método y verdad."],
          terms: ["close reading", "estética de la recepción", "estructuralismo", "New Historicism"]
        }
      },
      ru: {
        title: "Модуль 2: Классические теоретические подходы",
        subtitle: "Сравнение моделей литературной историографии",
        intro: "Эти подходы не являются взаимозаменяемыми рецептами. Каждый задаёт другие вопросы и поэтому делает видимым другое.",
        goals: ["Исторически и эпистемологически расположить основные подходы.", "Сравнить вопросы, возможности и границы.", "Применить мини-перенос к первичным текстам.", "Мыслить модели реляционно, а не абсолютизировать их."],
        focus: {
          question: "Что меняется, когда я задаю тексту другой тип вопроса?",
          bridge: "Не нужно сначала заучивать школы. Начни с вопроса, что именно хочет узнать подход.",
          core: "Подход работает как генератор вопросов. Он делает один слой литературы яснее, а другой отодвигает в тень.",
          steps: ["Определить центральный вопрос.", "Назвать, что становится видимым.", "Показать, что остаётся менее видимым."],
          pitfalls: ["Считать один подход единственно верным.", "Сводить теорию к лозунгу.", "Путать метод и истину."],
          terms: ["close reading", "эстетика рецепции", "структурализм", "New Historicism"]
        }
      }
    },
    "mod-3": {
      fr: {
        title: "Module 3: Les notions de période et leurs problèmes",
        subtitle: "Heuristique, non-simultanéité, transnationalité",
        intro: "Les notions de période créent de l'orientation, mais elles simplifient aussi. Ce module montre pourquoi elles sont utiles et problématiques à la fois.",
        goals: ["Comprendre les périodes comme outils heuristiques.", "Analyser transitions et superpositions.", "Comparer périodisations nationales et transnationales.", "Nommer la contribution des humanités numériques à cette critique."],
        focus: {
          question: "Pourquoi les notions de période sont-elles utiles, mais jamais le dernier mot ?",
          bridge: "Si un terme aide à s'orienter, cela ne signifie pas encore qu'il décrive une vérité naturelle.",
          core: "Les périodes réduisent la complexité. C'est leur force. Cette même réduction peut effacer des cas hybrides ou transnationaux.",
          steps: ["Dire ce que la notion aide à voir.", "Tester les cas limites.", "Demander si elle fonctionne dans plusieurs traditions."],
          pitfalls: ["Homogénéiser tous les textes d'une période.", "Confondre heuristique et fait objectif.", "Oublier les enchevêtrements transnationaux."],
          terms: ["périodisation", "heuristique", "non-simultanéité", "distant reading"]
        }
      },
      es: {
        title: "Módulo 3: Los periodos y sus problemas",
        subtitle: "Heurística, no simultaneidad, transnacionalidad",
        intro: "Los periodos orientan, pero también simplifican. Este módulo muestra por qué son útiles y problemáticos a la vez.",
        goals: ["Entender los periodos como herramientas heurísticas.", "Analizar transiciones y solapamientos.", "Comparar periodizaciones nacionales y transnacionales.", "Nombrar la aportación de las humanidades digitales a esta crítica."],
        focus: {
          question: "¿Por qué los periodos son útiles, pero nunca la última palabra?",
          bridge: "Que un término ayude a orientarse no significa todavía que describa una verdad natural.",
          core: "Los periodos reducen complejidad. Esa es su fuerza. La misma reducción puede borrar textos híbridos o transnacionales.",
          steps: ["Decir qué ayuda a ver el término.", "Comprobar los casos límite.", "Preguntar si funciona entre tradiciones."],
          pitfalls: ["Homogeneizar todos los textos de un periodo.", "Confundir heurística con hecho objetivo.", "Olvidar los entrelazamientos transnacionales."],
          terms: ["periodización", "heurística", "no simultaneidad", "distant reading"]
        }
      },
      ru: {
        title: "Модуль 3: Периодизация и её проблемы",
        subtitle: "Эвристика, несинхронность, транснациональность",
        intro: "Периодизация создаёт ориентацию, но одновременно упрощает. Этот модуль показывает, почему она и полезна, и проблемна.",
        goals: ["Понимать периоды как эвристические инструменты.", "Анализировать переходы и наложения.", "Сравнивать национальные и транснациональные периодизации.", "Показать вклад цифровых гуманитарных наук в эту критику."],
        focus: {
          question: "Почему периоды полезны, но никогда не являются последним словом?",
          bridge: "Если термин помогает ориентироваться, это ещё не значит, что он описывает естественный факт.",
          core: "Периоды уменьшают сложность. В этом их сила. Но та же редукция может стирать гибридные и транснациональные случаи.",
          steps: ["Понять, что термин помогает увидеть.", "Проверить пограничные случаи.", "Спросить, работает ли он в разных традициях."],
          pitfalls: ["Гомогенизировать все тексты периода.", "Путать эвристику с объективным фактом.", "Забывать о транснациональных связях."],
          terms: ["периодизация", "эвристика", "несинхронность", "distant reading"]
        }
      }
    },
    "mod-4": {
      fr: {
        title: "Module 4: Canonisation et pouvoir",
        subtitle: "Institutions, prestige, exclusion, révision",
        intro: "La canonisation détermine quels textes sont relus, enseignés, édités et mémorisés. Le canon est donc aussi une question de pouvoir.",
        goals: ["Distinguer canon et canonisation.", "Nommer les institutions de visibilité.", "Réfléchir aux mécanismes d'exclusion.", "Interroger de façon critique le canon scolaire."],
        focus: {
          question: "Qui décide de ce qui compte comme littérature importante ?",
          bridge: "Pars d'une observation simple: les textes lus à l'école sont déjà sélectionnés.",
          core: "La canonisation est une répétition stabilisée par des institutions. Un texte devient canonique parce qu'il reste visible, disponible et enseignable.",
          steps: ["Identifier les institutions de visibilité.", "Nommer les sous-représentations.", "Comprendre la révision du canon comme révision des critères."],
          pitfalls: ["Croire que la seule qualité produit le canon.", "Confondre critique du canon et relativisme total.", "Sous-estimer traduction et infrastructure."],
          terms: ["canon", "canonisation", "capital culturel", "canon scolaire"]
        }
      },
      es: {
        title: "Módulo 4: Canonización y poder",
        subtitle: "Instituciones, prestigio, exclusión y revisión",
        intro: "La canonización decide qué textos se releen, se enseñan, se editan y se recuerdan. Por eso el canon también es una cuestión de poder.",
        goals: ["Distinguir canon y canonización.", "Nombrar las instituciones de visibilidad.", "Reflexionar sobre los mecanismos de exclusión.", "Cuestionar críticamente el canon escolar."],
        focus: {
          question: "¿Quién decide qué cuenta como literatura importante?",
          bridge: "Empieza con una observación simple: los textos que se leen en la escuela ya han sido seleccionados.",
          core: "La canonización es repetición estabilizada institucionalmente. Un texto se vuelve canónico porque sigue siendo visible, disponible y enseñable.",
          steps: ["Identificar las instituciones de visibilidad.", "Nombrar las infrarrepresentaciones.", "Entender la revisión del canon como revisión de criterios."],
          pitfalls: ["Creer que la calidad por sí sola produce el canon.", "Confundir crítica del canon con relativismo total.", "Subestimar traducción e infraestructura."],
          terms: ["canon", "canonización", "capital cultural", "canon escolar"]
        }
      },
      ru: {
        title: "Модуль 4: Канонизация и власть",
        subtitle: "Институции, престиж, исключение, пересмотр",
        intro: "Канонизация определяет, какие тексты перечитываются, преподаются, издаются и запоминаются. Поэтому канон — это также вопрос власти.",
        goals: ["Различать канон и канонизацию.", "Назвать институции видимости.", "Осмыслить механизмы исключения.", "Критически рассмотреть школьный канон."],
        focus: {
          question: "Кто решает, что считается важной литературой?",
          bridge: "Начни с простого наблюдения: тексты, которые читают в школе, уже кем-то отобраны.",
          core: "Канонизация — это институционально стабилизированное повторение. Текст становится каноническим, потому что остаётся видимым, доступным и преподаваемым.",
          steps: ["Определить институции видимости.", "Назвать недопредставленные группы и тексты.", "Понять пересмотр канона как пересмотр критериев."],
          pitfalls: ["Считать, что один только эстетический уровень создаёт канон.", "Путать критику канона с полным релятивизмом.", "Недооценивать перевод и инфраструктуру."],
          terms: ["канон", "канонизация", "культурный капитал", "школьный канон"]
        }
      }
    },
    "mod-5": {
      fr: {
        title: "Module 5: Politique culturelle et programmes nationaux",
        subtitle: "La littérature comme modèle identitaire, programme de formation et instrument politique",
        intro: "L'histoire littéraire est souvent liée à la construction nationale, à la politique de mémoire et aux programmes éducatifs.",
        goals: ["Relier nation et historiographie littéraire.", "Analyser la politique culturelle comme pilotage de la visibilité.", "Situer le classicisme allemand comme modèle de haute culture.", "Réfléchir à l'instrumentalisation idéologique et mémorielle."],
        focus: {
          question: "Comment la littérature devient-elle partie d'un programme culturel ou politique ?",
          bridge: "Ne pense pas seulement à la censure. La politique culturelle agit aussi par programmes scolaires, éditions, commémorations et prix.",
          core: "L'histoire littéraire raconte souvent aussi qui une communauté veut être. Cela la rend culturellement puissante et politiquement exploitable.",
          steps: ["Identifier le modèle identitaire promu.", "Suivre les médiations institutionnelles.", "Demander quels textes sont centrés et lesquels sont marginalisés."],
          pitfalls: ["Réduire toute politique culturelle à la propagande brute.", "Oublier les formes subtiles de normalisation.", "Séparer trop fortement culture et politique."],
          terms: ["politique culturelle", "politique de mémoire", "classicisme", "identité"]
        }
      },
      es: {
        title: "Módulo 5: Política cultural y programas nacionales",
        subtitle: "La literatura como modelo identitario, programa educativo e instrumento político",
        intro: "La historia literaria suele estar estrechamente vinculada con la formación nacional, la política de la memoria y los programas educativos.",
        goals: ["Relacionar nación e historiografía literaria.", "Analizar la política cultural como dirección de la visibilidad.", "Situar el clasicismo alemán como modelo de alta cultura.", "Reflexionar sobre la instrumentalización ideológica y memorial."],
        focus: {
          question: "¿Cómo se convierte la literatura en parte de un programa cultural o político?",
          bridge: "No pienses solo en censura. La política cultural también opera mediante currículos, ediciones, conmemoraciones y premios.",
          core: "La historia literaria suele contar también quién quiere ser una comunidad. Eso la hace culturalmente poderosa y políticamente utilizable.",
          steps: ["Identificar el modelo identitario promovido.", "Seguir las mediaciones institucionales.", "Preguntar qué textos se centran y cuáles se marginan."],
          pitfalls: ["Reducir toda política cultural a propaganda burda.", "Olvidar las formas sutiles de normalización.", "Separar demasiado cultura y política."],
          terms: ["política cultural", "política de la memoria", "clasicismo", "identidad"]
        }
      },
      ru: {
        title: "Модуль 5: Культурная политика и национальные программы",
        subtitle: "Литература как модель идентичности, образовательная программа и политический инструмент",
        intro: "История литературы часто тесно связана с нациестроительством, политикой памяти и образовательными программами.",
        goals: ["Связать нацию и литературную историографию.", "Анализировать культурную политику как управление видимостью.", "Рассмотреть немецкий классицизм как модель высокой культуры.", "Осмыслить идеологическую и мемориальную инструментализацию."],
        focus: {
          question: "Как литература становится частью культурной или политической программы?",
          bridge: "Не думай только о цензуре. Культурная политика действует также через учебные планы, издания, юбилеи и премии.",
          core: "История литературы часто рассказывает и о том, кем сообщество хочет себя видеть. Поэтому она культурно сильна и политически пригодна.",
          steps: ["Определить продвигаемую модель идентичности.", "Проследить институциональные посредничества.", "Спросить, какие тексты центруются, а какие маргинализируются."],
          pitfalls: ["Сводить всё к грубой пропаганде.", "Не замечать тонких форм нормирования.", "Слишком жёстко разделять культуру и политику."],
          terms: ["культурная политика", "политика памяти", "классицизм", "идентичность"]
        }
      }
    },
    "mod-6": {
      fr: {
        title: "Module 6: Comparer des textes primaires",
        subtitle: "Études de cas entre canon, période, nation et méthode",
        intro: "Ce module ramène la théorie aux textes. Les stations travaillent avec de courts signaux textuels, des paraphrases et des consignes focalisées.",
        goals: ["Lire les textes contre les modèles.", "Tester canon, période et politique culturelle sur des cas concrets.", "Travailler comparativement entre traditions.", "Argumenter ce qu'une méthode rend visible et ce qu'elle masque."],
        focus: {
          question: "Pourquoi les textes concrets sont-ils souvent plus complexes que nos schémas ?",
          bridge: "Ne demande pas d'abord à quelle période appartient le texte. Demande d'abord ce que rend visible l'approche A plutôt que l'approche B.",
          core: "Les textes primaires ne confirment pas simplement la théorie. Ils déplacent, dérangent et affinent nos modèles.",
          steps: ["Situer brièvement l'œuvre.", "Nommer son intérêt historiographique.", "Comparer les visibilités méthodologiques."],
          pitfalls: ["Transformer les stations en notices encyclopédiques.", "Lire un texte comme preuve d'une seule théorie.", "Négliger la comparaison entre traditions."],
          terms: ["texte primaire", "étude de cas", "comparaison", "méthode"]
        }
      },
      es: {
        title: "Módulo 6: Comparar textos primarios",
        subtitle: "Estudios de caso entre canon, periodo, nación y método",
        intro: "Este módulo devuelve la teoría a los textos. Las estaciones trabajan con señales textuales breves, paráfrasis y consignas focalizadas.",
        goals: ["Leer los textos contra los modelos.", "Poner a prueba canon, periodo y política cultural en casos concretos.", "Trabajar comparativamente entre tradiciones.", "Argumentar qué hace visible un método y qué oculta."],
        focus: {
          question: "¿Por qué los textos concretos suelen ser más complejos que nuestros esquemas?",
          bridge: "No preguntes primero a qué periodo pertenece el texto. Pregunta antes qué hace visible el enfoque A frente al B.",
          core: "Los textos primarios no confirman simplemente la teoría. Desplazan, incomodan y afinan nuestros modelos.",
          steps: ["Situar brevemente la obra.", "Nombrar su relevancia historiográfica.", "Comparar las visibilidades metodológicas."],
          pitfalls: ["Convertir las estaciones en fichas enciclopédicas.", "Leer un texto como prueba de una sola teoría.", "Descuidar la comparación entre tradiciones."],
          terms: ["texto primario", "estudio de caso", "comparación", "método"]
        }
      },
      ru: {
        title: "Модуль 6: Сравнение первичных текстов",
        subtitle: "Кейс-исследования между каноном, периодом, нацией и методом",
        intro: "Этот модуль возвращает теорию к текстам. Станции работают с короткими текстовыми сигналами, парафразами и сфокусированными заданиями.",
        goals: ["Читать тексты против моделей.", "Проверять канон, период и культурную политику на конкретных случаях.", "Работать сравнительно между традициями.", "Аргументировать, что метод делает видимым и что скрывает."],
        focus: {
          question: "Почему конкретные тексты часто сложнее наших схем?",
          bridge: "Не спрашивай сразу, к какому периоду относится текст. Сначала спроси, что подход A делает видимым по сравнению с подходом B.",
          core: "Первичные тексты не просто подтверждают теорию. Они смещают, нарушают и уточняют наши модели.",
          steps: ["Кратко situировать произведение.", "Назвать его историографическую значимость.", "Сравнить методологические видимости."],
          pitfalls: ["Превращать станции в энциклопедические справки.", "Читать текст как доказательство одной теории.", "Пренебрегать сравнением традиций."],
          terms: ["первичный текст", "кейс", "сравнение", "метод"]
        }
      }
    },
    "mod-7": {
      fr: {
        title: "Module 7: Humanités numériques et nouveaux accès",
        subtitle: "Distant reading, analyse de corpus, réseaux et stylométrie",
        intro: "Les humanités numériques élargissent les études littéraires par des méthodes scalables et fondées sur les données.",
        goals: ["Expliquer les humanités numériques à un niveau de base.", "Distinguer distant reading, analyse de corpus, analyse de réseaux et stylométrie.", "Interpréter les données sans les absolutiser.", "Relier les DH à la critique du canon et des périodes."],
        focus: {
          question: "Que peuvent montrer les données, et qu'est-ce qui reste de l'interprétation ?",
          bridge: "Aucune compétence en programmation n'est nécessaire. L'essentiel est le changement d'échelle: beaucoup de textes au lieu d'un seul.",
          core: "Les DH sont fortes lorsqu'elles montrent des motifs de visibilité et d'absence. Elles sont faibles si on attend d'elles des significations toutes faites.",
          steps: ["Comprendre ce que la méthode mesure.", "Lire prudemment le motif obtenu.", "Dire explicitement ce que les données ne peuvent pas décider."],
          pitfalls: ["Croire que les données sont automatiquement objectives.", "Traiter la construction du corpus comme neutre.", "Remplacer le close reading par des chiffres."],
          terms: ["humanités numériques", "distant reading", "stylométrie", "analyse de réseaux"]
        }
      },
      es: {
        title: "Módulo 7: Humanidades digitales y nuevos accesos",
        subtitle: "Distant reading, análisis de corpus, redes y estilometría",
        intro: "Las humanidades digitales amplían los estudios literarios mediante métodos escalables y basados en datos.",
        goals: ["Explicar las humanidades digitales en términos básicos.", "Distinguir distant reading, análisis de corpus, análisis de redes y estilometría.", "Interpretar datos sin absolutizarlos.", "Relacionar HD con la crítica del canon y de los periodos."],
        focus: {
          question: "¿Qué pueden mostrar los datos y qué sigue siendo interpretación?",
          bridge: "No necesitas programación. Lo importante es el cambio de escala: muchos textos en lugar de uno solo.",
          core: "Las humanidades digitales son fuertes cuando muestran patrones de visibilidad y ausencia. Son débiles si esperamos significados ya hechos.",
          steps: ["Entender qué mide el método.", "Leer con cuidado el patrón resultante.", "Decir explícitamente qué no pueden decidir los datos."],
          pitfalls: ["Creer que los datos son automáticamente objetivos.", "Tratar la construcción del corpus como neutral.", "Sustituir el close reading por números."],
          terms: ["humanidades digitales", "distant reading", "análisis de corpus", "estilometría"]
        }
      },
      ru: {
        title: "Модуль 7: Цифровые гуманитарные науки и новые подходы",
        subtitle: "Distant reading, анализ корпуса, сети и стилометрия",
        intro: "Цифровые гуманитарные науки расширяют литературоведение масштабируемыми и основанными на данных методами.",
        goals: ["Объяснить цифровые гуманитарные науки на базовом уровне.", "Различать distant reading, корпусный анализ, сетевой анализ и стилометрию.", "Интерпретировать данные, не абсолютизируя их.", "Связать DH с критикой канона и периодизации."],
        focus: {
          question: "Что могут показать данные, а что остаётся делом интерпретации?",
          bridge: "Навыки программирования не нужны. Важно изменение масштаба: много текстов вместо одного.",
          core: "DH сильны тогда, когда показывают паттерны видимости и отсутствия. Они слабы, если ожидать от них готовых смыслов.",
          steps: ["Понять, что именно измеряет метод.", "Осторожно прочитать полученный паттерн.", "Явно назвать, чего данные не могут решить."],
          pitfalls: ["Считать данные автоматически объективными.", "Считать построение корпуса нейтральным.", "Заменять close reading числами."],
          terms: ["цифровые гуманитарные науки", "distant reading", "корпусный анализ", "стилометрия"]
        }
      }
    },
    "mod-8": {
      fr: {
        title: "Module 8: Synthèse, approfondissement, transfert",
        subtitle: "Comparer des modèles et esquisser une autre histoire littéraire",
        intro: "Le module final ne demande pas la répétition, mais la synthèse. Il rassemble méthode, critique du canon, critique des périodes et DH.",
        goals: ["Évaluer comparativement les approches théoriques.", "Relier critique des périodes, question du canon et DH.", "Formuler ses propres principes de sélection.", "Esquisser une histoire littéraire alternative."],
        focus: {
          question: "Comment enseigner l'histoire littéraire de manière critique sans perdre l'orientation ?",
          bridge: "Considère l'ensemble du cours comme un champ de tension: nous avons besoin d'ordre, mais aussi d'une critique de l'ordre produit.",
          core: "Une histoire littéraire réfléchie n'est ni simple chronologie ni relativisme pur. C'est un ordre justifié et révisable.",
          steps: ["Comparer les modèles plutôt que les isoler.", "Rendre explicites les critères de sélection.", "Réfléchir aux limites de son propre modèle."],
          pitfalls: ["Retomber dans des chronologies simples.", "Confondre critique et arbitraire.", "Traiter les DH comme remplacement du jugement."],
          terms: ["synthèse", "critères de sélection", "transfert", "histoire littéraire alternative"]
        }
      },
      es: {
        title: "Módulo 8: Síntesis, profundización y transferencia",
        subtitle: "Comparar modelos y esbozar otra historia literaria",
        intro: "El módulo final no pide repetición, sino síntesis. Reúne método, crítica del canon, crítica de los periodos y humanidades digitales.",
        goals: ["Evaluar comparativamente los enfoques teóricos.", "Relacionar crítica de periodos, cuestión del canon y HD.", "Formular principios propios de selección.", "Esbozar una historia literaria alternativa."],
        focus: {
          question: "¿Cómo enseñar historia literaria críticamente sin perder orientación?",
          bridge: "Considera todo el curso como un campo de tensión: necesitamos orden, pero también crítica del orden que producimos.",
          core: "Una historia literaria reflexiva no es ni mera cronología ni relativismo puro. Es un orden justificado y revisable.",
          steps: ["Comparar modelos en vez de aislarlos.", "Hacer explícitos los criterios de selección.", "Reflexionar sobre los límites del propio modelo."],
          pitfalls: ["Volver a líneas cronológicas simples.", "Confundir crítica con arbitrariedad.", "Tratar las HD como sustituto del juicio."],
          terms: ["síntesis", "criterios de selección", "transferencia", "historia literaria alternativa"]
        }
      },
      ru: {
        title: "Модуль 8: Синтез, углубление, перенос",
        subtitle: "Сравнение моделей и проектирование альтернативной истории литературы",
        intro: "Финальный модуль требует не повторения, а синтеза. Он соединяет метод, критику канона, критику периодизации и DH.",
        goals: ["Сравнительно оценить теоретические подходы.", "Связать критику периодов, вопрос канона и DH.", "Сформулировать собственные принципы отбора.", "Наметить альтернативную историю литературы."],
        focus: {
          question: "Как преподавать историю литературы критически, не теряя ориентации?",
          bridge: "Рассматривай весь курс как поле напряжения: нам нужен порядок, но нужна и критика создаваемого порядка.",
          core: "Рефлексивная история литературы — это не просто хронология и не чистый релятивизм. Это обоснованный и пересматриваемый порядок.",
          steps: ["Сравнивать модели, а не изолировать их.", "Делать критерии отбора явными.", "Размышлять о границах собственной модели."],
          pitfalls: ["Скатываться к простым хронологиям.", "Путать критику с произволом.", "Считать DH заменой суждения."],
          terms: ["синтез", "критерии отбора", "перенос", "альтернативная история литературы"]
        }
      }
    }
  };

  Object.entries(extraModules).forEach(([moduleId, translations]) => {
    modules[moduleId] ||= {};
    Object.assign(modules[moduleId], translations);
  });

  function getUi(lang, key) {
    return ui[lang]?.[key] || ui.en?.[key] || ui.de[key] || key;
  }

  function getSite(lang, key) {
    if (lang === "de") return null;
    return site[lang]?.[key] || site.en?.[key] || null;
  }

  function getModule(lang, moduleId, key) {
    if (lang === "de") return null;
    return modules[moduleId]?.[lang]?.[key] || modules[moduleId]?.en?.[key] || null;
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
