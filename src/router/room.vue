<script setup lang="ts">
import Logo from "@src/components/common/Logo.vue";
import AppLayout from "@src/components/layouts/AppLayout.vue";
import RoomButtons from "@src/components/pages/room/RoomButtons.vue";
import WaitingPlayerList from "@src/components/pages/room/WaitingPlayerList.vue";
import { socket } from "@src/socket";
import { State } from "@src/types";
import { onUnmounted } from "vue";
import { useStore } from "vuex";

const store = useStore<State>();

onUnmounted(() => {
  store.state.isInRoom = false;
  socket.emit("leaveRoom");
});
</script>

<template>
  <AppLayout flex-direction="column">
    <Logo size="0.625rem" />
    <WaitingPlayerList />
    <RoomButtons />
  </AppLayout>
</template>
