<script setup lang="ts">
import { State } from "@src/types";
import { computed } from "vue";
import { useStore } from "vuex";
import Player from "./Player.vue";

const store = useStore<State>();

const gameData = computed(() => store.state.gameData);
</script>

<template>
  <div class="player-list">
    <div v-for="(player, i) in gameData.playerList" :key="player.socketID">
      <Player
        :playerName="player.playerName"
        profile-image="https://cdn.pixabay.com/photo/2020/04/04/09/55/cat-5001570_1280.jpg"
        :is-player-turn="i === gameData.whoseTurn"
        :order="((i + 1) as (1 | 2 | 3 | 4))"
        :remainSeconds="player.remainSeconds"
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
