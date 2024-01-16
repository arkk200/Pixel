<script setup lang="ts">
import { State } from "@src/stores/types";
import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore<State>();

const topSlider = reactive(store.state.gameData.topSlider);
const sideSlider = reactive(store.state.gameData.sideSlider);

// 탑 슬라이더가 움직이면 사이드 슬라이더 제자리로 옮기기
const initSideSlider = () => {
  sideSlider.progress = sideSlider.prevProgress;
};
</script>

<template>
  <div class="slider">
    <div
      class="thumb preview"
      :style="{
        '--prev-progress': `${topSlider.prevProgress}px`,
      }"
    />
    <div
      class="thumb"
      :style="{
        '--progress': `${topSlider.progress}px`,
      }"
    />
    <input
      v-model="topSlider.progress"
      @input="initSideSlider"
      class="slider-input"
      type="range"
      min="0"
      max="648"
      step="1"
    />
  </div>
</template>

<style scoped>
.slider {
  position: relative;
  height: 1rem;
  margin: 0 2rem;
  box-shadow: inset 0 -1px 5px 2px rgba(77, 71, 71, 0.5);
  align-self: center;
}

.thumb {
  position: absolute;
  top: -0.5rem;
  left: calc(var(--progress));

  width: 3rem;
  height: 4.5rem;

  background-color: black;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 50% 100%, 0 33%);
}

.thumb.preview {
  background-color: lightgray;
  left: calc(var(--prev-progress));
}

.slider-input {
  appearance: none;
  width: 100%;
  height: 16px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}

.slider-input::-webkit-slider-runnable-track {
  margin-top: 2.5rem;
  cursor: pointer;
}

.slider-input::-webkit-slider-thumb {
  appearance: none;
  width: 3rem;
  height: 4.5rem;
}
</style>
