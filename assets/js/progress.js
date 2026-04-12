(function () {
  const STORAGE_KEY = "literaturgeschichte-theorien-progress-v1";

  function createDefaultState() {
    return {
      settings: {
        showEnglish: true,
        teacherAuthorized: false,
        language: "de",
        focusMode: true
      },
      moduleVisits: {},
      taskStates: {},
      randomOrders: {},
      dhFilters: {
        language: "alle",
        canonStatus: "alle",
        gender: "alle",
        theme: "alle",
        form: "alle"
      }
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return createDefaultState();
      const parsed = JSON.parse(raw);
      return {
        ...createDefaultState(),
        ...parsed,
        settings: {
          ...createDefaultState().settings,
          ...(parsed.settings || {})
        },
        dhFilters: {
          ...createDefaultState().dhFilters,
          ...(parsed.dhFilters || {})
        },
        moduleVisits: parsed.moduleVisits || {},
        taskStates: parsed.taskStates || {},
        randomOrders: parsed.randomOrders || {}
      };
    } catch (error) {
      console.warn("Konnte lokalen Lernstand nicht laden.", error);
      return createDefaultState();
    }
  }

  function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function ensureTaskState(state, taskId) {
    if (!state.taskStates[taskId]) {
      state.taskStates[taskId] = {
        attempts: 0,
        completed: false,
        success: false,
        revealed: false,
        answer: null,
        currentOrder: null,
        feedback: null
      };
    }
    return state.taskStates[taskId];
  }

  function updateTaskState(state, taskId, patch) {
    const current = ensureTaskState(state, taskId);
    state.taskStates[taskId] = {
      ...current,
      ...patch
    };
    saveState(state);
    return state.taskStates[taskId];
  }

  function markModuleVisited(state, moduleId) {
    state.moduleVisits[moduleId] = true;
    saveState(state);
  }

  function setShowEnglish(state, value) {
    state.settings.showEnglish = Boolean(value);
    saveState(state);
  }

  function setLanguage(state, value) {
    state.settings.language = value === "en" ? "en" : "de";
    saveState(state);
  }

  function setFocusMode(state, value) {
    state.settings.focusMode = Boolean(value);
    saveState(state);
  }

  function setTeacherAuthorized(state, value) {
    state.settings.teacherAuthorized = Boolean(value);
    saveState(state);
  }

  function setDhFilters(state, patch) {
    state.dhFilters = {
      ...state.dhFilters,
      ...patch
    };
    saveState(state);
  }

  function resetModule(state, module) {
    (module.tasks || []).forEach((task) => {
      delete state.taskStates[task.id];
      delete state.randomOrders[task.id];
      delete state.randomOrders[`${task.id}:matching`];
      delete state.randomOrders[`${task.id}:order`];
    });
    saveState(state);
  }

  function resetAll(state) {
    const next = createDefaultState();
    Object.keys(state).forEach((key) => delete state[key]);
    Object.assign(state, next);
    saveState(state);
  }

  function getTaskProgress(state, module) {
    const tasks = module.tasks || [];
    if (!tasks.length) return { completed: 0, total: 0, percent: 0 };
    const completed = tasks.filter((task) => ensureTaskState(state, task.id).completed).length;
    return {
      completed,
      total: tasks.length,
      percent: Math.round((completed / tasks.length) * 100)
    };
  }

  function getOverallProgress(state, modules) {
    const tasks = modules.flatMap((module) => module.tasks || []);
    if (!tasks.length) return { completed: 0, total: 0, percent: 0 };
    const completed = tasks.filter((task) => ensureTaskState(state, task.id).completed).length;
    return {
      completed,
      total: tasks.length,
      percent: Math.round((completed / tasks.length) * 100)
    };
  }

  function isTaskUnlocked(state, module, taskIndex) {
    if (taskIndex === 0) return true;
    const previousTask = module.tasks[taskIndex - 1];
    if (!previousTask) return true;
    return ensureTaskState(state, previousTask.id).completed;
  }

  function shuffleArray(values) {
    const copy = values.slice();
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
    }
    return copy;
  }

  function getRandomOrder(state, key, values) {
    if (!state.randomOrders[key]) {
      state.randomOrders[key] = shuffleArray(values);
      saveState(state);
    }
    return state.randomOrders[key].slice();
  }

  window.LitProgress = {
    STORAGE_KEY,
    createDefaultState,
    loadState,
    saveState,
    ensureTaskState,
    updateTaskState,
    markModuleVisited,
    setShowEnglish,
    setLanguage,
    setFocusMode,
    setTeacherAuthorized,
    setDhFilters,
    resetModule,
    resetAll,
    getTaskProgress,
    getOverallProgress,
    isTaskUnlocked,
    getRandomOrder
  };
})();
