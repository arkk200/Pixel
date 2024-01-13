import {
  INITIAL_SIDE_SLIDER_PROGRESS,
  INITIAL_TOP_SLIDER_PROGRESS,
} from "@src/constants";
import { createStore } from "vuex";

export const key = Symbol("store");

export const store = createStore({
  state() {
    return {
      topSlider: {
        progress: INITIAL_TOP_SLIDER_PROGRESS,
        prevProgress: INITIAL_TOP_SLIDER_PROGRESS,
      },
      sideSlider: {
        progress: INITIAL_SIDE_SLIDER_PROGRESS,
        prevProgress: INITIAL_SIDE_SLIDER_PROGRESS,
      },
      board: [
        // 인덱스[][]
        [-2, -1, -1, -1, -1, -1, -1, -2],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, 0, 1, -1, -1, -1],
        [-1, -1, -1, 2, 3, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [-2, -1, -1, -1, -1, -1, -1, -2],
      ],
      playerList: [
        { id: 1, name: "James" },
        { id: 2, name: "Jake" },
        { id: 3, name: "John" },
        { id: 4, name: "Jay" },
      ],
      whoseTurn: 0, // 인덱스
    };
  },
});
