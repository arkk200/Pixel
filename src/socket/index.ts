import router from "@src/router";
import { store } from "@src/stores";
import { color } from "@src/styles/theme";
import { io } from "socket.io-client";
import { toast } from "vue3-toastify";

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

socket.on("gameOver:lose", ({ losePlayerName, whoseTurn }) => {
  toast(`${losePlayerName}이/가 졌습니다`, {
    position: "top-center",
    theme: "colored",
    toastStyle: {
      backgroundColor:
        color[`player${whoseTurn + 1}` as keyof typeof color].primary,
      color: "white",
    },
  });
});

socket.on("gameOver:4mokWin", ({ winPlayerName, whoseTurn }) => {
  toast(`${winPlayerName}이/가 이겼습니다`, {
    position: "top-center",
    theme: "colored",
    toastStyle: {
      backgroundColor:
        color[`player${whoseTurn + 1}` as keyof typeof color].primary,
      color: "white",
    },
  });
});

socket.on(
  "gameOver:blocked",
  ({
    winPlayerList,
  }: {
    winPlayerList: { playerName: string; order: number }[];
  }) => {
    winPlayerList.forEach((winPlayer) => {
      toast(`${winPlayer.playerName}이/가 이겼습니다`, {
        position: "top-center",
        theme: "colored",
        toastStyle: {
          backgroundColor:
            color[`player${winPlayer.order + 1}` as keyof typeof color].primary,
          color: "white",
        },
      });
    });
  }
);
