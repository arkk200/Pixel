<script setup lang="ts">
import { color } from "@src/styles/theme";
import AppLayout from "@src/components/layouts/AppLayout.vue";
import Board from "@src/components/pages/play/Board/Board.vue";
import UserInterface from "@src/components/pages/play/UserInterface/UserInterface.vue";
import { socket } from "@src/socket";
import { State } from "@src/types";
import { onUnmounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore<State>();

const gameData = computed(() => store.state.gameData);

onUnmounted(() => {
  store.state.isInGame = false;
  socket.emit("leaveGame");
});
</script>

<template>
  <AppLayout flex-direction="column" gap="2rem 3rem">
    <div
      :class="[
        'current-turn-indicated-box',
        `indicated-box-${gameData.whoseTurn}`,
      ]"
    >
      {{ gameData.playerList[gameData.whoseTurn].playerName }} 차례입니다
    </div>
    <div class="board-box">
      <Board />
      <UserInterface class="user-interface" />
    </div>
  </AppLayout>
</template>

<style scoped>
.board-box {
  display: flex;
  gap: 3rem;
}
.current-turn-indicated-box {
  padding: 14px 18px;
  font-size: 18px;
  font-weight: 700;
  color: white;
  border-radius: 10px;
}
.indicated-box-0 {
  background-color: v-bind("color.player1.primary");
}
.indicated-box-1 {
  background-color: v-bind("color.player2.primary");
}
.indicated-box-2 {
  background-color: v-bind("color.player3.primary");
}
.indicated-box-3 {
  background-color: v-bind("color.player4.primary");
}
/* .is-my-turn {
  border-style: solid;
} */
</style>
