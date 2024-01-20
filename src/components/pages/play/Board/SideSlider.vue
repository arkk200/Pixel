<script setup lang="ts">
import { socket } from "@src/socket";
import { State } from "@src/types";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore<State>();

const sideSlider = computed(() => store.state.gameData.sideSlider);
const topSlider = computed(() => store.state.gameData.topSlider);

// 사이드 슬라이더가 움직이면
const inputSideSlider = (e: Event) => {
  const { playerList, whoseTurn } = store.state.gameData;

  if (playerList[whoseTurn].socketID !== socket.id) return; // 내 차례가 아니면 무시

  const sideSliderProgress = (e.target as HTMLInputElement).value;
  store.state.gameData.sideSlider.progress = Number(sideSliderProgress);

  // 바뀐 위치 알리고
  socket.emit("updateSlider", {
    sliderPosition: "SIDE",
    progress: sideSlider.value.progress,
  });

  // 탑 슬라이더 제자리로 옮기기
  topSlider.value.progress = topSlider.value.prevProgress;
};
</script>

<template>
  <div class="slider">
    <div
      class="thumb preview"
      :style="{
        '--prev-progress': `${sideSlider.prevProgress / 16}rem`,
      }"
    />
    <div
      class="thumb"
      :style="{
        '--progress': `${sideSlider.progress / 16}rem`,
      }"
    />
    <input
      :value="sideSlider.progress"
      @input="inputSideSlider"
      class="slider-input"
      type="range"
      min="0"
      max="648"
      step="1"
      orient="vertical"
    />
  </div>
</template>

<style scoped>
.slider {
  position: relative;
  width: 1rem;
  height: calc(100% - 4rem);
  margin: 2rem 0;
  box-shadow: inset 0 -0.0625rem 0.3125rem 0.125rem rgba(77, 71, 71, 0.5);
  justify-self: center;

  transform: rotate(180deg) scaleX(-1);
}

.thumb {
  position: absolute;
  bottom: calc(var(--progress));
  right: -0.5rem;

  width: 4.5rem;
  height: 3rem;

  background-color: black;
  clip-path: polygon(66% 0, 100% 0, 100% 100%, 66% 100%, 0 52%);
}

.thumb.preview {
  background-color: lightgray;
  bottom: calc(var(--prev-progress));
}

.slider-input {
  appearance: none;
  writing-mode: vertical-lr;
  width: 1rem;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  opacity: 0;
}

.slider-input::-webkit-slider-runnable-track {
  margin-right: 2.5rem;
  cursor: pointer;
}

.slider-input::-webkit-slider-thumb {
  appearance: none;
  width: 4.5rem;
  height: 3rem;
}
</style>
