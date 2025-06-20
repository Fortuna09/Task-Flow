import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TaskDetailsView from '../views/TaskDetailsView.vue'; // Importe

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/task/:id', // Rota dinâmica
    name: 'task-details',
    component: TaskDetailsView,
    props: true // Permite passar os parâmetros da rota como props para o componente
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;