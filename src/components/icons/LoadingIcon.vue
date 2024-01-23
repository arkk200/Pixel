<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    class="loading"
  >
    <path
      fill-rule="evenodd"
      d="M 5.404 4.343 C 5.696 4.636 5.696 5.11 5.404 5.403 C 1.866 8.941 3.484 14.983 8.317 16.278 C 13.151 17.573 17.573 13.151 16.279 8.317 C 15.983 7.215 15.403 6.21 14.596 5.403 C 14.174 5.009 14.336 4.306 14.888 4.137 C 15.162 4.053 15.46 4.133 15.656 4.343 C 20.011 8.697 18.019 16.133 12.071 17.727 C 6.122 19.322 0.678 13.879 2.272 7.93 C 2.635 6.573 3.35 5.336 4.343 4.343 C 4.636 4.051 5.11 4.051 5.403 4.343 L 5.404 4.343 Z"
      clip-rule="evenodd"
    />
  </svg>
</template>

<style scoped>
.loading {
  width: 1.5rem;
  animation: rotate 1.5s linear infinite;
}
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
