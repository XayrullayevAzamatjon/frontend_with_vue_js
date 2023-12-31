import { createRouter, createWebHistory } from 'vue-router'
import ViewStudents from '../views/ViewStudent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewStudents
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddStudent.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/UpdateStudent.vue')
    }
  ]
})

export default router
