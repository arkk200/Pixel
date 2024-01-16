import router from "@src/router";
import { store } from "@src/stores";
import { io } from "socket.io-client";

const serverURL = import.meta.env.PROD ? null : import.meta.env.VITE_SERVER_URL;
export const socket = io(serverURL);

socket.on("startGame", (gameData) => {
  store.state.isInGame = true;
  store.state.gameData = gameData;
  router.push("play");
});

socket.on("updateGame", (gameData) => {
  store.state.gameData = gameData;
});
