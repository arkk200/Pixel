<script setup lang="ts">
import Logo from "@src/components/common/Logo.vue";
import AppLayout from "@src/components/layouts/AppLayout.vue";
import CreateRoomModal from "@src/components/pages/main/CreateRoomModal.vue";
import Form from "@src/components/pages/main/Form.vue";
import QuickJoinModal from "@src/components/pages/main/QuickJoinModal.vue";
</script>

<template>
  <AppLayout class="layout">
    <Logo :size="16" />
    <Form />
    <QuickJoinModal />
    <CreateRoomModal />
  </AppLayout>
</template>

<style scoped>
.layout {
  flex-direction: column;
}
</style>
