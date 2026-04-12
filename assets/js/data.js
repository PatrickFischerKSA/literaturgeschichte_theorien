(function () {
  const site = {
    title: "Theorien der Literaturgeschichtsschreibung",
    subtitle:
      "Digitale Lerneinheit zu Literaturgeschichte, Epochenkritik, Kanonisierung, Kulturpolitik und Digital Humanities",
    shortDescription:
      "Eine bilingual angelegte Lernumgebung für Maturand*innen: theoretisch anspruchsvoll, textnah, vergleichend und interaktiv.",
    teacherPassword: "kanon2026",
    teacherPasswordAliases: ["kanon", "literaturgeschichte", "kanon2026", "teacher", "lehrperson"],
    heroGoals: [
      "Literaturgeschichte als Konstruktion, Auswahl und Narrativ verstehen.",
      "Theoretische Modelle der Literaturgeschichtsschreibung vergleichen.",
      "Epochenbegriffe, Kanonbildung und Kulturpolitik kritisch befragen.",
      "Primärtexte gegen Ordnungsschemata lesen und transnational vergleichen.",
      "Digital Humanities als Ergänzung, Irritation und Korrektiv klassischer Literaturgeschichten nutzen."
    ],
    comparisonAxes: [
      "Werk vs. Kontext",
      "Autor vs. System",
      "Textimmanenz vs. historische Einbettung",
      "Kanon vs. Gegenkanon",
      "Epochenmodell vs. Ungleichzeitigkeit",
      "close reading vs. distant reading",
      "nationale Literaturgeschichte vs. transnationale Perspektive",
      "deutschsprachige Literaturgeschichte vs. andere literarische Traditionen"
    ],
    englishFocus: [
      {
        de: "Literaturgeschichtsschreibung",
        en: "literature historiography"
      },
      {
        de: "Kanonisierung",
        en: "canonization"
      },
      {
        de: "Epoche",
        en: "epoch"
      },
      {
        de: "Periodisierung",
        en: "periodization"
      },
      {
        de: "textnahe Lektüre",
        en: "close reading"
      },
      {
        de: "distant reading",
        en: "distant reading"
      },
      {
        de: "Rezeptionsästhetik",
        en: "reception aesthetics"
      },
      {
        de: "Strukturalismus",
        en: "structuralism"
      },
      {
        de: "Diskurs",
        en: "discourse"
      }
    ],
    footerNote:
      "Alle Lernstände werden nur lokal im Browser gespeichert. Der Lehrpersonenmodus arbeitet rein clientseitig und ist deshalb bewusst als schulpraktische, nicht als sicherheitskritische Lösung angelegt."
  };

  const dhCorpus = [
    { id: "c1", author: "Johann Wolfgang Goethe", title: "Faust I", year: 1808, language: "Deutsch", gender: "männlich", canonStatus: "kanonisch", theme: "Bildung", form: "Drama", region: "deutschsprachig" },
    { id: "c2", author: "Friedrich Schiller", title: "Maria Stuart", year: 1800, language: "Deutsch", gender: "männlich", canonStatus: "kanonisch", theme: "Macht", form: "Drama", region: "deutschsprachig" },
    { id: "c3", author: "Heinrich Heine", title: "Deutschland. Ein Wintermärchen", year: 1844, language: "Deutsch", gender: "männlich", canonStatus: "kanonisch", theme: "Nation", form: "Versepos", region: "deutschsprachig" },
    { id: "c4", author: "Georg Büchner", title: "Woyzeck", year: 1836, language: "Deutsch", gender: "männlich", canonStatus: "revidiert", theme: "Soziale Ungleichheit", form: "Drama", region: "deutschsprachig" },
    { id: "c5", author: "Theodor Fontane", title: "Effi Briest", year: 1895, language: "Deutsch", gender: "männlich", canonStatus: "kanonisch", theme: "Gesellschaft", form: "Roman", region: "deutschsprachig" },
    { id: "c6", author: "Franz Kafka", title: "Die Verwandlung", year: 1915, language: "Deutsch", gender: "männlich", canonStatus: "kanonisch", theme: "Entfremdung", form: "Erzählung", region: "mitteleuropäisch" },
    { id: "c7", author: "Bertolt Brecht", title: "Mutter Courage und ihre Kinder", year: 1939, language: "Deutsch", gender: "männlich", canonStatus: "kanonisch", theme: "Krieg", form: "Drama", region: "deutschsprachig" },
    { id: "c8", author: "Ingeborg Bachmann", title: "Malina", year: 1971, language: "Deutsch", gender: "weiblich", canonStatus: "revidiert", theme: "Subjektivität", form: "Roman", region: "österreichisch" },
    { id: "c9", author: "Christa Wolf", title: "Kassandra", year: 1983, language: "Deutsch", gender: "weiblich", canonStatus: "revidiert", theme: "Erinnerung", form: "Erzählung", region: "deutschsprachig" },
    { id: "c10", author: "Annette von Droste-Hülshoff", title: "Die Judenbuche", year: 1842, language: "Deutsch", gender: "weiblich", canonStatus: "revidiert", theme: "Schuld", form: "Novelle", region: "deutschsprachig" },
    { id: "c11", author: "Mary Shelley", title: "Frankenstein", year: 1818, language: "Englisch", gender: "weiblich", canonStatus: "revidiert", theme: "Wissen", form: "Roman", region: "englischsprachig" },
    { id: "c12", author: "Virginia Woolf", title: "A Room of One's Own", year: 1929, language: "Englisch", gender: "weiblich", canonStatus: "kanonisch", theme: "Gender", form: "Essay", region: "englischsprachig" },
    { id: "c13", author: "Charles Baudelaire", title: "Les Fleurs du mal", year: 1857, language: "Französisch", gender: "männlich", canonStatus: "kanonisch", theme: "Moderne", form: "Lyrik", region: "frankophon" },
    { id: "c14", author: "Gustave Flaubert", title: "Madame Bovary", year: 1857, language: "Französisch", gender: "männlich", canonStatus: "kanonisch", theme: "Begehren", form: "Roman", region: "frankophon" },
    { id: "c15", author: "Albert Camus", title: "L'Étranger", year: 1942, language: "Französisch", gender: "männlich", canonStatus: "kanonisch", theme: "Absurdität", form: "Roman", region: "frankophon" },
    { id: "c16", author: "George Sand", title: "Indiana", year: 1832, language: "Französisch", gender: "weiblich", canonStatus: "marginalisiert", theme: "Gender", form: "Roman", region: "frankophon" },
    { id: "c17", author: "Miguel de Cervantes", title: "Don Quijote", year: 1605, language: "Spanisch", gender: "männlich", canonStatus: "kanonisch", theme: "Fiktion", form: "Roman", region: "hispanophon" },
    { id: "c18", author: "Federico García Lorca", title: "Romancero gitano", year: 1928, language: "Spanisch", gender: "männlich", canonStatus: "revidiert", theme: "Identität", form: "Lyrik", region: "hispanophon" },
    { id: "c19", author: "Jorge Luis Borges", title: "Ficciones", year: 1944, language: "Spanisch", gender: "männlich", canonStatus: "kanonisch", theme: "Labyrinth", form: "Erzählung", region: "hispanophon" },
    { id: "c20", author: "Emilia Pardo Bazán", title: "Los Pazos de Ulloa", year: 1886, language: "Spanisch", gender: "weiblich", canonStatus: "marginalisiert", theme: "Klasse", form: "Roman", region: "hispanophon" },
    { id: "c21", author: "Alexander Puschkin", title: "Eugen Onegin", year: 1833, language: "Russisch", gender: "männlich", canonStatus: "kanonisch", theme: "Gesellschaft", form: "Versroman", region: "russisch" },
    { id: "c22", author: "Nikolai Gogol", title: "Der Mantel", year: 1842, language: "Russisch", gender: "männlich", canonStatus: "kanonisch", theme: "Bürokratie", form: "Erzählung", region: "russisch" },
    { id: "c23", author: "Lew Tolstoi", title: "Anna Karenina", year: 1878, language: "Russisch", gender: "männlich", canonStatus: "kanonisch", theme: "Gesellschaft", form: "Roman", region: "russisch" },
    { id: "c24", author: "Fjodor Dostojewski", title: "Schuld und Sühne", year: 1866, language: "Russisch", gender: "männlich", canonStatus: "kanonisch", theme: "Schuld", form: "Roman", region: "russisch" },
    { id: "c25", author: "Anna Achmatowa", title: "Requiem", year: 1938, language: "Russisch", gender: "weiblich", canonStatus: "revidiert", theme: "Staatliche Gewalt", form: "Lyrik", region: "russisch" },
    { id: "c26", author: "Michail Bulgakow", title: "Der Meister und Margarita", year: 1967, language: "Russisch", gender: "männlich", canonStatus: "revidiert", theme: "Zensur", form: "Roman", region: "russisch" }
  ];

  const modules = [
    {
      id: "mod-1",
      navTitle: "Modul 1",
      title: "Modul 1: Was ist Literaturgeschichte?",
      subtitle: "Konstruktion, Auswahl, Narrativ und kulturelles Gedächtnis",
      intro:
        "Dieses Modul legt das begriffliche Fundament. Literaturgeschichte erscheint hier nicht als neutrale Liste von Werken, sondern als ein Deutungsfeld, das auswählt, ordnet, gewichtet und verbindet.",
      goals: [
        "Literaturgeschichte als perspektivische Konstruktion erklären.",
        "Selektivität, Teleologie und Kontingenz unterscheiden.",
        "Das Verhältnis von Werk, Autor, Institution und Leserschaft reflektieren.",
        "Die Rolle von Literaturgeschichte im kulturellen Gedächtnis benennen."
      ],
      sections: [
        {
          title: "Literaturgeschichte ist mehr als Chronologie",
          html: `
            <p>Chronologie ordnet Texte entlang von Daten. Literaturgeschichtsschreibung ordnet dieselben Texte zusätzlich nach Bedeutungen, Wendepunkten, Wertungen und Erzählbögen. Schon die Entscheidung, wo eine Entwicklung beginnt, welche Texte als innovativ gelten oder welche Namen als repräsentativ erscheinen, produziert ein Narrativ.</p>
            <div class="info-grid">
              <article class="info-box definition">
                <h4>Definition</h4>
                <p>Literaturgeschichte ist eine <strong>selektive Erzählung</strong> über Texte, Institutionen, Autor*innen, Gattungen und Rezeptionsprozesse.</p>
              </article>
              <article class="info-box example">
                <h4>Beispiel</h4>
                <p>Die Behauptung, die Moderne beginne mit Baudelaire, erzählt anders als die Behauptung, sie beginne mit Flaubert, Kafka oder der Industrialisierung.</p>
              </article>
              <article class="info-box criticism">
                <h4>Kritik</h4>
                <p>Lineare Erfolgsgeschichten unterschlagen Sackgassen, Alternativen, regionale Unterschiede und Texte, die nicht in dominante Muster passen.</p>
              </article>
              <article class="info-box english">
                <h4>English focus</h4>
                <p><strong>Literature historiography</strong> does not merely list texts; it narrates relations, values, and turning points.</p>
              </article>
            </div>
          `
        },
        {
          title: "Ordnungssystem, Institution und Macht",
          html: `
            <p>Literaturgeschichte verbindet einzelne Werke mit Schulkanon, Universität, Verlagswesen, Kritik, Prüfungswesen und kulturellem Gedächtnis. Sie ist deshalb nie nur wissenschaftliche Beschreibung, sondern immer auch Teil einer gesellschaftlichen Ordnung von Sichtbarkeit.</p>
            <p>Das Verhältnis von <strong>Werk, Autor, Institution, Leserschaft und Gesellschaft</strong> bleibt umstritten: Manche Ansätze erklären Literatur vor allem aus historischen Kontexten, andere aus formalen Strukturen, wieder andere aus Rezeptionsbedingungen oder Systemlogiken.</p>
            <div class="comparison-strip">
              <div><span>Werk</span><p>ästhetische Form, Motivik, Gattung, Sprache</p></div>
              <div><span>Autor</span><p>Biografie, Position im Feld, Schreibstrategien</p></div>
              <div><span>Institution</span><p>Schule, Universität, Verlag, Zensur, Kritik</p></div>
              <div><span>Leserschaft</span><p>Erwartungshorizonte, Wirkung, Aneignung</p></div>
              <div><span>Gesellschaft</span><p>Macht, Konflikt, Nation, Klasse, Gender</p></div>
            </div>
          `
        },
        {
          title: "Kulturelles Gedächtnis und Kontingenz",
          html: `
            <p>Literaturgeschichten stabilisieren kulturelles Gedächtnis, indem sie manche Texte dauerhaft präsent halten. Zugleich ist jede Auswahl kontingent: Andere Archive, andere Fragen oder andere politische Konstellationen führen zu anderen Geschichten. Diese Einsicht relativiert nicht alles, aber sie macht jede Periodisierung und jede Kanonbildung erklärungsbedürftig.</p>
            <aside class="language-aside">
              <h4>Vergleichsimpuls FR / ES / RU</h4>
              <p><strong>Französisch:</strong> <em>canon littéraire</em> betont häufig das Zusammenspiel von Schule und Nation. <strong>Spanisch:</strong> <em>canon</em> kann iberische und lateinamerikanische Perspektiven unterschiedlich bündeln. <strong>Russisch:</strong> <em>канон</em> ist eng mit Zensur-, Editions- und Erinnerungsgeschichte verbunden.</p>
            </aside>
          `
        }
      ],
      tasks: [
        {
          id: "m1_t1",
          type: "single-choice",
          title: "Grundannahme prüfen",
          prompt: "Welche Aussage trifft den Konstruktionscharakter von Literaturgeschichte am besten?",
          help: "Wähle die präziseste Formulierung, nicht die scheinbar neutralste.",
          options: [
            { id: "a", label: "Literaturgeschichte ist eine wertfreie Auflistung aller Texte eines Zeitraums." },
            { id: "b", label: "Literaturgeschichte ist eine perspektivische Ordnung von Texten, Autor*innen und Deutungen." },
            { id: "c", label: "Literaturgeschichte entsteht nur aus Autorbiografien und politischer Geschichte." },
            { id: "d", label: "Literaturgeschichte ist vor allem dann zuverlässig, wenn sie auf Epochenbegriffe verzichtet." }
          ],
          correctOptionIds: ["b"],
          firstHint: "Achte darauf, ob Auswahl und Perspektive ausdrücklich mitgedacht werden.",
          secondHint: "Die passende Antwort verbindet Ordnung mit Konstruktion, nicht mit neutraler Vollständigkeit.",
          explanation: "Literaturgeschichte ordnet und bewertet. Genau deshalb ist sie argumentativ und perspektivisch.",
          modelAnswer:
            "Richtig ist die Aussage, dass Literaturgeschichte eine perspektivische Ordnung von Texten, Autor*innen und Deutungen ist. Sie bildet nicht einfach ab, sondern strukturiert und gewichtet."
        },
        {
          id: "m1_t2",
          type: "matching",
          title: "DE/EN-Key-Terms",
          prompt: "Ordne die deutschen Begriffe den passenden englischen Begriffen zu.",
          help: "Diese Aufgabe trainiert die bilinguale Fachsprache, nicht bloss Vokabelwissen.",
          pairs: [
            { left: "Literaturgeschichtsschreibung", right: "literature historiography" },
            { left: "Kanonisierung", right: "canonization" },
            { left: "Periodisierung", right: "periodization" },
            { left: "textnahe Lektüre", right: "close reading" }
          ],
          firstHint: "Suche nach Begriffen, die nicht nur lexikalisch, sondern fachlich zusammengehören.",
          secondHint: "Achte besonders auf den Unterschied zwischen canon und canonization.",
          explanation: "Die Paarungen zeigen, dass Fachsprache Begriffe nicht eins zu eins übersetzt, sondern begrifflich präzise abgrenzt.",
          modelAnswer:
            "Literaturgeschichtsschreibung = literature historiography; Kanonisierung = canonization; Periodisierung = periodization; textnahe Lektüre = close reading."
        },
        {
          id: "m1_t3",
          type: "short-text",
          title: "Chronologie oder Narrativ?",
          prompt: "Erkläre in drei bis fünf Sätzen den Unterschied zwischen einer blossen Chronologie und einer literaturgeschichtlichen Erzählung.",
          help: "Nenne mindestens Auswahl, Ordnung und Deutung.",
          placeholder: "Eine Chronologie ...",
          conceptGroups: [
            { label: "Auswahl", variants: ["auswahl", "selektiv", "nicht alles", "selektion"] },
            { label: "Ordnung", variants: ["ordnung", "struktur", "gliederung", "periodisierung"] },
            { label: "Deutung", variants: ["deutung", "interpretation", "narrativ", "erzählt", "wertet"] },
            { label: "Nicht neutral", variants: ["nicht neutral", "perspektiv", "konstruiert", "kontingent"] }
          ],
          successThreshold: 3,
          firstHint: "Noch fehlt mindestens eine Dimension zwischen Daten und Deutung.",
          secondHint: "Eine starke Antwort sagt, dass Literaturgeschichte Texte auswählt, ordnet und in ein sinnhaftes Narrativ bringt.",
          modelAnswer:
            "Eine Chronologie ordnet Texte nur nach Daten. Eine literaturgeschichtliche Erzählung wählt Texte aus, gruppiert sie nach Kriterien, verbindet sie mit Wertungen und behauptet Zusammenhänge. Dadurch entsteht ein Narrativ, das nie völlig neutral ist, sondern Perspektiven und Interessen enthält."
        },
        {
          id: "m1_t4",
          type: "multi-select",
          title: "Ordnungsinstanzen erkennen",
          prompt: "Welche Instanzen prägen Literaturgeschichte und kulturelles Gedächtnis besonders stark?",
          help: "Wähle alle stimmigen Antworten.",
          options: [
            { id: "a", label: "Schule und Prüfungswesen" },
            { id: "b", label: "Universität und Literaturwissenschaft" },
            { id: "c", label: "Verlage, Editionen und Feuilleton" },
            { id: "d", label: "Nur die private Lieblingslektüre einzelner Leser*innen" },
            { id: "e", label: "Archive, Bibliotheken und digitale Sammlungen" }
          ],
          correctOptionIds: ["a", "b", "c", "e"],
          firstHint: "Denke an Institutionen, die Sichtbarkeit organisieren.",
          secondHint: "Nicht die individuelle Vorliebe allein, sondern stabile Vermittlungsinstanzen sind entscheidend.",
          explanation:
            "Schule, Universität, Verlage, Archive und Kritik schaffen Dauerpräsenz. Einzelne Lektüren sind wichtig, aber sie institutionalisieren noch keinen Kanon.",
          modelAnswer:
            "Prägend sind Schule und Prüfungswesen, Universität und Literaturwissenschaft, Verlage und Feuilleton sowie Archive und digitale Sammlungen."
        }
      ],
      teacher: {
        use: "Als Einstieg in eine Doppelstunde oder als vorbereitende Hausarbeit.",
        socialForms: ["Einzelarbeit", "Partnervergleich nach Aufgabe 3", "Kurzplenum zur Frage der Neutralität"],
        didactics:
          "Dieses Modul verschiebt die Ausgangsfrage von 'Welche Epoche kommt wann?' zu 'Wer ordnet mit welchen Kriterien?'. Erst diese Irritation ermöglicht die folgenden theoretischen Module.",
        assessment: "Achte darauf, ob Lernende Ordnung, Perspektive und institutionelle Rahmung zusammendenken."
      }
    },
    {
      id: "mod-2",
      navTitle: "Modul 2",
      title: "Modul 2: Klassische theoretische Ansätze",
      subtitle: "Modelle der Literaturgeschichtsschreibung im Vergleich",
      intro:
        "Die folgenden Ansätze liefern keine austauschbaren Rezepte, sondern unterschiedliche Erkenntnisinteressen. Jede Perspektive macht etwas sichtbar und blendet anderes aus.",
      goals: [
        "Zentrale Ansätze historisch und erkenntnistheoretisch einordnen.",
        "Fragen, Chancen und Kritikpunkte der Ansätze vergleichen.",
        "Mini-Transfers auf Primärtexte vornehmen.",
        "Modelle nicht absolut setzen, sondern relational denken."
      ],
      approaches: [
        {
          name: "Positivistische Literaturgeschichtsschreibung",
          keyTerms: ["Empirie", "Quellen", "Dokumentation"],
          definition: "Literatur wird vor allem über überprüfbare Fakten, Quellen, Datierungen, Einflüsse und biografisch-historische Kontexte erschlossen.",
          history: "Vor allem im 19. Jahrhundert stark; eng mit Historismus, Philologie und Editionsarbeit verbunden.",
          epistemology: "Erkenntnis beruht auf belegbaren Daten, Kausalzusammenhängen und dokumentierbaren Kontexten.",
          questions: ["Wann erschien ein Werk?", "Welche Quellen lagen vor?", "Welche Einflüsse und historischen Bedingungen lassen sich belegen?"],
          chances: ["sichert Faktenbasis", "schärft Quellenkritik", "verhindert reine Impressionistik"],
          critique: ["reduziert Literatur leicht auf Ursachen", "übersieht ästhetische Eigenlogiken", "erzeugt oft lineare Kausalmodelle"],
          exercise: "Nenne drei Informationen, die ein positivistischer Zugriff zu Kafkas Publikationssituation sammeln würde.",
          transfer: "Bei Mary Shelley würde der Ansatz nach naturwissenschaftlichen Debatten, Reisesituationen, Lektüren und Publikationsbedingungen fragen."
        },
        {
          name: "Geistesgeschichtlicher Ansatz",
          keyTerms: ["Zeitgeist", "Idee", "Weltanschauung"],
          definition: "Literatur wird als Ausdruck übergreifender geistiger Strömungen, Weltbilder oder Denkformen einer Epoche gelesen.",
          history: "Vor allem im frühen 20. Jahrhundert wirksam; reagiert auf die Suche nach historischen Ganzheiten und Sinnformationen.",
          epistemology: "Texte gelten als Manifestationen eines geschichtlichen Geistes oder einer kulturellen Leitidee.",
          questions: ["Welche Weltanschauung prägt die Epoche?", "Wie verdichtet ein Werk einen historischen Geist?", "Welche Leitideen organisieren eine Zeit?"],
          chances: ["macht intellektuelle Horizonte sichtbar", "ermöglicht Synthesen", "verknüpft Literatur mit Ideengeschichte"],
          critique: ["neigt zur Homogenisierung", "übersieht innere Widersprüche", "stabilisiert Epochen oft zu stark"],
          exercise: "Formuliere eine mögliche geistesgeschichtliche Leitidee für die Weimarer Klassik.",
          transfer: "Goethe und Schiller würden hier als Ausdruck eines humanistischen Bildungsprogramms gelesen."
        },
        {
          name: "Werkimmanente Interpretation / Formalismus / New Criticism",
          keyTerms: ["Form", "Close Reading", "Verfahren"],
          definition: "Im Zentrum stehen sprachliche Form, Struktur, Motivführung, Perspektive, Ambiguität und literarische Verfahren.",
          history: "Russischer Formalismus seit den 1910er Jahren; New Criticism besonders im anglophonen Raum des 20. Jahrhunderts.",
          epistemology: "Erkenntnis entsteht aus genauer Analyse textinterner Organisation, nicht primär aus Biografie oder Zeitkontext.",
          questions: ["Wie ist der Text gebaut?", "Welche Spannungen und Muster erzeugt die Form?", "Wie arbeitet der Text mit Wiederholung, Ironie oder Verfremdung?"],
          chances: ["schärft textnahe Genauigkeit", "verhindert vorschnelle Kontextauflösung", "macht literarische Verfahren sichtbar"],
          critique: ["blendet Institutionen, Politik und Rezeption leicht aus", "übersieht soziale Asymmetrien", "kann Werke isolieren"],
          exercise: "Nenne zwei formale Merkmale, auf die du bei Brechts epischem Theater achten würdest.",
          transfer: "Bei Kafkas 'Die Verwandlung' würde man Erzählton, Lakonik, Perspektive und Motivketten untersuchen."
        },
        {
          name: "Marxistische Literaturtheorie",
          keyTerms: ["Klasse", "Ideologie", "Materialität"],
          definition: "Literatur wird auf Produktionsverhältnisse, Klassenkonflikte, Ideologiekritik und gesellschaftliche Widersprüche bezogen.",
          history: "Seit dem 19. Jahrhundert; vielfältig weiterentwickelt in kritischer Theorie, Ideologiekritik und materialistischer Kulturtheorie.",
          epistemology: "Texte sind weder rein autonom noch blosse Spiegel, sondern Teil gesellschaftlicher Praxis und ideologischer Auseinandersetzungen.",
          questions: ["Welche gesellschaftlichen Widersprüche werden sichtbar?", "Wie wird Herrschaft ästhetisch verarbeitet?", "Welche Perspektiven fehlen?"],
          chances: ["macht Macht- und Klassenverhältnisse sichtbar", "verbindet Ästhetik mit Gesellschaft", "fragt nach materiellen Bedingungen"],
          critique: ["kann ästhetische Komplexität funktionalisieren", "neigt gelegentlich zu Reduktion auf Klassenlogik", "unterschätzt Offenheit von Rezeption"],
          exercise: "Welche soziale Asymmetrie wäre bei Büchners 'Woyzeck' zentral?",
          transfer: "Bei Fontanes 'Effi Briest' würde ein marxistisch informierter Zugriff Klassenlage, Geschlechterordnung und soziale Reproduktion mitlesen."
        },
        {
          name: "Rezeptionsästhetik",
          keyTerms: ["Leserschaft", "Wirkung", "Erwartungshorizont"],
          definition: "Literaturgeschichte wird auch als Geschichte von Lektüren, Erwartungen, Irritationen und veränderten Deutungsweisen verstanden.",
          history: "Seit den 1960er Jahren, besonders mit Jauss und Iser.",
          epistemology: "Sinn entsteht nicht allein im Werk, sondern im Verhältnis von Textstruktur und historischer Lektüre.",
          questions: ["Wie wurde ein Text zuerst gelesen?", "Welche Erwartungen erfüllt oder bricht er?", "Wie verändert sich seine Bedeutung im Laufe der Zeit?"],
          chances: ["macht Wandelbarkeit sichtbar", "erklärt Kanonrevisionen", "bezieht Leserschaft systematisch ein"],
          critique: ["Leser*innenkategorien bleiben oft abstrakt", "Materialität von Institutionen kann unterbelichtet bleiben"],
          exercise: "Warum konnte Mary Shelley im 19. Jahrhundert anders gelesen werden als heute?",
          transfer: "Die spätere Aufwertung von 'Frankenstein' zeigt, dass Literaturgeschichte stark rezeptionsgeschichtlich dynamisch ist."
        },
        {
          name: "Strukturalismus",
          keyTerms: ["System", "Relation", "Code"],
          definition: "Ein Text oder eine Textgruppe wird als System von Differenzen, Regeln und wiederkehrenden Strukturen beschrieben.",
          history: "Besonders seit Mitte des 20. Jahrhunderts; beeinflusst von Linguistik und Anthropologie.",
          epistemology: "Bedeutung entsteht relational. Einzelphänomene werden über ihre Position im System verständlich.",
          questions: ["Welche Oppositionen strukturieren den Text?", "Welche Gattungsregeln und Codes greifen?", "Welche Muster wiederholen sich?"],
          chances: ["macht regelhafte Muster sichtbar", "vergleichende Analysen werden präziser", "verschiebt den Fokus von Einzelgenie zu Struktur"],
          critique: ["Geschichte und Macht treten leicht zurück", "Subjektivität wird unterbestimmt", "zu starre Systemmodelle können Differenz glätten"],
          exercise: "Welche Oppositionen könnte man in 'Don Quijote' oder 'Faust I' strukturalistisch untersuchen?",
          transfer: "Bei Baudelaire wäre interessant, wie Gegensatzpaare wie Reinheit/Verfall oder Stadt/Ideal organisiert werden."
        },
        {
          name: "Poststrukturalismus / Dekonstruktion",
          keyTerms: ["Differenz", "Instabilität", "Aporie"],
          definition: "Texte werden auf innere Spannungen, Brüche, Hierarchien und Bedeutungsverschiebungen hin gelesen, die keine stabile Mitte erlauben.",
          history: "Seit den 1960er Jahren; stark geprägt durch Derrida, Foucault und verwandte Diskursansätze.",
          epistemology: "Bedeutung ist nie endgültig fixierbar; Texte produzieren Überschüsse, Widerstände und Selbstunterlaufungen.",
          questions: ["Welche Opposition trägt der Text auf und destabilisiert sie zugleich?", "Wo kippt eine scheinbar feste Bedeutung?", "Welche Ränder sprechen mit?"],
          chances: ["schärft Sensibilität für Ambivalenz", "hinterfragt Hierarchien", "kritisiert scheinbare Selbstverständlichkeiten"],
          critique: ["kann historische Bestimmungen verflüchtigen", "wirkt für Einsteiger*innen oft abstrakt", "Normfragen bleiben mitunter offen"],
          exercise: "Suche in einem bekannten Werk ein Gegensatzpaar, das nicht stabil bleibt.",
          transfer: "Kafka eignet sich besonders, weil klare Zuschreibungen ständig ins Gleiten geraten."
        },
        {
          name: "New Historicism",
          keyTerms: ["Diskurs", "Macht", "Zirkulation"],
          definition: "Literarische Texte werden mit nichtliterarischen Diskursen, Praktiken und Machtformationen zusammengedacht.",
          history: "Seit den 1980er Jahren, besonders im anglophonen Raum.",
          epistemology: "Texte und Kontexte stehen nicht einfach hierarchisch zueinander; beide zirkulieren in kulturellen Aushandlungen.",
          questions: ["Welche Machtformationen durchziehen den Text?", "Mit welchen nichtliterarischen Diskursen ist er verflochten?", "Wie zirkulieren kulturelle Energien?"],
          chances: ["verbindet Text und Kontext subtil", "vermeidet platte Spiegelungsmodelle", "macht Macht und Materialität sichtbar"],
          critique: ["kann Literatur im Kontextnetz auflösen", "theoretische Begriffe bleiben bisweilen unscharf"],
          exercise: "Welche ausserliterarischen Diskurse wären für Brechts 'Galilei' relevant?",
          transfer: "Camus kann so mit Kolonialgeschichte, Presse, Gerichtssprache und moralischen Regimen zusammen gelesen werden."
        },
        {
          name: "Systemtheorie",
          keyTerms: ["Kommunikation", "Funktion", "Autopoiesis"],
          definition: "Literatur erscheint als Teil eines gesellschaftlichen Systems mit eigenen Kommunikationsformen und Anschlusslogiken.",
          history: "Besonders seit den 1970er und 1980er Jahren im Anschluss an Luhmann wirksam.",
          epistemology: "Nicht das einzelne Bewusstsein, sondern kommunikative Operationen und Systemgrenzen stehen im Zentrum.",
          questions: ["Wie unterscheidet das Literatursystem literarisch/nichtliterarisch?", "Welche Funktionen erfüllen Texte im System?", "Wie erzeugen Institutionen Anschlussfähigkeit?"],
          chances: ["verschiebt den Blick von Genialität auf Strukturen", "erklärt Institutionen präzise", "passt gut zu Medien- und Feldfragen"],
          critique: ["kann Akteur*innen entdramatisieren", "wirkt oft begrifflich kühl", "normative Konflikte erscheinen abgeblendet"],
          exercise: "Warum wäre ein Bestseller allein noch kein literaturhistorischer Beweis für Kanonstatus?",
          transfer: "Die späte Kanonisierung von Bachmann lässt sich als Veränderung von Anschlussmustern im Literatursystem lesen."
        },
        {
          name: "Kulturwissenschaftliche und postkoloniale Erweiterungen",
          keyTerms: ["Transnationalität", "Machtkritik", "Zentrum/Peripherie"],
          definition: "Diese Erweiterungen fragen nach Medien, Erinnerung, Geschlecht, Kolonialität, Übersetzung und globalen Ungleichheiten.",
          history: "Seit dem späten 20. Jahrhundert stark; reagiert auf Eurozentrismus und Engführungen nationaler Literaturgeschichten.",
          epistemology: "Literatur steht in medialen, transkulturellen und machtpolitischen Verflechtungen; Nation ist nur eine Perspektive unter mehreren.",
          questions: ["Wer wird ausgeschlossen?", "Welche kolonialen oder imperialen Raster strukturieren Kanon und Periodisierung?", "Wie verändern Übersetzungen literarische Sichtbarkeit?"],
          chances: ["öffnet den Kanon", "kritisiert Eurozentrismus", "macht Gender-, Sprach- und Machtasymmetrien sichtbar"],
          critique: ["kann sehr weite Kontexte erzeugen", "bei unscharfer Anwendung droht Schlagwortgebrauch"],
          exercise: "Formuliere eine Frage, mit der man Lorca oder Achmatowa gegen nationale Schablonen lesen könnte.",
          transfer: "Bei Borges oder Camus wird sichtbar, dass Literaturgeschichte nicht an klaren Nationalgrenzen endet."
        }
      ],
      sections: [
        {
          title: "Wie man mit Theoriemodellen arbeitet",
          html: `
            <p>Keiner der Ansätze ist 'die richtige Lösung'. Im Unterricht und in der Forschung sind sie produktiv, wenn sie als <strong>Fragegeneratoren</strong> dienen. Eine gute literaturwissenschaftliche Praxis kann textnahe Präzision, historische Einbettung, Rezeptionsgeschichte und Machtkritik miteinander ins Gespräch bringen.</p>
            <div class="info-box example">
              <h4>Didaktischer Tipp</h4>
              <p>Frage nie nur: Welcher Ansatz ist richtig? Frage stattdessen: <em>Was macht dieser Ansatz sichtbar, und was blendet er aus?</em></p>
            </div>
          `
        }
      ],
      tasks: [
        {
          id: "m2_t1",
          type: "matching",
          title: "Ansatz und Leitfrage",
          prompt: "Ordne jedem Ansatz die typische Leitfrage zu.",
          help: "Achte auf das Erkenntnisinteresse, nicht auf einzelne Schlagwörter.",
          pairs: [
            { left: "Rezeptionsästhetik", right: "Wie verändern sich Lektüren und Erwartungshorizonte?" },
            { left: "Werkimmanenz / New Criticism", right: "Wie organisiert die Form ihre Bedeutung?" },
            { left: "Marxistische Theorie", right: "Welche gesellschaftlichen Widersprüche werden im Text bearbeitet?" },
            { left: "Systemtheorie", right: "Wie operiert Literatur als Kommunikationssystem?" }
          ],
          firstHint: "Prüfe, ob der Ansatz eher Textstruktur, Rezeption, Gesellschaft oder Systemlogik fokussiert.",
          secondHint: "Erwartungshorizont gehört nicht zur Werkimmanenz; Systemoperation nicht zur Marx-Lektüre.",
          explanation: "Leitfragen sind gute Wegweiser, um Ansätze voneinander zu unterscheiden, ohne sie zu karikieren.",
          modelAnswer:
            "Rezeptionsästhetik = Lektüren und Erwartungshorizonte; Werkimmanenz = Form und Struktur; Marxistische Theorie = gesellschaftliche Widersprüche; Systemtheorie = Kommunikationssystem."
        },
        {
          id: "m2_t2",
          type: "order",
          title: "Historische Grobordnung",
          prompt: "Ordne diese Ansätze grob nach ihrer historischen Etablierung vom älteren zum jüngeren Schwerpunkt.",
          help: "Es geht um ungefähre wissenschaftsgeschichtliche Reihenfolge.",
          items: [
            { id: "a", label: "Positivistische Literaturgeschichtsschreibung" },
            { id: "b", label: "Werkimmanenz / Formalismus / New Criticism" },
            { id: "c", label: "Rezeptionsästhetik" },
            { id: "d", label: "New Historicism" }
          ],
          correctOrder: ["a", "b", "c", "d"],
          firstHint: "Beginne im 19. Jahrhundert und arbeite dich ins späte 20. Jahrhundert vor.",
          secondHint: "Rezeptionsästhetik liegt zeitlich zwischen New Criticism und New Historicism.",
          explanation: "Die Reihenfolge ist grob, aber sie macht sichtbar, wie sich die Fragestellungen verschoben haben.",
          modelAnswer:
            "Positivismus → Werkimmanenz/Formalismus/New Criticism → Rezeptionsästhetik → New Historicism."
        },
        {
          id: "m2_t3",
          type: "multi-select",
          title: "Formalistischer Blick",
          prompt: "Welche Beobachtungen passen besonders gut zu einer werkimmanenten oder formalistischen Lektüre von Kafka?",
          help: "Wähle alle plausiblen Beobachtungen.",
          options: [
            { id: "a", label: "Analyse von Erzählperspektive, Satzrhythmus und irritierender Lakonik" },
            { id: "b", label: "Untersuchung der Produktionsverhältnisse in der Habsburgermonarchie als Hauptfokus" },
            { id: "c", label: "Frage nach wiederkehrenden Motiven von Entfremdung und Verunsicherung im Text" },
            { id: "d", label: "Rekonstruktion des Erwartungshorizonts späterer Schulbuchgenerationen als zentrale Ebene" },
            { id: "e", label: "Beobachtung, wie Form und Ton Unbehagen erzeugen" }
          ],
          correctOptionIds: ["a", "c", "e"],
          firstHint: "Formale und motivische Textorganisation sind wichtiger als spätere Schulrezeption oder Makroökonomie.",
          secondHint: "Drei Antworten konzentrieren sich direkt auf Textverfahren.",
          explanation: "Werkimmanente Lektüre bleibt nahe am Text und untersucht, wie Form Bedeutung erzeugt.",
          modelAnswer:
            "Passend sind die Analyse von Perspektive und Lakonik, die Beobachtung wiederkehrender Motive sowie die Frage, wie Form und Ton Unbehagen erzeugen."
        },
        {
          id: "m2_t4",
          type: "short-text",
          title: "Vergleichender Mini-Transfer",
          prompt: "Wähle zwei Ansätze aus und erkläre an einem Primärtext deiner Wahl aus diesem Kurs, was Ansatz A sichtbar macht und was Ansatz B zusätzlich oder anders erschliesst.",
          help: "Die Antwort soll ausdrücklich mit 'sichtbar' und 'blendt aus' oder ähnlichen Formulierungen arbeiten.",
          placeholder: "Am Beispiel von ...",
          conceptGroups: [
            { label: "Zwei Ansätze", variants: ["formalismus", "new criticism", "marx", "rezeptionsästhetik", "strukturalismus", "poststrukturalismus", "new historicism", "systemtheorie", "geistesgeschichtlich", "positivistisch"] },
            { label: "Primärtextbezug", variants: ["kafka", "goethe", "heine", "büchner", "fontane", "brecht", "bachmann", "shelley", "baudelaire", "cervantes", "achmatowa", "camus", "flaubert"] },
            { label: "sichtbar machen", variants: ["sichtbar", "zeigt", "erschliesst", "macht", "fokussiert"] },
            { label: "Ausblendung oder Grenze", variants: ["blendet", "grenzt", "übersieht", "weniger", "nicht"] }
          ],
          successThreshold: 4,
          firstHint: "Nenne nicht nur zwei Namen, sondern auch den Erkenntnisgewinn.",
          secondHint: "Eine gute Antwort sagt etwa: 'Der formalistische Zugriff macht ... sichtbar, blendet aber ... eher aus; der new historicist Zugriff ...'.",
          modelAnswer:
            "Beispiel Kafka: Ein formalistischer Zugriff macht Erzählton, Perspektive und die irritierende Kompositionslogik sichtbar, blendet aber institutionelle und historische Rahmen eher aus. Ein new-historicist Zugriff erschliesst zusätzlich Diskurse von Bürokratie, Recht und moderner Macht, riskiert dafür aber, die ästhetische Eigenlogik weniger präzise zu fassen."
        }
      ],
      teacher: {
        use: "Geeignet für arbeitsteilige Gruppenarbeit mit anschliessender Vergleichssicherung.",
        socialForms: ["Gruppenpuzzle", "Partnercoaching", "Lehrpersonensynthese im Plenum"],
        didactics:
          "Die Akkordeonstruktur lädt zur arbeitsteiligen Erschliessung ein. Wichtig ist, dass die Lernenden nicht Ansätze auswendig lernen, sondern ihre Fragehorizonte unterscheiden.",
        assessment:
          "Besonders aussagekräftig ist Aufgabe 4: Hier zeigt sich, ob Modelle auf konkrete Texte übertragen und in ihrer Begrenztheit reflektiert werden."
      }
    },
    {
      id: "mod-3",
      navTitle: "Modul 3",
      title: "Modul 3: Epochenbegriffe und ihre Probleme",
      subtitle: "Heuristik, Ungleichzeitigkeit, Transnationalität",
      intro:
        "Epochenbegriffe schaffen Übersicht, aber sie erzeugen auch Vereinfachungen. Dieses Modul zeigt, warum starre Epochenmodelle hilfreich und problematisch zugleich sind.",
      goals: [
        "Epochen als heuristische Werkzeuge statt Tatsachen verstehen.",
        "Ungleichzeitigkeiten und Übergänge analysieren.",
        "Nationale und transnationale Periodisierungen vergleichen.",
        "Den Beitrag der Digital Humanities zur Epochenkritik benennen."
      ],
      sections: [
        {
          title: "Warum Epochen nützlich sind",
          html: `
            <p>Epochenbegriffe wie Aufklärung, Sturm und Drang, Realismus oder Moderne ermöglichen Verdichtung. Sie helfen, über Familienähnlichkeiten, wiederkehrende Probleme und grössere Entwicklungslinien zu sprechen. Ohne heuristische Begriffe würde Unterricht leicht in einer unverbundenen Werkansammlung enden.</p>
            <div class="info-box definition">
              <h4>Heuristische Formel</h4>
              <p>Eine Epoche ist eine <strong>arbeitsteilige Vereinfachung</strong>. Sie ist sinnvoll, solange ihre Grenzen, Ausnahmen und Alternativen mitgedacht werden.</p>
            </div>
          `
        },
        {
          title: "Warum Epochen problematisch sind",
          html: `
            <p>Starke Epochenmodelle homogenisieren. Sie tun oft so, als ob alle Texte einer Zeit dieselben Merkmale teilten. Gerade Übergangsfiguren wie Heine, Büchner oder Kafka zeigen jedoch, dass literarische Produktion nicht sauber in Container passt. Nationale Literaturgeschichten setzen zusätzlich unterschiedliche Schnitte: Was im deutschsprachigen Unterricht 'Vormärz' heisst, wird in anderen Traditionen anders gegliedert oder gar nicht so benannt.</p>
            <ul class="reading-list">
              <li><strong>Ungleichzeitigkeit:</strong> Verschiedene ästhetische Logiken existieren gleichzeitig.</li>
              <li><strong>Überlagerung:</strong> Ein Text kann romantische, realistische und proto-moderne Züge verbinden.</li>
              <li><strong>Eurozentrismus:</strong> Globale und koloniale Verflechtungen verschwinden in nationalen Standardmodellen.</li>
              <li><strong>Didaktischer Effekt:</strong> Unterricht übernimmt Epochenbegriffe oft als scheinbar selbstverständliche Raster.</li>
            </ul>
          `
        },
        {
          title: "Digital Humanities als Irritation",
          html: `
            <p>Korpusanalysen, Stilometrie, Netzwerkanalysen und distant reading können klassische Epochengrenzen bestätigen, aber auch irritieren. Wenn stilometrische Cluster nicht mit Schulbuchgrenzen zusammenfallen oder Netzwerke transnationale Verbindungen sichtbar machen, wird deutlich: Epochenbegriffe sind Interpretationsangebote, keine naturgegebenen Tatsachen.</p>
            <aside class="language-aside">
              <h4>English focus</h4>
              <p><strong>Periodization</strong> is a heuristic operation. Data may reveal clusters, but clusters do not automatically equal historical meaning.</p>
            </aside>
          `
        }
      ],
      tasks: [
        {
          id: "m3_t1",
          type: "single-choice",
          title: "Heuristik verstehen",
          prompt: "Welche Aussage beschreibt den Status von Epochenbegriffen am präzisesten?",
          help: "Suche nach der Formulierung, die Orientierung und Begrenzung zusammenhält.",
          options: [
            { id: "a", label: "Epochenbegriffe sind objektive Tatsachen, die in allen Literaturen identisch gelten." },
            { id: "b", label: "Epochenbegriffe sind heuristische Werkzeuge, die Orientierung schaffen, aber begründet werden müssen." },
            { id: "c", label: "Epochenbegriffe sind unbrauchbar und sollten im Unterricht vollständig vermieden werden." },
            { id: "d", label: "Epochenbegriffe beruhen ausschliesslich auf Stilometrie und quantitativen Daten." }
          ],
          correctOptionIds: ["b"],
          firstHint: "Gesucht ist keine Totalverwerfung, aber auch kein Naturalisieren.",
          secondHint: "Eine gute Antwort verbindet Nützlichkeit mit Konstruktionscharakter.",
          explanation: "Epochen helfen, solange sie als Modelle und nicht als Naturtatsachen behandelt werden.",
          modelAnswer:
            "Am präzisesten ist: Epochenbegriffe sind heuristische Werkzeuge, die Orientierung schaffen, aber stets begründet und relativiert werden müssen."
        },
        {
          id: "m3_t2",
          type: "multi-select",
          title: "Probleme starrer Epochenmodelle",
          prompt: "Welche Punkte gehören zur Kritik an starren Epochenmodellen?",
          help: "Wähle alle passenden Aussagen.",
          options: [
            { id: "a", label: "Sie homogenisieren heterogene Texte." },
            { id: "b", label: "Sie ignorieren oft Übergänge und Überlagerungen." },
            { id: "c", label: "Sie verhindern grundsätzlich jede didaktische Orientierung." },
            { id: "d", label: "Sie können nationale und eurozentrische Verzerrungen verstärken." },
            { id: "e", label: "Sie lassen sich durch keinerlei historische Argumente stützen." }
          ],
          correctOptionIds: ["a", "b", "d"],
          firstHint: "Kritik bedeutet nicht, dass Epochen keinerlei Nutzen hätten.",
          secondHint: "Drei Aussagen benennen typische Verzerrungen oder Verkürzungen.",
          explanation:
            "Kritisiert werden vor allem Homogenisierung, starre Grenzen und eurozentrische bzw. nationale Verzerrungen.",
          modelAnswer:
            "Zur Kritik gehören Homogenisierung, das Übersehen von Übergängen und Überlagerungen sowie nationale oder eurozentrische Verzerrungen."
        },
        {
          id: "m3_t3",
          type: "short-text",
          title: "Büchner als Störung",
          prompt: "Warum eignet sich Büchner besonders gut, um starre Epochenmodelle in Frage zu stellen?",
          help: "Nenne formale, thematische oder rezeptionsgeschichtliche Gründe.",
          placeholder: "Büchner irritiert Epochenmodelle, weil ...",
          conceptGroups: [
            { label: "Übergangs- oder Grenzfigur", variants: ["grenzfigur", "übergang", "passt nicht sauber", "zwischen"] },
            { label: "Formale oder thematische Modernität", variants: ["modern", "bruch", "fragment", "offen", "soziale spannung", "antiidealistisch"] },
            { label: "Zeitversetzte Wirkung", variants: ["später", "rezeption", "erst später", "nachträglich", "wirkungsgeschichte"] }
          ],
          successThreshold: 3,
          firstHint: "Denke an Form, Thematik und Rezeptionsgeschichte zugleich.",
          secondHint: "Woyzeck ist fragmentarisch, sozial scharf und wirkt in vielem 'zu früh' für glatte Epochenschemata.",
          modelAnswer:
            "Büchner eignet sich als Störfall, weil seine Texte weder geistesgeschichtlich noch epochal sauber in ein einziges Raster passen. Die offene, fragmentarische Form von 'Woyzeck', die soziale Radikalität und die starke spätere Wirkungsgeschichte machen ihn zu einer Grenzfigur zwischen unterschiedlichen Ordnungen."
        },
        {
          id: "m3_t4",
          type: "matching",
          title: "Transnationale Perspektive",
          prompt: "Ordne die Beobachtungen den passenden Periodisierungsproblemen zu.",
          help: "Die Aufgabe verbindet Epochenkritik mit Vergleichsliteratur.",
          pairs: [
            { left: "Vormärz", right: "kein universaler Begriff für alle Literaturen" },
            { left: "Kafka", right: "nationale Zuordnung und Epocheneinordnung bleiben umstritten" },
            { left: "Borges", right: "moderne und postmoderne Raster greifen je nach Tradition anders" },
            { left: "Achmatowa", right: "staatliche Zensur und Erinnerungspolitik beeinflussen Kanonisierung" }
          ],
          firstHint: "Denke nicht nur an Stil, sondern an Sprachraum und Institution.",
          secondHint: "Nur eine Zeile spricht direkt über den fehlenden Export eines deutschen Epochenbegriffs.",
          explanation: "Transnationale Literaturgeschichte zeigt, dass Periodisierungen regional, sprachlich und politisch verschieden funktionieren.",
          modelAnswer:
            "Vormärz = kein universaler Begriff; Kafka = umstrittene nationale und epochale Zuordnung; Borges = anders funktionierende Moderne/Postmoderne; Achmatowa = Einfluss von Zensur und Erinnerungspolitik."
        }
      ],
      teacher: {
        use: "Besonders geeignet für Diskussionen über Schulbuchordnungen und Vergleichsliteratur.",
        socialForms: ["Einzelarbeit", "Think-Pair-Share", "Plenum mit Tafelmatrix"],
        didactics:
          "Dieses Modul soll Epochenbegriffe nicht zerstören, sondern ihre Reichweite differenzieren. Die Lernenden sollen weiterhin ordnen können, aber reflektierter.",
        assessment: "Entscheidend ist, ob Lernende 'heuristisch' nicht mit 'beliebig' verwechseln."
      }
    },
    {
      id: "mod-4",
      navTitle: "Modul 4",
      title: "Modul 4: Kanonisierung und Macht",
      subtitle: "Institutionen, Prestige, Ausschluss und Revision",
      intro:
        "Kanonisierung entscheidet mit darüber, welche Texte wieder gelesen, geprüft, kommentiert, neu aufgelegt und erinnert werden. Deshalb ist der Kanon immer auch ein Machtproblem.",
      goals: [
        "Kanon und Kanonisierung unterscheiden.",
        "Institutionen der Sichtbarkeit benennen.",
        "Ausschlussmechanismen reflektieren.",
        "Den Schulkanon kritisch befragen."
      ],
      sections: [
        {
          title: "Was ist ein Kanon?",
          html: `
            <p>Ein Kanon ist keine fixe Liste für alle Zeiten. Er ist das Ergebnis von Auswahlprozessen, die kulturelles Kapital verteilen. Schulbücher, Prüfungen, Universitätscurricula, Editionen, Jubiläen und literarische Preise stabilisieren Kanones, ohne sie jemals endgültig zu schliessen.</p>
            <div class="info-grid">
              <article class="info-box definition">
                <h4>Definition</h4>
                <p>Kanon = historisch wandelbare Auswahl besonders sichtbarer und legitimierter Werke.</p>
              </article>
              <article class="info-box criticism">
                <h4>Kritik</h4>
                <p>Was als 'wichtig' gilt, hängt von Macht, Institutionen, Sprache, Klasse, Gender und geopolitischer Lage ab.</p>
              </article>
              <article class="info-box english">
                <h4>English focus</h4>
                <p><strong>Canonization</strong> is not a natural process. It is produced by institutions, repetition, and prestige.</p>
              </article>
            </div>
          `
        },
        {
          title: "Ausschluss und Revision",
          html: `
            <p>Viele Texte werden nicht wegen mangelnder Qualität vergessen, sondern weil Übersetzung, Geschlechterordnung, Klassenlage, Zensur, Publikationswege oder Prüfungslogiken gegen sie arbeiten. Mary Shelley, Ingeborg Bachmann, Annette von Droste-Hülshoff oder Emilia Pardo Bazán zeigen, wie Kanones revidiert werden können, ohne dass ältere Texte einfach verschwinden müssten.</p>
            <p>Die Frage lautet also nicht nur: <em>Wer gehört hinein?</em> Sondern auch: <em>Welche Auswahlprinzipien machen bestimmte Gruppen wieder unsichtbar?</em></p>
          `
        },
        {
          title: "Schulkanon als Sonderfall",
          html: `
            <p>Der Schulkanon muss didaktisch reduzierbar, prüfbar und curricular anschlussfähig sein. Genau diese Praktikabilität kann jedoch den Eindruck erzeugen, literarische Bedeutung sei bereits entschieden. Ein reflektierter Unterricht macht den Schulkanon deshalb selbst zum Thema.</p>
          `
        }
      ],
      tasks: [
        {
          id: "m4_t1",
          type: "multi-select",
          title: "Instanzen der Kanonisierung",
          prompt: "Welche Akteur*innen und Institutionen tragen besonders stark zur Kanonisierung bei?",
          help: "Wähle alle überzeugenden Antworten.",
          options: [
            { id: "a", label: "Schule und Prüfungswesen" },
            { id: "b", label: "Universitäten, Forschung und Editionen" },
            { id: "c", label: "Verlage, Feuilleton und Preise" },
            { id: "d", label: "Ausschliesslich der Geschmack einzelner Autor*innen" },
            { id: "e", label: "Archive, Übersetzungspraxen und digitale Plattformen" }
          ],
          correctOptionIds: ["a", "b", "c", "e"],
          firstHint: "Suche nach dauerhaft wirksamen Vermittlungsinstanzen.",
          secondHint: "Kanonisierung ist institutionell stabilisiert, nicht bloss privat.",
          explanation:
            "Kanonisierung entsteht aus dem Zusammenspiel von Schule, Wissenschaft, Verlagen, Kritik, Archiven und neuen Plattformen.",
          modelAnswer:
            "Stark beteiligt sind Schule, Universität, Forschung, Editionen, Verlage, Feuilleton, Preise, Archive, Übersetzungen und digitale Plattformen."
        },
        {
          id: "m4_t2",
          type: "matching",
          title: "Mechanismus und Effekt",
          prompt: "Ordne jedem Kanonisierungsmechanismus den wahrscheinlichsten Effekt zu.",
          help: "Denke institutionell.",
          pairs: [
            { left: "Pflichtlektüre im Unterricht", right: "wiederholte Sichtbarkeit und Normalisierung" },
            { left: "Jubiläumseditionen und Werkausgaben", right: "dauerhafte Verfügbarkeit und Prestige" },
            { left: "Übersetzungsausfälle", right: "transnationale Unsichtbarkeit" },
            { left: "Prüfungsformate", right: "didaktische Verengung auf gut abprüfbare Texte" }
          ],
          firstHint: "Ein Mechanismus wirkt nicht nur symbolisch, sondern oft sehr praktisch.",
          secondHint: "Übersetzungsausfälle erzeugen kein Prestige, sondern Unsichtbarkeit.",
          explanation: "Kanonisierung ist auch Infrastruktur: Sichtbarkeit, Verfügbarkeit und Prüfungsfähigkeit sind machtvolle Filter.",
          modelAnswer:
            "Pflichtlektüre = wiederholte Sichtbarkeit; Jubiläumseditionen = Prestige und Verfügbarkeit; Übersetzungsausfälle = Unsichtbarkeit; Prüfungsformate = didaktische Verengung."
        },
        {
          id: "m4_t3",
          type: "short-text",
          title: "Schulkanon problematisieren",
          prompt: "Warum ist der Schulkanon didaktisch notwendig und zugleich problematisch?",
          help: "Verbinde Praktikabilität mit Ausschlussmechanismen.",
          placeholder: "Der Schulkanon ist notwendig, weil ...",
          conceptGroups: [
            { label: "Orientierung oder Praktikabilität", variants: ["orientierung", "praktisch", "unterricht", "prüfbar", "auswahl", "curriculum"] },
            { label: "Ausschluss oder Verengung", variants: ["ausschluss", "verengung", "unsichtbar", "weniger sichtbar", "ausblendet"] },
            { label: "Reflexion der Kriterien", variants: ["kriterien", "begründet", "reflektieren", "fragen", "nicht neutral"] }
          ],
          successThreshold: 3,
          firstHint: "Es braucht sowohl einen Nutzen als auch ein Risiko.",
          secondHint: "Eine starke Antwort sagt: Schulkanon schafft Orientierung, verengt aber Auswahl und muss deshalb transparent begründet werden.",
          modelAnswer:
            "Der Schulkanon ist didaktisch notwendig, weil Unterricht und Prüfungen nicht mit unbegrenzten Archiven arbeiten können. Zugleich ist er problematisch, weil er Auswahl verengt, bestimmte Texte wiederholt sichtbar macht und andere ausblendet. Deshalb müssen seine Kriterien selbst zum Unterrichtsgegenstand werden."
        },
        {
          id: "m4_t4",
          type: "single-choice",
          title: "Kanonrevision beurteilen",
          prompt: "Welche Aussage über Kanonrevision ist am überzeugendsten?",
          help: "Suche nach der differenziertesten Antwort.",
          options: [
            { id: "a", label: "Kanonrevision bedeutet, alle bisher kanonischen Texte vollständig zu verwerfen." },
            { id: "b", label: "Kanonrevision ist unnötig, weil sich Qualität immer von selbst durchsetzt." },
            { id: "c", label: "Kanonrevision prüft Auswahlkriterien neu und kann vergessene oder unterrepräsentierte Texte sichtbar machen." },
            { id: "d", label: "Kanonrevision ist nur eine Mode der Gegenwart ohne wissenschaftlichen Wert." }
          ],
          correctOptionIds: ["c"],
          firstHint: "Die richtige Antwort vermeidet sowohl Totalersatz als auch Qualitätsmythos.",
          secondHint: "Es geht um die Revision von Kriterien, nicht um blindes Austauschen von Listen.",
          explanation:
            "Kanonrevision ist ein Verfahren der kritischen Nachprüfung. Sie erweitert oder korrigiert Sichtbarkeit, statt alte Listen einfach mechanisch zu ersetzen.",
          modelAnswer:
            "Kanonrevision prüft Auswahlkriterien neu und kann vergessene oder systematisch unterrepräsentierte Texte sichtbar machen."
        }
      ],
      teacher: {
        use: "Gut geeignet für Diskussionen über Pflichtlektüren und schulische Auswahlpraxis.",
        socialForms: ["Einzelarbeit", "kontroverses Partnergespräch", "Plenumsdebatte zum Schulkanon"],
        didactics:
          "Hier kann die Klasse über die eigene Unterrichtspraxis reflektieren, ohne in beliebiges 'Alles ist gleich wichtig' zu kippen.",
        assessment:
          "Starke Lernprodukte zeigen, dass Kanonkritik nicht mit Qualitätsrelativismus verwechselt wird."
      }
    },
    {
      id: "mod-5",
      navTitle: "Modul 5",
      title: "Modul 5: Kulturpolitik und nationale Programme",
      subtitle: "Literatur als Identitätsmodell, Bildungsprogramm und politisches Instrument",
      intro:
        "Literaturgeschichte ist oft eng mit Nationenbildung, Erinnerungspolitik und Bildungsprogrammen verbunden. Dieses Modul betrachtet solche Verflechtungen, ohne sie zu simplen Schemata zu verflachen.",
      goals: [
        "Nationenbildung und Literaturgeschichtsschreibung zusammendenken.",
        "Kulturpolitik als Lenkung von Sichtbarkeit analysieren.",
        "Die deutsche Klassik als kulturelles Hochmodell einordnen.",
        "Ideologische Instrumentalisierung und Erinnerungspolitik reflektieren."
      ],
      sections: [
        {
          title: "Literatur als kollektive Selbstbeschreibung",
          html: `
            <p>Literatur wird häufig zur Selbstbeschreibung politischer Gemeinschaften herangezogen. Nationale Literaturgeschichten erzählen dann nicht nur ästhetische Entwicklungen, sondern auch Herkunft, Werte, Krisen und Hoffnungen einer Gemeinschaft. Solche Erzählungen wirken stabilisierend, können aber auch Ausschlüsse produzieren.</p>
          `
        },
        {
          title: "Die deutsche Klassik als Hochmodell",
          html: `
            <p>Goethe und Schiller wurden im 19. und 20. Jahrhundert vielfach zu kulturellen Leitfiguren stilisiert. 'Klassik' fungiert dabei nicht nur als ästhetische Kategorie, sondern als Bildungsprogramm: Humanität, Mass, Versöhnung und Form werden zu Normen, an denen andere Texte gemessen werden.</p>
            <div class="info-box example">
              <h4>Beispiel</h4>
              <p>Wer die Weimarer Klassik zum Zentrum einer nationalen Literaturgeschichte macht, schafft ein starkes Modell kultureller Höhe, verschiebt aber gleichzeitig satirische, populäre, regionale oder dissidente Formen an den Rand.</p>
            </div>
          `
        },
        {
          title: "Politische Systeme und Kanonlenkung",
          html: `
            <p>Kulturpolitik reicht von curricularer Steuerung bis zu offener Zensur. In autoritären Systemen kann sie Ausschluss, Umdeutung und Schweigen erzwingen; in demokratischen Kontexten wirkt sie subtiler über Förderlogiken, Institutionen, Feuilleton und Erinnerungskultur. Achmatowa, Bulgakow oder auch Debatten um Brecht und Christa Wolf zeigen, dass Kanonbildung immer historisch-politisch gerahmt ist.</p>
            <aside class="language-aside">
              <h4>Vergleichsperspektive</h4>
              <p><strong>Russisch:</strong> Zensur und Samisdat verändern literarische Sichtbarkeit. <strong>Spanisch:</strong> Lorca ist auch eine Figur der Erinnerungspolitik. <strong>Französisch:</strong> Camus wird unterschiedlich als französischer, algerischer oder kolonial verstrickter Autor gelesen.</p>
            </aside>
          `
        },
        {
          title: "Kulturpolitik, Erinnerungspolitik, Unterricht",
          html: `
            <p>Im Unterricht begegnen Lernende Literatur oft in bereits vorgeordneten Formaten. Gerade deshalb ist es wichtig, kulturpolitische Programme nicht nur nachzuerzählen, sondern ihre Selektionslogiken offenzulegen.</p>
          `
        }
      ],
      tasks: [
        {
          id: "m5_t1",
          type: "order",
          title: "Von Kulturpolitik zum Schulbuch",
          prompt: "Ordne die Kette kulturpolitischer Steuerung in eine plausible Reihenfolge.",
          help: "Denke vom Leitbild zur Unterrichtswirkung.",
          items: [
            { id: "a", label: "Ein kulturelles Leitbild definiert, welche Literatur als identitätsstiftend gilt." },
            { id: "b", label: "Institutionen übernehmen diese Wertungen in Programme, Editionen und Fördersysteme." },
            { id: "c", label: "Schulbücher und Curricula stabilisieren die Auswahl." },
            { id: "d", label: "Lernende begegnen bestimmten Texten häufiger und andere kaum." }
          ],
          correctOrder: ["a", "b", "c", "d"],
          firstHint: "Beginne nicht beim Unterricht, sondern bei der programmatischen Setzung.",
          secondHint: "Institutionen vermitteln zwischen Leitbild und Unterricht.",
          explanation: "Kulturpolitik wirkt selten in einem Schritt; sie wird institutionell vermittelt und didaktisch stabilisiert.",
          modelAnswer:
            "Leitbild → Institutionen/Editionen/Förderung → Curricula und Schulbücher → wiederholte Sichtbarkeit bestimmter Texte."
        },
        {
          id: "m5_t2",
          type: "single-choice",
          title: "Klassik als Hochmodell",
          prompt: "Was ist mit der Formulierung gemeint, die deutsche Klassik fungiere als 'kulturelles Hochmodell'?",
          help: "Gesucht ist die literaturpolitische, nicht bloss die bewundernde Bedeutung.",
          options: [
            { id: "a", label: "Goethe und Schiller sind lediglich die ältesten deutschsprachigen Autor*innen." },
            { id: "b", label: "Ihre Werke wurden zu einem normativen Bildungs- und Wertemodell erhoben." },
            { id: "c", label: "Klassik bezeichnet ausschliesslich die Epoche zwischen 1780 und 1805 ohne spätere Wirkung." },
            { id: "d", label: "Mit Hochmodell ist nur der Umfang ihrer gesammelten Werke gemeint." }
          ],
          correctOptionIds: ["b"],
          firstHint: "Die richtige Antwort betont Normativität und Bildungsfunktion.",
          secondHint: "Es geht um spätere Aufwertung und Leitbildcharakter.",
          explanation:
            "Als Hochmodell fungiert Klassik dann, wenn sie zur normativen Messlatte kultureller Bildung wird.",
          modelAnswer:
            "Gemeint ist, dass Goethe und Schiller zu einem normativen Bildungs- und Wertemodell erhoben wurden."
        },
        {
          id: "m5_t3",
          type: "short-text",
          title: "Kulturpolitik differenziert erklären",
          prompt: "Erläutere an einem Beispiel, wie Kulturpolitik literarische Sichtbarkeit steuern kann, ohne dass du sie auf platte Propaganda reduzierst.",
          help: "Möglich sind etwa Klassikrezeption, Zensur, Curriculum, Erinnerungspolitik oder Editionspolitik.",
          placeholder: "Ein differenziertes Beispiel ist ...",
          conceptGroups: [
            { label: "Institutioneller Mechanismus", variants: ["schule", "curriculum", "zensur", "verlag", "edition", "förderung", "erinnerungspolitik", "feuilleton"] },
            { label: "Steuerung von Sichtbarkeit", variants: ["sichtbar", "kanon", "auswahl", "häufiger gelesen", "weniger sichtbar", "zugänglich"] },
            { label: "Differenzierung", variants: ["nicht nur", "nicht bloss", "subtil", "indirekt", "komplex", "ambivalent"] }
          ],
          successThreshold: 3,
          firstHint: "Nenne nicht nur 'Propaganda', sondern einen konkreten Vermittlungsweg.",
          secondHint: "Eine starke Antwort zeigt, wie Curricula, Editionen oder Erinnerungspolitik Sichtbarkeit strukturieren, oft auch indirekt.",
          modelAnswer:
            "Ein differenziertes Beispiel ist die starke curriculare Präsenz der Weimarer Klassik. Kulturpolitik wirkt hier nicht primär als plumpe Propaganda, sondern über Schulen, Jubiläen, Editionen und Bildungsprogramme. Dadurch werden bestimmte Texte besonders sichtbar und normativ aufgeladen, während andere literarische Formen in den Hintergrund treten."
        },
        {
          id: "m5_t4",
          type: "multi-select",
          title: "Vergleichende Kulturpolitik",
          prompt: "Welche Beobachtungen sind für eine differenzierte kulturpolitische Perspektive plausibel?",
          help: "Wähle alle stimmigen Aussagen.",
          options: [
            { id: "a", label: "Kulturpolitik kann in demokratischen und autoritären Kontexten unterschiedlich wirken." },
            { id: "b", label: "Zensur ist die einzige Form kulturpolitischer Steuerung." },
            { id: "c", label: "Erinnerungspolitik beeinflusst, welche Autor*innen symbolisch aufgeladen werden." },
            { id: "d", label: "Auch Prüfungsformate und Lehrpläne haben kulturpolitische Wirkung." },
            { id: "e", label: "Literaturgeschichte ist vollständig von Politik getrennt." }
          ],
          correctOptionIds: ["a", "c", "d"],
          firstHint: "Nicht nur offene Repression, auch institutionelle Formate zählen.",
          secondHint: "Drei Aussagen beschreiben unterschiedliche, aber plausible Steuerungsweisen.",
          explanation:
            "Eine differenzierte Perspektive bezieht sowohl offene als auch subtile Formen kultureller Steuerung ein.",
          modelAnswer:
            "Plausibel sind: unterschiedliche Wirkungen in politischen Kontexten, der Einfluss von Erinnerungspolitik sowie die Wirkung von Lehrplänen und Prüfungsformaten."
        }
      ],
      teacher: {
        use: "Geeignet für Verbindung von Literaturunterricht mit Geschichtsunterricht oder politischer Bildung.",
        socialForms: ["Einzelarbeit", "Partnerbeispiel", "Plenumsdebatte über Klassik und Curriculum"],
        didactics:
          "Die Lernenden sollen Kulturpolitik nicht mit einfacher Manipulation verwechseln. Gerade subtile Normierungen sind für schulische Literaturvermittlung zentral.",
        assessment: "Achte darauf, ob Beispiele konkret und institutionell beschrieben werden."
      }
    },
    {
      id: "mod-6",
      navTitle: "Modul 6",
      title: "Modul 6: Primärtexte im Vergleich",
      subtitle: "Fallstationen zwischen Kanon, Epoche, Nation und Methode",
      intro:
        "Dieses Modul führt die Theorie an konkrete Texte zurück. Die Stationen arbeiten mit kurzen Textsignalen, Paraphrasen und didaktisch fokussierten Arbeitsaufträgen.",
      goals: [
        "Primärtexte gegen Modelle lesen.",
        "Kanon, Epoche und Kulturpolitik an konkreten Fällen prüfen.",
        "Vergleichend zwischen Sprachräumen arbeiten.",
        "Argumentativ begründen, was ein Ansatz sichtbar macht und ausblendet."
      ],
      stations: [
        {
          id: "s1",
          title: "Goethe und Schiller: Klassik als Kanonmodell",
          signal:
            "Textsignal: 'Humanität', Formstrenge, ästhetische Erziehung, Weimar als kulturelles Symbolzentrum.",
          situation:
            "Goethe und Schiller wurden zu Schlüsselfiguren eines Bildungs- und Hochkulturmodells. Ihre Werke werden nicht nur gelesen, sondern oft als Massstab gesetzt.",
          significance:
            "Literaturgeschichtlich interessant ist weniger nur die Epoche selbst als ihre spätere Kanonfunktion.",
          lenses: [
            "Geistesgeschichtlich: Ausdruck eines humanistischen Leitideals.",
            "Kulturpolitisch: Ausbau eines nationalen Bildungsprogramms.",
            "Rezeptionsästhetisch: Wandel vom Gegenwartstext zum Schulklassiker."
          ],
          question:
            "Welche Lesart macht stärker sichtbar, wie aus Literatur ein kulturelles Hochmodell wird: geistesgeschichtlich, rezeptionsästhetisch oder kulturpolitisch?"
        },
        {
          id: "s2",
          title: "Heine: Zwischen Romantik, Politik und Kanonproblem",
          signal:
            "Textsignal aus 'Deutschland. Ein Wintermärchen': Reise, Satire, Nationenkritik, poetische Beweglichkeit statt harmonischer Geschlossenheit.",
          situation:
            "Heine lässt sich weder problemlos als spätes Romantikmodul noch bloss als politischer Autor fixieren.",
          significance:
            "Er zeigt, wie Epochen- und Kanonordnungen an satirischer, transnationaler und journalistisch anschlussfähiger Literatur ins Rutschen geraten.",
          lenses: [
            "Epochenkritisch: Mischform statt sauberer Epochenzugehörigkeit.",
            "Marxistisch / ideologiekritisch: Nation, Macht und Gesellschaftskritik.",
            "Rezeptionsästhetisch: Konflikte um Heines politische und jüdische Position."
          ],
          question: "Warum passt Heine schlecht in ein harmonisierendes Epochenmodell?"
        },
        {
          id: "s3",
          title: "Büchner: Störung linearer Entwicklung",
          signal:
            "Textsignal aus 'Woyzeck': fragmentarische Szenen, soziale Prekarität, experimentelle Offenheit, Sprachzersplitterung.",
          situation:
            "Büchner wurde oft nachträglich als Vorläufer der Moderne gelesen, obwohl er chronologisch früher liegt.",
          significance:
            "Hier zeigt sich besonders klar, dass Wirkungsgeschichte und Entstehungszeit nicht deckungsgleich sind.",
          lenses: [
            "Marxistisch: Armut, Gewalt und soziale Herrschaft.",
            "Formalistisch: Fragmentstruktur und Szenentechnik.",
            "Rezeptionsästhetisch: spätere Aufwertung als Modernitätsfigur."
          ],
          question: "Welche Methode erklärt am besten, warum Büchner 'zu früh modern' wirkt?"
        },
        {
          id: "s4",
          title: "Fontane: Realismus und Schulkanon",
          signal:
            "Textsignal aus 'Effi Briest': Gesellschaftsritual, Ehe, Ehrcode, Alltagsbeobachtung, feine Ironie.",
          situation:
            "Fontane ist schulisch stark präsent, weil seine Texte zugleich historisch, formal und sozial analysierbar sind.",
          significance:
            "Gerade diese gute Unterrichtsanschlussfähigkeit macht Fontane zu einem Beispiel für stabile Kanonpräsenz.",
          lenses: [
            "Werkimmanent: Erzählinstanz, Ironie, Motivik.",
            "Marxistisch / sozialgeschichtlich: Klasse, Geschlecht, soziale Reproduktion.",
            "Kanonkritisch: Warum bleibt Fontane präsent, während andere realistische Texte randständig bleiben?"
          ],
          question: "Welche Chancen und welche Verengung bringt Fontanes starke Schulpräsenz mit sich?"
        },
        {
          id: "s5",
          title: "Kafka: Nation, Epoche, Sprache",
          signal:
            "Textsignal aus 'Die Verwandlung': ein nüchterner Satzanfang, ein radikaler Zustand, familiäre und ökonomische Dynamik.",
          situation:
            "Kafka gehört zum deutschsprachigen Kanon, zugleich irritiert seine Position zwischen Prag, Judentum, Moderne und späterer Weltliteratur jede einfache Einordnung.",
          significance:
            "Kafka ist ein Testfall für nationale Literaturgeschichte, Epochenlogik und konkurrierende Interpretationsmodelle.",
          lenses: [
            "Werkimmanent: Tonfall, Perspektive, Metaphernlogik.",
            "Poststrukturalistisch: Instabilität von Identität und Bedeutung.",
            "Kulturwissenschaftlich: Minderheitensprachen, Urbanität, Bürokratie, Transnationalität."
          ],
          question: "Warum ist Kafka mehr als ein 'typischer' Autor der Moderne?"
        },
        {
          id: "s6",
          title: "Brecht und Bachmann: Nachkrieg, Kritik, Gegenlektüre",
          signal:
            "Textsignal: Brechts Verfremdung und Lehrstücklogik; Bachmanns sprachkritische, subjektkritische und geschlechterpolitische Zuspitzungen.",
          situation:
            "Beide zeigen, dass Nachkriegsliteratur nicht als einheitlicher Block funktioniert. Brecht ist politisch-programmatisch, Bachmann unterläuft Gewissheiten auf andere Weise.",
          significance:
            "Die Station öffnet den Blick auf konkurrierende Nachkriegsgenealogien und Genderfragen der Kanonbildung.",
          lenses: [
            "Marxistisch / kulturpolitisch: Brechts Eingriff in gesellschaftliche Wahrnehmung.",
            "Werkimmanent / poststrukturalistisch: Bachmanns Sprachkritik und Subjektzersetzung.",
            "Kanonkritisch: Wer wurde im Nachkriegsunterricht wie gelesen?"
          ],
          question: "Was wird sichtbar, wenn man Brecht und Bachmann nicht als Randfälle, sondern als alternative Zentren liest?"
        },
        {
          id: "s7",
          title: "Mary Shelley: Gattung, Geschlecht, späte Aufwertung",
          signal:
            "Textsignal aus 'Frankenstein': Schöpfung, Verantwortung, Wissenschaft, Rahmenstruktur, Briefromananteile.",
          situation:
            "Mary Shelley wurde lange als Randfigur zwischen Gothic, Science Fiction und literarischer Sensation behandelt.",
          significance:
            "Gerade die spätere Aufwertung zeigt, wie Kanonrevision, Genderperspektive und Genregrenzen zusammenhängen.",
          lenses: [
            "Positivistisch: naturwissenschaftliche und biografische Kontexte.",
            "Rezeptionsästhetisch: Wandel vom Schauerroman zum Schlüsseltext der Moderne.",
            "Kanonkritisch / Gender: Warum wurden männliche Wissenschaftserzählungen oft ernster genommen?"
          ],
          question: "Welche Rolle spielt die Rezeptionsgeschichte für Shelleys heutige Stellung?"
        },
        {
          id: "s8",
          title: "Französische Perspektive: Baudelaire, Flaubert, Camus",
          signal:
            "Textsignal: Baudelaires urbane Verdichtung, Flauberts Stilpräzision und Camus' knappe, moralisch verstörende Prosa.",
          situation:
            "Schon innerhalb der französischen Tradition konkurrieren unterschiedliche Modernitätsmodelle.",
          significance:
            "Die Station zeigt, dass 'die Moderne' je nach Sprachraum, Gattung und kulturpolitischer Rahmung anders erzählt wird.",
          lenses: [
            "Strukturalistisch: Muster und Oppositionen in der Textorganisation.",
            "New Historicism: Presse, Gericht, Urbanität, Kolonialität.",
            "Epochenkritisch: unterschiedliche Startpunkte und Selbstbeschreibungen der Moderne."
          ],
          question: "Warum gibt es nicht nur einen französischen Weg in die Moderne?"
        },
        {
          id: "s9",
          title: "Hispanophone Perspektiven: Cervantes, Lorca, Borges",
          signal:
            "Textsignal: Fiktion über Fiktion bei Cervantes, populäre und avantgardistische Energien bei Lorca, Labyrinthe und Wissensspiele bei Borges.",
          situation:
            "Die hispanophone Literatur sprengt einfache nationale Erzählungen: Spanien und Lateinamerika teilen Sprachen, aber nicht identische Periodisierungen.",
          significance:
            "Hier wird besonders deutlich, dass transnationale Literaturgeschichte nicht in einer einzigen Achse aufgeht.",
          lenses: [
            "Strukturalistisch: Spiel mit Erzählrahmen und Metafiktion.",
            "Kulturwissenschaftlich: Zentrum/Peripherie, Übersetzung und Weltliteratur.",
            "Rezeptionsästhetisch: Borges' spätere weltweite Kanonpräsenz."
          ],
          question: "Wie verändert sich Periodisierung, wenn man hispanophone Literatur transnational liest?"
        },
        {
          id: "s10",
          title: "Russische Perspektiven: Puschkin, Gogol, Tolstoi, Dostojewski, Achmatowa, Bulgakow",
          signal:
            "Textsignal: vom Versroman über Bürokratiesatire und Gesellschaftsroman bis zu Lyrik unter staatlichem Druck und zensurgeprägter Romanrezeption.",
          situation:
            "Die russische Tradition zeigt besonders klar, wie eng Kanon, Staat, Editionsgeschichte und Erinnerungspolitik ineinandergreifen können.",
          significance:
            "Puschkin fungiert häufig als Ursprungsfigur; Achmatowa und Bulgakow zeigen, wie politische Regime literarische Sichtbarkeit massiv verschieben.",
          lenses: [
            "Kulturpolitisch: Staat, Zensur, Erinnerung.",
            "Rezeptionsästhetisch: verspätete und veränderte Zugänglichkeit.",
            "Epochenkritisch: nationale Grossnarrative vs. Brüche und Gegenlinien."
          ],
          question: "Was wird an russischer Literatur besonders sichtbar, wenn man Kanon und Staat zusammendenkt?"
        }
      ],
      tasks: [
        {
          id: "m6_t1",
          type: "single-choice",
          title: "Station 1: Goethe/Schiller",
          prompt: "Welche Perspektive erklärt am direktesten, wie Goethe und Schiller zu kulturellen Leitfiguren wurden?",
          help: "Gesucht ist nicht die ästhetische Analyse eines einzelnen Gedichts, sondern die Logik der Aufwertung.",
          options: [
            { id: "a", label: "Kulturpolitisch und rezeptionsgeschichtlich" },
            { id: "b", label: "Ausschliesslich werkimmanent" },
            { id: "c", label: "Nur positivistisch über Datierungen" },
            { id: "d", label: "Nur stilometrisch" }
          ],
          correctOptionIds: ["a"],
          firstHint: "Denke an Bildungsprogramm, Schulpräsenz und spätere Wirkung.",
          secondHint: "Die Leitfigur entsteht nicht allein aus Textmerkmalen, sondern auch aus ihrer institutionellen Aufladung.",
          explanation: "Klassik als Hochmodell wird vor allem über Rezeption, Institutionen und Kulturpolitik verständlich.",
          modelAnswer:
            "Am direktesten erklärt eine kulturpolitische und rezeptionsgeschichtliche Perspektive die Leitfigurenstellung von Goethe und Schiller."
        },
        {
          id: "m6_t2",
          type: "short-text",
          title: "Station 2: Heine",
          prompt: "Warum irritiert Heine sowohl harmonische Epochenerzählungen als auch bequeme Kanonbilder?",
          help: "Nenne Satire, Politik, Judentum, Transnationalität oder Gattungsmischung.",
          placeholder: "Heine irritiert, weil ...",
          conceptGroups: [
            { label: "Misch- oder Grenzposition", variants: ["zwischen", "mischung", "grenz", "nicht sauber"] },
            { label: "Politische oder satirische Schärfe", variants: ["satire", "politisch", "nationenkritik", "kritik"] },
            { label: "Transnationale oder jüdische Perspektive", variants: ["transnational", "jüdisch", "exil", "frankreich", "außenposition"] }
          ],
          successThreshold: 3,
          firstHint: "Eine Antwort nur mit 'weil er zur Romantik gehört und politisch ist' bleibt zu grob.",
          secondHint: "Heine stört durch Gattungsmischung, politische Satire und seine prekäre Stellung im nationalen Kulturmodell.",
          modelAnswer:
            "Heine irritiert, weil er sich nicht harmonisch einer Epoche unterordnen lässt. Seine satirische, politisch scharfe Schreibweise, seine transnationale Position zwischen Deutschland und Frankreich sowie die Konflikte um seine jüdische Herkunft stören bequeme Kanon- und Epochenerzählungen."
        },
        {
          id: "m6_t3",
          type: "matching",
          title: "Station 3: Büchner",
          prompt: "Ordne den passenden Zugang zu Büchners Störpotenzial.",
          help: "Jede Zuordnung beschreibt eine andere Erkenntnisebene.",
          pairs: [
            { left: "Fragmentstruktur", right: "formalistische Lesart" },
            { left: "soziale Verwundbarkeit", right: "marxistisch-sozialgeschichtliche Lesart" },
            { left: "spätere Modernitätsfigur", right: "rezeptionsästhetische Lesart" }
          ],
          firstHint: "Die Ebenen sind Form, Gesellschaft und Wirkungsgeschichte.",
          secondHint: "Die spätere Aufwertung gehört nicht zur reinen Textstruktur.",
          explanation: "Büchner zeigt besonders gut, dass unterschiedliche Ansätze verschiedene Schichten desselben Textes freilegen.",
          modelAnswer:
            "Fragmentstruktur = formalistisch; soziale Verwundbarkeit = marxistisch-sozialgeschichtlich; spätere Modernitätsfigur = rezeptionsästhetisch."
        },
        {
          id: "m6_t4",
          type: "short-text",
          title: "Station 4: Fontane",
          prompt: "Formuliere einen kurzen Satz dazu, was Fontanes starke Schulpräsenz sichtbar macht und was sie zugleich ausblenden kann.",
          help: "Nenne mindestens einen Gewinn und eine mögliche Verengung.",
          placeholder: "Fontanes Präsenz macht sichtbar ...",
          conceptGroups: [
            { label: "Gewinn", variants: ["sichtbar", "zugang", "gesellschaft", "realismus", "ironie", "analyse"] },
            { label: "Verengung", variants: ["ausblenden", "verengen", "andere texte", "andere stimmen", "weniger sichtbar"] }
          ],
          successThreshold: 2,
          firstHint: "Die Antwort braucht beides: didaktischen Nutzen und Ausschlussproblem.",
          secondHint: "Zum Beispiel: Fontane ist ergiebig für Gesellschaftsanalyse, kann aber andere realistische oder weibliche Stimmen verdrängen.",
          modelAnswer:
            "Fontanes Schulpräsenz macht gesellschaftliche Rollen, Erzählinstanz und realistische Verfahren sehr gut analysierbar. Zugleich kann sie andere realistische Texte und weniger etablierte Stimmen aus dem Blick drängen."
        },
        {
          id: "m6_t5",
          type: "multi-select",
          title: "Station 5: Kafka",
          prompt: "Welche Aspekte machen Kafka zu einer Herausforderung für einfache nationale oder epochale Zuschreibungen?",
          help: "Wähle alle plausiblen Punkte.",
          options: [
            { id: "a", label: "Prager Kontext und mehrsprachige Umgebung" },
            { id: "b", label: "Jüdische und mitteleuropäische Verflechtungen" },
            { id: "c", label: "Eindeutige Einpassung in einen einzigen nationalen Literaturraum" },
            { id: "d", label: "Spätere weltliterarische Rezeption" },
            { id: "e", label: "Texte, die moderne, expressionistische und schwer fixierbare Züge verbinden" }
          ],
          correctOptionIds: ["a", "b", "d", "e"],
          firstHint: "Nicht Eindeutigkeit, sondern Mehrfachzugehörigkeit ist hier wichtig.",
          secondHint: "Vier Aussagen markieren Kafkas prekäre Einordnung.",
          explanation: "Kafka ist gerade deshalb literaturgeschichtlich produktiv, weil er sich nicht bequem in eine Schublade fügen lässt.",
          modelAnswer:
            "Relevant sind Prager Mehrsprachigkeit, jüdisch-mitteleuropäische Verflechtungen, die spätere Weltliteraturrezeption und die schwer fixierbare Textlogik."
        },
        {
          id: "m6_t6",
          type: "short-text",
          title: "Station 6: Brecht und Bachmann",
          prompt: "Was gewinnt man, wenn man Brecht und Bachmann nicht nur als Randergänzungen, sondern als alternative Zentren der Nachkriegsliteratur liest?",
          help: "Denke an unterschiedliche Modelle von Kritik, Sprache und Politik.",
          placeholder: "Man gewinnt ...",
          conceptGroups: [
            { label: "Alternative Zentren", variants: ["alternative", "nicht rand", "zentrum", "mehrere zentren"] },
            { label: "Unterschiedliche Kritikformen", variants: ["kritik", "verfremdung", "sprachkritik", "politik", "subjekt"] },
            { label: "Kanonrevision oder Gender", variants: ["kanon", "revision", "gender", "sichtbarkeit"] }
          ],
          successThreshold: 3,
          firstHint: "Es geht nicht nur um mehr Namen, sondern um veränderte Ordnungsmuster.",
          secondHint: "Brecht und Bachmann öffnen verschiedene Weisen, Nachkrieg, Politik und Sprache zu erzählen.",
          modelAnswer:
            "Man gewinnt ein komplexeres Bild der Nachkriegsliteratur: Brecht steht für verfremdende, gesellschaftlich eingreifende Kritik, Bachmann für Sprachkritik, Subjektzersetzung und genderrelevante Kanonrevision. So erscheint Nachkriegsliteratur nicht als einheitlicher Block, sondern als Feld konkurrierender Zentren."
        },
        {
          id: "m6_t7",
          type: "single-choice",
          title: "Station 7: Mary Shelley",
          prompt: "Welche Perspektive erklärt am besten, warum 'Frankenstein' heute anders im Kanon steht als im 19. Jahrhundert?",
          help: "Gesucht ist die Perspektive auf den Wandel der Lektüren.",
          options: [
            { id: "a", label: "Rezeptionsästhetik" },
            { id: "b", label: "Ausschliesslich Formalismus" },
            { id: "c", label: "Nur Positivismus" },
            { id: "d", label: "Nur Epochenbegriff" }
          ],
          correctOptionIds: ["a"],
          firstHint: "Frage nach verändertem Status, nicht nur nach Textmerkmalen.",
          secondHint: "Die richtige Antwort denkt in Erwartungshorizonten und Wirkungsgeschichte.",
          explanation: "Shelleys heutige Stellung lässt sich besonders gut über veränderte Rezeptions- und Kanonisierungsgeschichten erklären.",
          modelAnswer:
            "Am besten erklärt die Rezeptionsästhetik, warum 'Frankenstein' heute anders gelesen und höher bewertet wird als früher."
        },
        {
          id: "m6_t8",
          type: "matching",
          title: "Station 8 und 9: Transnationale Moderne",
          prompt: "Ordne die Beobachtung der passenden Vergleichsperspektive zu.",
          help: "Die Aufgabe verbindet französische und hispanophone Felder.",
          pairs: [
            { left: "Baudelaire / Flaubert / Camus", right: "mehrere konkurrierende Modernitätsnarrative innerhalb einer Tradition" },
            { left: "Cervantes / Lorca / Borges", right: "transnationale Periodisierung statt rein nationaler Linie" },
            { left: "Borges", right: "späte globale Kanonisierung über Übersetzung und Weltliteratur" }
          ],
          firstHint: "Eine Aussage betrifft interne Vielfalt, die andere Transnationalität.",
          secondHint: "Borges ist besonders stark mit Weltliteraturzirkulation verbunden.",
          explanation: "Der Vergleich zeigt, dass Literaturgeschichte je nach Sprachraum anders skaliert werden muss.",
          modelAnswer:
            "Baudelaire/Flaubert/Camus = konkurrierende Modernitätsnarrative; Cervantes/Lorca/Borges = transnationale Periodisierung; Borges = globale Kanonisierung durch Übersetzung."
        },
        {
          id: "m6_t9",
          type: "short-text",
          title: "Station 10: Russische Perspektiven",
          prompt: "Was wird an russischer Literaturgeschichte besonders deutlich, wenn man Kanon und Staat zusammendenkt?",
          help: "Berücksichtige Zensur, Erinnerung, verspätete Sichtbarkeit oder symbolische Ursprungsfiguren.",
          placeholder: "Besonders deutlich wird ...",
          conceptGroups: [
            { label: "Staat oder Zensur", variants: ["staat", "zensur", "regime", "kontrolle"] },
            { label: "Sichtbarkeit oder Erinnerung", variants: ["sichtbarkeit", "erinnerung", "kanon", "zugänglichkeit", "später gelesen"] },
            { label: "Beispielautor*innen", variants: ["achmatowa", "bulgakow", "puschkin", "gogol", "tolstoi", "dostojewski"] }
          ],
          successThreshold: 3,
          firstHint: "Eine allgemeine Aussage über 'russische Seele' hilft hier nicht weiter.",
          secondHint: "Die starke Antwort beschreibt, wie Staat, Zensur und spätere Erinnerung Kanonstatus aktiv mitformen.",
          modelAnswer:
            "Besonders deutlich wird, dass Kanon nicht nur ästhetisch, sondern institutionell-politisch hergestellt wird. Zensur, Editionsgeschichte und Erinnerungspolitik beeinflussen, wann und wie Autor*innen wie Achmatowa oder Bulgakow sichtbar werden, während Puschkin zugleich als symbolische Ursprungsfigur stabilisiert wird."
        }
      ],
      teacher: {
        use: "Ideal für Stationenlernen oder verteilte Expertengruppen.",
        socialForms: ["Stationenarbeit", "Partnerarbeit", "Plenum mit Vergleichsmatrix"],
        didactics:
          "Das Modul zwingt zur Rückbindung der Theorie an Texte. Jede Station ist absichtlich knapp genug für Unterrichtszeit, aber offen genug für vertiefende Diskussion.",
        assessment:
          "Wichtig ist, dass Lernende nicht nur Autor*innenwissen reproduzieren, sondern methodische Sichtbarkeiten und Ausblendungen benennen."
      }
    },
    {
      id: "mod-7",
      navTitle: "Modul 7",
      title: "Modul 7: Digital Humanities und neue Zugänge",
      subtitle: "Distant reading, Korpusanalyse, Netzwerke und Stilometrie",
      intro:
        "Digital Humanities erweitern literaturwissenschaftliche Arbeit um skalierende und datenbasierte Verfahren. Dieses Modul zeigt Chancen und Grenzen solcher Zugänge, ohne Interpretation durch Daten zu ersetzen.",
      goals: [
        "Digital Humanities in Grundzügen erklären.",
        "Distant reading, Korpusanalyse, Netzwerkanalyse und Stilometrie unterscheiden.",
        "Korpusdaten interpretieren, ohne sie zu verabsolutieren.",
        "Kanon- und Epochenkritik mit Datenfragen verbinden."
      ],
      sections: [
        {
          title: "Was Digital Humanities leisten",
          html: `
            <p>Digital Humanities (DH) verbinden literaturwissenschaftliche Fragestellungen mit digitalen Verfahren. Das kann von sauberer Datenmodellierung über Textmining bis zu Netzwerkanalyse, Visualisierung und Stilometrie reichen. Entscheidend ist nicht die Technik allein, sondern die Frage, <em>welche literaturwissenschaftlichen Probleme</em> damit bearbeitet werden.</p>
            <ul class="reading-list">
              <li><strong>Distant reading:</strong> grosse Korpora statt einzelner Werke im Zentrum.</li>
              <li><strong>Korpusanalyse:</strong> Metadaten, Themen, Worthäufigkeiten, Publikationsmuster.</li>
              <li><strong>Netzwerkanalyse:</strong> Beziehungen zwischen Autor*innen, Institutionen, Zeitschriften oder Figuren.</li>
              <li><strong>Stilometrie:</strong> statistische Muster im Stil, in Funktionwörtern oder Satzlängen.</li>
            </ul>
          `
        },
        {
          title: "Chancen und Grenzen",
          html: `
            <p>DH können Muster sichtbar machen, die im engen Lesen leicht unsichtbar bleiben: Unterrepräsentationen, Übersetzungslücken, Cluster, Zirkulationen oder die überproportionale Dominanz einzelner Autor*innen in Handbüchern. Gleichzeitig gilt: Daten beantworten nie allein die Frage nach Bedeutung. Sie zeigen Muster, aber nicht automatisch ihre kulturelle Relevanz.</p>
            <div class="info-grid">
              <article class="info-box example">
                <h4>Chance</h4>
                <p>Eine Korpusanalyse kann zeigen, dass in einer Literaturliste überwiegend männliche, kanonische, deutschsprachige Werke dominieren.</p>
              </article>
              <article class="info-box criticism">
                <h4>Grenze</h4>
                <p>Die Statistik sagt noch nicht, warum dies so ist, wie Werke gelesen wurden oder was ästhetisch an ihnen relevant bleibt.</p>
              </article>
              <article class="info-box english">
                <h4>English focus</h4>
                <p><strong>Data can reveal patterns, not self-sufficient interpretations.</strong></p>
              </article>
            </div>
          `
        },
        {
          title: "Mini-Simulation",
          html: `
            <p>Die folgende Simulation arbeitet mit einem didaktisch konstruierten Mini-Korpus. Du kannst nach Sprache, Kanonstatus, Geschlecht, Thema und Form filtern. Anschliessend vergleichst du den <strong>kanonischen Blick</strong> mit dem <strong>Korpusblick</strong>.</p>
          `
        }
      ],
      tasks: [
        {
          id: "m7_t1",
          type: "single-choice",
          title: "Distant Reading",
          prompt: "Welche Aussage beschreibt distant reading am besten?",
          help: "Achte auf Skalierung, nicht auf Technikfetischismus.",
          options: [
            { id: "a", label: "Distant reading ersetzt jede Form von Interpretation durch Algorithmen." },
            { id: "b", label: "Distant reading untersucht grössere Korpora und verschiebt damit die Ebene literaturwissenschaftlicher Fragen." },
            { id: "c", label: "Distant reading bedeutet, Texte nur oberflächlich zu lesen." },
            { id: "d", label: "Distant reading ist ein anderes Wort für Inhaltsangabe." }
          ],
          correctOptionIds: ["b"],
          firstHint: "Die richtige Antwort betont Skalierung, nicht Abschaffung von Interpretation.",
          secondHint: "Distant reading verändert die Fragestellung, nicht den wissenschaftlichen Anspruch.",
          explanation: "Distant reading ist eine Perspektivverschiebung: von Einzeltexten zu grösseren Mustern.",
          modelAnswer:
            "Distant reading untersucht grössere Korpora und verschiebt dadurch die Ebene der Fragen, ohne Interpretation zu ersetzen."
        },
        {
          id: "m7_t2",
          type: "matching",
          title: "DH-Methoden zuordnen",
          prompt: "Ordne den DH-Verfahren die jeweils treffendste Aussage zu.",
          help: "Denke an typische Erkenntnisinteressen.",
          pairs: [
            { left: "Stilometrie", right: "zeigt statistische Stilähnlichkeiten oder Differenzen" },
            { left: "Netzwerkanalyse", right: "macht Beziehungen und Verbindungen sichtbar" },
            { left: "Korpusanalyse", right: "untersucht Muster in grösseren Text- und Metadatenbeständen" },
            { left: "Distant reading", right: "skaliert literaturwissenschaftliche Fragen über Einzeltexte hinaus" }
          ],
          firstHint: "Netzwerke sind Beziehungen, Stilometrie ist Stilstatistik.",
          secondHint: "Distant reading ist eher eine Perspektive, Korpusanalyse eher ein Verfahren.",
          explanation: "Die Begriffe überschneiden sich, markieren aber unterschiedliche Arbeitsebenen.",
          modelAnswer:
            "Stilometrie = statistische Stilähnlichkeit; Netzwerkanalyse = Beziehungen; Korpusanalyse = Muster in grossen Datenbeständen; distant reading = skalierte Fragestellung."
        },
        {
          id: "m7_t3",
          type: "multi-select",
          title: "Grenzen quantitativer Verfahren",
          prompt: "Welche Aussagen benennen reale Grenzen quantitativer DH-Verfahren?",
          help: "Wähle alle überzeugenden Punkte.",
          options: [
            { id: "a", label: "Datenqualität und Korpuszuschnitt beeinflussen Ergebnisse massiv." },
            { id: "b", label: "Quantitative Ergebnisse erklären kulturelle Bedeutung immer vollständig." },
            { id: "c", label: "Muster müssen interpretiert und historisch kontextualisiert werden." },
            { id: "d", label: "Unterrepräsentierte Archive können Ergebnisse verzerren." },
            { id: "e", label: "DH machen jede Form von close reading überflüssig." }
          ],
          correctOptionIds: ["a", "c", "d"],
          firstHint: "Suche nach Antworten, die auf Korpusbau und Interpretation zielen.",
          secondHint: "Drei Aussagen benennen reale Grenzen; zwei übertreiben die Leistungsfähigkeit.",
          explanation: "DH sind erkenntnisstark, aber stark vom Korpusdesign und von interpretativer Rückbindung abhängig.",
          modelAnswer:
            "Grenzen liegen in Datenqualität und Korpuszuschnitt, in der Notwendigkeit historischer Interpretation und in Verzerrungen durch unterrepräsentierte Archive."
        },
        {
          id: "m7_t4",
          type: "short-text",
          title: "Dateninterpretation",
          prompt: "Formuliere in vier bis sechs Sätzen, was die DH-Simulation über Kanon und Korpus zeigen kann und was sie gerade nicht zeigen kann.",
          help: "Nenne mindestens eine Stärke und eine Grenze.",
          placeholder: "Die Simulation kann zeigen ...",
          conceptGroups: [
            { label: "Muster oder Verteilung", variants: ["muster", "verteilung", "häufigkeit", "repräsentation", "sichtbarkeit"] },
            { label: "Kanonkritik", variants: ["kanon", "unterrepräsentiert", "dominanz", "fehlen", "auswahl"] },
            { label: "Grenze der Daten", variants: ["nicht zeigen", "nicht ersetzen", "interpretation", "bedeutung", "kontext"] }
          ],
          successThreshold: 3,
          firstHint: "Eine gute Antwort sagt nicht nur, was Daten können, sondern auch, was sie nicht entscheiden.",
          secondHint: "Zum Beispiel: Die Simulation zeigt Verteilungen und blinde Flecken, aber nicht automatisch ästhetische Qualität oder historische Bedeutung.",
          modelAnswer:
            "Die Simulation kann zeigen, welche Sprachen, Geschlechter, Themen oder Kanonstatus in einem Korpus dominieren und welche Bereiche auffällig selten vertreten sind. Damit wird Kanonkritik datenförmig sichtbar. Sie kann aber nicht von selbst erklären, warum diese Muster entstanden sind, wie Texte ästhetisch funktionieren oder welche historische Bedeutung eine Konstellation genau hat. Dafür braucht es weiterhin Interpretation, Kontextwissen und close reading."
        }
      ],
      teacher: {
        use: "Gut für eine Doppelstunde mit Projektionsphase oder Arbeit am Laptop.",
        socialForms: ["Einzelarbeit", "Partnerinterpretation der Simulation", "Plenum zur Methodenreflexion"],
        didactics:
          "Die DH-Einheit soll Datenkompetenz mit Hermeneutik verschränken. Entscheidend ist nicht die Visualisierung an sich, sondern die Reflexion ihrer Reichweite.",
        assessment:
          "Achte darauf, ob Lernende zwischen Datenmuster und literaturwissenschaftlicher Deutung unterscheiden."
      }
    },
    {
      id: "mod-8",
      navTitle: "Modul 8",
      title: "Modul 8: Synthese, Vertiefung, Transfer",
      subtitle: "Modelle vergleichen und eine eigene Literaturgeschichte entwerfen",
      intro:
        "Im Abschlussmodul bündelst du die wichtigsten Spannungen der gesamten Einheit. Es geht nicht um Reproduktion, sondern um urteilsfähige Synthese.",
      goals: [
        "Theoretische Ansätze vergleichend beurteilen.",
        "Epochenkritik, Kanonfrage und DH zusammendenken.",
        "Eigene Auswahlprinzipien reflektiert formulieren.",
        "Transfer auf eine alternative Literaturgeschichte wagen."
      ],
      sections: [
        {
          title: "Leitgedanke",
          html: `
            <p>Eine reflektierte Literaturgeschichte ist weder reine Chronologie noch blosse Beliebigkeit. Sie braucht Auswahl, muss diese Auswahl aber transparent machen, begründen und kritisierbar halten.</p>
            <div class="comparison-strip">
              <div><span>Ordnung</span><p>ist nötig, damit Literatur vermittelbar wird.</p></div>
              <div><span>Kritik</span><p>ist nötig, damit Ordnung nicht zur Naturtatsache erstarrt.</p></div>
              <div><span>Daten</span><p>können Muster sichtbar machen, entscheiden aber nicht allein.</p></div>
            </div>
          `
        }
      ],
      tasks: [
        {
          id: "m8_t1",
          type: "matching",
          title: "Vergleichsachsen sichern",
          prompt: "Ordne den Vergleichsachsen die passende Zuspitzung zu.",
          help: "Die Formulierungen verdichten die ganze Einheit.",
          pairs: [
            { left: "Werk vs. Kontext", right: "Frage danach, ob formale Eigenlogik oder historische Einbettung im Vordergrund steht" },
            { left: "Kanon vs. Gegenkanon", right: "Frage danach, welche Auswahl stabilisiert oder revidiert wird" },
            { left: "close reading vs. distant reading", right: "Frage nach Analyse einzelner Texte oder skalierter Muster" },
            { left: "nationale vs. transnationale Literaturgeschichte", right: "Frage nach Grenzziehungen, Übersetzungen und Mehrfachzugehörigkeiten" }
          ],
          firstHint: "Ordnung, Auswahl, Methode und Grenzziehung sind die vier Felder.",
          secondHint: "Distant reading gehört nicht zur Kanonfrage, sondern zur Skalierung der Analyse.",
          explanation: "Die Vergleichsachsen helfen, theoretische Debatten über einzelne Module hinaus zu bündeln.",
          modelAnswer:
            "Werk vs. Kontext = Eigenlogik oder Einbettung; Kanon vs. Gegenkanon = Stabilisierung oder Revision; close vs. distant reading = Einzeltext oder Muster; national vs. transnational = Grenzziehung und Mehrfachzugehörigkeit."
        },
        {
          id: "m8_t2",
          type: "multi-select",
          title: "Abschlussquiz",
          prompt: "Welche Aussagen sind im Sinne dieser Lerneinheit überzeugend?",
          help: "Wähle alle tragfähigen Aussagen.",
          options: [
            { id: "a", label: "Literaturgeschichte ist ein argumentatives Ordnungssystem, kein neutrales Abbild." },
            { id: "b", label: "Epochenbegriffe sind nur dann sinnvoll, wenn man sie als heuristische Werkzeuge versteht." },
            { id: "c", label: "Digital Humanities ersetzen Interpretation vollständig." },
            { id: "d", label: "Kanonisierung ist institutionell und kulturpolitisch mitgeprägt." },
            { id: "e", label: "Primärtexte passen immer eindeutig in nur ein theoretisches Modell." }
          ],
          correctOptionIds: ["a", "b", "d"],
          firstHint: "Drei Aussagen fassen Kernthesen der Einheit zusammen.",
          secondHint: "Weder DH-Absolutismus noch Modell-Eindeutigkeit passen zur Einheit.",
          explanation: "Das Abschlussquiz bündelt die zentralen Einsichten: Konstruktion, Heuristik und institutionelle Prägung.",
          modelAnswer:
            "Überzeugend sind die Aussagen zu Literaturgeschichte als Ordnungssystem, zu Epochen als Heuristik und zur institutionell geprägten Kanonisierung."
        },
        {
          id: "m8_t3",
          type: "short-text",
          title: "Alternative Literaturgeschichte",
          prompt: "Entwirf in Grundzügen eine alternative Literaturgeschichte. Begründe in vier bis sechs Sätzen, nach welchen Auswahlprinzipien du ordnen würdest.",
          help: "Möglich sind etwa Themen, Gattungen, Medien, Konflikte, Räume, Übersetzungen oder Gegenkanon-Perspektiven.",
          placeholder: "Meine alternative Literaturgeschichte würde ...",
          conceptGroups: [
            { label: "Eigenes Ordnungsprinzip", variants: ["ordnen", "prinzip", "auswahl", "nach", "struktur"] },
            { label: "Begründung", variants: ["weil", "damit", "begründet", "sinnvoll", "ermöglicht"] },
            { label: "Reflexion von Grenze oder Ausschluss", variants: ["grenze", "ausschluss", "risiko", "problem", "nicht neutral"] }
          ],
          successThreshold: 3,
          firstHint: "Nenne nicht nur Themen, sondern auch warum diese Ordnung etwas sichtbar machen soll.",
          secondHint: "Eine überzeugende Antwort begründet ihr Auswahlprinzip und reflektiert zugleich dessen Grenzen.",
          modelAnswer:
            "Meine alternative Literaturgeschichte würde weniger nach Epochen und stärker nach Konfliktfeldern wie Macht, Geschlecht, Arbeit, Technik und Migration ordnen. So würden Texte aus verschiedenen Jahrhunderten und Sprachräumen direkt vergleichbar. Dieses Modell macht transnationale und wiederkehrende Problemkonstellationen sichtbarer. Zugleich müsste ich offenlegen, dass auch diese Ordnung selektiv ist und andere Aspekte ausblenden kann."
        },
        {
          id: "m8_t4",
          type: "short-text",
          title: "Offene Transferfrage",
          prompt: "Formuliere ein kurzes Schlussurteil: Warum sollte Literaturunterricht Literaturgeschichte lehren, wenn diese doch konstruiert und umstritten ist?",
          help: "Verbinde Orientierung, Kritikfähigkeit und Urteilskraft.",
          placeholder: "Literaturunterricht sollte Literaturgeschichte lehren, weil ...",
          conceptGroups: [
            { label: "Orientierung", variants: ["orientierung", "überblick", "ordnung"] },
            { label: "Kritikfähigkeit", variants: ["kritik", "hinterfragen", "reflektieren", "nicht neutral"] },
            { label: "Urteil oder Vergleich", variants: ["urteil", "vergleichen", "einordnen", "argumentieren"] }
          ],
          successThreshold: 3,
          firstHint: "Die Antwort soll weder unkritisch noch anti-historisch sein.",
          secondHint: "Eine gute Schlussformel lautet sinngemäss: Wir brauchen Literaturgeschichte, aber als reflektierte und kritisierbare Ordnung.",
          modelAnswer:
            "Literaturunterricht sollte Literaturgeschichte lehren, weil Lernende Orientierung und Vergleichsmöglichkeiten brauchen. Zugleich ist gerade der Konstruktionscharakter wichtig: Er macht Literaturgeschichte zu einem Feld kritischer Urteilsbildung statt zu einer blossen Liste. Wer Literaturgeschichte reflektiert lernt, kann Texte einordnen, Kanones befragen und eigene begründete Perspektiven entwickeln."
        }
      ],
      teacher: {
        use: "Als Abschluss einer Unterrichtsreihe oder als Prüfungsvorbereitung.",
        socialForms: ["Einzelarbeit", "Partnerfeedback", "Plenum mit Synthesetafel"],
        didactics:
          "Modul 8 soll nicht nur sichern, sondern produktiv offen halten. Die alternative Literaturgeschichte ist deshalb bewusst argumentativ und nicht schematisch angelegt.",
        assessment:
          "Besonders wertvoll sind Antworten, die Auswahlprinzipien explizit machen und deren Grenzen mitreflektieren."
      }
    }
  ];

  const teacherGuide = {
    overview:
      "Der Lehrpersonenbereich bündelt Musterlösungen, didaktische Hinweise und Einsatzformen. Die Plattform ist für selbständige Arbeit ebenso geeignet wie für Unterricht mit Projektion oder Partnerphasen.",
    suggestions: [
      "Modul 1 und 3 eignen sich gut für gemeinsame Begriffsarbeit im Plenum.",
      "Modul 2 und 6 funktionieren besonders gut arbeitsteilig in Gruppen.",
      "Modul 4 und 5 bieten sich für kontroverse Diskussionen an.",
      "Modul 7 sollte mit sichtbarer Datenreflexion abgeschlossen werden: Was zeigen die Visualisierungen, was nicht?",
      "Modul 8 kann als Hausaufgabe, Lernkontrolle oder Schreibanlass genutzt werden."
    ],
    note:
      "Der Passwortschutz ist bewusst niedrigschwellig und rein clientseitig, damit das Projekt ohne Backend auf GitHub Pages laufen kann."
  };

  window.LIT_SITE_DATA = {
    site,
    modules,
    dhCorpus,
    teacherGuide
  };
  window.LIT_DH_CORPUS = dhCorpus;
})();
