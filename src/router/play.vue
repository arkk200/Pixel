<script setup lang="ts">
import Board from "@src/components/play/Board/Board.vue";
import UserInterface from "@src/components/play/UserInterface/UserInterface.vue";
</script>

<template>
  <div class="play">
    <Board />
    <UserInterface class="user-interface" />
  </div>
</template>

<style scoped>
.play {
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100vh;
  padding: 0 6rem;
  margin: 0 auto;
}
.user-interface {
  margin-left: 6rem;
}
</style>
