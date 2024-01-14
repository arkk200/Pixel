<script setup lang="ts">
const { name, profileImage } = defineProps<{
  name: string;
  profileImage: string;
  isPlayerTurn: boolean;
}>();
</script>

<template>
  <div class="player">
    <p v-if="isPlayerTurn" class="time">10:00</p>
    <div v-else class="profile">
      <img class="profile-image" :src="profileImage" />
      <p class="name">{{ name }}</p>
    </div>
  </div>
</template>

<style scoped>
.player {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18rem;
  min-height: 6.75rem;
  padding: 0 2rem;
  box-sizing: border-box;

  border-radius: 0.75rem;
}
.profile {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 18rem;
}
.profile-image {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
.name {
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
