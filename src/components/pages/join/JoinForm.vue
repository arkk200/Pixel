<script setup lang="ts">
import { socket } from "@src/socket";
import { State } from "@src/types";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore<State>();
const route = useRoute();

const joinRoom = () => {
  socket.emit("joinRoom", {
    roomID: route.params.roomID,
    playerName: store.state.playerName,
  });
};
</script>

<template>
  <div class="form">
    <p class="invite-message">방에 초대되었습니다.</p>
    <div class="player-name-form">
      <p class="player-name-label">이름</p>
      <input
        class="player-name-input"
        v-model="store.state.playerName"
        @input="e => {store.state.playerName = (e.target as HTMLInputElement).value.slice(0, 5)}"
      />
    </div>
    <button
      :disabled="!store.state.playerName.length"
      class="join-button"
      @click="joinRoom"
    >
      참가하기
    </button>
    <a
      class="rule-video-link"
      href="https://youtu.be/NTtyd3CVp5o?si=Cjn6rgCkz6t-KClT"
      target="_blank"
    >
      플레이 하는 법
    </a>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.invite-message {
  font-size: 1.5rem;
  color: white;
  font-weight: 600;
}

.player-name-form .player-name-label {
  color: white;
  margin-left: 0.7rem;
  font-size: 1rem;
  font-weight: 700;
}
.player-name-form .player-name-input {
  width: 15rem;
  margin-top: 0.7rem;
  box-sizing: border-box;
  padding: 0.5rem;
  border: 0.175rem solid white;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
}

.join-button {
  width: 15rem;
  padding: 0.75rem 1rem;
  background-image: url(/assets/wood.jpg);
  box-shadow: 0.2rem 0.2rem 0.4rem 0.1rem rgba(0, 0, 0, 0.3);
  color: white;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
}
.join-button:hover:not(:disabled) {
  filter: brightness(103%);
}
.join-button:active:not(:disabled) {
  transform: translate(0.1rem, 0.1rem);
  box-shadow: 0.1rem 0.1rem 0.4rem 0.1rem rgba(0, 0, 0, 0.3);
}
.join-button:disabled {
  filter: grayscale(100%);
  cursor: default;
}

.rule-video-link {
  color: white;
}
</style>
