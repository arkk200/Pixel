<script setup lang="ts">
import Tiles from "./Tiles.vue";
import TopSlider from "./TopSlider.vue";
</script>

<template>
  <div class="container">
    <TopSlider class="top-slider" />
    <Tiles class="tiles" />
    <div class="side-slider"></div>
  </div>
</template>

<style scoped>
.container {
  background-color: white;
  box-shadow: 3px 3px 100px 1px rgba(77, 71, 71, 0.5);
  width: min-content;
  border-radius: 6rem;
  display: grid;
  grid-template-rows: 6rem min-content 6rem;
  grid-template-columns: 6rem min-content 6rem;
  align-items: center;
  justify-content: center;
}
.tiles {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
}
.top-slider {
  grid-column: 2 / 3;
}
.side-slider {
  grid-row: 2 / 3;
  grid-column: 3 / 4;
}
</style>
