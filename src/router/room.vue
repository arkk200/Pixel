<script setup lang="ts">
import Logo from "@src/components/common/Logo.vue";
import AppLayout from "@src/components/layouts/AppLayout.vue";
import RoomAction from "@src/components/pages/room/RoomAction.vue";
import WaitingPlayerList from "@src/components/pages/room/WaitingPlayerList.vue";
</script>

<template>
  <AppLayout>
    <Logo :size="10" />
    <WaitingPlayerList />
    <RoomAction />
  </AppLayout>
</template>
