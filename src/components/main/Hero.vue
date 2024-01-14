<script setup lang="ts"></script>

<template>
  <div class="hero">
    <img src="/assets/pixel-board.png" class="board-image" />
    <p class="title">PIXEL.IO</p>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.hero .board-image {
  width: 18rem;
  z-index: -2;
}
.hero .title {
  position: absolute;
  font-size: 4rem;
  font-weight: 900;
  background-image: url(/assets/wood.jpg);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #fff;
}
.hero .title::after {
  position: absolute;
  content: "PIXEL.IO";
  top: 0;
  left: 0;
  text-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.65);
  z-index: -1;
}
</style>
