import { createApp } from "vue";
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import App from "./App.vue";
import router from "./router";
import { store } from "./stores";
import "./styles/font.css";
import "./styles/normalize.css";
import "./styles/style.css";

createApp(App).use(store).use(router).use(Vue3Toastify).mount("#app");
