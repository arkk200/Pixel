<script setup lang="ts">
import { color } from "@src/styles/theme";
const { playerName, profileImage, remainSeconds, isPlayerTurn, order } =
  defineProps<{
    playerName: string;
    profileImage: string;
    isPlayerTurn: boolean;
    order: 1 | 2 | 3 | 4;
    remainSeconds: number;
  }>();
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

  width: 9rem;
  min-height: 3.375rem;
  padding: 0 1rem;
  box-sizing: border-box;

  border-radius: 0.374rem;
  border-width: 0.2rem;
  border-style: solid;
}
.player-1 {
  border-color: v-bind("color.player1.secondary");
  background-color: v-bind("color.player1.primary");
}
.player-2 {
  border-color: v-bind("color.player2.secondary");
  background-color: v-bind("color.player2.primary");
}
.player-3 {
  border-color: v-bind("color.player3.secondary");
  background-color: v-bind("color.player3.primary");
}
.player-4 {
  border-color: v-bind("color.player4.secondary");
  background-color: v-bind("color.player4.primary");
}

.profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.profile-image {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
.name {
  padding: 0.25rem 0;

  overflow: hidden;
  text-overflow: ellipsis;

  color: white;
  font-size: 1rem;
  font-weight: 600;
}
.time {
  position: absolute;

  display: flex;
  justify-content: center;

  width: 3rem;

  padding: 0.075rem 0;

  top: -0.75rem;
  left: 50%;
  transform: translate(-50%);
  border-radius: 0.2rem;

  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;

  box-sizing: border-box;
}

.player-1 .time {
  border: 0.2rem solid v-bind("color.player1.secondary");
  background-color: v-bind("color.player1.primary");
}
.player-2 .time {
  border: 0.2rem solid v-bind("color.player2.secondary");
  background-color: v-bind("color.player2.primary");
}
.player-3 .time {
  border: 0.2rem solid v-bind("color.player3.secondary");
  background-color: v-bind("color.player3.primary");
}
.player-4 .time {
  border: 0.2rem solid v-bind("color.player4.secondary");
  background-color: v-bind("color.player4.primary");
}

.is-player-turn {
  outline: 0.1rem solid;
  animation: pulsating-outline 2s infinite;
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
