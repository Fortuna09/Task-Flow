<template>
  <div class="task-details-view">
    <h2>Detalhes da Tarefa</h2>
    <p>ID da Tarefa: {{ taskId }}</p>
    <button @click="goBack">Voltar</button>
  </div>
</template>

<script>
export default {
  computed: {
    taskId() {
      return this.$route.params.id;
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.task-details-view {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>