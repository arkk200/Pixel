<script setup lang="ts">
import EmptyTile from "./EmptyTile.vue";
import Tile from "./Tile.vue";
</script>

<template>
  <div class="tiles">
    <div class="row" v-for="(_, x) in Array(8)">
      <div v-for="(_, y) in Array(8)">
        <EmptyTile v-if="(x === 0 || x === 7) && (y === 0 || y === 7)" />
        <Tile v-else :x="x" :y="y" />
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
</style>
