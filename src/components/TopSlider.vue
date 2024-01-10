<script setup lang="ts">
import { onUpdated, ref } from "vue";

let process = ref(0);
onUpdated(() => {
  console.log(process.value);
});
</script>

<template>
  <div class="slider">
    <div
      class="thumb"
      :style="{
        '--process': `${process * 4}px`,
      }"
    />
    <input
      v-model="process"
      class="slider-input"
      type="range"
      min="0"
      max="162"
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
}

.slider-input::-webkit-slider-thumb {
  appearance: none;
  background-color: red;
  width: 48px;
  height: 4.5rem;
}

.slider-input::-webkit-slider-thumb:hover {
  cursor: pointer;
}
</style>
