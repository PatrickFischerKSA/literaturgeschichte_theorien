(function () {
  const teacher = {
    en: {
      overview:
        "The teacher area brings together model answers, didactic notes, and suggestions for classroom use. The platform works both for independent study and for teacher-guided lessons.",
      suggestions: [
        "Modules 1 and 3 work well for shared conceptual work in whole-class discussion.",
        "Modules 2 and 6 are especially effective in jigsaw or group formats.",
        "Modules 4 and 5 lend themselves to debate about canon and curriculum.",
        "Module 7 should end with an explicit reflection on what the data shows and what it cannot show.",
        "Module 8 can function as homework, assessment preparation, or a writing task."
      ],
      note:
        "The password protection is intentionally lightweight and fully client-side so that the project remains GitHub-Pages-compatible without any backend.",
      modules: {
        "mod-1": {
          use: "Useful as the opening of a double lesson or as preparatory homework.",
          socialForms: ["individual work", "pair comparison after task 3", "short plenary discussion on neutrality"],
          didactics:
            "This module shifts the opening question from 'Which period comes when?' to 'Who orders literature by which criteria?'. That shift enables the later theory modules.",
          assessment:
            "Look for whether students can think order, perspective, and institutional framing together."
        },
        "mod-2": {
          use: "Well suited to jigsaw work with later comparative synthesis.",
          socialForms: ["group jigsaw", "peer coaching", "teacher-led synthesis in plenary"],
          didactics:
            "The accordion structure invites distributed exploration. The aim is not memorization of schools, but differentiation of question horizons.",
          assessment:
            "Task 4 is especially revealing: it shows whether approaches can be applied to texts and reflected in terms of their limits."
        },
        "mod-3": {
          use: "Especially suitable for discussions of textbook order and comparative literature.",
          socialForms: ["individual work", "think-pair-share", "plenary matrix on the board"],
          didactics:
            "The module should not destroy period labels, but differentiate their reach. Students should still be able to order, only more reflectively.",
          assessment:
            "Make sure students do not confuse 'heuristic' with 'arbitrary'."
        },
        "mod-4": {
          use: "Works well for discussions of compulsory reading and school selection practices.",
          socialForms: ["individual work", "controversial partner discussion", "plenary debate on the school canon"],
          didactics:
            "Here the class can reflect on its own teaching practice without collapsing into 'everything is equally important'.",
          assessment:
            "Strong work shows that canon critique is not confused with total relativism."
        },
        "mod-5": {
          use: "Good for linking literary studies with history or civic education.",
          socialForms: ["individual work", "partner example work", "plenary debate on Classicism and curriculum"],
          didactics:
            "Students should not confuse cultural politics with crude manipulation. Subtle norm-setting is central to school-based literary mediation.",
          assessment:
            "Look for examples that are concrete and institutionally described."
        },
        "mod-6": {
          use: "Ideal for station work or distributed expert groups.",
          socialForms: ["station work", "pair work", "plenary comparison matrix"],
          didactics:
            "This module forces theory back into contact with texts. Each station is short enough for classroom timing, yet open enough for substantial discussion.",
          assessment:
            "What matters is whether students name methodological visibility and blind spots, rather than merely reproducing author knowledge."
        },
        "mod-7": {
          use: "Good for a double lesson with projection or laptop work.",
          socialForms: ["individual work", "pair interpretation of the simulation", "plenary reflection on method"],
          didactics:
            "The DH unit is designed to connect data literacy with hermeneutics. The key issue is not the visualization itself, but the reflection on its reach.",
          assessment:
            "Check whether students can distinguish between data pattern and literary interpretation."
        },
        "mod-8": {
          use: "Suitable as the end of a sequence or as exam preparation.",
          socialForms: ["individual work", "peer feedback", "plenary synthesis on the board"],
          didactics:
            "Module 8 should not only secure knowledge, but keep inquiry open. The alternative literary history task is therefore intentionally argumentative rather than schematic.",
          assessment:
            "The strongest answers make selection principles explicit and reflect on their limits."
        }
      }
    }
  };

  const tasks = {
    en: {
      m1_t1: {
        title: "Check the basic claim",
        prompt: "Which statement best captures the constructed nature of literary history?",
        help: "Choose the most precise formulation, not the one that sounds most neutral.",
        firstHint: "Pay attention to whether selection and perspective are made explicit.",
        secondHint: "The right answer combines order with construction, not neutral completeness.",
        explanation: "Literary history orders and evaluates. That is why it is argumentative and perspectival.",
        modelAnswer:
          "The correct answer is that literary history is a perspectival ordering of texts, authors, and interpretations. It does not simply mirror the past, but structures and weighs it.",
        options: [
          "Literary history is a value-free list of all texts from a period.",
          "Literary history is a perspectival ordering of texts, authors, and interpretations.",
          "Literary history arises only from author biographies and political history.",
          "Literary history is most reliable when it avoids period labels altogether."
        ]
      },
      m1_t2: {
        title: "DE/EN key terms",
        prompt: "Match the German terms to the correct English terms.",
        help: "This task trains bilingual disciplinary language rather than simple vocabulary.",
        firstHint: "Look for terms that match conceptually, not merely lexically.",
        secondHint: "Pay special attention to the difference between canon and canonization.",
        explanation: "These pairings show that academic language requires conceptual precision, not just direct translation.",
        modelAnswer:
          "Literaturgeschichtsschreibung = literature historiography; Kanonisierung = canonization; Periodisierung = periodization; textnahe Lektüre = close reading.",
        pairs: [
          { left: "Literaturgeschichtsschreibung", right: "literature historiography" },
          { left: "Kanonisierung", right: "canonization" },
          { left: "Periodisierung", right: "periodization" },
          { left: "textnahe Lektüre", right: "close reading" }
        ]
      },
      m1_t3: {
        title: "Chronology or narrative?",
        prompt: "Explain in three to five sentences the difference between a mere chronology and a literary-historical narrative.",
        help: "Mention at least selection, ordering, and interpretation.",
        placeholder: "A chronology ...",
        firstHint: "At least one dimension between dates and interpretation is still missing.",
        secondHint: "A strong answer says that literary history selects texts, orders them, and turns them into a meaningful narrative.",
        modelAnswer:
          "A chronology sorts texts only by dates. A literary-historical narrative selects texts, groups them by criteria, links them with value judgments, and claims connections among them. That creates a narrative that is never fully neutral because it contains perspectives and interests."
      },
      m1_t4: {
        title: "Recognizing ordering institutions",
        prompt: "Which institutions strongly shape literary history and cultural memory?",
        help: "Choose all convincing answers.",
        firstHint: "Think of institutions that organize visibility.",
        secondHint: "Private preference alone does not create a canon; stable mediation structures do.",
        explanation:
          "School, university, publishers, archives, and criticism create long-term visibility. Individual reading matters, but it does not by itself institutionalize a canon.",
        modelAnswer:
          "School and exams, university and literary scholarship, publishers and criticism, as well as archives and digital collections are especially important.",
        options: [
          "School and examination systems",
          "Universities and literary scholarship",
          "Publishers, editions, and literary criticism",
          "Only the private favourite reading of individual readers",
          "Archives, libraries, and digital collections"
        ]
      },
      m1_t5: {
        title: "Consolidation: sharpening the terms",
        prompt: "Match each observation to the corresponding core concept.",
        help: "This task condenses the foundational distinctions of the module.",
        firstHint: "Ask whether the line is about dates, interpretation, repetition, or mediation.",
        secondHint: "Chronology works differently from literary historiography; canonization differently from institution.",
        explanation:
          "The four terms mark different levels: pure time-order, interpretive narrative, repeated elevation, and social mediation structure.",
        modelAnswer:
          "Sorting by years = chronology; selecting and narrating = literary historiography; repeated educational presence = canonization; archives, publishers, and school = institution.",
        pairs: [
          { left: "Texts are only sorted by year at first.", right: "Chronology" },
          { left: "Texts are selected, weighted, and narrated as connected.", right: "Literary historiography" },
          { left: "A work is repeatedly read in school and university.", right: "Canonization" },
          { left: "Archives, publishers, and schools help control visibility.", right: "Institution" }
        ]
      },
      m2_t1: {
        title: "Approach and guiding question",
        prompt: "Match each approach to its typical guiding question.",
        help: "Focus on the epistemic interest, not just isolated keywords.",
        firstHint: "Check whether the approach is centered on text structure, reception, society, or system logic.",
        secondHint: "Horizon of expectation belongs neither to close reading nor to systems theory.",
        explanation: "Guiding questions help distinguish approaches without caricaturing them.",
        modelAnswer:
          "Reception aesthetics = changing readings and expectations; formalism = form and structure; Marxist theory = social contradictions; systems theory = literary communication as system.",
        pairs: [
          { left: "Rezeptionsästhetik", right: "How do readings and horizons of expectation change?" },
          { left: "Werkimmanenz / New Criticism", right: "How does form organize meaning?" },
          { left: "Marxistische Theorie", right: "Which social contradictions are processed in the text?" },
          { left: "Systemtheorie", right: "How does literature operate as a communication system?" }
        ]
      },
      m2_t2: {
        title: "Historical rough order",
        prompt: "Arrange these approaches roughly according to their historical emergence from earlier to later.",
        help: "This is about broad intellectual chronology.",
        firstHint: "Begin in the nineteenth century and move toward the late twentieth century.",
        secondHint: "Reception aesthetics comes after New Criticism and before New Historicism.",
        explanation: "The sequence is rough, but it makes visible how the question horizons shifted historically.",
        modelAnswer:
          "Positivism → Formalism / New Criticism → Reception aesthetics → New Historicism.",
        items: [
          { id: "a", label: "Positivist literary historiography" },
          { id: "b", label: "Formalist / immanent interpretation / New Criticism" },
          { id: "c", label: "Reception aesthetics" },
          { id: "d", label: "New Historicism" }
        ]
      },
      m2_t3: {
        title: "A formalist view",
        prompt: "Which observations fit especially well with an immanent or formalist reading of Kafka?",
        help: "Choose all plausible observations.",
        firstHint: "Formal organization matters more here than school reception or macroeconomics.",
        secondHint: "Three answers focus directly on textual procedures.",
        explanation: "Immanent reading stays close to the text and studies how form produces meaning.",
        modelAnswer:
          "Appropriate are the analysis of perspective and laconic style, the observation of recurring motifs, and the question of how form and tone create unease.",
        options: [
          "Analysis of narrative perspective, sentence rhythm, and unsettling laconic style",
          "Investigation of production relations in the Habsburg Empire as the main focus",
          "Question about recurring motifs of alienation and uncertainty in the text",
          "Reconstruction of the horizon of expectation of later textbook generations as the central level",
          "Observation of how form and tone generate unease"
        ]
      },
      m2_t4: {
        title: "Comparative mini-transfer",
        prompt: "Choose two approaches and explain, using one primary text from this unit, what approach A makes visible and what approach B additionally or differently reveals.",
        help: "Your answer should explicitly use phrases such as 'makes visible' and 'hides' or equivalent wording.",
        placeholder: "Using the example of ...",
        firstHint: "Do not just name two schools; state the gain in insight.",
        secondHint: "A strong answer sounds like: 'A formalist reading makes ... visible, but tends to hide ...; a new-historicist reading instead ...'.",
        modelAnswer:
          "Example Kafka: A formalist approach makes narrative tone, perspective, and compositional logic visible, but tends to hide institutional and historical frameworks. A new-historicist approach additionally reveals discourses of bureaucracy, law, and modern power, though it risks grasping the aesthetic logic less precisely."
      },
      m2_t5: {
        title: "Consolidation: methodological judgment",
        prompt: "Which formulation shows the strongest methodological use of theory?",
        help: "Look for the answer that combines comparison and limitation.",
        firstHint: "Pay attention to whether the answer reckons with complementarity and limits.",
        secondHint: "The best answer does not absolutize theory, but treats it as perspective.",
        explanation:
          "A methodologically strong approach treats theories not as truth machines, but as differently productive instruments of questioning.",
        modelAnswer:
          "The strongest formulation is that approaches ask different questions and therefore make different aspects visible.",
        options: [
          "A good approach explains a text completely, so the others are no longer needed.",
          "Approaches are useful because they ask different questions and therefore make different aspects visible.",
          "Theory is helpful mainly when it replaces personal reading impressions.",
          "The more abstract an approach is, the more correct it is."
        ]
      },
      m3_t1: {
        title: "Understanding heuristics",
        prompt: "Which statement describes the status of period labels most precisely?",
        help: "Look for the formulation that combines orientation with limitation.",
        firstHint: "The answer is neither total rejection nor naturalization.",
        secondHint: "A good answer combines usefulness with constructedness.",
        explanation: "Periods help, as long as they are treated as models rather than natural facts.",
        modelAnswer:
          "Most precise is: period labels are heuristic tools that create orientation, but must always be justified and relativized.",
        options: [
          "Period labels are objective facts that apply identically in all literatures.",
          "Period labels are heuristic tools that create orientation, but need justification.",
          "Period labels are useless and should be completely avoided in teaching.",
          "Period labels rest exclusively on stylometry and quantitative data."
        ]
      },
      m3_t2: {
        title: "Problems of rigid period models",
        prompt: "Which points belong to the critique of rigid period models?",
        help: "Choose all fitting statements.",
        firstHint: "Critique does not mean periods have no use at all.",
        secondHint: "Three options name characteristic distortions or reductions.",
        explanation:
          "The critique mainly targets homogenization, rigid borders, and national or Eurocentric distortions.",
        modelAnswer:
          "The critique includes homogenization, the overlooking of transitions and overlaps, and the reinforcement of national or Eurocentric distortions.",
        options: [
          "They homogenize heterogeneous texts.",
          "They often ignore transitions and overlaps.",
          "They fundamentally prevent any didactic orientation.",
          "They can reinforce national and Eurocentric distortions.",
          "They cannot be supported by any historical argument at all."
        ]
      },
      m3_t3: {
        title: "Büchner as disturbance",
        prompt: "Why is Büchner especially useful for questioning rigid period models?",
        help: "Mention formal, thematic, or reception-historical reasons.",
        placeholder: "Büchner unsettles period models because ...",
        firstHint: "Think of form, themes, and reception history together.",
        secondHint: "Woyzeck is fragmentary, socially sharp, and in many ways seems 'too early' for neat period schemes.",
        modelAnswer:
          "Büchner is useful as a disturbance because his texts do not fit cleanly into a single period model. The open, fragmentary form of Woyzeck, its social radicality, and its strong later reception make him a boundary figure between several historical orders."
      },
      m3_t4: {
        title: "Transnational perspective",
        prompt: "Match the observations to the corresponding problem of periodization.",
        help: "This task links period critique with comparative literature.",
        firstHint: "Do not think only of style, but also of language space and institution.",
        secondHint: "Only one line directly addresses the limited exportability of a German period term.",
        explanation: "Transnational literary history shows that periodization works differently across regions, languages, and political contexts.",
        modelAnswer:
          "Vormärz = no universal label; Kafka = disputed national and period placement; Borges = modern/postmodern labels work differently; Akhmatova = censorship and memory politics influence canonization.",
        pairs: [
          { left: "Vormärz", right: "not a universal period label across literatures" },
          { left: "Kafka", right: "national belonging and period placement remain disputed" },
          { left: "Borges", right: "modern and postmodern labels work differently across traditions" },
          { left: "Achmatowa", right: "state censorship and memory politics shape canonization" }
        ]
      },
      m3_t5: {
        title: "Consolidation: from model to critique",
        prompt: "Arrange the steps that turn a period label into a reflective literary-historical analysis.",
        help: "The sequence shows how to work heuristically rather than dogmatically with periodization.",
        firstHint: "Do not begin with critique, but with the heuristic function.",
        secondHint: "Reflective use comes at the end, not at the beginning.",
        explanation:
          "Period labels become productive when they offer orientation but are relativized through border cases and comparison.",
        modelAnswer:
          "Orientation → check border cases → compare national and transnational differences → use the label as a limited working model.",
        items: [
          { id: "a", label: "A period label first offers rough orientation." },
          { id: "b", label: "Then one checks border cases, mixed forms, and transitions." },
          { id: "c", label: "Next one asks about national and transnational differences." },
          { id: "d", label: "Only then can the label be used as a limited working model." }
        ]
      },
      m4_t1: {
        title: "Agents of canonization",
        prompt: "Which actors and institutions contribute especially strongly to canonization?",
        help: "Choose all convincing answers.",
        firstHint: "Look for durable institutions of mediation.",
        secondHint: "Canonization is institutionally stabilized, not merely private.",
        explanation:
          "Canonization emerges from the interaction of school, scholarship, publishers, criticism, archives, and new platforms.",
        modelAnswer:
          "Strong contributors include school, university, research, editions, publishers, criticism, prizes, archives, translation, and digital platforms.",
        options: [
          "School and examination systems",
          "Universities, research, and scholarly editions",
          "Publishers, criticism, and literary prizes",
          "Exclusively the taste of individual authors",
          "Archives, translation practices, and digital platforms"
        ]
      },
      m4_t2: {
        title: "Mechanism and effect",
        prompt: "Match each canonizing mechanism to its most likely effect.",
        help: "Think institutionally.",
        firstHint: "A mechanism works not only symbolically, but often very practically.",
        secondHint: "Lack of translation produces invisibility, not prestige.",
        explanation: "Canonization is also infrastructure: visibility, availability, and examinability are powerful filters.",
        modelAnswer:
          "Compulsory reading = repeated visibility; jubilee editions = prestige and availability; lack of translation = invisibility; exam formats = didactic narrowing.",
        pairs: [
          { left: "Compulsory reading in school", right: "repeated visibility and normalization" },
          { left: "Jubilee editions and collected works", right: "lasting availability and prestige" },
          { left: "Lack of translation", right: "transnational invisibility" },
          { left: "Exam formats", right: "didactic narrowing to easily testable texts" }
        ]
      },
      m4_t3: {
        title: "Problematizing the school canon",
        prompt: "Why is the school canon didactically necessary and at the same time problematic?",
        help: "Connect practicality with mechanisms of exclusion.",
        placeholder: "The school canon is necessary because ...",
        firstHint: "Your answer needs both a benefit and a risk.",
        secondHint: "A strong answer says: the school canon creates orientation, but narrows selection and therefore needs transparent criteria.",
        modelAnswer:
          "The school canon is didactically necessary because teaching and exams cannot work with unlimited archives. At the same time it is problematic because it narrows selection, repeatedly makes certain texts visible, and hides others. That is why its criteria themselves should become an object of teaching."
      },
      m4_t4: {
        title: "Judging canon revision",
        prompt: "Which statement about canon revision is most convincing?",
        help: "Look for the most differentiated answer.",
        firstHint: "The correct answer avoids both total replacement and the myth of pure quality.",
        secondHint: "This is about revising criteria, not blindly swapping lists.",
        explanation:
          "Canon revision is a process of critical re-evaluation. It broadens or corrects visibility rather than mechanically replacing one list with another.",
        modelAnswer:
          "Canon revision reconsiders criteria of selection and can make forgotten or systematically underrepresented texts visible.",
        options: [
          "Canon revision means completely discarding all previously canonical texts.",
          "Canon revision is unnecessary because quality always prevails by itself.",
          "Canon revision reconsiders criteria of selection and can make forgotten or underrepresented texts visible.",
          "Canon revision is only a contemporary fashion without scholarly value."
        ]
      },
      m4_t5: {
        title: "Consolidation: canon critique in one point",
        prompt: "Explain in two to four sentences why canon critique does not mean giving up all evaluation.",
        help: "Connect critique of selection mechanisms with justified judgment.",
        placeholder: "Canon critique does not mean ...",
        firstHint: "Your answer needs both critique and judgment.",
        secondHint: "A good formulation says: examine criteria, reflect on exclusions, but continue to judge in a reasoned way.",
        modelAnswer:
          "Canon critique does not mean that all texts have to be valued equally. Rather, it asks us to make criteria of selection, institutional mechanisms, and exclusions visible and to test them anew. In this way literary judgment becomes more precise rather than more arbitrary."
      },
      m5_t1: {
        title: "From cultural politics to the textbook",
        prompt: "Arrange this chain of cultural steering in a plausible order.",
        help: "Think from guiding ideal to classroom effect.",
        firstHint: "Do not begin with teaching, but with the programmatic ideal.",
        secondHint: "Institutions mediate between cultural ideal and classroom practice.",
        explanation: "Cultural politics rarely works in one step; it is institutionally mediated and didactically stabilized.",
        modelAnswer:
          "Guiding ideal → institutions/editions/funding → curricula and textbooks → repeated visibility of selected texts.",
        items: [
          { id: "a", label: "A cultural ideal defines which literature counts as identity-forming." },
          { id: "b", label: "Institutions adopt these valuations in programs, editions, and funding systems." },
          { id: "c", label: "Textbooks and curricula stabilize the selection." },
          { id: "d", label: "Students encounter certain texts repeatedly while others remain rare." }
        ]
      },
      m5_t2: {
        title: "Classicism as high model",
        prompt: "What is meant by saying that German Classicism functions as a 'high-cultural model'?",
        help: "Look for the literary-political meaning, not merely admiration.",
        firstHint: "The correct answer emphasizes normativity and educational function.",
        secondHint: "It is about later elevation and model status.",
        explanation:
          "Classicism functions as a high model when it becomes a normative measure of cultural education.",
        modelAnswer:
          "It means that Goethe and Schiller were elevated into a normative educational and value model.",
        options: [
          "Goethe and Schiller are simply the oldest German-language authors.",
          "Their works were elevated into a normative educational and value model.",
          "Classicism refers only to the years 1780 to 1805 without later impact.",
          "The term high model refers only to the size of their collected works."
        ]
      },
      m5_t3: {
        title: "Explaining cultural politics with nuance",
        prompt: "Use one example to explain how cultural politics can steer literary visibility without reducing it to crude propaganda.",
        help: "Possible examples include Classicism, censorship, curriculum, memory politics, or editorial policy.",
        placeholder: "A differentiated example is ...",
        firstHint: "Do not say only 'propaganda'; describe a concrete mechanism of mediation.",
        secondHint: "A strong answer shows how curricula, editions, or memory politics structure visibility, often indirectly.",
        modelAnswer:
          "A differentiated example is the strong curricular presence of Weimar Classicism. Cultural politics works here not mainly as crude propaganda, but through schools, commemorations, editions, and educational programs. This makes certain texts especially visible and normatively charged, while other literary forms move into the background."
      },
      m5_t4: {
        title: "Comparative cultural politics",
        prompt: "Which observations fit a differentiated cultural-political perspective?",
        help: "Choose all plausible statements.",
        firstHint: "Not only open repression matters; institutional formats do as well.",
        secondHint: "Three statements describe different but plausible modes of steering.",
        explanation:
          "A differentiated perspective includes both overt and subtle forms of cultural steering.",
        modelAnswer:
          "Plausible are: different effects in democratic and authoritarian contexts, the influence of memory politics, and the effect of curricula and exam formats.",
        options: [
          "Cultural politics can work differently in democratic and authoritarian contexts.",
          "Censorship is the only form of cultural steering.",
          "Memory politics influences which authors become symbolically charged.",
          "Exam formats and curricula also have cultural-political effects.",
          "Literary history is completely separate from politics."
        ]
      },
      m5_t5: {
        title: "Consolidation: recognizing steering",
        prompt: "Match the form of cultural steering to the fitting example.",
        help: "This task condenses open and subtle forms of cultural politics.",
        firstHint: "Ask whether the line is about school, commemoration, prohibition, or infrastructure.",
        secondHint: "Censorship suppresses; editorial policy stabilizes availability.",
        explanation:
          "Cultural politics works not only repressively, but also through selection, memory, and infrastructure.",
        modelAnswer:
          "Curriculum = classroom presence; memory politics = symbolic charge; censorship = suppression; editorial and funding policy = lasting availability.",
        pairs: [
          { left: "Curricular steering", right: "certain texts appear regularly in class" },
          { left: "Memory politics", right: "authors become symbolically charged for collective identity" },
          { left: "Censorship", right: "texts are suppressed, delayed, or only partly accessible" },
          { left: "Editorial and funding policy", right: "certain works remain visible and available" }
        ]
      },
      m6_t1: {
        title: "Station 1: Goethe/Schiller",
        prompt: "Which perspective most directly explains how Goethe and Schiller became cultural guiding figures?",
        help: "The issue is not the aesthetic analysis of a single poem, but the logic of elevation.",
        firstHint: "Think of educational program, school presence, and later reception.",
        secondHint: "These figures are produced not only by textual features, but also by institutional charging.",
        explanation: "Classicism as a high model is best understood through reception, institutions, and cultural politics.",
        modelAnswer:
          "A cultural-political and reception-historical perspective most directly explains the guiding-figure status of Goethe and Schiller.",
        options: [
          "Cultural-political and reception-historical",
          "Exclusively immanent reading",
          "Only positivist dating and facts",
          "Only stylometric analysis"
        ]
      },
      m6_t2: {
        title: "Station 2: Heine",
        prompt: "Why does Heine disturb both harmonious period narratives and comfortable canon images?",
        help: "Mention satire, politics, Jewishness, transnationality, or genre mixture.",
        placeholder: "Heine disturbs because ...",
        firstHint: "An answer that merely says 'because he belongs to Romanticism and is political' stays too general.",
        secondHint: "Heine disrupts through genre mixture, political satire, and his precarious position in national culture.",
        modelAnswer:
          "Heine is disruptive because he cannot be harmoniously subordinated to a single period. His satirical and politically sharp writing, his transnational position between Germany and France, and the conflicts around his Jewish background disturb comfortable canon and period narratives."
      },
      m6_t3: {
        title: "Station 3: Büchner",
        prompt: "Match the correct approach to Büchner's disruptive potential.",
        help: "Each pairing names a different analytical level.",
        firstHint: "The levels are form, society, and reception history.",
        secondHint: "Later elevation is not the same thing as textual structure.",
        explanation: "Büchner is especially good for showing that different approaches reveal different layers of the same text.",
        modelAnswer:
          "Fragment structure = formalist; social vulnerability = Marxist/social-historical; later modernity figure = reception-aesthetic.",
        pairs: [
          { left: "Fragment structure", right: "formalist reading" },
          { left: "social vulnerability", right: "Marxist-social-historical reading" },
          { left: "later modernity figure", right: "reception-aesthetic reading" }
        ]
      },
      m6_t4: {
        title: "Station 4: Fontane",
        prompt: "Write a short sentence explaining what Fontane's strong school presence makes visible and what it can at the same time hide.",
        help: "Name at least one gain and one narrowing effect.",
        placeholder: "Fontane's school presence makes visible ...",
        firstHint: "The answer needs both: didactic gain and exclusion problem.",
        secondHint: "For example: Fontane is productive for analyzing society, but can overshadow other realist or female voices.",
        modelAnswer:
          "Fontane's school presence makes social roles, narrative voice, and realist technique highly visible and teachable. At the same time it can push other realist texts and less established voices out of view."
      },
      m6_t5: {
        title: "Station 5: Kafka",
        prompt: "Which aspects make Kafka a challenge for simple national or period labels?",
        help: "Choose all plausible points.",
        firstHint: "What matters here is not clarity, but multiple belonging.",
        secondHint: "Four statements highlight Kafka's unstable placement.",
        explanation: "Kafka is productive for literary history precisely because he does not fit comfortably into a single box.",
        modelAnswer:
          "Relevant are the Prague multilingual context, Jewish and Central European entanglements, later world-literary reception, and texts that combine modern and hard-to-fix traits.",
        options: [
          "Prague context and multilingual environment",
          "Jewish and Central European entanglements",
          "Clear placement in a single national literary space",
          "Later world-literary reception",
          "Texts that combine modern, expressionist, and hard-to-fix traits"
        ]
      },
      m6_t6: {
        title: "Station 6: Brecht and Bachmann",
        prompt: "What do we gain if we read Brecht and Bachmann not merely as side additions, but as alternative centers of postwar literature?",
        help: "Think of different models of critique, language, and politics.",
        placeholder: "We gain ...",
        firstHint: "It is not only about adding names, but about changing the ordering model.",
        secondHint: "Brecht and Bachmann open different ways of narrating postwar literature, politics, and language.",
        modelAnswer:
          "We gain a more complex picture of postwar literature: Brecht stands for estrangement and socially interventionist critique, while Bachmann stands for language critique, destabilized subjectivity, and gender-relevant canon revision. Postwar literature then appears not as one block, but as a field of competing centers."
      },
      m6_t7: {
        title: "Station 7: Mary Shelley",
        prompt: "Which perspective best explains why Frankenstein holds a different position in today's canon than in the nineteenth century?",
        help: "The key issue is changing readings over time.",
        firstHint: "This is about changing status, not only textual features.",
        secondHint: "The right answer thinks in terms of horizons of expectation and reception history.",
        explanation: "Shelley's present position is especially well explained through changing reception and canonization histories.",
        modelAnswer:
          "Reception aesthetics best explains why Frankenstein is read and valued differently today than it was before.",
        options: [
          "Reception aesthetics",
          "Exclusively formalism",
          "Only positivism",
          "Only period labeling"
        ]
      },
      m6_t8: {
        title: "Stations 8 and 9: Transnational modernity",
        prompt: "Match each observation to the corresponding comparative perspective.",
        help: "This task connects the French and the Hispanophone fields.",
        firstHint: "One statement concerns internal diversity, the other transnationality.",
        secondHint: "Borges is especially tied to world-literary circulation.",
        explanation: "The comparison shows that literary history must be scaled differently depending on the language field.",
        modelAnswer:
          "Baudelaire/Flaubert/Camus = competing modernity narratives; Cervantes/Lorca/Borges = transnational periodization; Borges = global canonization through translation.",
        pairs: [
          { left: "Baudelaire / Flaubert / Camus", right: "several competing narratives of modernity within one tradition" },
          { left: "Cervantes / Lorca / Borges", right: "transnational periodization rather than a purely national line" },
          { left: "Borges", right: "later global canonization through translation and world literature" }
        ]
      },
      m6_t9: {
        title: "Station 10: Russian perspectives",
        prompt: "What becomes particularly clear in Russian literary history if you think canon and state together?",
        help: "Take censorship, memory, delayed visibility, or symbolic origin figures into account.",
        placeholder: "It becomes especially clear that ...",
        firstHint: "A vague statement about a 'Russian soul' is not helpful here.",
        secondHint: "A strong answer explains how state, censorship, and later memory actively shape canon status.",
        modelAnswer:
          "It becomes particularly clear that canon is produced not only aesthetically, but institutionally and politically. Censorship, editorial history, and memory politics influence when and how authors such as Akhmatova or Bulgakov become visible, while Pushkin is stabilized as a symbolic origin figure."
      },
      m6_t10: {
        title: "Consolidation: comparative architecture",
        prompt: "Which statements best describe the function of the primary-text module?",
        help: "Choose all fitting answers.",
        firstHint: "Look for the module's methodological function, not pure factual recall.",
        secondHint: "Three statements name the exact comparative and reflective purpose of the module.",
        explanation:
          "The primary-text module is designed to reconnect theory with concrete texts, compare methods, and make transnational differences visible.",
        modelAnswer:
          "Correct are: texts are more complex than schemes, methods reveal different things, and different language traditions can be compared.",
        options: [
          "It shows that texts are often more complex than literary-historical grids.",
          "It serves only to test lexical author knowledge.",
          "It makes different methodological visibilities experienceable.",
          "It opens comparative axes between different language traditions.",
          "It proves that every text belongs clearly to only one period."
        ]
      },
      m7_t1: {
        title: "Distant reading",
        prompt: "Which statement describes distant reading best?",
        help: "Focus on scale, not on technological fetishism.",
        firstHint: "The correct answer emphasizes scaling, not the abolition of interpretation.",
        secondHint: "Distant reading changes the level of questioning, not the scholarly standard.",
        explanation: "Distant reading is a shift of perspective: from single texts to larger patterns.",
        modelAnswer:
          "Distant reading studies larger corpora and thereby shifts the level of literary-historical questions without replacing interpretation.",
        options: [
          "Distant reading replaces every form of interpretation with algorithms.",
          "Distant reading studies larger corpora and thereby shifts the level of literary-historical questions.",
          "Distant reading means reading texts only superficially.",
          "Distant reading is another word for plot summary."
        ]
      },
      m7_t2: {
        title: "Matching DH methods",
        prompt: "Match each DH method to the most fitting description.",
        help: "Think of the typical analytical interest of each method.",
        firstHint: "Networks are about relations; stylometry is about statistical style.",
        secondHint: "Distant reading is more of a perspective, while corpus analysis is more of a procedure.",
        explanation: "The terms overlap, but they mark different levels of work.",
        modelAnswer:
          "Stylometry = statistical style similarity; network analysis = relations; corpus analysis = patterns in large data sets; distant reading = a scaled question horizon.",
        pairs: [
          { left: "Stilometrie", right: "shows statistical style similarities or differences" },
          { left: "Netzwerkanalyse", right: "makes relations and connections visible" },
          { left: "Korpusanalyse", right: "examines patterns in larger text and metadata collections" },
          { left: "Distant reading", right: "scales literary questions beyond the single text" }
        ]
      },
      m7_t3: {
        title: "Limits of quantitative methods",
        prompt: "Which statements name real limits of quantitative DH methods?",
        help: "Choose all convincing points.",
        firstHint: "Look for answers that focus on corpus construction and interpretation.",
        secondHint: "Three statements name real limitations; two exaggerate what data can do.",
        explanation: "DH is powerful, but highly dependent on corpus design and interpretive recontextualization.",
        modelAnswer:
          "The limits lie in data quality and corpus design, in the need for historical interpretation, and in distortions caused by underrepresented archives.",
        options: [
          "Data quality and corpus design strongly shape the results.",
          "Quantitative results always explain cultural meaning completely.",
          "Patterns need interpretation and historical contextualization.",
          "Underrepresented archives can distort results.",
          "DH makes every form of close reading unnecessary."
        ]
      },
      m7_t4: {
        title: "Interpreting data",
        prompt: "In four to six sentences, formulate what the DH simulation can show about canon and corpus and what it cannot show.",
        help: "Mention at least one strength and one limit.",
        placeholder: "The simulation can show ...",
        firstHint: "A good answer says not only what data can do, but also what it cannot decide.",
        secondHint: "For example: the simulation shows distributions and blind spots, but not automatically aesthetic quality or historical significance.",
        modelAnswer:
          "The simulation can show which languages, genders, themes, or canon statuses dominate in a corpus and which areas are strikingly rare. This makes canon critique visible in data form. But it cannot by itself explain why these patterns emerged, how texts function aesthetically, or what exact historical meaning a constellation has. For that we still need interpretation, contextual knowledge, and close reading."
      },
      m7_t5: {
        title: "Consolidation: DH workflow",
        prompt: "Arrange the steps of a reflective DH analysis.",
        help: "The sequence shows why data work does not end with numbers.",
        firstHint: "Interpretation does not begin before corpus design.",
        secondHint: "Reflecting on limits comes after interpretation, not before.",
        explanation:
          "DH is a multi-step process: corpus design, pattern detection, interpretation, and reflection on limits belong together.",
        modelAnswer:
          "Define the corpus → make patterns visible → interpret them → reflect on the limits of the data.",
        items: [
          { id: "a", label: "First one defines which corpus and metadata will be examined at all." },
          { id: "b", label: "Then patterns, distributions, or clusters are made visible." },
          { id: "c", label: "After that the patterns must be interpreted historically and literary-critically." },
          { id: "d", label: "Finally one reflects on what the data could not show." }
        ]
      },
      m8_t1: {
        title: "Securing the axes of comparison",
        prompt: "Match each axis of comparison to the fitting formulation.",
        help: "These pairings condense the entire unit.",
        firstHint: "The four fields are order, selection, method, and boundary-making.",
        secondHint: "Distant reading belongs to the scaling of analysis, not directly to canon revision.",
        explanation: "The comparison axes help bundle theoretical debates across modules.",
        modelAnswer:
          "Text vs. context = intrinsic logic or embedding; canon vs. counter-canon = stabilization or revision; close vs. distant reading = single text or pattern; national vs. transnational = border-making and multiple belonging.",
        pairs: [
          { left: "Werk vs. Kontext", right: "question of whether formal logic or historical embedding is foregrounded" },
          { left: "Kanon vs. Gegenkanon", right: "question of which selection is stabilized or revised" },
          { left: "close reading vs. distant reading", right: "question of single-text analysis or scaled pattern analysis" },
          { left: "nationale vs. transnationale Literaturgeschichte", right: "question of borders, translations, and multiple belonging" }
        ]
      },
      m8_t2: {
        title: "Final quiz",
        prompt: "Which statements are convincing in the spirit of this learning unit?",
        help: "Choose all tenable statements.",
        firstHint: "Three options summarize core insights of the unit.",
        secondHint: "Neither DH absolutism nor total model certainty fits the overall argument.",
        explanation: "The final quiz condenses the key insights: construction, heuristic value, and institutional shaping.",
        modelAnswer:
          "Convincing are the statements that literary history is an ordering system, that periods are heuristics, and that canonization is institutionally shaped.",
        options: [
          "Literary history is an argumentative ordering system, not a neutral mirror.",
          "Period labels are only meaningful if we understand them as heuristic tools.",
          "Digital humanities completely replace interpretation.",
          "Canonization is shaped by institutions and cultural politics.",
          "Primary texts always fit clearly into one theoretical model only."
        ]
      },
      m8_t3: {
        title: "Alternative literary history",
        prompt: "Sketch an alternative literary history in four to six sentences. Explain the principles by which you would select and order texts.",
        help: "Possible principles include themes, genres, media, conflicts, spaces, translations, or counter-canon perspectives.",
        placeholder: "My alternative literary history would ...",
        firstHint: "Do not just name themes; explain why this order should reveal something.",
        secondHint: "A convincing answer justifies its selection principle and also reflects on its limits.",
        modelAnswer:
          "My alternative literary history would organize literature less by periods and more by conflict fields such as power, gender, labor, technology, and migration. This would make texts from different centuries and language traditions directly comparable. Such a model would reveal transnational and recurring problem constellations more clearly. At the same time I would need to make explicit that this order is also selective and can hide other aspects."
      },
      m8_t4: {
        title: "Open transfer question",
        prompt: "Formulate a short concluding judgment: Why should literature classes teach literary history if literary history itself is constructed and contested?",
        help: "Connect orientation, critical capacity, and judgment.",
        placeholder: "Literature classes should teach literary history because ...",
        firstHint: "The answer should be neither uncritical nor anti-historical.",
        secondHint: "A strong concluding formula is: we need literary history, but as a reflective and revisable order.",
        modelAnswer:
          "Literature classes should teach literary history because students need orientation and possibilities of comparison. At the same time, the constructed nature of literary history is important because it turns literary history into a field of critical judgment rather than a mere list. Students who learn literary history reflectively can place texts, question canons, and develop their own justified perspectives."
      },
      m8_t5: {
        title: "Consolidation: synthesis formula",
        prompt: "Which concluding formula best fits the whole unit?",
        help: "Look for the statement that holds order, critique, and interpretation together.",
        firstHint: "The right formula rejects neither order nor critique.",
        secondHint: "You are looking for a balance formula, not a rejection of history or a defense of rigidity.",
        explanation:
          "The unit aims at a reflective literary history: necessary for orientation, but open to critique, revision, and methodological plurality.",
        modelAnswer:
          "The best concluding formula is that literary history should be understood as a justified, criticizable, and revisable order.",
        options: [
          "Because literary history is constructed, one should give up every form of ordering.",
          "Literary history is meaningful when it is understood as a justified, criticizable, and revisable order.",
          "Digital humanities solve the problem of literary history completely because data are neutral.",
          "The canon should remain stable so that teaching does not become too complicated."
        ]
      }
    }
  };

  function getTask(lang, taskId) {
    if (lang === "de") return tasks.de?.[taskId] || null;
    return tasks[lang]?.[taskId] || tasks.en?.[taskId] || null;
  }

  function getTeacher(lang, key) {
    if (lang === "de") return teacher.de?.[key] || null;
    return teacher[lang]?.[key] || teacher.en?.[key] || null;
  }

  function getTeacherModule(lang, moduleId) {
    if (lang === "de") return teacher.de?.modules?.[moduleId] || null;
    return teacher[lang]?.modules?.[moduleId] || teacher.en?.modules?.[moduleId] || null;
  }

  window.LitTaskI18n = {
    tasks,
    teacher,
    getTask,
    getTeacher,
    getTeacherModule
  };
})();
