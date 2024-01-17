import { INITIAL_SLIDER_PROGRESS } from "@src/constants";
import { State } from "@src/types";
import { createStore } from "vuex";

export const store = createStore<State>({
  state() {
    return {
      playerName: "",

      isInRoom: false,
      roomData: {
        roomID: null,
        playerCount: null,
        playerList: [],
      },

      isInGame: false,
      gameData: {
        topSlider: {
          progress: INITIAL_SLIDER_PROGRESS,
          prevProgress: INITIAL_SLIDER_PROGRESS,
        },
        sideSlider: {
          progress: INITIAL_SLIDER_PROGRESS,
          prevProgress: INITIAL_SLIDER_PROGRESS,
        },
        board: [
          // 인덱스[][]
          [-2, -1, -1, -1, -1, -1, -1, -2],
          [-1, -1, -1, -1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1, -1, -1, -1],
          [-2, -1, -1, -1, -1, -1, -1, -2],
        ],
        whoseTurn: 0, // 인덱스
        playerList: [],
      },
    };
  },
});
