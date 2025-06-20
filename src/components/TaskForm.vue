<template>
  <form @submit.prevent="handleSubmit" class="task-form">
    <input
      v-model="newTask.title"
      placeholder="Título da tarefa"
      required
    />
    <textarea
      v-model="newTask.description"
      placeholder="Descrição (opcional)"
    ></textarea>
    <input
      type="date"
      v-model="newTask.dueDate"
    />
    <select v-model="newTask.priority">
      <option value="low">Baixa</option>
      <option value="medium">Média</option>
      <option value="high">Alta</option>
    </select>
    <input
      v-model="tagsInput"
      placeholder="Tags (separadas por vírgula)"
    />
    <button type="submit">Adicionar Tarefa</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      newTask: {
        title: '',
        description: '',
        dueDate: null,
        priority: 'medium',
        tags: []
      },
      tagsInput: ''
    };
  },
  methods: {
    ...mapActions(['addTask']),
    handleSubmit() {
      this.newTask.tags = this.tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag);
      this.addTask(this.newTask);
      this.resetForm();
    },
    resetForm() {
      this.newTask = {
        title: '',
        description: '',
        dueDate: null,
        priority: 'medium',
        tags: []
      };
      this.tagsInput = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.task-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  input[type="text"],
  textarea,
  input[type="date"],
  select {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }

  button {
    padding: 10px 15px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #36a172;
    }
  }
}
</style>