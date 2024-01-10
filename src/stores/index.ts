import { createStore } from "vuex";

export const key = Symbol("store");

export const store = createStore({
  state() {
    return {
      topSlider: {
        progress: 0,
        prevProgress: 0,
      },
      sideSlider: {
        progress: 0,
        prevProgress: 0,
      },
    };
  },
});
