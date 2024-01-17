import { store } from "@src/stores";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(""),
  routes: [
    { path: "/", name: "main", component: () => import("./main.vue") },
    {
      path: "/play",
      name: "play",
      component: () => import("./play.vue"),
      beforeEnter: (_, __, next) => (store.state.isInGame ? next() : next("/")),
    },
    {
      path: "/room",
      name: "room",
      component: () => import("./room.vue"),
      beforeEnter: (_, __, next) => (store.state.isInRoom ? next() : next("/")),
    },
    {
      path: "/join/:roomId",
      name: "join",
      component: () => import("./join.vue"),
    },
  ],
});

export default router;
