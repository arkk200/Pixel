import { GAME_OVER_DATA_MESSAGE } from "@src/constants";
import router from "@src/router";
import { store } from "@src/stores";
import { io } from "socket.io-client";

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

socket.on("gameOver", async ({ message, winPlayer, order }) => {
  if (message === GAME_OVER_DATA_MESSAGE.SOMEONE_DISCONNECTED) {
    alert("누군가가 게임을 나갔습니다.");
    router.push("/");
    store.state.isInGame = false;
  }
  if (message === GAME_OVER_DATA_MESSAGE.SOMEONE_WON) {
    alert(`${winPlayer.playerName} (${order})가 승리했습니다.`);
  }
});
