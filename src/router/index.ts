import { store } from "@src/stores";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory("PIXEL/"),
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
      path: "/join/:roomID",
      name: "join",
      component: () => import("./join.vue"),
    },
  ],
});

export default router;
