import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WorkView from '../views/WorkView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView
    },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: ContactView
    // },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: ()=> import('../views/404Page.vue')
    }
  ]
})

export default router
