<script setup lang="ts">
import { CSSProperties } from "vue";

const props = defineProps<{
  flexDirection?: CSSProperties["flex-direction"];
  gap?: CSSProperties["gap"];
}>();
</script>

<template>
  <div class="layout" :style="{ gap }">
    <slot />
  </div>
</template>

<style scoped>
.layout {
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: v-bind("props.flexDirection");

  width: 100%;
  min-width: min-content;
  height: 100%;
  min-height: 100vh;

  margin: 0 auto;
  padding: 1.5rem 3rem;

  background-color: #00686e;
  box-shadow: inset 0 0 12.5rem rgba(0, 0, 0, 0.9);
}

@media (max-width: 480px) {
  .layout {
    flex-direction: column;
  }
}
</style>
