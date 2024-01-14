<script setup lang="ts">
import WaitingPlayer from "./WaitingPlayer.vue";

const PLAYER = 4;
const WAITING_PLAYER_LIST = [
  {
    id: 1,
    profileImage:
      "https://cdn.pixabay.com/photo/2020/04/04/09/55/cat-5001570_1280.jpg",
    name: "James",
  },
  {
    id: 2,
    profileImage:
      "https://cdn.pixabay.com/photo/2020/04/04/09/55/cat-5001570_1280.jpg",
    name: "Jake",
  },
  {
    id: 3,
    profileImage:
      "https://cdn.pixabay.com/photo/2020/04/04/09/55/cat-5001570_1280.jpg",
    name: "John",
  },
  // {
  //   id: 4,
  //   profileImage:
  //     "https://cdn.pixabay.com/photo/2020/04/04/09/55/cat-5001570_1280.jpg",
  //   name: "Jay",
  // },
];
</script>

<template>
  <div class="waiting-player-list">
    <div
      v-for="(_, i) in Array(PLAYER).fill(null)"
      :key="WAITING_PLAYER_LIST[i]?.id"
    >
      <WaitingPlayer
        v-if="Boolean(WAITING_PLAYER_LIST[i])"
        :name="WAITING_PLAYER_LIST[i].name"
        :profile-image="WAITING_PLAYER_LIST[i].profileImage"
      />
      <div v-else class="empty-spot"></div>
    </div>
  </div>
</template>

<style scoped>
.waiting-player-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.empty-spot {
  width: 14rem;
  height: 5.5rem;
  box-sizing: border-box;

  border-radius: 0.75rem;

  border: 0.3rem dashed #d6d6d6;
  background-color: #f8f8f8;
}
</style>
