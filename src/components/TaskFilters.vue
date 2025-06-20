<template>
  <div class="task-filters">
    <input
      type="text"
      v-model="searchTerm"
      @input="updateSearch"
      placeholder="Buscar por título ou descrição"
    />

    <select v-model="statusFilter" @change="updateStatusFilter">
      <option value="all">Todos</option>
      <option value="pending">Pendentes</option>
      <option value="completed">Concluídas</option>
    </select>

    <select v-model="priorityFilter" @change="updatePriorityFilter">
      <option value="all">Todas Prioridades</option>
      <option value="low">Baixa</option>
      <option value="medium">Média</option>
      <option value="high">Alta</option>
    </select>

    <div class="tag-filters">
        <span class="filter-label">Filtrar por Tags:</span>
        <span
            v-for="tag in allTags"
            :key="tag"
            :class="['tag-filter-chip', { 'active': isTagFiltered(tag) }]"
            @click="toggleTagFilter(tag)"
        >
            {{ tag }}
        </span>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      searchTerm: this.$store.state.filters.search,
      statusFilter: this.$store.state.filters.status,
      priorityFilter: this.$store.state.filters.priority
    };
  },
  computed: {
    ...mapState(['filters']),
    ...mapGetters(['allTags']),
  },
  methods: {
    ...mapMutations(['setSearchTerm', 'setFilterStatus', 'setFilterPriority', 'toggleFilterTag']),
    updateSearch() {
      this.setSearchTerm(this.searchTerm);
    },
    updateStatusFilter() {
      this.setFilterStatus(this.statusFilter);
    },
    updatePriorityFilter() {
      this.setFilterPriority(this.priorityFilter);
    },
    isTagFiltered(tag) {
      return this.filters.tags.includes(tag);
    },
    toggleTagFilter(tag) {
      this.toggleFilterTag(tag);
    }
  }
};
</script>

<style lang="scss" scoped>
.task-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 20px;
  background-color: #f0f2f5;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);

  input[type="text"],
  select {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    flex: 1; // Permite que os inputs se expandam
    min-width: 180px; // Largura mínima para inputs
  }

  .tag-filters {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    width: 100%; // Ocupa a largura total na próxima linha

    .filter-label {
        font-weight: bold;
        color: #555;
    }

    .tag-filter-chip {
      background-color: #e0e0e0;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
      color: #444;

      &:hover {
        background-color: #d0d0d0;
      }

      &.active {
        background-color: #42b983;
        color: white;
        font-weight: bold;
      }
    }
  }
}
</style>