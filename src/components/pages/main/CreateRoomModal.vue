<script setup lang="ts">
import CloseIcon from "../../icons/CloseIcon.vue";
</script>

<template>
  <div id="create-room-modal" popover class="create-room-modal">
    <p class="title">방 만들기</p>
    <p class="player-number">플레이어 수</p>
    <div class="buttons">
      <button>2명</button>
      <button>3명</button>
      <button>4명</button>
    </div>
    <button
      popovertarget="create-room-modal"
      popovertargetaction="hide"
      class="close"
    >
      <CloseIcon class="close-icon" />
    </button>
  </div>
</template>

<style scoped>
.create-room-modal {
  padding: 1.25rem;
  border-radius: 0.75rem;
  box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.4);
  margin: auto;
}

.create-room-modal::backdrop {
  background: rgb(0, 0, 0, 0.2);
}

.title {
  color: black;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
}

.player-number {
  margin-top: 1.3rem;
  color: black;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
}

.buttons {
  display: flex;
  gap: 1rem;
  margin-top: 0.8rem;
}

.buttons button {
  padding: 0.5rem 1rem;
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

.close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
.close-icon {
  width: 1.7rem;
  height: 1.7rem;
  color: rgb(206, 206, 206);
  cursor: pointer;
}
</style>
