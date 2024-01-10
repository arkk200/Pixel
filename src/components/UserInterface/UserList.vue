<script setup lang="ts">
// 플레이어는 2 ~ 4명
const PLAYERS = [
  { name: "James" },
  { name: "Jake" },
  { name: "John" },
  { name: "Jay" },
];
</script>

<template>
  <div class="user-list">
    <div
      v-for="(player, i) in PLAYERS"
      :key="player.name"
      :class="`player player-${i + 1}`"
    >
      <div class="profile">
        <img
          class="profile-image"
          src="https://cdn.pixabay.com/photo/2020/04/04/09/55/cat-5001570_1280.jpg"
        />
        <p class="name">{{ player.name }}</p>
      </div>
      <p class="time">10:00</p>
    </div>
  </div>
</template>

<style>
.user-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.player {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 18rem;
  padding: 1rem 1.5rem;

  border-radius: 0.75rem;
}
.player.player-1 {
  border: 0.4rem solid rgb(237, 87, 0);
  background-color: rgb(255, 98, 0);
}
.player.player-2 {
  border: 0.4rem solid rgb(238, 222, 1);
  background-color: rgb(253, 236, 0);
}
.player.player-3 {
  border: 0.4rem solid rgb(1, 210, 32);
  background-color: rgb(0, 230, 12);
}
.player.player-4 {
  border: 0.4rem solid rgb(0, 150, 226);
  background-color: rgb(0, 166, 255);
}

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
  color: white;
  font-size: 2rem;
  max-width: 9rem;
  padding: 0.5rem 0;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 600;
}
.time {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
