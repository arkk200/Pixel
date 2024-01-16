<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import CloseIcon from "../../icons/CloseIcon.vue";
defineProps<{ onConfirm(): void }>();

const emit = defineEmits<{ (e: "confirm"): void }>();
</script>

<template>
  <VueFinalModal>
    <div class="backdrop">
      <div class="game-over-modal">
        <p class="message">누군가가<br />게임을 나갔습니다.</p>
        <button class="close" @click="emit('confirm')">
          <CloseIcon class="close-icon" />
        </button>
      </div></div
  ></VueFinalModal>
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
  padding: 1.25rem;
  border-radius: 0.75rem;
  background-color: white;
  box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.4);
}

.message {
  color: black;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 120%;
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
