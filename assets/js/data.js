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
          type: "short-text",
          title: "Begriff definieren",
          prompt: "Definiere in zwei bis vier Sätzen den Begriff Literaturgeschichtsschreibung so, dass Auswahl, Ordnung, Deutung und Institutionen mitgemeint sind.",
          help: "Schreibe keine Wörterbuchdefinition, sondern eine fachlich präzise Arbeitsdefinition.",
          placeholder: "Literaturgeschichtsschreibung ist ...",
          conceptGroups: [
            { label: "Auswahl", variants: ["auswahl", "selektiv", "selektion"] },
            { label: "Ordnung", variants: ["ordnung", "struktur", "gliedert", "periodisierung"] },
            { label: "Deutung", variants: ["deutung", "narrativ", "erzählt", "wertet", "interpretation"] },
            { label: "Institutionen", variants: ["institution", "schule", "universität", "verlag", "archiv", "kritik"] }
          ],
          successThreshold: 4,
          firstHint: "Eine tragfähige Definition nennt nicht nur Texte, sondern auch die Art ihrer Ordnung.",
          secondHint: "Eine starke Antwort sagt, dass Literaturgeschichtsschreibung Texte auswählt, ordnet, deutet und durch Institutionen stabilisiert wird.",
          explanation: "Fachlich präzise ist eine Definition dann, wenn sie nicht nur 'Geschichte von Literatur' sagt, sondern Auswahl, Narrativität und institutionelle Rahmung sichtbar macht.",
          modelAnswer:
            "Literaturgeschichtsschreibung ist die wissenschaftliche und didaktische Praxis, Texte nicht nur chronologisch zu sammeln, sondern sie auszuwählen, zu ordnen und in Deutungszusammenhänge zu erzählen. Sie ist deshalb nie neutral, sondern wird durch Kriterien, Perspektiven und Institutionen wie Schule, Universität, Verlage oder Archive mitgeprägt."
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
        },
        {
          id: "m1_t5",
          type: "short-text",
          title: "Ergebnissicherung: Mini-Transfer zur Ordnung",
          prompt: "Nimm ein Werk aus dem Kurs, etwa Kafka, Heine oder Mary Shelley, und erkläre in drei bis fünf Sätzen, wie aus einer blossen Datierung eine literaturgeschichtliche Deutung wird.",
          help: "Verbinde mindestens Werkbeispiel, Auswahlkriterium und Deutungsinteresse.",
          placeholder: "Am Beispiel von ... wird aus blosser Datierung Literaturgeschichte, wenn ...",
          conceptGroups: [
            { label: "Werkbeispiel", variants: ["kafka", "heine", "shelley", "goethe", "büchner", "fontane", "brecht", "bachmann", "camus", "borges", "achmatowa"] },
            { label: "Datierung reicht nicht", variants: ["datum", "datierung", "jahr allein", "chronologie"] },
            { label: "Auswahl oder Ordnung", variants: ["auswahl", "ordnet", "gruppiert", "epoche", "kanon"] },
            { label: "Deutung oder Interesse", variants: ["deutung", "interesse", "erzählt", "wertet", "sichtbar"] }
          ],
          successThreshold: 4,
          firstHint: "Es reicht nicht zu sagen, wann ein Werk erschienen ist; du musst zeigen, wie daraus eine Ordnung mit Sinn wird.",
          secondHint: "Eine starke Antwort sagt etwa: Ein Werk wird ausgewählt, mit anderen verbunden und unter einer Leitfrage als Beispiel für Moderne, Kanonproblem oder Kulturpolitik gelesen.",
          explanation:
            "Transfer gelingt, wenn deutlich wird, dass Literaturgeschichte nicht beim Datum stehen bleibt, sondern Werke in Auswahl- und Deutungszusammenhänge einträgt.",
          modelAnswer:
            "Am Beispiel von Kafka zeigt sich, dass eine Datierung wie 1915 allein noch keine Literaturgeschichte ergibt. Erst wenn 'Die Verwandlung' als Text der Moderne, als Fall prekärer nationaler Zuordnung oder als Beispiel bürokratischer und familiärer Macht gelesen wird, entsteht eine literaturgeschichtliche Deutung. Dazu werden Auswahlkriterien und Vergleichsachsen benötigt, nicht nur Jahreszahlen."
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
        "Die folgenden Ansätze sind nicht gleich wichtig für heutige Praxis. Dieses Modul ordnet sie historisch, markiert aktuelle Schwerpunkte und zeigt, warum manche Modelle eher Hintergrundwissen oder gezielte Ergänzung geworden sind.",
      goals: [
        "Ansätze nach heutigem Erkenntniswert priorisieren statt nur aufzuzählen.",
        "Aktuelle Schwerpunkte, bleibende Stärken und heutige Probleme unterscheiden.",
        "Modelle auf Primärtexte übertragen, ohne sie zu absolutisieren.",
        "Verstehen, wie Ein-Methoden-Lektüren neue Kanonisierungen erzeugen können."
      ],
      approaches: [
        {
          priority: 4,
          priorityLabel: "Historischer Hintergrund",
          todayStatus:
            "Heute wichtig als Quellen- und Editionswissen, aber kaum noch als Leitmodell literaturgeschichtlicher Sinnbildung. Besonders problematisch wird der Ansatz dort, wo ein stabiler Autorbegriff Texte vereinnahmt; punktuell bleibt er bei Editionsphilologie, Materialität und in Debatten um Autofiktion produktiv.",
          name: "Positivistische Literaturgeschichtsschreibung",
          keyTerms: ["Empirie", "Quellen", "Dokumentation"],
          definition: "Literatur wird vor allem über überprüfbare Fakten, Quellen, Datierungen, Einflüsse und biografisch-historische Kontexte erschlossen.",
          history: "Vor allem im 19. Jahrhundert stark; eng mit Historismus, Philologie und Editionsarbeit verbunden.",
          epistemology: "Erkenntnis beruht auf belegbaren Daten, Kausalzusammenhängen und dokumentierbaren Kontexten.",
          questions: ["Wann erschien ein Werk?", "Welche Quellen lagen vor?", "Welche Einflüsse und historischen Bedingungen lassen sich belegen?"],
          chances: ["sichert Faktenbasis", "schärft Quellenkritik", "verhindert reine Impressionistik"],
          critique: [
            "reduziert Literatur leicht auf Ursachen und Belege",
            "setzt oft einen stabilen Autor- und Werkbegriff voraus",
            "kann Texte vereinnahmen, indem sie zu Dokumenten ihrer Entstehung gemacht werden",
            "erzeugt leicht lineare Kausal- und Entwicklungserzählungen"
          ],
          exercise: "Nenne drei Informationen, die ein positivistischer Zugriff zu Kafkas Publikationssituation sammeln würde.",
          transfer: "Bei Mary Shelley würde der Ansatz nach naturwissenschaftlichen Debatten, Reisesituationen, Lektüren und Publikationsbedingungen fragen."
        },
        {
          priority: 4,
          priorityLabel: "Historischer Hintergrund",
          todayStatus:
            "Heute vor allem als historisch einflussreicher Zugriff relevant. Problematisch ist seine Neigung zu grossen Sinnordnungen, die politisch vereinnahmbar werden; gerade die NS-Zeit und spätere erinnerungspolitische Debatten zeigen, wie riskant totalisierende Geist- und Sendungsnarrative sind.",
          name: "Geistesgeschichtlicher Ansatz",
          keyTerms: ["Zeitgeist", "Idee", "Weltanschauung"],
          definition: "Literatur wird als Ausdruck übergreifender geistiger Strömungen, Weltbilder oder Denkformen einer Epoche gelesen.",
          history: "Vor allem im frühen 20. Jahrhundert wirksam; reagiert auf die Suche nach historischen Ganzheiten und Sinnformationen.",
          epistemology: "Texte gelten als Manifestationen eines geschichtlichen Geistes oder einer kulturellen Leitidee.",
          questions: ["Welche Weltanschauung prägt die Epoche?", "Wie verdichtet ein Werk einen historischen Geist?", "Welche Leitideen organisieren eine Zeit?"],
          chances: ["macht intellektuelle Horizonte sichtbar", "ermöglicht Synthesen", "verknüpft Literatur mit Ideengeschichte"],
          critique: [
            "neigt zu Homogenisierung und teleologischen Grossnarrativen",
            "übersieht innere Widersprüche und Gegenstimmen",
            "ist politisch vereinnahmbar, wenn historische Sinnordnungen naturalisiert werden",
            "stabilisiert Epochen oft stärker, als es die Texte tragen"
          ],
          exercise: "Formuliere eine mögliche geistesgeschichtliche Leitidee für die Weimarer Klassik.",
          transfer: "Goethe und Schiller würden hier als Ausdruck eines humanistischen Bildungsprogramms gelesen."
        },
        {
          priority: 1,
          priorityLabel: "Methodische Grundlage",
          todayStatus:
            "Bis heute unverzichtbar als Basiskompetenz, aber allein nicht ausreichend. Die textnahe Präzision bleibt ergiebig; problematisch wird sie dort, wo politische, institutionelle oder biografische Konflikte systematisch ausgeblendet oder problematische Vorgeschichten durch 'reine Textnähe' kaschiert werden.",
          name: "Werkimmanente Interpretation / Formalismus / New Criticism",
          keyTerms: ["Form", "Close Reading", "Verfahren"],
          definition: "Im Zentrum stehen sprachliche Form, Struktur, Motivführung, Perspektive, Ambiguität und literarische Verfahren.",
          history: "Russischer Formalismus seit den 1910er Jahren; New Criticism besonders im anglophonen Raum des 20. Jahrhunderts.",
          epistemology: "Erkenntnis entsteht aus genauer Analyse textinterner Organisation, nicht primär aus Biografie oder Zeitkontext.",
          questions: ["Wie ist der Text gebaut?", "Welche Spannungen und Muster erzeugt die Form?", "Wie arbeitet der Text mit Wiederholung, Ironie oder Verfremdung?"],
          chances: ["schärft textnahe Genauigkeit", "verhindert vorschnelle Kontextauflösung", "macht literarische Verfahren sichtbar"],
          critique: [
            "blendet Institutionen, Politik und Rezeption leicht aus",
            "kann als scheinbar apolitische Lektüre problematische Kontexte kaschieren",
            "übersieht soziale Asymmetrien, wenn Textautonomie absolut gesetzt wird",
            "ist historisch auch dort ambivalent, wo Namen wie Emil Staiger oder Paul de Man zeigen, dass Textgenauigkeit kein ethischer Freipass ist"
          ],
          exercise: "Nenne zwei formale Merkmale, auf die du bei Brechts epischem Theater achten würdest.",
          transfer: "Bei Kafkas 'Die Verwandlung' würde man Erzählton, Lakonik, Perspektive und Motivketten untersuchen."
        },
        {
          priority: 3,
          priorityLabel: "Gezielte Ergänzung",
          todayStatus:
            "Bleibt als Ideologiekritik und Machtanalyse produktiv, ist aber nicht mehr das selbstverständliche Leitparadigma früherer Theoriephasen. Nach dem Ende des Kalten Kriegs sind totalisierende Klassenmodelle zurückgetreten; stark bleibt der Ansatz dort, wo Materialität und Herrschaft präzise mitgelesen werden.",
          name: "Marxistische Literaturtheorie",
          keyTerms: ["Klasse", "Ideologie", "Materialität"],
          definition: "Literatur wird auf Produktionsverhältnisse, Klassenkonflikte, Ideologiekritik und gesellschaftliche Widersprüche bezogen.",
          history: "Seit dem 19. Jahrhundert; vielfältig weiterentwickelt in kritischer Theorie, Ideologiekritik und materialistischer Kulturtheorie.",
          epistemology: "Texte sind weder rein autonom noch blosse Spiegel, sondern Teil gesellschaftlicher Praxis und ideologischer Auseinandersetzungen.",
          questions: ["Welche gesellschaftlichen Widersprüche werden sichtbar?", "Wie wird Herrschaft ästhetisch verarbeitet?", "Welche Perspektiven fehlen?"],
          chances: ["macht Macht- und Klassenverhältnisse sichtbar", "verbindet Ästhetik mit Gesellschaft", "fragt nach materiellen Bedingungen"],
          critique: [
            "kann ästhetische Komplexität funktionalisieren",
            "neigt gelegentlich zu Reduktion auf Klassenlogik",
            "wirkt dort veraltet, wo politische Lagerlogiken schematisch fortgeschrieben werden",
            "unterschätzt manchmal die Offenheit von Rezeption und Mehrdeutigkeit"
          ],
          exercise: "Welche soziale Asymmetrie wäre bei Büchners 'Woyzeck' zentral?",
          transfer: "Bei Fontanes 'Effi Briest' würde ein marxistisch informierter Zugriff Klassenlage, Geschlechterordnung und soziale Reproduktion mitlesen."
        },
        {
          priority: 3,
          priorityLabel: "Gezielte Ergänzung",
          todayStatus:
            "Weiterhin relevant, wenn man Wandel, Schulkanon und spätere Aufwertung erklären will. Als dominanter Theorierahmen ist sie jedoch zurückgetreten, weil ihre Leserbegriffe oft zu abstrakt bleiben und institutionelle Macht nicht immer scharf genug fassen.",
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
          priority: 4,
          priorityLabel: "Historischer Hintergrund",
          todayStatus:
            "Heute weniger als eigenständiges Leitparadigma wichtig als vielmehr als begriffliches Werkzeuglager. Viele seiner Begriffe leben weiter, aber ein rein strukturalistisches Modell wirkt oft zu statisch für Macht-, Subjekt- und Geschichtsfragen.",
          name: "Strukturalismus",
          keyTerms: ["System", "Relation", "Code"],
          definition: "Ein Text oder eine Textgruppe wird als System von Differenzen, Regeln und wiederkehrenden Strukturen beschrieben.",
          history: "Besonders seit Mitte des 20. Jahrhunderts; beeinflusst von Linguistik und Anthropologie.",
          epistemology: "Bedeutung entsteht relational. Einzelphänomene werden über ihre Position im System verständlich.",
          questions: ["Welche Oppositionen strukturieren den Text?", "Welche Gattungsregeln und Codes greifen?", "Welche Muster wiederholen sich?"],
          chances: ["macht regelhafte Muster sichtbar", "vergleichende Analysen werden präziser", "verschiebt den Fokus von Einzelgenie zu Struktur"],
          critique: [
            "Geschichte und Macht treten leicht zurück",
            "Subjektivität wird unterbestimmt",
            "zu starre Systemmodelle können Differenz glätten",
            "wird heute oft eher als begrifflicher Vorläufer späterer Ansätze genutzt"
          ],
          exercise: "Welche Oppositionen könnte man in 'Don Quijote' oder 'Faust I' strukturalistisch untersuchen?",
          transfer: "Bei Baudelaire wäre interessant, wie Gegensatzpaare wie Reinheit/Verfall oder Stadt/Ideal organisiert werden."
        },
        {
          priority: 2,
          priorityLabel: "Schwerpunkt heute",
          todayStatus:
            "Bleibt für gegenwärtige Theorie wichtig, weil der Ansatz Hierarchien, Ausschlüsse und Instabilitäten sichtbar macht. Er ist aber nur dann didaktisch stark, wenn seine begriffliche Abstraktion mit Textarbeit und historischen Fragen verbunden wird.",
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
          priority: 2,
          priorityLabel: "Schwerpunkt heute",
          todayStatus:
            "Für viele heutige literaturwissenschaftliche Lektüren besonders produktiv, weil der Ansatz Text, Diskurs und Macht zusammendenkt, ohne in einfache Spiegelung zu verfallen. Er wird dort problematisch, wo der Text im Kontextnetz fast verschwindet.",
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
          priority: 3,
          priorityLabel: "Gezielte Ergänzung",
          todayStatus:
            "Für Institutions-, Medien- und Feldfragen weiterhin anregend, aber selten das Zentrum schulischer oder interpretatorischer Praxis. Viele empfinden den Ansatz als unbefriedigend, weil der Subjektbegriff stark zurücktritt und konflikthafte Erfahrung nur indirekt erscheint.",
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
          priority: 2,
          priorityLabel: "Schwerpunkt heute",
          todayStatus:
            "Besonders wichtig für gegenwärtige Literaturgeschichtsschreibung, weil diese Erweiterungen Kanon, Nation und Epoche zugleich auf Machtasymmetrien, Übersetzung und transnationale Zirkulation hin befragen. Sie korrigieren ältere Engführungen, dürfen aber nicht nur aus Schlagworten bestehen.",
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
          title: "Priorisieren statt gleichrangig nebeneinanderstellen",
          html: `
            <p>Die Ansätze dieses Moduls werden bewusst <strong>nicht</strong> als gleich starke Gegenwartsmodelle präsentiert. Für die Arbeit heute ist textnahe Präzision weiterhin eine Basiskompetenz, doch die eigentlichen Schwerpunkte liegen stärker bei <strong>Poststrukturalismus, New Historicism sowie kulturwissenschaftlichen und postkolonialen Erweiterungen</strong>, weil sie Mehrdeutigkeit, Macht, Diskurs, Transnationalität und Kanonkritik zugleich fassen.</p>
            <p>Positivismus, Geistesgeschichte und ein rein strukturalistisches Denken gehören eher zum historischen oder begrifflichen Hintergrund. Marxistische, rezeptionsästhetische und systemtheoretische Zugriffe bleiben als gezielte Ergänzungen wichtig, wenn sie konkrete Fragen besser beantworten als ein einziges Leitmodell.</p>
            <div class="info-box example">
              <h4>Didaktische Leitlinie</h4>
              <p>Frage nicht nur: <em>Welcher Ansatz ist richtig?</em> Frage auch: <em>Warum steht dieser Ansatz heute eher im Vordergrund oder eher im Hintergrund?</em> und <em>Welche Texte würden wir bevorzugen, wenn wir nur mit einem Modell arbeiten?</em></p>
            </div>
            <p>Genau hier liegt der multiperspektivische Kern der Einheit: Wer nur eine Methode bevorzugt, kanonisiert leicht genau jene Texte, die das eigene Modell bestätigt, während widerspenstige oder anders gelagerte Texte aus dem Blick geraten.</p>
          `
        }
      ],
      tasks: [
        {
          id: "m2_t1",
          type: "short-text",
          title: "Ansatz definieren und abgrenzen",
          prompt: "Wähle einen theoretischen Ansatz aus diesem Modul und definiere ihn in drei bis fünf Sätzen. Erkläre zusätzlich, was dieser Ansatz typischerweise sichtbar macht und was er eher ausblendet.",
          help: "Der Ansatz soll nicht nur benannt, sondern fachlich präzise charakterisiert werden.",
          placeholder: "Ich wähle den Ansatz ...",
          conceptGroups: [
            { label: "Ansatz benennen", variants: ["positiv", "geistesgesch", "werkimmanent", "formalismus", "new criticism", "marx", "rezeptions", "strukturalismus", "poststrukturalismus", "dekonstruktion", "new historicism", "systemtheorie"] },
            { label: "Definition", variants: ["fragt", "fokussiert", "liest", "versteht", "analysiert"] },
            { label: "sichtbar machen", variants: ["sichtbar", "zeigt", "erschliesst", "macht"] },
            { label: "Ausblendung", variants: ["blendet", "grenzt aus", "übersieht", "weniger"] }
          ],
          successThreshold: 4,
          firstHint: "Eine gute Antwort nennt nicht nur ein Schlagwort, sondern das Erkenntnisinteresse des Ansatzes.",
          secondHint: "Stark ist eine Formel wie: 'Der Ansatz fragt vor allem nach ...; dadurch macht er ... sichtbar, blendet aber ... eher aus.'",
          explanation: "Theorieverständnis zeigt sich daran, dass ein Ansatz definiert, angewendet und zugleich begrenzt werden kann.",
          modelAnswer:
            "Ich wähle die Rezeptionsästhetik. Sie versteht Literatur nicht nur vom Text her, sondern vom Verhältnis zwischen Text, Leserschaft und Erwartungshorizonten. Sichtbar macht sie vor allem, wie sich die Bedeutung und Wertung eines Werkes historisch verändern. Eher ausgeblendet bleiben manchmal die materiale Infrastruktur und institutionelle Macht, die diese Rezeption ebenfalls mitformen."
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
        },
        {
          id: "m2_t5",
          type: "single-choice",
          title: "Ergebnissicherung: Methodenurteil",
          prompt: "Welche Formulierung zeigt den methodisch stärksten Umgang mit Theorieansätzen?",
          help: "Gesucht ist eine Antwort, die Vergleich und Begrenzung zusammendenkt.",
          options: [
            { id: "a", label: "Ein guter Ansatz erklärt einen Text vollständig, deshalb braucht man die anderen nicht mehr." },
            { id: "b", label: "Ansätze sind nützlich, weil sie unterschiedliche Fragen stellen und deshalb verschiedene Aspekte sichtbar machen." },
            { id: "c", label: "Theorie ist vor allem dann hilfreich, wenn sie persönliche Lektüreeindrücke ersetzt." },
            { id: "d", label: "Je abstrakter ein Ansatz ist, desto richtiger ist er." }
          ],
          correctOptionIds: ["b"],
          firstHint: "Achte darauf, ob die Antwort mit Ergänzung und Grenze rechnet.",
          secondHint: "Die beste Antwort absolutiert keine Theorie, sondern versteht sie als Perspektive.",
          explanation:
            "Methodisch stark ist ein Umgang, der Ansätze nicht als Wahrheitsmaschinen, sondern als unterschiedlich produktive Frageinstrumente behandelt.",
          modelAnswer:
            "Stark ist die Formulierung, dass Ansätze unterschiedliche Fragen stellen und deshalb verschiedene Aspekte sichtbar machen."
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
        "Epochenbegriffe sind weder bloss Irrtum noch letzte Wahrheit. Dieses Modul fragt, wann sie Texte erhellen, wann sie teleologisch werden und warum auch eine pauschale Epochenkritik am Text vorbeigehen kann.",
      goals: [
        "Epochen als heuristische Werkzeuge statt Tatsachen verstehen.",
        "Zwischen brauchbarer Ordnung und teleologischer Überdehnung unterscheiden.",
        "Ungleichzeitigkeiten und Übergänge analysieren.",
        "Nationale und transnationale Periodisierungen vergleichen.",
        "Fundamentalkritik an Epochenkritik und den Beitrag der Digital Humanities zusammen denken."
      ],
      sections: [
        {
          title: "Warum Epochen trotzdem nötig sind",
          html: `
            <p>Epochenbegriffe wie Aufklärung, Sturm und Drang, Realismus oder Moderne ermöglichen Verdichtung. Sie helfen, über Familienähnlichkeiten, wiederkehrende Probleme und grössere Entwicklungslinien zu sprechen. Ohne heuristische Begriffe würde Unterricht leicht entweder in einer unverbundenen Werkansammlung enden oder in blosser Faktensammlung stecken bleiben.</p>
            <div class="info-box definition">
              <h4>Heuristische Formel</h4>
              <p>Eine Epoche ist eine <strong>arbeitsteilige Vereinfachung</strong>. Sie ist sinnvoll, solange ihre Grenzen, Ausnahmen und Alternativen mitgedacht werden.</p>
            </div>
            <p>Gerade deshalb ist nicht nur der Epochenbegriff selbst problematisch, sondern auch seine pauschale Verwerfung. Wer jede Periodisierung vorschnell ablehnt, läuft Gefahr, in einen bloss positivistischen Datenhorizont zurückzufallen oder neue geistesgeschichtliche Grossdeutungen unbemerkt an seine Stelle zu setzen.</p>
          `
        },
        {
          title: "Warum Epochen kippen können",
          html: `
            <p>Starke Epochenmodelle homogenisieren. Sie tun oft so, als ob alle Texte einer Zeit dieselben Merkmale teilten oder auf ein Ziel zuliefen. Gerade Übergangsfiguren wie Heine, Büchner oder Kafka zeigen jedoch, dass literarische Produktion nicht sauber in Container passt. Nationale Literaturgeschichten setzen zusätzlich unterschiedliche Schnitte: Was im deutschsprachigen Unterricht 'Vormärz' heisst, wird in anderen Traditionen anders gegliedert oder gar nicht so benannt.</p>
            <ul class="reading-list">
              <li><strong>Ungleichzeitigkeit:</strong> Verschiedene ästhetische Logiken existieren gleichzeitig.</li>
              <li><strong>Überlagerung:</strong> Ein Text kann romantische, realistische und proto-moderne Züge verbinden.</li>
              <li><strong>Eurozentrismus:</strong> Globale und koloniale Verflechtungen verschwinden in nationalen Standardmodellen.</li>
              <li><strong>Teleologie:</strong> Aus offenen Prozessen werden nachträglich scheinbar zielgerichtete Entwicklungslinien.</li>
              <li><strong>Didaktischer Effekt:</strong> Unterricht übernimmt Epochenbegriffe oft als scheinbar selbstverständliche Raster.</li>
            </ul>
          `
        },
        {
          title: "Kritik der Epochenkritik und Digital Humanities",
          html: `
            <p>Eine reflektierte Position lautet deshalb nicht: <em>Epochen weg</em>, sondern: <em>Welche Periodisierung ist wofür heuristisch hilfreich, und wo verstellt sie den Text?</em> Ein Begriff kann eine Lektüre erhellen, solange er nicht den Primärtext ersetzt. Wird dagegen jede Epochisierung vorschnell verdächtigt, droht ein anderer blinder Fleck: Dann erscheint der einzelne Text nur noch als Beleg einer Metakritik.</p>
            <p>Korpusanalysen, Stilometrie, Netzwerkanalysen und distant reading können klassische Epochengrenzen bestätigen, aber auch irritieren. Wenn stilometrische Cluster nicht mit Schulbuchgrenzen zusammenfallen oder Netzwerke transnationale Verbindungen sichtbar machen, wird deutlich: Epochenbegriffe sind Interpretationsangebote, keine naturgegebenen Tatsachen. Zugleich gilt auch hier: Daten korrigieren schlechte Periodisierung nicht automatisch, wenn schon die Korpusauswahl alte Kanones reproduziert.</p>
            <aside class="language-aside">
              <h4>English focus</h4>
              <p><strong>Periodization</strong> is a heuristic operation. Data may reveal clusters, but clusters do not automatically equal historical meaning, and anti-period rhetoric can become a new simplification of its own.</p>
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
          type: "short-text",
          title: "Transnationale Periodisierung erklären",
          prompt: "Vergleiche zwei Autor*innen aus unterschiedlichen Sprachräumen und erkläre, warum ein einziger Epochenbegriff ihre literaturgeschichtliche Position nur unzureichend erfasst.",
          help: "Möglich sind etwa Kafka und Borges, Heine und Lorca oder Achmatowa und Bachmann.",
          placeholder: "Beim Vergleich von ... und ... zeigt sich ...",
          conceptGroups: [
            { label: "zwei Sprachräume", variants: ["kafka", "borges", "heine", "lorca", "achmatowa", "bachmann", "camus", "baudelaire", "shelley", "goethe"] },
            { label: "Epochenbegriff begrenzt", variants: ["epoche", "periodisierung", "reicht nicht", "unzureichend", "nicht sauber"] },
            { label: "Unterschiedliche Traditionen", variants: ["sprachraum", "tradition", "national", "transnational", "anders gegliedert"] },
            { label: "Begründung", variants: ["weil", "zeigt", "sichtbar", "umstritten", "überlagert"] }
          ],
          successThreshold: 4,
          firstHint: "Es geht nicht nur um zwei Namen, sondern darum, was der Vergleich an Periodisierung problematisiert.",
          secondHint: "Eine starke Antwort zeigt, dass Begriffe wie Moderne, Romantik oder Vormärz je nach Tradition anders funktionieren oder gar nicht exportierbar sind.",
          explanation: "Transnationale Epochenkritik gelingt dort, wo ein Vergleich sichtbar macht, dass literaturgeschichtliche Raster sprachraumabhängig und damit begrenzt sind.",
          modelAnswer:
            "Beim Vergleich von Kafka und Borges zeigt sich, dass ein einziger Epochenbegriff ihre Position nur unzureichend erfasst. Kafka wird oft als Autor der Moderne gelesen, steht aber zugleich zwischen nationalen, sprachlichen und mitteleuropäischen Ordnungen. Borges wiederum wird je nach Tradition zwischen Moderne und Postmoderne verortet. Der Vergleich zeigt also, dass Periodisierung vom Sprachraum und von späteren Rezeptionsmustern abhängt."
        },
        {
          id: "m3_t5",
          type: "order",
          title: "Ergebnissicherung: Vom Modell zur Kritik",
          prompt: "Ordne die Denkschritte so, dass aus einem Epochenbegriff eine reflektierte literaturgeschichtliche Analyse wird.",
          help: "Die Reihenfolge zeigt, wie man heuristisch statt dogmatisch mit Periodisierung arbeitet.",
          items: [
            { id: "a", label: "Ein Epochenbegriff schafft zunächst grobe Orientierung." },
            { id: "b", label: "Dann prüft man Grenzfälle, Mischformen und Übergänge." },
            { id: "c", label: "Anschliessend fragt man nach nationalen und transnationalen Unterschieden." },
            { id: "d", label: "Erst danach kann man den Begriff als begrenztes Arbeitsmodell nutzen." }
          ],
          correctOrder: ["a", "b", "c", "d"],
          firstHint: "Beginne nicht mit der Kritik, sondern mit der heuristischen Funktion.",
          secondHint: "Die reflektierte Nutzung steht am Schluss, nicht am Anfang.",
          explanation:
            "Epochenbegriffe sind dann produktiv, wenn sie Orientierung geben, aber durch Grenzfallprüfung und Vergleich relativiert werden.",
          modelAnswer:
            "Orientierung → Grenzfälle prüfen → nationale und transnationale Unterschiede vergleichen → Begriff als begrenztes Arbeitsmodell verwenden."
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
          type: "short-text",
          title: "Kanonmechanismus erklären",
          prompt: "Wähle einen Mechanismus der Kanonisierung aus und erkläre an einem konkreten Beispiel, wie er Sichtbarkeit erzeugt und zugleich andere Texte zurückdrängen kann.",
          help: "Möglich sind Pflichtlektüre, Editionen, Übersetzung, Preise, Feuilleton oder Prüfungsformate.",
          placeholder: "Ein zentraler Kanonisierungsmechanismus ist ...",
          conceptGroups: [
            { label: "Mechanismus", variants: ["pflichtlektüre", "schule", "edition", "übersetzung", "preis", "feuilleton", "prüfung", "archiv"] },
            { label: "Sichtbarkeit", variants: ["sichtbar", "präsent", "verfügbar", "wiederholt", "kanon"] },
            { label: "Ausschluss", variants: ["verdrängt", "ausblendet", "weniger sichtbar", "ausschluss", "zurückdrängt"] },
            { label: "Beispiel", variants: ["fontane", "goethe", "schiller", "shelley", "achmatowa", "droste", "pardo bazán", "bachmann"] }
          ],
          successThreshold: 4,
          firstHint: "Beschreibe nicht nur den Mechanismus abstrakt, sondern seine Wirkung auf konkrete Sichtbarkeit.",
          secondHint: "Eine starke Antwort sagt etwa: Pflichtlektüre hält Fontane dauerhaft präsent, drängt aber andere realistische oder weibliche Stimmen zurück.",
          explanation: "Kanonkritik wird präzise, wenn institutionelle Mechanismen an konkreten Sichtbarkeits- und Ausschlusseffekten erklärt werden.",
          modelAnswer:
            "Ein zentraler Kanonisierungsmechanismus ist die Pflichtlektüre im Unterricht. Sie hält etwa Fontane oder Goethe dauerhaft sichtbar, weil diese Texte wiederholt gelesen, kommentiert und geprüft werden. Genau dadurch gewinnen sie Normalität und Prestige. Zugleich drängt dieselbe Auswahl andere Texte derselben Zeit, etwa weniger etablierte oder weibliche Stimmen, an den Rand."
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
        },
        {
          id: "m4_t5",
          type: "short-text",
          title: "Ergebnissicherung: Kanonkritik auf den Punkt",
          prompt: "Formuliere in zwei bis vier Sätzen, warum Kanonkritik nicht bedeutet, auf jede Bewertung zu verzichten.",
          help: "Verbinde Kritik an Auswahlmechanismen mit begründeter Urteilskraft.",
          placeholder: "Kanonkritik bedeutet nicht ...",
          conceptGroups: [
            { label: "Kritik an Kriterien", variants: ["kriterien", "auswahl", "mechanismen", "institutionen"] },
            { label: "keine Beliebigkeit", variants: ["nicht alles gleich", "nicht beliebig", "nicht auf jede bewertung verzichten", "urteil"] },
            { label: "Revision oder Erweiterung", variants: ["erweitern", "revidieren", "neu prüfen", "sichtbar machen"] }
          ],
          successThreshold: 3,
          firstHint: "Die Antwort braucht sowohl Kritik als auch Urteil.",
          secondHint: "Eine gute Formulierung sagt: Kriterien prüfen, Ausschlüsse reflektieren, aber weiterhin begründet bewerten.",
          modelAnswer:
            "Kanonkritik bedeutet nicht, dass alle Texte gleich bewertet werden müssen. Sie verlangt vielmehr, Auswahlkriterien, institutionelle Mechanismen und Ausschlüsse offenzulegen und neu zu prüfen. Gerade dadurch wird literarische Urteilskraft präziser statt beliebiger."
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
        },
        {
          id: "m5_t5",
          type: "short-text",
          title: "Ergebnissicherung: Kulturpolitischen Transfer formulieren",
          prompt: "Vergleiche eine subtile und eine direkte Form kulturpolitischer Steuerung und erkläre, wie beide Literaturgeschichten unterschiedlich prägen.",
          help: "Zum Beispiel Curriculum und Zensur oder Erinnerungspolitik und Editionspolitik.",
          placeholder: "Eine subtile Form ist ..., eine direkte Form ist ...",
          conceptGroups: [
            { label: "subtile Form", variants: ["curriculum", "lehrplan", "erinnerungspolitik", "edition", "förderung", "feuilleton"] },
            { label: "direkte Form", variants: ["zensur", "verbot", "unterdrückung", "regime", "staat"] },
            { label: "Prägung von Literaturgeschichte", variants: ["sichtbarkeit", "kanon", "literaturgeschichte", "prägt", "ordnet"] },
            { label: "Vergleich", variants: ["hingegen", "während", "anders", "im unterschied", "beide"] }
          ],
          successThreshold: 4,
          firstHint: "Es reicht nicht, zwei Formen zu nennen; du musst ihren unterschiedlichen Wirkungsmodus vergleichen.",
          secondHint: "Eine starke Antwort zeigt, dass Curriculum oder Erinnerungspolitik Sichtbarkeit lenken, während Zensur Texte direkt unterdrückt oder verzögert.",
          explanation:
            "Transfer gelingt hier dann, wenn subtile und direkte Steuerung nicht verwechselt, sondern in ihrer unterschiedlichen Wirkung auf Sichtbarkeit und Kanonbildung verglichen werden.",
          modelAnswer:
            "Eine subtile Form kulturpolitischer Steuerung ist das Curriculum: Es legt fest, welche Texte regelmässig gelesen werden, und prägt so langfristig den Kanon. Eine direkte Form ist Zensur, die Texte unmittelbar verbietet, verzögert oder nur eingeschränkt zugänglich macht. Beide prägen Literaturgeschichte, aber auf unterschiedliche Weise: Die eine normalisiert Auswahl, die andere blockiert Sichtbarkeit offen."
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
          type: "short-text",
          title: "Station 3: Büchner methodisch deuten",
          prompt: "Wähle den Ansatz, der Büchners Störpotenzial für dich am überzeugendsten erklärt, und begründe in drei bis fünf Sätzen, was dieser Ansatz sichtbar macht und was ein anderer Ansatz zusätzlich zeigen könnte.",
          help: "Denk etwa an Formalismus, Marxismus oder Rezeptionsästhetik.",
          placeholder: "Am überzeugendsten ist hier ...",
          conceptGroups: [
            { label: "Ansatzwahl", variants: ["formalismus", "werkimmanent", "marx", "rezeptionsästhetik", "new historicism"] },
            { label: "sichtbar machen", variants: ["sichtbar", "zeigt", "erschliesst", "macht"] },
            { label: "Zusatz eines anderen Ansatzes", variants: ["zusätzlich", "anderer ansatz", "außerdem", "mehr", "ergänzt"] },
            { label: "Büchnerbezug", variants: ["büchner", "woyzeck", "fragment", "soziale", "wirkungsgeschichte"] }
          ],
          successThreshold: 4,
          firstHint: "Es geht nicht nur um die Nennung eines Ansatzes, sondern um eine begründete methodische Entscheidung.",
          secondHint: "Eine starke Antwort sagt etwa: Formalismus erklärt die Fragmentstruktur, während Marxismus zusätzlich soziale Gewalt sichtbarer macht.",
          explanation: "Die Aufgabe zwingt dazu, Methoden nicht nur zuzuordnen, sondern argumentativ gegeneinander abzuwägen.",
          modelAnswer:
            "Am überzeugendsten ist hier ein formalistischer Ansatz, weil er an Büchners Fragmentstruktur, Szenentechnik und sprachlichen Brüchen besonders präzise zeigen kann, warum 'Woyzeck' nicht in ein glattes Entwicklungsmodell passt. Sichtbar wird so die formale Offenheit des Textes. Ein marxistischer Ansatz könnte zusätzlich die soziale Verwundbarkeit und Herrschaftsverhältnisse schärfer fassen, während die Rezeptionsästhetik erklären würde, warum Büchner später als Modernitätsfigur aufgewertet wurde."
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
          type: "short-text",
          title: "Station 8 und 9: Transnationale Moderne vergleichen",
          prompt: "Vergleiche eine französische und eine hispanophone Fallfigur aus dem Modul und erkläre, wie der Vergleich den Blick auf Moderne oder Periodisierung verändert.",
          help: "Zum Beispiel Baudelaire und Borges oder Flaubert und Lorca.",
          placeholder: "Beim Vergleich von ... und ... verändert sich der Blick ...",
          conceptGroups: [
            { label: "zwei Vergleichsfiguren", variants: ["baudelaire", "flaubert", "camus", "cervantes", "lorca", "borges"] },
            { label: "Vergleich", variants: ["vergleich", "nebeneinander", "beide", "während", "hingegen"] },
            { label: "Moderne oder Periodisierung", variants: ["moderne", "periodisierung", "epoche", "anders gegliedert"] },
            { label: "Erkenntnisgewinn", variants: ["zeigt", "verändert", "sichtbar", "nicht nur national", "transnational"] }
          ],
          successThreshold: 4,
          firstHint: "Die Antwort soll nicht nur zwei Autorennamen nennen, sondern zeigen, was der Vergleich methodisch leistet.",
          secondHint: "Eine starke Antwort macht klar, dass Moderne nicht einfach überall gleich beginnt oder dieselbe Funktion hat.",
          explanation: "Der Vergleich wird dann produktiv, wenn er Periodisierung als sprachraum- und rezeptionsabhängige Konstruktion sichtbar macht.",
          modelAnswer:
            "Beim Vergleich von Baudelaire und Borges verändert sich der Blick auf Moderne deutlich. Baudelaire steht oft für urbane, lyrische Verdichtung und einen klassischen französischen Beginn der Moderne. Borges zeigt dagegen, dass moderne und postmoderne Verfahren in hispanophonen Kontexten anders erzählt und später global kanonisiert werden. Der Vergleich macht sichtbar, dass Periodisierung nicht einfach national einheitlich funktioniert."
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
        },
        {
          id: "m6_t10",
          type: "multi-select",
          title: "Ergebnissicherung: Vergleichsarchitektur",
          prompt: "Welche Aussagen treffen die Funktion des Primärtextmoduls besonders gut?",
          help: "Wähle alle passenden Antworten.",
          options: [
            { id: "a", label: "Es zeigt, dass Texte oft komplexer sind als literaturgeschichtliche Raster." },
            { id: "b", label: "Es dient nur dazu, Autor*innenwissen lexikalisch abzufragen." },
            { id: "c", label: "Es macht unterschiedliche Sichtbarkeiten verschiedener Methoden erfahrbar." },
            { id: "d", label: "Es eröffnet Vergleichsachsen zwischen verschiedenen Sprachräumen." },
            { id: "e", label: "Es beweist, dass jeder Text eindeutig nur in eine Epoche gehört." }
          ],
          correctOptionIds: ["a", "c", "d"],
          firstHint: "Gesucht sind die methodischen Funktionen des Moduls, nicht eine reine Wissensabfrage.",
          secondHint: "Drei Aussagen benennen genau die Vergleichs- und Reflexionsleistung des Primärtextmoduls.",
          explanation:
            "Das Primärtextmodul soll Theorie an konkrete Texte zurückbinden, Methoden vergleichbar machen und transnationale Unterschiede sichtbar werden lassen.",
          modelAnswer:
            "Richtig sind: Texte sind komplexer als Raster, Methoden machen Unterschiedliches sichtbar, und verschiedene Sprachräume lassen sich vergleichen."
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
          type: "short-text",
          title: "DH-Methoden unterscheiden",
          prompt: "Wähle zwei DH-Verfahren aus und erkläre in drei bis fünf Sätzen, worin sie sich in ihrer Fragestellung unterscheiden und für welches literaturgeschichtliche Problem du welches Verfahren eher einsetzen würdest.",
          help: "Denk an Stilometrie, Netzwerkanalyse, Korpusanalyse oder distant reading.",
          placeholder: "Ich vergleiche ... und ...",
          conceptGroups: [
            { label: "zwei Verfahren", variants: ["stilometrie", "netzwerkanalyse", "korpusanalyse", "distant reading"] },
            { label: "Fragestellung", variants: ["fragt", "untersucht", "muster", "beziehungen", "stil", "korpus"] },
            { label: "Einsatzproblem", variants: ["würde ich einsetzen", "geeignet", "problem", "für", "kanon", "epoche"] },
            { label: "Unterschied", variants: ["unterschied", "hingegen", "während", "anders"] }
          ],
          successThreshold: 4,
          firstHint: "Eine gute Antwort definiert nicht nur die Verfahren, sondern verbindet sie mit unterschiedlichen Problemen.",
          secondHint: "Zum Beispiel: Netzwerkanalyse für Beziehungen zwischen Autor*innen und Zeitschriften, Stilometrie für statistische Ähnlichkeiten zwischen Texten.",
          explanation: "DH-Verständnis wird belastbar, wenn Verfahren über ihre je eigene Fragestellung und ihren Einsatzbereich unterschieden werden.",
          modelAnswer:
            "Ich vergleiche Netzwerkanalyse und Stilometrie. Netzwerkanalyse fragt nach Beziehungen zwischen Autor*innen, Institutionen, Zeitschriften oder Figuren und eignet sich besonders, wenn man literarische Zirkulationen oder Kanonnetzwerke untersuchen will. Stilometrie fragt dagegen nach statistischen Stilähnlichkeiten und -differenzen zwischen Texten. Für ein Problem der Autorschaft oder epochaler Clusterbildung würde ich eher Stilometrie einsetzen, für Fragen nach Vermittlung und Sichtbarkeit eher Netzwerkanalyse."
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
        },
        {
          id: "m7_t5",
          type: "order",
          title: "Ergebnissicherung: DH-Arbeitsschritte",
          prompt: "Ordne die Schritte einer reflektierten DH-Auswertung.",
          help: "Die Reihenfolge macht deutlich, warum Datenarbeit nicht mit Zahlen endet.",
          items: [
            { id: "a", label: "Zuerst wird festgelegt, welches Korpus und welche Metadaten überhaupt untersucht werden." },
            { id: "b", label: "Dann werden Muster, Verteilungen oder Cluster sichtbar gemacht." },
            { id: "c", label: "Danach müssen die Muster historisch und literaturwissenschaftlich interpretiert werden." },
            { id: "d", label: "Schliesslich wird reflektiert, was die Daten nicht zeigen konnten." }
          ],
          correctOrder: ["a", "b", "c", "d"],
          firstHint: "Die Interpretation beginnt nicht vor dem Korpusbau.",
          secondHint: "Die Reflexion über Grenzen folgt auf die Interpretation, nicht umgekehrt.",
          explanation:
            "DH ist ein mehrstufiger Prozess: Korpusdesign, Mustererkennung, Interpretation und Grenzreflexion gehören zusammen.",
          modelAnswer:
            "Korpus festlegen → Muster sichtbar machen → interpretieren → Grenzen der Daten reflektieren."
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
          type: "short-text",
          title: "Vergleichsachsen auf eine These anwenden",
          prompt: "Wähle zwei Vergleichsachsen der Einheit aus und erkläre an einer eigenen These, warum gerade diese beiden Achsen für eine reflektierte Literaturgeschichte wichtig sind.",
          help: "Möglich sind etwa Werk vs. Kontext und Kanon vs. Gegenkanon oder close reading vs. distant reading.",
          placeholder: "Ich verbinde die Achsen ... und ...",
          conceptGroups: [
            { label: "zwei Vergleichsachsen", variants: ["werk", "kontext", "kanon", "gegenkanon", "close reading", "distant reading", "national", "transnational", "autor", "system"] },
            { label: "eigene These", variants: ["these", "wichtig", "weil", "zeigt", "notwendig"] },
            { label: "reflektierte Literaturgeschichte", variants: ["literaturgeschichte", "reflektiert", "ordnung", "kritisch"] },
            { label: "Anwendung", variants: ["zum beispiel", "etwa", "an", "sichtbar"] }
          ],
          successThreshold: 4,
          firstHint: "Nenne nicht nur zwei Achsen, sondern formuliere eine begründete These zu ihrem Zusammenspiel.",
          secondHint: "Eine starke Antwort zeigt, dass reflektierte Literaturgeschichte mehrere Spannungsachsen zugleich braucht, etwa Text und Kontext oder Kanon und Revision.",
          explanation: "Die Aufgabe verlangt keine Reproduktion, sondern eine synthetische Auswahl und Begründung zentraler Denkachsen.",
          modelAnswer:
            "Ich verbinde die Achsen Werk vs. Kontext und Kanon vs. Gegenkanon. Meine These ist, dass Literaturgeschichte nur dann reflektiert wird, wenn sie Texte sowohl in ihrer ästhetischen Eigenlogik als auch in ihren institutionellen Sichtbarkeiten betrachtet. Am Beispiel von Kafka oder Mary Shelley zeigt sich, dass ein Werk nicht nur formal interessant ist, sondern auch unterschiedlich kanonisiert und historisch gerahmt wird. Gerade das Zusammenspiel dieser Achsen verhindert eine naive oder zu einfache Literaturgeschichte."
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
        },
        {
          id: "m8_t5",
          type: "single-choice",
          title: "Ergebnissicherung: Syntheseformel",
          prompt: "Welche Schlussformel passt am besten zur gesamten Einheit?",
          help: "Suche die Aussage, die Ordnung, Kritik und Interpretation zusammenhält.",
          options: [
            { id: "a", label: "Weil Literaturgeschichte konstruiert ist, sollte man auf jede Ordnung verzichten." },
            { id: "b", label: "Literaturgeschichte ist dann sinnvoll, wenn sie als begründete, kritisierbare und revidierbare Ordnung verstanden wird." },
            { id: "c", label: "Digital Humanities lösen das Problem der Literaturgeschichte vollständig, weil Daten neutral sind." },
            { id: "d", label: "Der Kanon sollte stabil bleiben, damit der Unterricht nicht zu kompliziert wird." }
          ],
          correctOptionIds: ["b"],
          firstHint: "Die richtige Formel lehnt weder Ordnung noch Kritik ab.",
          secondHint: "Gesucht ist eine Balanceformel, nicht eine Absage an Geschichte oder ein Lob der Starrheit.",
          explanation:
            "Die Einheit zielt auf eine reflektierte Literaturgeschichte: notwendig zur Orientierung, aber offen für Kritik, Revision und methodische Vielfalt.",
          modelAnswer:
            "Am besten passt die Formel, dass Literaturgeschichte als begründete, kritisierbare und revidierbare Ordnung verstanden werden sollte."
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
