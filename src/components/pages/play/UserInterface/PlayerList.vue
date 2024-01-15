<script setup lang="ts">
import { ref, watch } from "vue";
import { useStore } from "vuex";
import Player from "./Player.vue";

const store = useStore();
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
        :order="((i + 1) as (1 | 2 | 3 | 4))"
      />
    </div>
  </div>
</template>

<style>
.player-list {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}
</style>
