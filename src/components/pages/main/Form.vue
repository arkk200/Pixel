<script setup lang="ts">
import { State } from "@src/types";
import { useStore } from "vuex";

const store = useStore<State>();
</script>

<template>
  <div class="form">
    <div class="player-name-form">
      <p class="player-name-label">이름</p>
      <input v-model="store.state.playerName" class="player-name-input" />
    </div>
    <div class="buttons">
      <button popovertarget="quick-join-modal">빠른 참가</button>
      <button popovertarget="create-room-modal">방 만들기</button>
    </div>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 15rem;
}

.player-name-form .player-name-label {
  color: white;
  margin-left: 0.7rem;
  font-size: 1rem;
  font-weight: 700;
}
.player-name-form .player-name-input {
  width: 100%;
  margin-top: 0.7rem;
  box-sizing: border-box;
  padding: 0.5rem;
  border: 0.175rem solid white;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
}

.buttons {
  display: flex;
  justify-content: space-between;
}
.buttons button {
  padding: 0.75rem 1rem;
  background-image: url(/assets/wood.jpg);
  box-shadow: 0.2rem 0.2rem 0.4rem 0.1rem rgba(0, 0, 0, 0.3);
  color: white;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
}
.buttons button:hover {
  filter: brightness(103%);
}
.buttons button:active {
  transform: translate(0.1rem, 0.1rem);
  box-shadow: 0.1rem 0.1rem 0.4rem 0.1rem rgba(0, 0, 0, 0.3);
}
</style>
