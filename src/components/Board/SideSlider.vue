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
}

.thumb {
  position: absolute;
  bottom: calc(var(--process));
  right: -0.5rem;

  width: 4.5rem;
  height: 3rem;

  background-color: black;
  clip-path: polygon(66% 0, 100% 0, 100% 100%, 66% 100%, 0 52%);
}

.thumb.preview {
  background-color: lightgray;
  bottom: calc(var(--preview-process));
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
