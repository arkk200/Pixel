<script setup lang="ts">
import { CSSProperties } from "vue";

const { size = 16 } = defineProps<{ size?: CSSProperties["font-size"] }>();
</script>

<template>
  <div class="logo" :style="{ fontSize: size }">
    <img src="/assets/pixel-logo.png" class="logo-image" />
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
  width: 21.5em;
}
</style>
