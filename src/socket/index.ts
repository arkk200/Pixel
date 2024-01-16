import GameOverByDisconnectedModalVue from "@src/components/pages/main/GameOverByDisconnectedModal.vue";
import GameOverByLoseModalVue from "@src/components/pages/main/GameOverByLoseModal.vue";
import GameOverByWinModalVue from "@src/components/pages/main/GameOverByWinModal.vue";
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

socket.on("gameOver:disconnecting", () => {
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
});

socket.on("gameOver:lose", ({ losePlayerName }) => {
  const { open, close } = useModal({
    component: GameOverByLoseModalVue,
    attrs: {
      profileImage:
        "https://cdn.pixabay.com/photo/2020/04/04/09/55/cat-5001570_1280.jpg",
      playerName: losePlayerName,
      onConfirm() {
        close();
        router.push("/");
        store.state.isInGame = false;
      },
    },
  });
  open();
});

socket.on("gameOver:win", ({ winPlayerName }) => {
  const { open, close } = useModal({
    component: GameOverByWinModalVue,
    attrs: {
      profileImage:
        "https://cdn.pixabay.com/photo/2020/04/04/09/55/cat-5001570_1280.jpg",
      playerName: winPlayerName,
      onConfirm() {
        close();
        router.push("/");
        store.state.isInGame = false;
      },
    },
  });
  open();
});
