<script setup lang="ts">
import AppLayout from "@src/components/layouts/AppLayout.vue";
import Board from "@src/components/pages/play/Board/Board.vue";
import UserInterface from "@src/components/pages/play/UserInterface/UserInterface.vue";
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
