import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/notification',
    name: 'notification',
    component: () => import('../views/Notification.vue')
  },
  {
    path: '/pageConnexion',
    name: 'SeConnecter',
    component: () => import('../views/SeConnecter.vue')
  },
  {
    path: '/pageInscription',
    name: 'Sinscrire',
    component: () => import('../views/Sinscrire.vue')
  },
  {
    path: '/pageEnchere',
    name: 'pageEnchere',
    component: () => import('../views/pageEnchere.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
