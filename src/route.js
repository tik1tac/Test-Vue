import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Category from "./components/Category.vue";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Home",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/Category",
      name: "Category",
      component: Category,
    },
    {
      path: "/ThePivo",
      name: "Pivo",
      component: () => import("./Views/catalogs/ThePivo.vue"),
    },
    {
      path: "/TheVodka",
      name: "Vodka",
      component: () => import("./Views/catalogs/TheVodka.vue"),
    },
    {
      path: "/TheTequila",
      name: "Tequila",
      component: () => import("./Views/catalogs/TheTequila.vue"),
    },
    {
      path: "/TheRum",
      name: "Rum",
      component: () => import("./Views/catalogs/TheRum.vue"),
    },
  ],
});
