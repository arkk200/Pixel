<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
</script>

<template>
  <div class="form">
    <div class="nickname-form">
      <p class="nickname-label">닉네임</p>
      <input v-model="name" class="nickname-input" />
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
.form .nickname-form .nickname-label {
  color: white;
  margin-left: 0.7rem;
  font-size: 1rem;
  font-weight: 700;
}
.form .nickname-form .nickname-input {
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
.form .buttons {
  display: flex;
  justify-content: space-between;
}
.form .buttons button {
  padding: 0.75rem 1rem;
  background-image: url(/assets/wood.jpg);
  box-shadow: 0.2rem 0.2rem 0.4rem 0.1rem rgba(0, 0, 0, 0.3);
  color: white;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
}
</style>
