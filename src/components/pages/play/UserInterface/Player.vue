<script setup lang="ts">
const { playerName, profileImage, remainSeconds, isPlayerTurn, order } =
  defineProps<{
    playerName: string;
    profileImage: string;
    isPlayerTurn: boolean;
    order: 1 | 2 | 3 | 4;
    remainSeconds: number;
  }>();

console.log(remainSeconds);
</script>

<template>
  <div
    class="player"
    :class="[`player-${order}`, { 'is-player-turn': isPlayerTurn }]"
  >
    <p class="time" :class="{ 'is-player-turn': isPlayerTurn }">
      {{
        Math.floor(remainSeconds / 60)
          .toString()
          .padStart(2, "0")
      }}:{{ (remainSeconds % 60).toString().padStart(2, "0") }}
    </p>
    <div class="profile">
      <img class="profile-image" :src="profileImage" />
      <p class="name">{{ playerName }}</p>
    </div>
  </div>
</template>

<style scoped>
.player {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 18rem;
  min-height: 6.75rem;
  padding: 0 2rem;
  box-sizing: border-box;

  border-radius: 0.75rem;
  border-width: 0.4rem;
  border-style: solid;
}
.player-1 {
  border-color: #ed5700;
  background-color: #ff6200;
}
.player-2 {
  border-color: #eede01;
  background-color: #f9e902;
}
.player-3 {
  border-color: #01d220;
  background-color: #00e60c;
}
.player-4 {
  border-color: #0096e2;
  background-color: #00a6ff;
}

.profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.profile-image {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
.name {
  padding: 0.5rem 0;

  overflow: hidden;
  text-overflow: ellipsis;

  color: white;
  font-size: 2rem;
  font-weight: 600;
}
.time {
  position: absolute;

  display: flex;
  justify-content: center;

  width: 6rem;

  padding: 0.15rem 0;

  top: -1.5rem;
  left: 50%;
  transform: translate(-50%);
  border-radius: 0.4rem;

  color: white;
  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;

  box-sizing: border-box;
}

.player-1 .time {
  border: 0.4rem solid #ed5700;
  background-color: #ff6200;
}
.player-2 .time {
  border: 0.4rem solid #eede01;
  background-color: #f9e902;
}
.player-3 .time {
  border: 0.4rem solid #01d220;
  background-color: #00e60c;
}
.player-4 .time {
  border: 0.4rem solid #0096e2;
  background-color: #00a6ff;
}

.is-player-turn {
  outline: 0.2rem solid;
  animation: pulsating-outline 2s infinite;
  animation: name duration timing-function delay iteration-count direction
    fill-mode;
}

@keyframes pulsating-outline {
  from {
    outline-color: rgba(255, 255, 255, 0);
  }
  50% {
    outline-color: rgba(255, 255, 255, 1);
  }
  to {
    outline-color: rgba(255, 255, 255, 0);
  }
}
</style>
