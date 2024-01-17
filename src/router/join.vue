<script setup lang="ts">
import Logo from "@src/components/common/Logo.vue";
import AppLayout from "@src/components/layouts/AppLayout.vue";
import JoinForm from "@src/components/pages/join/JoinForm.vue";
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.params.roomId);
</script>

<template>
  <AppLayout>
    <Logo :size="16" />
    <JoinForm />
  </AppLayout>
</template>
