<script setup lang="ts">
import { ref } from "vue";

let process = ref(0);
const previewProcess = 0;
</script>

<template>
  <div class="slider">
    <div
      class="thumb preview"
      :style="{
        '--preview-process': `${previewProcess}px`,
      }"
    />
    <div
      class="thumb"
      :style="{
        '--process': `${process}px`,
      }"
    />
    <input
      v-model="process"
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
  left: calc(var(--process));

  width: 3rem;
  height: 4.5rem;

  background-color: black;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 50% 100%, 0 33%);
}

.thumb.preview {
  background-color: lightgray;
  left: calc(var(--preview-process));
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
