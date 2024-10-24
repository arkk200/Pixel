import router from "@src/router";
import { store } from "@src/stores";
import { color } from "@src/styles/theme";
import { State } from "@src/types";
import { io } from "socket.io-client";
import { toast, ToastOptions } from "vue3-toastify";

const serverURL = import.meta.env.PROD
  ? import.meta.env.VITE_PROD_SERVER_URL
  : import.meta.env.VITE_SERVER_URL;
export const socket = io(serverURL, { secure: true });

socket.on("createRoom", (roomData) => {
  store.state.roomData = roomData;
  store.state.isInRoom = true;

  router.push("/room");
});

socket.on("joinRoom", (roomData) => {
  store.state.roomData = roomData;
  store.state.isInRoom = true;

  router.push("/room");
});

socket.on("updateRoom", ({ playerList }) => {
  store.state.roomData.playerList = playerList;
});

socket.on("startGame", (gameData) => {
  store.state.isInGame = true;
  store.state.gameData = gameData;
  router.push("/play");
});

socket.on("updateGame", (gameData) => {
  store.state.gameData = gameData;
});

socket.on("gameOver:disconnecting", () => {
  router.push("/").then(() => {
    store.state.isInGame = false;

    toast.warning("누군가가 게임을 떠났습니다");
  });
});

const gameOverToastOptions: (whoseTurn: State['gameData']['whoseTurn']) => ToastOptions = (whoseTurn) => ({
  position: 'top-center',
  theme: 'colored',
  toastStyle: {
    backgroundColor:
      color[`player${whoseTurn + 1}` as keyof typeof color].primary,
    color: "white",
  },
})

// TODO : 시간 초과 패배를 의미하도록 이벤트명 변경하기
socket.on("gameOver:lose", ({ losePlayerName, whoseTurn }: {losePlayerName: string; whoseTurn: State['gameData']['whoseTurn']}) => {
  store.state.gameData.isGameEnd = true;
  toast(`${losePlayerName}이/가 시간 초과로 졌습니다`, gameOverToastOptions(whoseTurn));
});

socket.on("gameOver:4mokWin", ({ winPlayerName, whoseTurn }) => {
  store.state.gameData.isGameEnd = true;
  toast(`${winPlayerName}이/가 4목으로 이겼습니다`, gameOverToastOptions(whoseTurn));
});

type GameOverByBlockedEvent = {
  winPlayerList: { playerName: string; order: State['gameData']['whoseTurn'] }[];
};
socket.on("gameOver:blocked", ({ winPlayerList }: GameOverByBlockedEvent) => {
  store.state.gameData.isGameEnd = true;
  winPlayerList.forEach((winPlayer) => {
    toast(`${winPlayer.playerName}이/가 3목이 가장 많으므로 이겼습니다`, gameOverToastOptions(winPlayer.order));
  });
});
