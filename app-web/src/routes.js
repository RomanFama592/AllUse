import { createRouter, createWebHistory } from 'vue-router'
import index_view from '@/views/index_view.vue'
import error_404_view from '@/views/error_404_view.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index_view,
  },
  {
    path: '/:catchAll',
    component: error_404_view,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router