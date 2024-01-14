<script setup lang="ts"></script>

<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style scoped>
.layout {
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
</style>
