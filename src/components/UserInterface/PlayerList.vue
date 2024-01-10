<script setup lang="ts">
import Player from "./Player.vue";

// 플레이어는 2 ~ 4명
const PLAYERS = [
  { name: "James" },
  { name: "Jake" },
  { name: "John" },
  { name: "Jay" },
];
</script>

<template>
  <div class="player-list">
    <div
      v-for="(player, i) in PLAYERS"
      :key="player.name"
      :class="`player player-${i + 1}`"
    >
      <Player
        :name="player.name"
        profile-image="https://cdn.pixabay.com/photo/2020/04/04/09/55/cat-5001570_1280.jpg"
      />
    </div>
  </div>
</template>

<style>
.player-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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
</style>
