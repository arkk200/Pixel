<script setup lang="ts">
import { State } from "@src/types";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore<State>();

const isPlayerNameEmpty = computed(() => !store.state.playerName.length);
</script>

<template>
  <div class="form">
    <div class="player-name-form">
      <p class="player-name-label">이름</p>
      <input
        class="player-name-input"
        v-model="store.state.playerName"
        @input="e => {store.state.playerName = (e.target as HTMLInputElement).value.slice(0, 5)}"
      />
    </div>
    <div class="buttons">
      <button :disabled="isPlayerNameEmpty" popovertarget="quick-join-modal">
        빠른 참가
      </button>
      <button :disabled="isPlayerNameEmpty" popovertarget="create-room-modal">
        방 만들기
      </button>
    </div>
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
  width: 100%;
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
.buttons button:hover:not(:disabled) {
  filter: brightness(103%);
}
.buttons button:active:not(:disabled) {
  transform: translate(0.1rem, 0.1rem);
  box-shadow: 0.1rem 0.1rem 0.4rem 0.1rem rgba(0, 0, 0, 0.3);
}
.buttons button:disabled {
  filter: grayscale(100%);
  cursor: default;
}

.rule-video-link {
  color: white;
}
</style>
