<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
</script>

<template>
  <div class="form">
    <p class="invite-message">James의 방에 초대되었습니다.</p>
    <div class="nickname-form">
      <p class="nickname-label">닉네임</p>
      <input v-model="name" class="nickname-input" />
    </div>
    <button class="join-button">참가하기</button>
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

.nickname-form .nickname-label {
  color: white;
  margin-left: 0.7rem;
  font-size: 1rem;
  font-weight: 700;
}
.nickname-form .nickname-input {
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
.join-button:hover {
  filter: brightness(103%);
}
.join-button:active {
  transform: translate(0.1rem, 0.1rem);
  box-shadow: 0.1rem 0.1rem 0.4rem 0.1rem rgba(0, 0, 0, 0.3);
}
</style>
