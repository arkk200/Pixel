<script setup lang="ts">
const { name, profileImage } = defineProps<{
  name: string;
  profileImage: string;
}>();
</script>

<template>
  <div class="waiting-player">
    <img class="profile-image" :src="profileImage" />
    <p class="name">{{ name }}</p>
  </div>
</template>

<style scoped>
.waiting-player {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  width: 14rem;
  height: 5.5rem;
  padding: 0 1.5rem;
  box-sizing: border-box;

  border-radius: 0.75rem;

  border: 0.3rem solid #d6d6d6;
  background-color: #e4e4e4;
}
.profile-image {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
.name {
  padding: 0.5rem 0;

  overflow: hidden;
  text-overflow: ellipsis;

  color: white;
  font-size: 1.6rem;
  font-weight: 600;
}
</style>
