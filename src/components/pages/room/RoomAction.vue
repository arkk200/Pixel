<script setup lang="ts">
import LinkIcon from "@src/components/icons/LinkIcon.vue";
import PlayIcon from "@src/components/icons/PlayIcon.vue";
import { socket } from "@src/socket";
import { State } from "@src/types";
import { computed } from "vue";
import { toast } from "vue3-toastify";
import { useStore } from "vuex";

const store = useStore<State>();
const isHost = computed(
  () => store.state.roomData.playerList[0].socketID === socket.id
);

const copyInviteLink = async () => {
  await navigator.clipboard.writeText(
    `http://localhost:5173/join/${store.state.roomData.roomID}`
  );
  toast.success("복사 완료!");
};
</script>

<template>
  <div class="buttons">
    <button @click="copyInviteLink">
      <LinkIcon class="icon" />
      <span>초대</span>
    </button>
    <button v-if="isHost">
      <PlayIcon class="icon" />
      <span>시작</span>
    </button>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
}
.buttons button {
  position: relative;

  display: flex;
  align-items: center;

  padding: 1rem;
  border-radius: 0.5rem;

  background-image: url(/assets/wood.jpg);

  color: white;
  font-size: 1.5rem;
  font-weight: 600;

  box-shadow: 0.2rem 0.2rem 0.4rem 0.1rem rgba(0, 0, 0, 0.3);

  word-break: keep-all;
}

.buttons button .icon {
  width: 2rem;
}

.buttons button span {
  width: 4rem;
}

.buttons button:hover {
  filter: brightness(103%);
}
.buttons button:active {
  transform: translate(0.1rem, 0.1rem);
  box-shadow: 0.1rem 0.1rem 0.4rem 0.1rem rgba(0, 0, 0, 0.3);
}
</style>
