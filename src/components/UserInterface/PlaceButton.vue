<template>
  <button class="place-button">놓기</button>
</template>

<style scoped>
.place-button {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 1.5rem;

  border-radius: 0.75rem;

  border: 0.4rem solid rgb(208, 206, 206);
  background-color: rgb(219, 219, 219);

  color: white;
  font-size: 1.5rem;
  font-weight: 600;

  cursor: pointer;
}
.place-button:hover {
  filter: brightness(102%);
}
.place-button:active {
  filter: brightness(98%);
}
</style>
