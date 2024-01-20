<script setup lang="ts">
import PlaceButton from "./PlaceButton.vue";
import PlayerList from "./PlayerList.vue";
</script>

<template>
  <div class="user-interface">
    <PlayerList />
    <PlaceButton />
  </div>
</template>
<style scoped>
.user-interface {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
