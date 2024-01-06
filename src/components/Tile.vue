<script setup lang="ts"></script>

<template>
  <div class="tile">
    <div class="hole"></div>
  </div>
</template>

<style scoped>
.tile {
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}
.hole {
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  box-shadow: inset 3px 3px 8px 1px rgb(77, 71, 71);
}
</style>
