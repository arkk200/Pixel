<script setup lang="ts">
import Logo from "@src/components/common/Logo.vue";
import AppLayout from "@src/components/layouts/AppLayout.vue";

// 소켓 연결
</script>

<template>
  <AppLayout>
    <div class="room">
      <Logo :size="10" />
    </div>
  </AppLayout>
</template>

<style scoped>
.room {
  padding: 3rem 6rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.4);
}
</style>
