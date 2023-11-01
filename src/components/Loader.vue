<script setup lang="ts"></script>
<template>
  <div class="outer">
    <div class="inner"></div>
  </div>
</template>

<style lang="scss" scoped>
.outer {
  width: 30px;
  height: 30px;
  background: conic-gradient(var(--brandBlue) 20%, #061e2f 20%);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: spin 0.75s infinite linear;
}
.inner {
  font-size: 13px;
  width: 24px;
  aspect-ratio: 1;
  background: var(--background-main);
  border-radius: 100%;
  display: grid;
  place-items: center;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
