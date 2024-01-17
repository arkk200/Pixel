<script setup lang="ts">
import { State } from "@src/types";
import { computed } from "vue";
import { useStore } from "vuex";
import WaitingPlayer from "./WaitingPlayer.vue";

const store = useStore<State>();

const playerCount = computed(() => store.state.roomData.playerCount);
const waitingPlayerList = computed(() => store.state.roomData.playerList);
</script>

<template>
  <div class="waiting-player-list">
    <div v-for="(_, i) in Array(playerCount).fill(null)" :key="i">
      <WaitingPlayer
        v-if="Boolean(waitingPlayerList[i])"
        :player-name="waitingPlayerList[i].playerName"
        :profile-image="`https://cdn.pixabay.com/photo/2020/04/04/09/55/cat-5001570_1280.jpg`"
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
