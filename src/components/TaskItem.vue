<template>
  <div :class="['task-item', { 'completed': task.completed, 'high-priority': task.priority === 'high' }]">
    <div class="task-header">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="toggleCompletion"
      />
      <router-link :to="{ name: 'task-details', params: { id: task.id } }" class="task-title-link">
        <h3>{{ task.title }}</h3>
      </router-link>
      <span :class="['priority-badge', task.priority]">{{ task.priority }}</span>
    </div>
    <p v-if="task.description">{{ task.description }}</p>
    <div class="task-meta">
      <span v-if="task.dueDate">Vencimento: {{ formatDate(task.dueDate) }}</span>
      <div class="task-tags">
        <span v-for="tag in task.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
    <button @click="deleteTaskItem" class="delete-button">Excluir</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['toggleTaskCompletion', 'deleteTask']),
    toggleCompletion() {
      this.toggleTaskCompletion(this.task.id);
    },
    deleteTaskItem() {
      if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
        this.deleteTask(this.task.id);
      }
    },
    formatDate(dateString) {
      if (!dateString) return 'N/A';
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('pt-BR', options);
    }
  }
};
</script>

<style lang="scss" scoped>
.task-item {
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &.completed {
    background-color: #e6ffe6;
    border-color: #c3e6c3;
    .task-header h3 {
      text-decoration: line-through;
      color: #777;
    }
  }

  &.high-priority {
    border-left: 5px solid #ff6347; // Cor vermelha para alta prioridade
  }

  .task-header {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;

    input[type="checkbox"] {
      margin-right: 10px;
      transform: scale(1.3);
    }

    h3 {
      margin: 0;
      flex-grow: 1;
      font-size: 1.2rem;
      color: #333;
    }

    .priority-badge {
      padding: 4px 8px;
      border-radius: 5px;
      font-size: 0.8rem;
      font-weight: bold;
      color: white;
      text-transform: capitalize;

      &.low { background-color: #4CAF50; } // Verde
      &.medium { background-color: #FFC107; } // Amarelo
      &.high { background-color: #F44336; } // Vermelho
    }
  }

  p {
    margin: 0 0 10px 0;
    color: #555;
  }

  .task-meta {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    color: #888;
    margin-top: auto; // Empurra para baixo

    .task-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;

      .tag {
        background-color: #e0e0e0;
        padding: 3px 8px;
        border-radius: 12px;
        font-size: 0.75rem;
        color: #555;
      }
    }
  }

  .delete-button {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    margin-top: 10px;
    align-self: flex-end; // Alinha à direita
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #c82333;
    }
  }
}

.task-title-link {
  text-decoration: none; // Remove sublinhado padrão do link
  color: inherit; // Mantém a cor do texto do pai
  flex-grow: 1; // Permite que o link ocupe o espaço disponível
}

.task-title-link:hover h3 {
    color: #42b983; // Efeito de hover no título dentro do link
}
</style>