<script setup lang="ts">
import Logo from "@src/components/common/Logo.vue";
import AppLayout from "@src/components/layouts/AppLayout.vue";
import JoinForm from "@src/components/pages/join/JoinForm.vue";
</script>

<template>
  <AppLayout flex-direction="column">
    <Logo size="1rem" />
    <JoinForm />
  </AppLayout>
</template>
