<script setup lang="ts">
const { name, profileImage } = defineProps<{
  name: string;
  profileImage: string;
  isPlayerTurn: boolean;
}>();
</script>

<template>
  <p v-if="isPlayerTurn" class="time">10:00</p>
  <div v-else class="profile">
    <img class="profile-image" :src="profileImage" />
    <p class="name">{{ name }}</p>
  </div>
</template>

<style scoped>
.profile-image {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
.name {
  max-width: 9rem;
  padding: 0.5rem 0;

  overflow: hidden;
  text-overflow: ellipsis;

  color: white;
  font-size: 2rem;
  font-weight: 600;
}
.time {
  display: flex;
  justify-content: center;
  color: white;
  font-size: 2.25rem;
  font-weight: 600;
}
</style>
