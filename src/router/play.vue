<script setup lang="ts">
import AppLayout from "@src/components/layouts/AppLayout.vue";
import Board from "@src/components/play/Board/Board.vue";
import UserInterface from "@src/components/play/UserInterface/UserInterface.vue";
</script>

<template>
  <AppLayout>
    <Board />
    <UserInterface class="user-interface" />
  </AppLayout>
</template>

<style scoped>
.user-interface {
  margin-left: 6rem;
}
</style>
