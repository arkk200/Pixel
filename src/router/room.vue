<script setup lang="ts">
import Logo from "@src/components/common/Logo.vue";
import AppLayout from "@src/components/layouts/AppLayout.vue";
import RoomAction from "@src/components/pages/room/RoomAction.vue";
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
  <AppLayout>
    <Logo size="0.625rem" />
    <WaitingPlayerList />
    <RoomAction />
  </AppLayout>
</template>
