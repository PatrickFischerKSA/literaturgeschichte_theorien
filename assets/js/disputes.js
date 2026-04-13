(function () {
  const ui = {
    de: {
      kicker: "Sprachspezifische Streitfälle",
      title: "Autonome Dossiers literaturgeschichtlicher Konflikte",
      translationNote:
        "Die DE/EN-Einblendungen sind didaktische Arbeitsübersetzungen. Maßgeblich bleibt das Originalzitat in seiner jeweiligen Sprache.",
      quoteButton: "DE/EN",
      quoteTitle: "Übersetzungspopup",
      sourceLabel: "Quellen",
      switchLabel: "Originalfassung öffnen",
      otherTitle: "Kurzhinweise auf die anderen Sprachdossiers"
    },
    en: {
      kicker: "Language-specific disputes",
      title: "Autonomous dossiers of literary-historical conflict",
      translationNote:
        "The DE/EN overlays are didactic working translations. The original quotation remains authoritative.",
      quoteButton: "DE/EN",
      quoteTitle: "Translation popup",
      sourceLabel: "Sources",
      switchLabel: "Open original version",
      otherTitle: "Short pointers to the other language dossiers"
    },
    fr: {
      kicker: "Cas litigieux propres à la langue",
      title: "Dossiers autonomes de conflits historiographiques",
      translationNote:
        "Les fenêtres DE/EN proposent des traductions didactiques de travail. Le texte source dans sa langue originale reste décisif.",
      quoteButton: "DE/EN",
      quoteTitle: "Fenêtre de traduction",
      sourceLabel: "Sources",
      switchLabel: "Ouvrir la version originale",
      otherTitle: "Brèves indications vers les autres dossiers linguistiques"
    },
    es: {
      kicker: "Casos polémicos específicos de la lengua",
      title: "Dossieres autónomos de conflictos historiográfico-literarios",
      translationNote:
        "Las ventanas DE/EN ofrecen traducciones de trabajo con fines didácticos. La cita original sigue siendo la referencia principal.",
      quoteButton: "DE/EN",
      quoteTitle: "Ventana de traducción",
      sourceLabel: "Fuentes",
      switchLabel: "Abrir versión original",
      otherTitle: "Resumen breve de los otros dossieres lingüísticos"
    },
    ru: {
      kicker: "Языковые спорные случаи",
      title: "Автономные досье литературно-исторических конфликтов",
      translationNote:
        "Всплывающие окна DE/EN содержат дидактические рабочие переводы. Определяющим остаётся оригинал цитаты.",
      quoteButton: "DE/EN",
      quoteTitle: "Окно перевода",
      sourceLabel: "Источники",
      switchLabel: "Открыть оригинальную версию",
      otherTitle: "Краткие указания на досье других языков"
    }
  };

  const dossiers = {
    de: {
      intro:
        "Die deutsche Fassung bündelt drei typische Streitachsen der deutschsprachigen Literaturgeschichte: Heines prekäre Stellung zwischen Romantik, Politik und Exil, Kafkas Mehrfachzugehörigkeit zwischen Prag, Judentum und deutschsprachigem Kanon sowie Büchners Sprengkraft für lineare Vormärz- und Modernisierungserzählungen.",
      cases: [
        {
          title: "Heine: Romantik, Vormärz oder transnationale Gegenfigur?",
          debate:
            "Heine wird in Literaturgeschichten oft entweder als letzter Romantiker oder als politischer Vormärz-Autor sortiert. Beide Raster greifen zu kurz, weil Exil, jüdische Herkunft, Frankreich-Bezug, Satire und Lyrik hier ineinandergreifen.",
          stakes:
            "Der Streitfall zeigt, wie nationale Literaturgeschichte dazu neigt, genau jene Teile Heines zu bevorzugen, die in ein harmonisches deutsches Bildungsnarrativ passen, während Exil, Polemik und Störung abgeschwächt werden.",
          quote: {
            original: "Denk ich an Deutschland in der Nacht, / Dann bin ich um den Schlaf gebracht.",
            de: "Originalfassung auf Deutsch.",
            en: "When I think of Germany at night, sleep abandons me.",
            sourceLabel: "Heinrich Heine, Nachtgedanken (Wikisource)",
            sourceUrl: "https://de.wikisource.org/wiki/Nachtgedanken_(Heine)"
          },
          links: [
            {
              label: "Britannica zu Heines Exil und politischer Lyrik",
              url: "https://www.britannica.com/summary/Heinrich-Heine-German-author"
            }
          ]
        },
        {
          title: "Kafka: deutschsprachiger Klassiker, Prager Autor oder jüdisch-mitteleuropäischer Grenzfall?",
          debate:
            "Kafka ist fest im deutschsprachigen Kanon verankert, zugleich entzieht er sich einfachen nationalen Zuschreibungen. Seine Texte entstehen in Prag, im jüdischen Milieu und in einer mehrsprachigen Moderne, die deutsche Literaturgeschichte nie ganz souverän einfängt.",
          stakes:
            "Hier wird sichtbar, dass 'deutschsprachige Literatur' keine selbstverständliche nationale Einheit ist. Kafkas Stellung zwingt dazu, Sprache, Raum, Minderheit und Weltliteratur gleichzeitig mitzudenken.",
          quote: {
            original:
              "Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich [...] zu einem ungeheueren Ungeziefer verwandelt.",
            de: "Originalfassung auf Deutsch.",
            en: "When Gregor Samsa awoke one morning from uneasy dreams, he found himself transformed into a monstrous vermin.",
            sourceLabel: "Franz Kafka, Die Verwandlung (Wikisource)",
            sourceUrl: "https://de.wikisource.org/wiki/Die_Verwandlung_(Franz_Kafka)"
          },
          links: [
            {
              label: "Britannica zu Kafka als deutschsprachigem Prager Autor",
              url: "https://www.britannica.com/biography/Franz-Kafka"
            }
          ]
        },
        {
          title: "Büchner: Vormärz-Autor oder nachträglich kanonisierte Vor-Moderne?",
          debate:
            "Büchner wird oft als früher Vormärz-Autor eingeordnet, später aber zugleich als Vorläufer des Expressionismus, der Moderne oder des politischen Theaters gelesen. Seine Werke stören gerade deshalb lineare Epochengeschichten.",
          stakes:
            "Der Fall erinnert daran, dass literaturgeschichtliche Zugehörigkeit nicht einfach aus dem Erscheinungsdatum folgt. Rezeptionsgeschichte verschiebt die Wahrnehmung eines Textes oft stärker als seine Entstehungszeit.",
          quote: {
            original: "Friede den Hütten! Krieg den Pallästen!",
            de: "Originalfassung auf Deutsch.",
            en: "Peace to the cottages! War on the palaces!",
            sourceLabel: "Georg Büchner, Der Hessische Landbote (Wikisource)",
            sourceUrl: "https://de.wikisource.org/wiki/Der_Hessische_Landbote"
          },
          links: [
            {
              label: "Britannica zu Büchner als Vorläufer moderner Dramatik",
              url: "https://www.britannica.com/biography/Georg-Buchner"
            }
          ]
        }
      ],
      others: [
        {
          language: "en",
          title: "Englische Originalfassung",
          summary:
            "Mary Shelley, Conrad und Woolf verschieben den englischsprachigen Kanon über Gattung, Empire und Geschlechtergeschichte. Die Vollfassung steht im EN-Menü."
        },
        {
          language: "fr",
          title: "Französische Originalfassung",
          summary:
            "Baudelaire, Flaubert und Camus öffnen Konflikte um Modernität, Prozessgeschichte und die Grenze zwischen 'français' und 'algérien/francophone'. Vollständig im FR-Menü."
        },
        {
          language: "es",
          title: "Spanische Originalfassung",
          summary:
            "Cervantes, Lorca und Borges bündeln Streit um kastilisches Zentrum, Erinnerungspolitik und hispanoamerikanische Tradition. Vollständig im ES-Menü."
        },
        {
          language: "ru",
          title: "Russische Originalfassung",
          summary:
            "Puschkin, Gogol und Bulgakow zeigen, wie eng russische Literaturgeschichte mit Staat, Imperium, Zensur und Nachkanonisierung verknüpft ist. Vollständig im RU-Menü."
        }
      ]
    },
    en: {
      intro:
        "The English dossier concentrates on three recurrent flashpoints of English-language literary history: Mary Shelley’s movement from Gothic margin to central canon, Conrad’s unstable place between English style and imperial violence, and Woolf’s feminist rewriting of who counts as a literary subject at all.",
      cases: [
        {
          title: "Mary Shelley: Gothic sidebar or foundational modern author?",
          debate:
            "Shelley was long treated as a curious Gothic exception, often overshadowed by Percy Shelley and by male histories of science, reason, and authorship. Today Frankenstein is read as a crucial text for science fiction, Romanticism, gender, and ethics.",
          stakes:
            "The dispute reveals how genre labels and gendered prestige shape canon formation: what was once treated as sensational fiction becomes central once literary history changes its questions.",
          quote: {
            original:
              "I ought to be thy Adam; but I am rather the fallen angel.",
            de: "Ich sollte dein Adam sein; aber ich bin eher der gefallene Engel.",
            en: "Original formulation in English.",
            sourceLabel: "Mary Shelley, Frankenstein (Wikisource)",
            sourceUrl:
              "https://en.wikisource.org/wiki/Frankenstein%2C_or_the_Modern_Prometheus_%28First_Edition%2C_1818%29/Volume_2/Chapter_2"
          },
          links: [
            {
              label: "Britannica on Shelley's broader authorship",
              url: "https://www.britannica.com/question/What-did-Mary-Wollstonecraft-Shelley-write"
            }
          ]
        },
        {
          title: "Conrad: canonical English stylist or problem text of empire?",
          debate:
            "Conrad belongs to the English canon, yet his colonial settings and the afterlife of Heart of Darkness continually reopen the question whether he dismantles imperial ideology or reproduces it in refined form.",
          stakes:
            "This is a classic case of canon against counter-reading: a text can remain central and yet become more contested as postcolonial criticism changes the criteria by which greatness is judged.",
          quote: {
            original:
              "The conquest of the earth [...] is not a pretty thing when you look into it too much.",
            de: "Die Eroberung der Erde [...] ist keine schöne Sache, wenn man sie zu genau betrachtet.",
            en: "Original formulation in English.",
            sourceLabel: "Joseph Conrad, Heart of Darkness (Wikiquote / Wikisource)",
            sourceUrl: "https://en.wikiquote.org/wiki/Heart_of_Darkness"
          },
          links: [
            {
              label: "Britannica on Conrad's cross-national literary status",
              url: "https://www.britannica.com/biography/Joseph-Conrad"
            }
          ]
        },
        {
          title: "Virginia Woolf: high modernist icon or critique of the canon that made her exceptional?",
          debate:
            "Woolf is canonized as a central modernist, but her essays also expose how literary history systematically suppressed women’s writing. She is therefore both inside the canon and a critique of the canon’s rules.",
          stakes:
            "The case matters because it shifts literary history from a list of masterpieces to a question about material conditions, institutions, and the voices that never reached print.",
          quote: {
            original:
              "Anon, who wrote so many poems without signing them, was often a woman.",
            de: "Anon, die so viele Gedichte ohne Namen schrieb, war oft eine Frau.",
            en: "Original formulation in English.",
            sourceLabel: "Virginia Woolf, A Room of One's Own (Wikisource)",
            sourceUrl: "https://en.wikisource.org/wiki/A_Room_of_One%27s_Own_%28Harcourt_1929%29/Chapter_3"
          },
          links: [
            {
              label: "Britannica on Woolf, modernism, and the politics of power",
              url: "https://www.britannica.com/biography/Virginia-Woolf"
            }
          ]
        }
      ],
      others: [
        {
          language: "de",
          title: "German original version",
          summary:
            "Heine, Kafka, and Büchner test German literary history against exile, multilinguality, and anti-teleological period breaks. Full dossier in the DE menu."
        },
        {
          language: "fr",
          title: "French original version",
          summary:
            "Baudelaire, Flaubert, and Camus reopen disputes about modernity, obscenity trials, and the border between French and Algerian/francophone literary history. Full dossier in FR."
        },
        {
          language: "es",
          title: "Spanish original version",
          summary:
            "Cervantes, Lorca, and Borges reopen questions of Castilian centrality, Civil War memory, and the universal versus the national in Hispanophone literary history. Full dossier in ES."
        },
        {
          language: "ru",
          title: "Russian original version",
          summary:
            "Pushkin, Gogol, and Bulgakov show how Russian literary history is entangled with imperial memory, linguistic belonging, and censorship. Full dossier in RU."
        }
      ]
    },
    fr: {
      intro:
        "Le dossier français privilégie trois nœuds de conflit propres à l'historiographie littéraire en français: Baudelaire comme seuil disputé de la modernité, Flaubert comme point de friction entre esthétique et morale, et Camus comme cas-limite entre canon français, Algérie coloniale et espace francophone.",
      cases: [
        {
          title: "Baudelaire: modernité fondatrice ou scandale durable?",
          debate:
            "Baudelaire est aujourd'hui canonique, mais Les Fleurs du mal furent poursuivies et partiellement censurées. La poésie qui paraît aujourd'hui définir la modernité a d'abord été lue comme atteinte à la morale publique.",
          stakes:
            "Ce cas rappelle qu'un texte central du canon ne naît pas canonique. La modernité française s'est aussi constituée à travers le procès, le scandale et la relecture critique.",
          quote: {
            original: "Hypocrite lecteur, — mon semblable, — mon frère !",
            de: "Heuchlerischer Leser, mein Ebenbild, mein Bruder!",
            en: "Hypocritical reader, my likeness, my brother!",
            sourceLabel: "Charles Baudelaire, Les Fleurs du mal (Wikisource)",
            sourceUrl: "https://fr.wikisource.org/wiki/Page:Revue_des_Deux_Mondes_-_1855_-_tome_10.djvu/1086"
          },
          links: [
            {
              label: "Britannica sur Les Fleurs du mal et l'interdiction de 1857",
              url: "https://www.britannica.com/topic/Les-Fleurs-du-mal"
            }
          ]
        },
        {
          title: "Flaubert: réalisme majeur ou machine à détruire toute morale lisible?",
          debate:
            "Madame Bovary n'est pas seulement un 'grand roman réaliste'; le procès de 1857 transforme Flaubert en terrain de dispute entre esthétique, style impersonnel et responsabilité morale. Le roman entre au canon en restant litigieux.",
          stakes:
            "Le conflit montre qu'en France la valeur littéraire s'est souvent construite dans la tension entre exigence formelle, scandale judiciaire et soupçon d'immoralité.",
          quote: {
            original: "Nous étions à l'étude, quand le Proviseur entra [...].",
            de: "Wir waren im Unterricht, als der Direktor hereinkam [...].",
            en: "We were in class when the headmaster came in [...].",
            sourceLabel: "Gustave Flaubert, Madame Bovary (Wikisource)",
            sourceUrl: "https://fr.wikisource.org/wiki/Page:Flaubert_-_Madame_Bovary,_Conard,_1910.djvu/611"
          },
          links: [
            {
              label: "Britannica sur Madame Bovary et le tournant réaliste",
              url: "https://www.britannica.com/topic/Madame-Bovary-novel"
            }
          ]
        },
        {
          title: "Camus: écrivain français, algérien, pied-noir ou francophone disputé?",
          debate:
            "Camus appartient au canon français, mais sa place reste discutée dès qu'on prend au sérieux l'Algérie coloniale, la violence impériale et la séparation historiographique entre 'littérature française' et 'littératures francophones'.",
          stakes:
            "Le cas Camus oblige à demander si l'histoire littéraire en français peut encore se raconter à partir du seul Hexagone sans écraser les contextes coloniaux.",
          quote: {
            original: "Aujourd'hui, maman est morte.",
            de: "Heute ist Mama gestorben.",
            en: "Mother died today.",
            sourceLabel: "Albert Camus, L'Étranger (Wikiquote)",
            sourceUrl: "https://fr.wikiquote.org/wiki/Albert_Camus"
          },
          links: [
            {
              label: "Britannica sur la définition hexagonale de la littérature française",
              url: "https://www.britannica.com/art/French-literature"
            },
            {
              label: "Britannica sur Camus dans la littérature algérienne",
              url: "https://www.britannica.com/art/Algerian-literature"
            }
          ]
        }
      ],
      others: [
        {
          language: "de",
          title: "Version originale allemande",
          summary:
            "La version allemande suit Heine, Kafka et Büchner pour montrer comment l'exil, Prague et le Vormärz fissurent le récit national. Dossier complet via le menu DE."
        },
        {
          language: "en",
          title: "English original version",
          summary:
            "The English dossier links Shelley, Conrad, and Woolf to genre politics, empire, and feminist rewritings of literary history. Full version in EN."
        },
        {
          language: "es",
          title: "Versión original española",
          summary:
            "La versión española articula Cervantes, Lorca y Borges alrededor del centro castellano, la memoria de la guerra y la tradición hispanoamericana. Completa en ES."
        },
        {
          language: "ru",
          title: "Русская оригинальная версия",
          summary:
            "Русская версия связывает Пушкина, Гоголя и Булгакова с государством, империей, цензурой и поздним каноном. Полностью в RU."
        }
      ]
    },
    es: {
      intro:
        "El dossier en español reúne tres casos especialmente productivos para una historia literaria hispanohablante no reducida a un solo centro: Cervantes y el mito del origen moderno, Lorca entre canon y memoria de la Guerra Civil, y Borges entre tradición argentina, literatura hispanoamericana y circulación mundial.",
      cases: [
        {
          title: "Cervantes: origen de la novela moderna o centro castellanizante?",
          debate:
            "Cervantes suele figurar como comienzo de la novela moderna y como emblema máximo de la literatura española. Pero ese lugar central puede ocultar la pluralidad lingüística peninsular y convertir la tradición castellana en medida de todas las demás.",
          stakes:
            "El caso obliga a preguntar si 'literatura española' se cuenta desde una sola lengua hegemónica o si el canon debe abrirse a una historia más claramente plurilingüe y peninsular.",
          quote: {
            original: "yo soy aquel caballero de la Triste Figura",
            de: "ich bin jener Ritter von der traurigen Gestalt",
            en: "I am that knight of the sorrowful figure",
            sourceLabel: "Miguel de Cervantes, Don Quijote (Wikisource)",
            sourceUrl: "https://es.wikisource.org/wiki/El_ingenioso_hidalgo_Don_Quijote_de_la_Mancha_(1905)/Tomo_I/Cap%C3%ADtulo_XXXVII"
          },
          links: [
            {
              label: "Britannica sobre la centralidad castellana en la literatura española",
              url: "https://www.britannica.com/art/Spanish-literature"
            },
            {
              label: "Britannica sobre la persistencia de Cervantes",
              url: "https://www.britannica.com/story/cervantes-after-400-years"
            }
          ]
        },
        {
          title: "Lorca: símbolo nacional, poeta andaluz o problema de memoria histórica?",
          debate:
            "Lorca es canónico en la historia literaria española, pero su asesinato por fuerzas franquistas convierte su recepción en un campo de disputa entre estética, represión, sexualidad y memoria política.",
          stakes:
            "No se discute sólo cómo leer sus textos, sino también cómo integrar en la historia literaria una obra cuya canonización está atravesada por violencia estatal y por políticas posteriores de recuerdo.",
          quote: {
            original: "Verde que te quiero verde.",
            de: "Grün, wie ich dich grün begehre.",
            en: "Green, how I want you green.",
            sourceLabel: "Federico García Lorca, Romancero gitano (Wikisource)",
            sourceUrl: "https://es.wikisource.org/wiki/P%C3%A1gina:Romancero_gitano.djvu/37"
          },
          links: [
            {
              label: "Britannica sobre Lorca y su muerte bajo el franquismo",
              url: "https://www.britannica.com/biography/Federico-Garcia-Lorca"
            }
          ]
        },
        {
          title: "Borges: tradición argentina, canon hispanoamericano o biblioteca universal?",
          debate:
            "Borges desafía toda historia literaria nacional cerrada. Su lugar obliga a discutir si la tradición argentina debe definirse por color local o por apropiación libre de bibliotecas, mitos y formas universales.",
          stakes:
            "El caso cambia la periodización y también la escala: ya no basta con una línea nacional, porque Borges pertenece al mismo tiempo a la literatura argentina, hispanoamericana y mundial.",
          quote: {
            original: "Nuestro patrimonio es el universo.",
            de: "Unser Erbe ist das Universum.",
            en: "Our heritage is the universe.",
            sourceLabel: "Jorge Luis Borges, 'El escritor argentino y la tradición' (citado en Història da Historiografia)",
            sourceUrl: "https://www.historiadahistoriografia.com.br/revista/article/download/1492/841/6032"
          },
          links: [
            {
              label: "Britannica sobre Borges y la tradición moderna rioplatense",
              url: "https://www.britannica.com/art/Latin-American-literature/The-modern-novel"
            }
          ]
        }
      ],
      others: [
        {
          language: "de",
          title: "Deutsche Originalfassung",
          summary:
            "La versión alemana sigue a Heine, Kafka y Büchner para discutir exilio, pertenencia lingüística y quiebras anti-teleológicas. Completa en DE."
        },
        {
          language: "en",
          title: "English original version",
          summary:
            "The English version focuses on Mary Shelley, Conrad, and Woolf to rethink genre prestige, empire, and feminist literary history. Full dossier in EN."
        },
        {
          language: "fr",
          title: "Version originale française",
          summary:
            "La versión francesa articula a Baudelaire, Flaubert y Camus en torno a la modernidad, los procesos judiciales y el conflicto entre el Hexágono y Argelia. Completa en FR."
        },
        {
          language: "ru",
          title: "Русская оригинальная версия",
          summary:
            "Русская версия показывает на примере Пушкина, Гоголя и Булгакова, как канон связан с империей, государством и цензурой. Полностью в RU."
        }
      ]
    },
    ru: {
      intro:
        "Русское досье выделяет три особенно спорные зоны литературной истории: Пушкин как государственно закреплённый 'исток', Гоголь как узел русско-украинской принадлежности и Булгаков как фигура цензуры, поздней публикации и послесоветского сверхканона.",
      cases: [
        {
          title: "Пушкин: национальный исток или уже результат государственной канонизации?",
          debate:
            "Пушкин почти автоматически объявляется началом зрелой русской литературы. Но именно эта очевидность скрывает сложную работу школы, юбилеев, памятников и государственной культурной политики.",
          stakes:
            "Спорный момент здесь не в величии Пушкина, а в том, как фигура 'национального поэта' превращает открытую историю литературы в повествование об одном обязательном начале.",
          quote: {
            original: "Я памятник себе воздвиг нерукотворный,",
            de: "Ich habe mir ein Denkmal gesetzt, nicht von Menschenhand gemacht.",
            en: "I have raised a monument to myself not made by hands.",
            sourceLabel: "А. С. Пушкин, «Я памятник себе воздвиг нерукотворный» (Викитека)",
            sourceUrl: "https://ru.wikisource.org/wiki/%D0%AF_%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D1%81%D0%B5%D0%B1%D0%B5_%D0%B2%D0%BE%D0%B7%D0%B4%D0%B2%D0%B8%D0%B3_%D0%BD%D0%B5%D1%80%D1%83%D0%BA%D0%BE%D1%82%D0%B2%D0%BE%D1%80%D0%BD%D1%8B%D0%B9_%28%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD%29"
          },
          links: [
            {
              label: "Britannica о месте Пушкина в русской литературе",
              url: "https://www.britannica.com/art/Russian-literature"
            }
          ]
        },
        {
          title: "Гоголь: русский классик, украинский автор или имперский узел?",
          debate:
            "Гоголь каноничен для русской литературы, но его украинское происхождение и тематический материал давно делают его фигурой спора между национальными литературными историями.",
          stakes:
            "Этот случай показывает, что имперские литературы часто присваивают периферийные голоса как 'свои', стирая при этом исходную культурную множественность.",
          quote: {
            original: "Нет уз святее товарищества!",
            de: "Es gibt kein heiligeres Band als die Kameradschaft!",
            en: "There is no bond holier than comradeship!",
            sourceLabel: "Н. В. Гоголь, «Тарас Бульба» (Викитека)",
            sourceUrl: "https://ru.wikisource.org/wiki/%D0%A2%D0%B0%D1%80%D0%B0%D1%81_%D0%91%D1%83%D0%BB%D1%8C%D0%B1%D0%B0_%28%D0%93%D0%BE%D0%B3%D0%BE%D0%BB%D1%8C%29/%D0%93%D0%BB%D0%B0%D0%B2%D0%B0_IX"
          },
          links: [
            {
              label: "Britannica о Гоголе как украинце, писавшем по-русски",
              url: "https://www.britannica.com/biography/Nikolay-Gogol"
            }
          ]
        },
        {
          title: "Булгаков: запрещённый текст, поздний канон и миф о несгораемой рукописи",
          debate:
            "Булгаков сегодня входит в ядро русского канона, но его место создано не только качеством текста, а и историей травли, недопечатанности, самосожжения рукописей и поздней публикации.",
          stakes:
            "Здесь особенно ясно видно, что цензура не просто запрещает тексты: она меняет их посмертную судьбу, превращая роман в символ сопротивления литературного слова государству.",
          quote: {
            original: "Рукописи не горят.",
            de: "Manuskripte brennen nicht.",
            en: "Manuscripts do not burn.",
            sourceLabel: "Булгаковская формула о «Мастере и Маргарите» (Википедия/Викицитатник)",
            sourceUrl: "https://ru.wikipedia.org/wiki/%D0%A0%D1%83%D0%BA%D0%BE%D0%BF%D0%B8%D1%81%D0%B8_%D0%BD%D0%B5_%D0%B3%D0%BE%D1%80%D1%8F%D1%82"
          },
          links: [
            {
              label: "Britannica о поздней публикации и цензуре вокруг «Мастера и Маргариты»",
              url: "https://www.britannica.com/topic/The-Master-and-Margarita"
            }
          ]
        }
      ],
      others: [
        {
          language: "de",
          title: "Deutsche Originalfassung",
          summary:
            "Немецкая версия рассматривает Хайне, Кафку и Бюхнера как случаи изгнания, языковой принадлежности и разрыва линейной периодизации. Полностью в DE."
        },
        {
          language: "en",
          title: "English original version",
          summary:
            "The English version links Shelley, Conrad, and Woolf to genre prestige, empire, and feminist critique of the canon. Full dossier in EN."
        },
        {
          language: "fr",
          title: "Version originale française",
          summary:
            "Французская версия связывает Бодлера, Флобера и Камю с модерностью, судебным скандалом и колониальным измерением французского канона. Полностью в FR."
        },
        {
          language: "es",
          title: "Versión original española",
          summary:
            "Испанская версия на материале Сервантеса, Лорки и Борхеса показывает спор о кастильском центре, памяти войны и универсальной традиции. Полностью в ES."
        }
      ]
    }
  };

  function get(language) {
    return dossiers[language] || dossiers.en;
  }

  function getUi(language) {
    return ui[language] || ui.en;
  }

  window.LitDisputes = {
    get,
    getUi
  };
})();
