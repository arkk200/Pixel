import { createApp } from "vue";
import { createVfm } from "vue-final-modal";
import "vue-final-modal/style.css";
import App from "./App.vue";
import router from "./router";
import { store } from "./stores";
import "./style.css";

const vfm = createVfm();

createApp(App).use(store).use(router).use(vfm).mount("#app");
