<script setup lang="ts">
import { color } from "@src/styles/theme";

const { playerIndex } = defineProps<{ playerIndex: -2 | -1 | 0 | 1 | 2 | 3 }>();
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
  background-color: v-bind("color.player1.primary");
  box-shadow: 3px 3px 8px 1px rgb(77, 71, 71);
}
.player-1-hole {
  background-color: v-bind("color.player2.primary");
  box-shadow: 3px 3px 8px 1px rgb(77, 71, 71);
}
.player-2-hole {
  background-color: v-bind("color.player3.primary");
  box-shadow: 3px 3px 8px 1px rgb(77, 71, 71);
}
.player-3-hole {
  background-color: v-bind("color.player4.primary");
  box-shadow: 3px 3px 8px 1px rgb(77, 71, 71);
}
</style>
