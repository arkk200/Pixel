<script setup lang="ts">
import SideSlider from "./SideSlider.vue";
import Tiles from "./Tiles.vue";
import TopSlider from "./TopSlider.vue";
</script>

<template>
  <div class="container">
    <TopSlider class="top-slider" />
    <Tiles class="tiles" />
    <SideSlider class="side-slider" />
  </div>
</template>

<style scoped>
.container {
  background-color: white;
  box-shadow: 0.09375rem 0.09375rem 3.125rem 0.03125rem rgba(77, 71, 71, 0.5);
  width: min-content;
  border-radius: 3rem;
  display: grid;
  grid-template-rows: 3rem min-content 3rem;
  grid-template-columns: 3rem min-content 3rem;
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
