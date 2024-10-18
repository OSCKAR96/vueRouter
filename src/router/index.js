import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductosView from "@/views/ProductosView.vue";
import ContactosView from "@/views/ContactosView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/productos",
  //   name: "productos",
  //   component: () => import("../views/ProductosView.vue"),
  // },
  {
    path: "/producto/:id",
    name: "producto",
    component: () => import("../views/ProductosView.vue"),
    props: (route) => {
      return{
        id: Number(route.params.id),
        titulo:"Desayuno",
        detalle:"Huevos con pasas",
        precio: 35000,
        cantidad: "Pa uno solo",
      }
    }
  },
  {
    path: "/contactos",
    name: "contactos",
    component: () => import("../views/ContactosView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
