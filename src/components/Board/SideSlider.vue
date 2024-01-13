<script setup lang="ts">
import { key } from "@src/stores";
import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const sideSlider = reactive(store.state.sideSlider);
const topSlider = reactive(store.state.topSlider);

// 사이드 슬라이더가 움직이면 탑 슬라이더 제자리로 옮기기
const initTopSlider = () => {
  topSlider.progress = topSlider.prevProgress;
};
</script>

<template>
  <div class="slider">
    <div
      class="thumb preview"
      :style="{
        '--preview-progress': `${sideSlider.prevProgress}px`,
      }"
    />
    <div
      class="thumb"
      :style="{
        '--progress': `${sideSlider.progress}px`,
      }"
    />
    <input
      v-model="sideSlider.progress"
      @input="initTopSlider"
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
  box-shadow: inset 0 -1px 5px 2px rgba(77, 71, 71, 0.5);
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
  bottom: calc(var(--preview-progress));
}

.slider-input {
  appearance: none;
  writing-mode: vertical-lr;
  width: 16px;
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
