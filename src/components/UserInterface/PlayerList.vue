<script setup lang="ts">
import { key } from "@src/stores";
import { ref, watch } from "vue";
import { useStore } from "vuex";
import Player from "./Player.vue";

const store = useStore(key);
const { playerList } = store.state;

const whoseTurn = ref(0);
watch(store.state, (newState) => {
  whoseTurn.value = newState.whoseTurn;
});
</script>

<template>
  <div class="player-list">
    <div v-for="(player, i) in playerList" :key="player.name">
      <Player
        :name="player.name"
        profile-image="https://cdn.pixabay.com/photo/2020/04/04/09/55/cat-5001570_1280.jpg"
        :is-player-turn="i === whoseTurn"
        :class="`player player-${i + 1}`"
      />
    </div>
  </div>
</template>

<style>
.player-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.player {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 18rem;
  min-height: 6.75rem;
  padding: 1rem 2rem;
  box-sizing: border-box;

  border-radius: 0.75rem;
}
.player.player-1 {
  border: 0.4rem solid #ed5700;
  background-color: #ff6200;
}
.player.player-2 {
  border: 0.4rem solid #eede01;
  background-color: #f9e902;
}
.player.player-3 {
  border: 0.4rem solid #01d220;
  background-color: #00e60c;
}
.player.player-4 {
  border: 0.4rem solid #0096e2;
  background-color: #00a6ff;
}
</style>
