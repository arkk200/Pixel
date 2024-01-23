<script setup lang="ts">
import LoadingIcon from "@src/components/icons/LoadingIcon.vue";
import { socket } from "@src/socket";
import { PlayerCount, State } from "@src/types";
import { Ref, ref } from "vue";
import { useStore } from "vuex";
import CloseIcon from "../../icons/CloseIcon.vue";

const store = useStore<State>();

const waitingPlayerCount: Ref<2 | 3 | 4 | null> = ref(null);

const joinRoom = (playerCount: PlayerCount) => {
  if (waitingPlayerCount.value) return;
  waitingPlayerCount.value = playerCount;
  socket.emit("quickJoin", { playerCount, playerName: store.state.playerName });
};

const beforeToggle = (event: ToggleEvent) => {
  if (event.newState === "closed") {
    waitingPlayerCount.value = null;
    socket.emit("leaveQuickJoin");
  }
};
</script>

<template>
  <div
    id="quick-join-modal"
    popover
    class="quick-join-modal"
    @beforetoggle="beforeToggle"
  >
    <p class="title">빠른 참가</p>
    <p class="player-number">플레이어 수</p>
    <div class="buttons">
      <button @click="joinRoom(2)">
        <span v-if="waitingPlayerCount === 2">
          <LoadingIcon />
        </span>
        <span v-else>2명</span>
      </button>
      <button @click="joinRoom(3)">
        <span v-if="waitingPlayerCount === 3">
          <LoadingIcon />
        </span>
        <span v-else>3명</span>
      </button>
      <button @click="joinRoom(4)">
        <span v-if="waitingPlayerCount === 4">
          <LoadingIcon />
        </span>
        <span v-else>4명</span>
      </button>
    </div>
    <button
      popovertarget="quick-join-modal"
      popovertargetaction="hide"
      class="close"
    >
      <CloseIcon class="close-icon" />
    </button>
  </div>
</template>

<style scoped>
.quick-join-modal {
  padding: 1.25rem;
  border-radius: 0.75rem;
  box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.4);
  margin: auto;
}

.quick-join-modal::backdrop {
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
  width: 4rem;
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
.buttons button span {
  display: flex;
  align-items: center;
  justify-content: center;
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
