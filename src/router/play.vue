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
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: min-content;
  height: 100%;
  min-height: 100vh;

  margin: 0 auto;
  padding: 3rem 6rem;

  background-color: #00686e;
  box-shadow: inset 0 0 200px rgba(0, 0, 0, 0.9);
}
.user-interface {
  margin-left: 6rem;
}
</style>
