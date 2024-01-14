<script setup lang="ts">
import AppLayout from "@src/components/layouts/AppLayout.vue";
import CreateRoomModal from "@src/components/main/CreateRoomModal.vue";
import Form from "@src/components/main/Form.vue";
import Hero from "@src/components/main/Hero.vue";
import QuickJoinModal from "@src/components/main/QuickJoinModal.vue";
</script>

<template>
  <AppLayout class="layout">
    <Hero />
    <Form />
    <QuickJoinModal id="quick-join-modal" popover />
    <CreateRoomModal id="create-room-modal" popover />
  </AppLayout>
</template>

<style scoped>
.layout {
  position: absolute;
  flex-direction: column;
  z-index: 0;
}
</style>
