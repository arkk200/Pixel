import GameOverByDisconnectedModalVue from "@src/components/pages/main/GameOverByDisconnectedModal.vue";
import { GAME_OVER_MESSAGE } from "@src/constants";
import router from "@src/router";
import { store } from "@src/stores";
import { io } from "socket.io-client";
import { useModal } from "vue-final-modal";

const serverURL = import.meta.env.PROD ? null : import.meta.env.VITE_SERVER_URL;
export const socket = io(serverURL);

socket.on("startGame", (gameData) => {
  store.state.isInGame = true;
  store.state.gameData = gameData;
  router.push("/play");
});

socket.on("updateGame", (gameData) => {
  store.state.gameData = gameData;
});

socket.on("gameOver", ({ message, winPlayer, losePlayer, whoseTurn }) => {
  if (message === GAME_OVER_MESSAGE.SOMEONE_DISCONNECTED) {
    const { open, close } = useModal({
      component: GameOverByDisconnectedModalVue,
      attrs: {
        onConfirm() {
          close();
        },
      },
    });

    router.push("/");
    store.state.isInGame = false;
    open();
  }

  if (message === GAME_OVER_MESSAGE.SOMEONE_WON) {
    alert(`${winPlayer.playerName} (${whoseTurn}번 플레이어)가 승리했습니다.`);
  }

  if (message === GAME_OVER_MESSAGE.SOMEONE_LOST) {
    alert(`${losePlayer.playerName} (${whoseTurn}번 플레이어)가 패배했습니다.`);
  }
});
