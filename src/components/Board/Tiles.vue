<script setup lang="ts">
import { key } from "@src/stores";
import normalizeProgress from "@src/utils/normalizeProgress";
import { ref, watch } from "vue";
import { useStore } from "vuex";
import EmptyTile from "./EmptyTile.vue";
import Tile from "./Tile.vue";

const store = useStore(key);
const topSliderProgress = ref(0);
const sideSliderProgress = ref(0);

watch(store.state, (newState) => {
  topSliderProgress.value = normalizeProgress(newState.topSlider.progress);
  sideSliderProgress.value = normalizeProgress(newState.sideSlider.progress);
});

const isFocused = (x: number, y: number) => {
  return sideSliderProgress.value === x && topSliderProgress.value === y;
};
</script>

<template>
  <div class="tiles">
    <div class="row" v-for="(_, x) in Array(8)">
      <div v-for="(_, y) in Array(8)">
        <EmptyTile v-if="(x === 0 || x === 7) && (y === 0 || y === 7)" />
        <Tile v-else :x="x" :y="y" :class="{ 'is-focused': isFocused(x, y) }" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.tiles {
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: min-content;
  padding: 2rem;
}
.row {
  display: flex;
  gap: 0.5rem;
}
.is-focused {
  outline: 0.25rem solid red;
}
</style>
