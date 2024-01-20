import { store } from "@src/stores";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/PIXEL/", name: "main", component: () => import("./main.vue") },
    {
      path: "/PIXEL/play",
      name: "play",
      component: () => import("./play.vue"),
      beforeEnter: (_, __, next) => (store.state.isInGame ? next() : next("/")),
    },
    {
      path: "/PIXEL/room",
      name: "room",
      component: () => import("./room.vue"),
      beforeEnter: (_, __, next) => (store.state.isInRoom ? next() : next("/")),
    },
    {
      path: "/PIXEL/join/:roomID",
      name: "join",
      component: () => import("./join.vue"),
    },
  ],
});

export default router;
