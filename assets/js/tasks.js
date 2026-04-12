(function () {
  const i18n = window.LitI18n;
  const taskI18n = window.LitTaskI18n;
  const SUPPORTED_LANGUAGES = ["de", "en", "fr", "es", "ru"];

  const crossLanguageMap = {
    selection: "auswahl selektiv selektion",
    "sélection": "auswahl selektiv selektion selection",
    seleccion: "auswahl selektiv selektion selection",
    selección: "auswahl selektiv selektion selection",
    выбор: "auswahl selektiv selektion selection",
    selective: "auswahl selektiv selektion",
    order: "ordnung struktur gliederung",
    orden: "ordnung struktur gliederung order",
    ordre: "ordnung struktur gliederung order",
    порядок: "ordnung struktur gliederung order",
    structure: "struktur ordnung gliederung",
    estructura: "struktur ordnung gliederung structure",
    structure_fr: "struktur ordnung gliederung structure",
    interpretation: "deutung interpretation",
    interpretación: "deutung interpretation",
    interpretation_fr: "deutung interpretation",
    интерпретация: "deutung interpretation",
    narrative: "narrativ erzaehlung erzaehlt deutung",
    narratif: "narrativ erzaehlung erzaehlt deutung narrative",
    narrativo: "narrativ erzaehlung erzaehlt deutung narrative",
    нарратив: "narrativ erzaehlung erzaehlt deutung narrative",
    perspective: "perspektive perspektivisch",
    perspective_fr: "perspektive perspektivisch perspective",
    perspectiva: "perspektive perspektivisch perspective",
    перспектива: "perspektive perspektivisch perspective",
    constructed: "konstruiert konstruktion",
    construction: "konstruktion konstruiert",
    construcción: "konstruktion konstruiert construction",
    construction_fr: "konstruktion konstruiert construction",
    конструкция: "konstruktion konstruiert construction",
    institution: "institution schule universitaet verlag archiv",
    institutions: "institutionen schule universitaet verlag archiv",
    institución: "institution institutionen schule universitaet verlag archiv",
    institution_fr: "institution institutionen schule universitaet verlag archiv",
    институт: "institution institutionen schule universitaet verlag archiv",
    canon: "kanon",
    canonization: "kanonisierung",
    canonisation: "kanonisierung canonization",
    canonización: "kanonisierung canonization",
    канонизация: "kanonisierung canonization",
    periodization: "periodisierung",
    périodisation: "periodisierung periodization",
    periodización: "periodisierung periodization",
    периодизация: "periodisierung periodization",
    heuristic: "heuristik heuristisch",
    heuristique: "heuristik heuristisch heuristic",
    heurística: "heuristik heuristisch heuristic",
    эвристика: "heuristik heuristisch heuristic",
    transition: "uebergang ueberlagerung",
    overlap: "ueberlagerung",
    modern: "modern",
    fragment: "fragment fragmentarisch",
    reception: "rezeption rezeptionsaesthetik wirkung",
    reader: "leser leserschaft",
    readers: "leserschaft leser",
    history: "geschichte historisch",
    context: "kontext historisch",
    form: "form formal formalismus",
    close: "textnah close reading",
    reading: "lektuere reading",
    distant: "distant reading korpus",
    corpus: "korpus korpusanalyse",
    data: "daten",
    interpretation_needed: "interpretation kontext bedeutung",
    power: "macht",
    ideology: "ideologie",
    class: "klasse",
    discourse: "diskurs",
    system: "system",
    reader_response: "erwartungshorizont rezeption",
    exclusion: "ausschluss ausblenden unsichtbar",
    visibility: "sichtbarkeit sichtbar",
    memory: "gedaechtnis erinnerung",
    mémoire: "gedaechtnis erinnerung memory",
    memoria: "gedaechtnis erinnerung memory",
    память: "gedaechtnis erinnerung memory",
    school: "schule schulkanon curriculum",
    censorship: "zensur",
    censure: "zensur censorship",
    censura: "zensur censorship",
    цензура: "zensur censorship",
    state: "staat",
    nation: "nation national",
    transnational: "transnational",
    transnationale: "transnational transnationale",
    transnacional: "transnational transnacional",
    транснациональный: "transnational",
    satire: "satire satirisch",
    political: "politisch",
    politique: "politisch political",
    político: "politisch political",
    политический: "politisch political",
    jewish: "juedisch juedin",
    jewish_alt: "judisch judin",
    ambiguity: "ambivalenz instabilitaet",
    instability: "instabilitaet",
    question: "frage fragestellung",
    visible: "sichtbar zeigt erschliesst",
    blindspot: "blendet aus uebersieht grenze"
  };

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function normalize(value) {
    const normalized = String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/ß/g, "ss")
      .replace(/[„“"']/g, "")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim();

    const additions = [];
    Object.entries(crossLanguageMap).forEach(([source, target]) => {
      if (normalized.includes(source.replace(/_/g, " "))) {
        additions.push(target);
      }
    });

    return `${normalized} ${additions.join(" ")}`.trim();
  }

  function lang(state) {
    return SUPPORTED_LANGUAGES.includes(state?.settings?.language) ? state.settings.language : "de";
  }

  function copy(state, variants) {
    return variants[lang(state)] || variants.en || variants.de || "";
  }

  function ui(state, key) {
    return i18n.getUi(lang(state), key);
  }

  function localizedTask(task, state) {
    if (lang(state) === "de") return task;
    const translation = taskI18n?.getTask(lang(state), task.id);
    if (!translation) return task;
    const localized = { ...task, ...translation };
    if (translation.options && task.options) {
      localized.options = task.options.map((option, index) => ({
        ...option,
        label: translation.options[index] || option.label
      }));
    }
    if (translation.pairs && task.pairs) {
      localized.pairs = translation.pairs.map((pair, index) => ({
        ...task.pairs[index],
        ...pair
      }));
    }
    if (translation.items && task.items) {
      localized.items = task.items.map((item, index) => ({
        ...item,
        label: translation.items[index]?.label || item.label
      }));
    }
    return localized;
  }

  function containsVariant(answer, variant) {
    return normalize(answer).includes(normalize(variant));
  }

  function countConceptHits(answer, task) {
    const hits = [];
    const missing = [];
    (task.conceptGroups || []).forEach((group) => {
      const matched = group.variants.some((variant) => containsVariant(answer, variant));
      if (matched) hits.push(group.label);
      else missing.push(group.label);
    });
    return { hits, missing };
  }

  function arraysEqualAsSets(left, right) {
    if (left.length !== right.length) return false;
    return left.every((entry) => right.includes(entry));
  }

  function buildFeedback(status, title, body) {
    return { status, title, body };
  }

  function buildWrongFeedback(task, attempts, state) {
    if (attempts === 1) {
      return buildFeedback("error", ui(state, "neutralWrong"), task.firstHint || copy(state, {
        de: "Prüfe die Aufgabe noch einmal genauer.",
        en: "Check the task again more carefully.",
        fr: "Vérifie encore une fois la tâche plus attentivement.",
        es: "Revisa la tarea una vez más con mayor atención.",
        ru: "Проверь задание ещё раз внимательнее."
      }));
    }
    if (attempts === 2) {
      return buildFeedback("warn", ui(state, "secondWrong"), task.secondHint || copy(state, {
        de: "Achte auf die inhaltliche Präzision deiner Auswahl.",
        en: "Focus on the content-related precision of your answer.",
        fr: "Concentre-toi sur la précision conceptuelle de ta réponse.",
        es: "Concéntrate en la precisión conceptual de tu respuesta.",
        ru: "Сосредоточься на содержательной точности своего ответа."
      }));
    }
    return buildFeedback(
      "success",
      ui(state, "modelAnswer"),
      task.modelAnswer || task.explanation || copy(state, {
        de: "Die Aufgabe wird jetzt mit einer Musterlösung freigegeben.",
        en: "The task is now released with a model answer.",
        fr: "La tâche est maintenant libérée avec une réponse modèle.",
        es: "La tarea queda ahora liberada con una respuesta modelo.",
        ru: "Задание теперь открывается с образцовым ответом."
      })
    );
  }

  function evaluateShortText(task, answer) {
    if (!normalize(answer)) {
      return {
        correct: false,
        score: 0,
        details: "Die Antwort ist noch leer."
      };
    }
    const { hits, missing } = countConceptHits(answer, task);
    const threshold = task.successThreshold || (task.conceptGroups || []).length;
    return {
      correct: hits.length >= threshold,
      score: hits.length,
      hits,
      missing,
      details:
        hits.length >= threshold
          ? task.explanation || "Die Antwort erfasst die zentralen Aspekte."
          : `Noch unklar bleiben: ${missing.join(", ")}.`
    };
  }

  function getTaskById(module, taskId) {
    return (module.tasks || []).find((task) => task.id === taskId) || null;
  }

  function renderFeedback(taskState) {
    if (!taskState.feedback) return "";
    return `
      <div class="task-feedback task-feedback--${escapeHtml(taskState.feedback.status)}">
        <strong>${escapeHtml(taskState.feedback.title)}</strong>
        <p>${escapeHtml(taskState.feedback.body)}</p>
      </div>
    `;
  }

  function renderTeacherBlock(task, state) {
    const taskText = localizedTask(task, state);
    if (!state.settings.teacherAuthorized) return "";
    return `
      <details class="teacher-solution">
        <summary>${escapeHtml(ui(state, "teacherSolution"))}</summary>
        <p><strong>${escapeHtml(ui(state, "modelAnswer"))}:</strong> ${escapeHtml(taskText.modelAnswer || taskText.explanation || copy(state, {
          de: "Keine Musterlösung hinterlegt.",
          en: "No model answer stored.",
          fr: "Aucune réponse modèle n'est enregistrée.",
          es: "No hay una respuesta modelo guardada.",
          ru: "Образцовый ответ не задан."
        }))}</p>
        <p><strong>${escapeHtml(copy(state, {
          de: "Didaktischer Fokus",
          en: "Didactic focus",
          fr: "Focalisation didactique",
          es: "Foco didáctico",
          ru: "Дидактический фокус"
        }))}:</strong> ${escapeHtml(taskText.help || copy(state, {
          de: "Aufgabenspezifische Präzision sichern.",
          en: "Secure task-specific precision.",
          fr: "Assurer la précision propre à la tâche.",
          es: "Asegurar la precisión específica de la tarea.",
          ru: "Обеспечить точность, требуемую конкретным заданием."
        }))}</p>
      </details>
    `;
  }

  function renderChoiceOptions(task, state, taskState, isSingleChoice) {
    const optionIds = (task.options || []).map((option) => option.id);
    const orderedIds = window.LitProgress.getRandomOrder(state, task.id, optionIds);
    const optionsById = Object.fromEntries((task.options || []).map((option) => [option.id, option]));
    const selected = Array.isArray(taskState.answer)
      ? taskState.answer
      : taskState.answer
        ? [taskState.answer]
        : [];

    return orderedIds
      .map((optionId) => {
        const option = optionsById[optionId];
        const inputType = isSingleChoice ? "radio" : "checkbox";
        const checked = selected.includes(optionId) ? "checked" : "";
        return `
          <label class="option-card">
            <input type="${inputType}" name="${escapeHtml(task.id)}" value="${escapeHtml(optionId)}" ${checked} />
            <span>${escapeHtml(option.label)}</span>
          </label>
        `;
      })
      .join("");
  }

  function renderMatching(task, state, taskState) {
    const options = (task.pairs || []).map((pair) => pair.right);
    const orderedOptions = window.LitProgress.getRandomOrder(state, `${task.id}:matching`, options);
    const answers = taskState.answer || {};

    return (task.pairs || [])
      .map(
        (pair, index) => `
          <div class="matching-row">
            <label for="${escapeHtml(task.id)}-${index}">${escapeHtml(pair.left)}</label>
            <select id="${escapeHtml(task.id)}-${index}" data-left="${escapeHtml(pair.left)}">
              <option value="">${escapeHtml(ui(state, "choose"))}</option>
              ${orderedOptions
                .map((option) => {
                  const selected = answers[pair.left] === option ? "selected" : "";
                  return `<option value="${escapeHtml(option)}" ${selected}>${escapeHtml(option)}</option>`;
                })
                .join("")}
            </select>
          </div>
        `
      )
      .join("");
  }

  function getCurrentOrder(task, taskState, state) {
    if (Array.isArray(taskState.currentOrder) && taskState.currentOrder.length) {
      return taskState.currentOrder.slice();
    }
    const ids = (task.items || []).map((item) => item.id);
    return window.LitProgress.getRandomOrder(state, `${task.id}:order`, ids);
  }

  function renderOrderTask(task, taskState, state) {
    const itemsById = Object.fromEntries((task.items || []).map((item) => [item.id, item]));
    return getCurrentOrder(task, taskState, state)
      .map(
        (itemId, index, list) => `
          <li class="order-item" data-item-id="${escapeHtml(itemId)}">
            <span class="order-index">${index + 1}</span>
            <span class="order-label">${escapeHtml(itemsById[itemId].label)}</span>
            <span class="order-actions">
              <button type="button" class="btn small ghost" data-move="up" ${index === 0 ? "disabled" : ""}>↑</button>
              <button type="button" class="btn small ghost" data-move="down" ${index === list.length - 1 ? "disabled" : ""}>↓</button>
            </span>
          </li>
        `
      )
      .join("");
  }

  function renderTaskCard(task, module, state, taskIndex) {
    const taskText = localizedTask(task, state);
    const taskState = window.LitProgress.ensureTaskState(state, task.id);
    const unlocked = window.LitProgress.isTaskUnlocked(state, module, taskIndex);
    const statusText = taskState.completed ? (taskState.success ? ui(state, "completed") : ui(state, "unlockedAfterHint")) : unlocked ? ui(state, "open") : ui(state, "locked");

    if (!unlocked) {
      return `
        <article class="task-card task-card--locked">
          <div class="task-head">
            <div>
              <p class="task-kicker">${escapeHtml(ui(state, "task"))} ${taskIndex + 1}</p>
              <h4>${escapeHtml(taskText.title)}</h4>
            </div>
            <span class="task-state">${escapeHtml(statusText)}</span>
          </div>
          <p>${escapeHtml(ui(state, "taskLockedText"))}</p>
        </article>
      `;
    }

    let body = "";
    if (task.type === "single-choice") {
      body = `<div class="options-group">${renderChoiceOptions(taskText, state, taskState, true)}</div>`;
    }
    if (task.type === "multi-select") {
      body = `<div class="options-group">${renderChoiceOptions(taskText, state, taskState, false)}</div>`;
    }
    if (task.type === "matching") {
      body = `<div class="matching-group">${renderMatching(taskText, state, taskState)}</div>`;
    }
    if (task.type === "order") {
      body = `<ol class="order-list">${renderOrderTask(taskText, taskState, state)}</ol>`;
    }
    if (task.type === "short-text") {
      body = `
        <textarea class="answer-textarea" rows="5" placeholder="${escapeHtml(taskText.placeholder || "")}">${escapeHtml(taskState.answer || "")}</textarea>
      `;
    }

    const actionLabel = taskState.completed ? ui(state, "review") : ui(state, "submit");

    return `
      <article class="task-card" data-task-id="${escapeHtml(task.id)}">
        <div class="task-head">
          <div>
            <p class="task-kicker">${escapeHtml(ui(state, "task"))} ${taskIndex + 1}</p>
            <h4>${escapeHtml(taskText.title)}</h4>
          </div>
          <span class="task-state">${escapeHtml(statusText)}</span>
        </div>
        ${lang(state) !== "de" ? `<p class="task-language-note">${escapeHtml(copy(state, {
          de: "Fokusspur und Navigation sind mehrsprachig. Offene Antworten koennen in der gewaehlten Sprache formuliert werden; die Auswertung orientiert sich an fachlichen Schluesselbegriffen.",
          en: "Focus guide and navigation are multilingual. Open responses may be written in the selected language; evaluation follows key disciplinary concepts.",
          fr: "Le parcours guidé et la navigation sont multilingues. Les réponses ouvertes peuvent être rédigées dans la langue choisie ; l'évaluation suit des concepts disciplinaires clés.",
          es: "La guía focalizada y la navegación son multilingües. Las respuestas abiertas pueden escribirse en la lengua elegida; la evaluación se orienta por conceptos disciplinares clave.",
          ru: "Фокусный маршрут и навигация многоязычны. Открытые ответы можно писать на выбранном языке; оценивание опирается на ключевые предметные понятия."
        }))}</p>` : ""}
        <p class="task-prompt">${escapeHtml(taskText.prompt)}</p>
        <p class="task-help">${escapeHtml(taskText.help || "")}</p>
        <div class="task-body">${body}</div>
        <div class="task-toolbar">
          <button type="button" class="btn primary" data-action="submit">${escapeHtml(actionLabel)}</button>
          <span class="attempt-note">${escapeHtml(ui(state, "answerAttempts"))}: ${taskState.attempts}</span>
        </div>
        ${renderFeedback(taskState)}
        ${taskState.revealed && !state.settings.teacherAuthorized ? `<div class="model-answer-inline"><strong>${escapeHtml(ui(state, "modelAnswer"))}:</strong> ${escapeHtml(taskText.modelAnswer || taskText.explanation || "")}</div>` : ""}
        ${renderTeacherBlock(task, state)}
      </article>
    `;
  }

  function submitChoiceTask(module, task, state, card) {
    const taskText = localizedTask(task, state);
    const checkedInputs = Array.from(card.querySelectorAll("input:checked"));
    const answer = checkedInputs.map((input) => input.value);
    const taskState = window.LitProgress.ensureTaskState(state, task.id);
    const correctIds = task.correctOptionIds || [];
    const isSingleChoice = task.type === "single-choice";
    const normalizedAnswer = isSingleChoice ? answer[0] || null : answer.slice().sort();
    const correct = isSingleChoice ? correctIds[0] === normalizedAnswer : arraysEqualAsSets(answer, correctIds);
    const attempts = taskState.attempts + (correct ? 0 : 1);

    if (correct) {
      window.LitProgress.updateTaskState(state, task.id, {
        answer: isSingleChoice ? normalizedAnswer : answer,
        attempts,
        completed: true,
        success: true,
        revealed: false,
        feedback: buildFeedback("success", ui(state, "solved"), taskText.explanation || "Die Auswahl ist stimmig.")
      });
      return;
    }

    const feedback = buildWrongFeedback(taskText, attempts, state);
    window.LitProgress.updateTaskState(state, task.id, {
      answer: isSingleChoice ? normalizedAnswer : answer,
      attempts,
      completed: attempts >= 3,
      success: false,
      revealed: attempts >= 3,
      feedback
    });
  }

  function submitMatchingTask(task, state, card) {
    const taskText = localizedTask(task, state);
    const answer = {};
    card.querySelectorAll("select").forEach((select) => {
      answer[select.dataset.left] = select.value;
    });

    const correct = (taskText.pairs || []).every((pair) => answer[pair.left] === pair.right);
    const taskState = window.LitProgress.ensureTaskState(state, task.id);
    const attempts = taskState.attempts + (correct ? 0 : 1);

    if (correct) {
      window.LitProgress.updateTaskState(state, task.id, {
        answer,
        attempts,
        completed: true,
        success: true,
        revealed: false,
      feedback: buildFeedback("success", ui(state, "solved"), taskText.explanation || "Die Zuordnungen stimmen.")
    });
      return;
    }

    const feedback = buildWrongFeedback(taskText, attempts, state);
    window.LitProgress.updateTaskState(state, task.id, {
      answer,
      attempts,
      completed: attempts >= 3,
      success: false,
      revealed: attempts >= 3,
      feedback
    });
  }

  function submitOrderTask(task, state) {
    const taskText = localizedTask(task, state);
    const taskState = window.LitProgress.ensureTaskState(state, task.id);
    const currentOrder = getCurrentOrder(task, taskState, state);
    const correct = JSON.stringify(currentOrder) === JSON.stringify(task.correctOrder || []);
    const attempts = taskState.attempts + (correct ? 0 : 1);

    if (correct) {
      window.LitProgress.updateTaskState(state, task.id, {
        currentOrder,
        attempts,
        completed: true,
        success: true,
        revealed: false,
        feedback: buildFeedback("success", ui(state, "solved"), taskText.explanation || "Die Reihenfolge ist korrekt.")
      });
      return;
    }

    const feedback = buildWrongFeedback(taskText, attempts, state);
    window.LitProgress.updateTaskState(state, task.id, {
      currentOrder,
      attempts,
      completed: attempts >= 3,
      success: false,
      revealed: attempts >= 3,
      feedback
    });
  }

  function submitShortTextTask(task, state, card) {
    const taskText = localizedTask(task, state);
    const answer = card.querySelector("textarea")?.value || "";
    const evaluation = evaluateShortText(taskText, answer);
    const taskState = window.LitProgress.ensureTaskState(state, task.id);
    const attempts = taskState.attempts + (evaluation.correct ? 0 : 1);

    if (evaluation.correct) {
      window.LitProgress.updateTaskState(state, task.id, {
        answer,
        attempts,
        completed: true,
        success: true,
        revealed: false,
        feedback: buildFeedback("success", ui(state, "strong"), evaluation.details)
      });
      return;
    }

    const feedback = buildWrongFeedback(taskText, attempts, state);
    window.LitProgress.updateTaskState(state, task.id, {
      answer,
      attempts,
      completed: attempts >= 3,
      success: false,
      revealed: attempts >= 3,
      feedback
    });
  }

  function moveOrderItem(state, task, itemId, direction) {
    const taskState = window.LitProgress.ensureTaskState(state, task.id);
    const currentOrder = getCurrentOrder(localizedTask(task, state), taskState, state);
    const currentIndex = currentOrder.indexOf(itemId);
    const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
    if (currentIndex < 0 || targetIndex < 0 || targetIndex >= currentOrder.length) return;
    [currentOrder[currentIndex], currentOrder[targetIndex]] = [currentOrder[targetIndex], currentOrder[currentIndex]];
    window.LitProgress.updateTaskState(state, task.id, {
      currentOrder
    });
  }

  function bindTaskEvents(container, module, state, refreshModule) {
    container.querySelectorAll(".task-card").forEach((card) => {
      const taskId = card.dataset.taskId;
      const task = getTaskById(module, taskId);
      if (!task) return;

      const submitButton = card.querySelector('[data-action="submit"]');
      if (submitButton) {
        submitButton.addEventListener("click", () => {
          if (task.type === "single-choice" || task.type === "multi-select") {
            submitChoiceTask(module, task, state, card);
          }
          if (task.type === "matching") {
            submitMatchingTask(task, state, card);
          }
          if (task.type === "order") {
            submitOrderTask(task, state);
          }
          if (task.type === "short-text") {
            submitShortTextTask(task, state, card);
          }
          refreshModule();
        });
      }

      if (task.type === "order") {
        card.querySelectorAll(".order-item button").forEach((button) => {
          button.addEventListener("click", () => {
            const itemId = button.closest(".order-item")?.dataset.itemId;
            if (!itemId) return;
            moveOrderItem(state, task, itemId, button.dataset.move);
            refreshModule(false);
          });
        });
      }
    });
  }

  function renderTaskList(container, module, state, onUpdate) {
    container.innerHTML = `
      <div class="tasks-header">
        <h3>${escapeHtml(ui(state, "tasksHeader"))}</h3>
        <p>${escapeHtml(ui(state, "tasksIntro"))}</p>
      </div>
      <div class="task-stack">
        ${(module.tasks || []).map((task, index) => renderTaskCard(task, module, state, index)).join("")}
      </div>
    `;

    bindTaskEvents(container, module, state, onUpdate);
  }

  window.LitTasks = {
    renderTaskList
  };
})();
