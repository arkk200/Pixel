<script setup lang="ts">
const { playerIndex } = defineProps<{ playerIndex: -1 | 0 | 1 | 2 | 3 }>();
console.log(playerIndex);
</script>

<template>
  <div class="tile">
    <div
      class="hole"
      :class="{ [`player-${playerIndex}-hole`]: playerIndex !== -1 }"
    ></div>
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
.player-0-hole {
  background-color: #ff6200;
  box-shadow: 3px 3px 8px 1px rgb(77, 71, 71);
}
.player-1-hole {
  background-color: #f9e902;
  box-shadow: 3px 3px 8px 1px rgb(77, 71, 71);
}
.player-2-hole {
  background-color: #00e60c;
  box-shadow: 3px 3px 8px 1px rgb(77, 71, 71);
}
.player-3-hole {
  background-color: #00a6ff;
  box-shadow: 3px 3px 8px 1px rgb(77, 71, 71);
}
</style>
