<script setup lang="ts">
import { State } from "@src/types";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import PlaceButton from "./PlaceButton.vue";
import PlayerList from "./PlayerList.vue";

const router = useRouter();
const store = useStore<State>();

const clickExitButton = () => {
  store.state.gameData.isGameEnd = false;
  router.push("/");
};
</script>

<template>
  <div class="user-interface">
    <PlayerList />
    <PlaceButton />
    <button
      v-if="store.state.gameData.isGameEnd"
      class="exit-button"
      @click="clickExitButton"
    >
      나가기
    </button>
  </div>
</template>
<style scoped>
.user-interface {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.exit-button {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 0.75rem;

  border-radius: 0.375rem;

  border: 0.2rem solid rgb(206, 206, 206);
  background-color: rgb(219, 219, 219);

  color: white;
  font-size: 0.75rem;
  font-weight: 600;

  cursor: pointer;

  word-break: keep-all;
}
.exit-button:hover {
  filter: brightness(102%);
}
.exit-button:active {
  filter: brightness(98%);
}
</style>
