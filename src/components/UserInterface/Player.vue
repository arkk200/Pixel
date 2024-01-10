<script setup lang="ts">
const { name, profileImage } = defineProps<{
  name: string;
  profileImage: string;
}>();
</script>

<template>
  <div class="profile">
    <img class="profile-image" :src="profileImage" />
    <p class="name">{{ name }}</p>
  </div>
  <p class="time">10:00</p>
</template>

<style scoped>
.profile {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.profile-image {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
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
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
