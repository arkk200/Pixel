<script setup lang="ts">
import { State } from "@src/types";
import normalizeProgress from "@src/utils/normalizeProgress";
import { computed } from "vue";
import { useStore } from "vuex";
import EmptyTile from "./EmptyTile.vue";
import Tile from "./Tile.vue";

const store = useStore<State>();
const topSliderIndex = computed(() =>
  normalizeProgress(store.state.gameData.topSlider.progress)
);
const sideSliderIndex = computed(() =>
  normalizeProgress(store.state.gameData.sideSlider.progress)
);

const isFocused = (x: number, y: number) => {
  return sideSliderIndex.value === x && topSliderIndex.value === y;
};
</script>

<template>
  <div class="tiles">
    <div class="row" v-for="(row, x) in store.state.gameData.board">
      <div v-for="(playerIndex, y) in row">
        <EmptyTile v-if="(x === 0 || x === 7) && (y === 0 || y === 7)" />
        <Tile
          v-else
          :player-index="playerIndex"
          :class="{ 'is-focused': isFocused(x, y) }"
        />
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
  outline: 0.4rem solid rgb(0, 242, 255);
}
</style>
