<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import CloseIcon from "../../icons/CloseIcon.vue";

const { profileImage, playerName } = defineProps<{
  profileImage?: string;
  playerName?: string;
  onConfirm(): void;
}>();

const emit = defineEmits<{ (e: "confirm"): void }>();
</script>

<template>
  <VueFinalModal>
    <div class="backdrop">
      <div class="game-over-modal">
        <p class="lose-message">{{ playerName }} 패</p>
        <img class="profile-image" :src="profileImage" />
        <button class="close" @click="emit('confirm')">
          <CloseIcon class="close-icon" />
        </button>
      </div>
    </div>
  </VueFinalModal>
</template>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0, 0, 0, 0.2);
}

.game-over-modal {
  position: relative;
  margin: auto;
  padding: 0.9rem 2.75rem;
  border-radius: 0.75rem;
  background-color: white;
  box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.4);
}

.lose-message {
  color: black;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
}
.profile-image {
  width: 4rem;
  height: 4rem;
  margin-top: 0.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
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
