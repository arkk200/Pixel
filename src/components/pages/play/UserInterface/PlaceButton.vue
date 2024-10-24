<script setup lang="ts">
import { socket } from "@src/socket";
import { State } from "@src/types";
import normalizeProgress from "@src/utils/normalizeProgress";
import { useStore } from "vuex";

const store = useStore<State>();
const placeMok = () => {
  let { topSlider, sideSlider, whoseTurn, board, playerList } =
    store.state.gameData;

  // 이미 board에 목이 있다면 실행 못하게 막기
  const sideSliderProgressIndex = normalizeProgress(sideSlider.progress),
    topSliderProgressIndex = normalizeProgress(topSlider.progress);

  socket.emit("placeMok", {
    topSliderProgressIndex,
    sideSliderProgressIndex,
  });

  // -1(빈 공간)이 아니라면
  if (board[sideSliderProgressIndex][topSliderProgressIndex] !== -1) return;

  // 내 차례가 아니라면
  if (playerList[whoseTurn].socketID !== socket.id) return;

  // board에 목 추가하기
  store.state.gameData.board[sideSliderProgressIndex][topSliderProgressIndex] =
    whoseTurn;

  // 슬라이더 prevProgress 값 바꾸기
  store.state.gameData.topSlider.prevProgress = topSlider.progress;
  store.state.gameData.sideSlider.prevProgress = sideSlider.progress;

  // 순서 한 차례 이동하기
  store.state.gameData.whoseTurn = ((whoseTurn + 1) %
    playerList.length) as State["gameData"]["whoseTurn"];
};
</script>

<template>
  <button class="place-button" @click="placeMok">놓기</button>
</template>

<style scoped>
.place-button {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 0.75rem;

  border-radius: 0.375rem;

  border: 0.2rem solid rgb(206, 206, 206);
  background-color: rgb(219, 219, 219);

  color: white;
  font-size: 0.75rem;
  font-weight: 600;

  cursor: pointer;

  word-break: keep-all;
}
.place-button:hover {
  filter: brightness(102%);
}
.place-button:active {
  filter: brightness(98%);
}
</style>
