<script setup lang="ts">
import CreateRoomModal from "@src/components/main/CreateRoomModal.vue";
import QuickJoinModal from "@src/components/main/QuickJoinModal.vue";
import { ref } from "vue";

const name = ref("");
</script>

<template>
  <div class="main">
    <div class="hero">
      <img src="/assets/pixel-board.png" class="board-image" />
      <p class="title">PIXEL.IO</p>
    </div>
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
    <QuickJoinModal id="quick-join-modal" popover />
    <CreateRoomModal id="create-room-modal" popover />
  </div>
</template>

<style scoped>
.main {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #00686e;
  box-shadow: inset 0 0 200px rgba(0, 0, 0, 0.9);
}
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.hero .board-image {
  width: 18rem;
  z-index: -2;
}
.hero .title {
  position: absolute;
  font-size: 4rem;
  font-weight: 900;
  background-image: url(/assets/wood.jpg);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #fff;
}
.hero .title::after {
  position: absolute;
  content: "PIXEL.IO";
  top: 0;
  left: 0;
  text-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.65);
  z-index: -1;
}

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
