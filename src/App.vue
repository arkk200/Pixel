<script setup lang="ts">
import Board from "./components/Board/Board.vue";
import UserInterface from "./components/UserInterface/UserInterface.vue";
</script>

<template>
  <Board />
  <UserInterface class="user-interface" />
</template>

<style scoped>
.user-interface {
  margin-left: 2rem;
}
</style>
