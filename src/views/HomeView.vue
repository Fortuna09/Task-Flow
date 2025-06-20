<template>
  <div class="home-view">
    <h1>Minhas Tarefas</h1>

    <TaskForm />

    <TaskFilters />

    <div class="task-stats">
        <span>Tarefas Pendentes: {{ pendingTasksCount }}</span>
        <span>Tarefas Concluídas: {{ completedTasksCount }}</span>
    </div>

    <div class="task-list">
      <TaskItem
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
      />
      <p v-if="filteredTasks.length === 0" class="no-tasks">Nenhuma tarefa encontrada com os filtros atuais.</p>
    </div>
  </div>
</template>

<script>
import TaskForm from '@/components/TaskForm.vue';
import TaskItem from '@/components/TaskItem.vue';
import TaskFilters from '@/components/TaskFilters.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    TaskForm,
    TaskItem,
    TaskFilters
  },
  computed: {
    ...mapGetters(['filteredTasks', 'pendingTasksCount', 'completedTasksCount'])
  },
  methods: {
    ...mapActions(['initializeTasks'])
  },
  created() {
    this.initializeTasks(); // Carrega as tarefas do localStorage ao criar o componente
  }
};
</script>

<style lang="scss" scoped>
.home-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
  }

  .task-list {
    margin-top: 20px;
  }

  .no-tasks {
    text-align: center;
    color: #666;
    margin-top: 30px;
    font-style: italic;
  }

  .task-stats {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 20px;
    font-size: 1.1rem;
    color: #555;
    font-weight: bold;
  }
}
</style>