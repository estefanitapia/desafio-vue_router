// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: "/productos",
    name: "Productos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductosView.vue"),
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactoView.vue"),
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router