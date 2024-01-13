import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(""),
  routes: [
    { path: "/", name: "main", component: () => import("./main.vue") },
    { path: "/play", name: "play", component: () => import("./play.vue") },
  ],
});

export default router;
