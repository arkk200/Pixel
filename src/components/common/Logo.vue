<script setup lang="ts">
const { size = 16 } = defineProps<{ size?: number }>();
</script>

<template>
  <div class="logo" :style="{ fontSize: `${size}px` }">
    <img src="/assets/pixel-board.png" class="logo-image" />
    <p class="logo-title"><span>PIXEL.IO</span></p>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.logo-image {
  width: 18em;
}
.logo-title {
  position: absolute;
  font-size: 4em;
  font-weight: 900;
}
.logo-title span {
  position: relative;
  background-image: url(/assets/wood.jpg);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.logo-title::before {
  position: absolute;
  content: "PIXEL.IO";
  top: 0;
  left: 0;
  mix-blend-mode: hard-light;
  text-shadow: 0 0 0.6em rgba(0, 0, 0, 0.65);
}
</style>
