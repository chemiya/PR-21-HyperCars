import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/cochesTaller",
    alias: "/cochesTaller",
    name: "coches-taller",
    component: () => import("../components/cochesTaller.vue"),
  },

  {
    path: "/cochesVenta",
    alias: "/cochesVenta",
    name: "coches-venta",
    component: () => import("../components/cochesVenta.vue"),
  },

  {
    path: "/crearCocheTaller",
    alias: "/crearCocheTaller/:id",
    name: "crear-coche-taller",
    component: () => import("../components/crearCocheTaller.vue"),
  },

  {
    path: "/crearCocheVenta",
    alias: "/crearCocheVenta/:id",
    name: "crear-coche-venta",
    component: () => import("../components/crearCocheVenta.vue"),
  },

  {
    path: "/detalleCocheTaller",
    alias: "/detalleCocheTaller/:id",
    name: "detalle-coche-taller",
    component: () => import("../components/detalleCocheTaller.vue"),
  },

  {
    path: "/detalleCocheVenta",
    alias: "/detalleCocheVenta/:id",
    name: "detalle-coche-venta",
    component: () => import("../components/detalleCocheVenta.vue"),
  },

  {
    path: "/identificacion",
    alias: "/identificacion",
    name: "identificacion",
    component: () => import("../components/identificacion.vue"),
  },

  {
    path: "/",
    alias: "/principal",
    name: "principal",
    component: () => import("../components/principal.vue"),
  },

  {
    path: "/registro",
    alias: "/registro",
    name: "registro",
    component: () => import("../components/registro.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
