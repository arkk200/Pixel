<script setup lang="ts">
import { key } from "@src/stores";
import normalizeProgress from "@src/utils/normalizeProgress";
import { useStore } from "vuex";

const store = useStore(key);
const placeMok = () => {
  let { topSlider, sideSlider, whoseTurn, board, playerList } = store.state;

  // 이미 board에 목이 있다면 실행 못하게 막기
  const sideSliderIndex = normalizeProgress(sideSlider.progress),
    topSliderIndex = normalizeProgress(topSlider.progress);
  // -1(빈 공간)이 아니라면
  if (board[sideSliderIndex][topSliderIndex] !== -1) return;

  // board에 목 추가하기
  store.state.board[sideSliderIndex][topSliderIndex] = whoseTurn;

  // 슬라이더 prevProgress 값 바꾸기
  store.state.topSlider.prevProgress = topSlider.progress;
  store.state.sideSlider.prevProgress = sideSlider.progress;

  // 순서 한 차례 이동하기
  store.state.whoseTurn = (whoseTurn + 1) % playerList.length;
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

  padding: 1rem 1.5rem;

  border-radius: 0.75rem;

  border: 0.4rem solid rgb(208, 206, 206);
  background-color: rgb(219, 219, 219);

  color: white;
  font-size: 1.5rem;
  font-weight: 600;

  cursor: pointer;
}
.place-button:hover {
  filter: brightness(102%);
}
.place-button:active {
  filter: brightness(98%);
}
</style>
