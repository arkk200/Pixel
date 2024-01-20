<script setup lang="ts">
import { color } from "@src/styles/theme";

const { playerIndex } = defineProps<{ playerIndex: -2 | -1 | 0 | 1 | 2 | 3 }>();
</script>

<template>
  <div class="tile">
    <div
      class="hole"
      :class="{
        [`player-${playerIndex}-hole`]: playerIndex !== -1,
        'player-hole': playerIndex !== -1,
      }"
    ></div>
  </div>
</template>

<style scoped>
.tile {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}
.hole {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  box-shadow: inset 0.09375rem 0.09375rem 0.25rem 0.03125rem rgb(77, 71, 71);
}
.player-hole {
  box-shadow: 0.09375rem 0.09375rem 0.25rem 0.03125rem rgb(77, 71, 71);
}
.player-0-hole {
  background-color: v-bind("color.player1.primary");
}
.player-1-hole {
  background-color: v-bind("color.player2.primary");
}
.player-2-hole {
  background-color: v-bind("color.player3.primary");
}
.player-3-hole {
  background-color: v-bind("color.player4.primary");
}
</style>
