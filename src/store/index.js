import { createStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid'; // Para gerar IDs únicos (instale depois: npm install uuid)

const store = createStore({
  state: {
    tasks: [], // Array de objetos de tarefas
    filters: {
      status: 'all', // 'all', 'completed', 'pending'
      priority: 'all', // 'all', 'low', 'medium', 'high'
      search: '', // Para busca por título/descrição
      tags: [] // Array de tags selecionadas
    }
  },
  mutations: {
    // Adiciona uma nova tarefa
    addTask(state, task) {
      state.tasks.push(task);
    },
    // Marca uma tarefa como concluída/pendente
    toggleTaskCompletion(state, taskId) {
      const task = state.tasks.find(t => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    // Remove uma tarefa
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter(t => t.id !== taskId);
    },
    // Atualiza o filtro de status
    setFilterStatus(state, status) {
      state.filters.status = status;
    },
    // Atualiza o filtro de prioridade
    setFilterPriority(state, priority) {
      state.filters.priority = priority;
    },
    // Atualiza o termo de busca
    setSearchTerm(state, term) {
      state.filters.search = term;
    },
    // Adiciona/remove tags do filtro
    toggleFilterTag(state, tag) {
      const index = state.filters.tags.indexOf(tag);
      if (index > -1) {
        state.filters.tags.splice(index, 1);
      } else {
        state.filters.tags.push(tag);
      }
    },
    // Inicializa tarefas do localStorage
    loadTasks(state, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    // Ações podem ser assíncronas ou chamar múltiplas mutações
    addTask({ commit }, taskData) {
      const newTask = {
        id: uuidv4(),
        title: taskData.title,
        description: taskData.description || '',
        dueDate: taskData.dueDate || null,
        priority: taskData.priority || 'medium',
        completed: false,
        tags: taskData.tags || [],
        createdAt: new Date().toISOString()
      };
      commit('addTask', newTask);
      // Salvar no localStorage aqui
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    },
    toggleTaskCompletion({ commit }, taskId) {
      commit('toggleTaskCompletion', taskId);
      // Salvar no localStorage aqui
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    },
    deleteTask({ commit }, taskId) {
      commit('deleteTask', taskId);
      // Salvar no localStorage aqui
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    },
    // Ação para carregar tarefas ao iniciar o app
    initializeTasks({ commit }) {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        commit('loadTasks', JSON.parse(storedTasks));
      }
    }
  },
  getters: {
    // Getters para obter dados computados do estado
    filteredTasks: (state) => {
      let filtered = state.tasks;

      // Filtro por status
      if (state.filters.status === 'completed') {
        filtered = filtered.filter(task => task.completed);
      } else if (state.filters.status === 'pending') {
        filtered = filtered.filter(task => !task.completed);
      }

      // Filtro por prioridade
      if (state.filters.priority !== 'all') {
        filtered = filtered.filter(task => task.priority === state.filters.priority);
      }

      // Filtro por busca (título ou descrição)
      if (state.filters.search) {
        const searchTerm = state.filters.search.toLowerCase();
        filtered = filtered.filter(task =>
          task.title.toLowerCase().includes(searchTerm) ||
          task.description.toLowerCase().includes(searchTerm)
        );
      }

      // Filtro por tags
      if (state.filters.tags.length > 0) {
        filtered = filtered.filter(task =>
          task.tags.some(tag => state.filters.tags.includes(tag))
        );
      }

      return filtered;
    },
    // Outros getters úteis
    pendingTasksCount: (state, getters) => getters.filteredTasks.filter(task => !task.completed).length,
    completedTasksCount: (state, getters) => getters.filteredTasks.filter(task => task.completed).length,
    allTags: (state) => {
        const tags = new Set();
        state.tasks.forEach(task => {
            task.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags);
    }
  }
});

export default store;