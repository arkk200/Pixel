import { store } from "@src/stores";
import {
  NavigationGuardNext,
  RouteLocationNormalized,
  createRouter,
  createWebHistory,
} from "vue-router";

const beforeEnterPlayPage = (
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  if (store.state.isInGame) {
    next();
    return;
  }
  next("/");
};

const router = createRouter({
  history: createWebHistory(""),
  routes: [
    { path: "/", name: "main", component: () => import("./main.vue") },
    {
      path: "/play",
      name: "play",
      component: () => import("./play.vue"),
      beforeEnter: beforeEnterPlayPage,
    },
    { path: "/room", name: "room", component: () => import("./room.vue") },
    {
      path: "/join/:roomId",
      name: "join",
      component: () => import("./join.vue"),
    },
  ],
});

export default router;
