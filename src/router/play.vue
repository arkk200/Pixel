<script setup lang="ts">
import AppLayout from "@src/components/layouts/AppLayout.vue";
import Board from "@src/components/pages/play/Board/Board.vue";
import UserInterface from "@src/components/pages/play/UserInterface/UserInterface.vue";
import { socket } from "@src/socket";
import { State } from "@src/types";
import { onUnmounted } from "vue";
import { useStore } from "vuex";

const store = useStore<State>();
onUnmounted(() => {
  store.state.isInGame = false;
  socket.emit("leaveGame");
});
</script>

<template>
  <AppLayout flex-direction="row">
    <Board />
    <UserInterface class="user-interface" />
  </AppLayout>
</template>

<style scoped>
.user-interface {
  margin-left: 6rem;
}
</style>
