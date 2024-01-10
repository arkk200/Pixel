import { createApp } from "vue";
import App from "./App.vue";
import { key, store } from "./stores";
import "./style.css";

createApp(App).use(store, key).mount("#app");
