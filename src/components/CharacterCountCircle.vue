<script setup lang="ts">
import { watch } from "vue";

const props = defineProps({
  characterCount: {
    type: Number,
    default: 0,
  },
});

watch(
  () => props.characterCount,
  () => {
    const percentageOfColoredCircle: number = Math.round(
      props.characterCount / 2.7
    );
    const circle: HTMLElement | null = document.getElementById("circle");
    if (circle) {
      circle.style.background = `conic-gradient(
            var(--brandBlue) ${percentageOfColoredCircle}%,
            var(--background-secondary) ${percentageOfColoredCircle}%
            )`;
    }
  }
);
</script>

<template>
  <div class="outer" id="circle">
    <div class="inner"></div>
  </div>
</template>

<style lang="scss" scoped>
.outer {
  width: 30px;
  aspect-ratio: 1;
  background: conic-gradient(
    var(--brandBlue) 0%,
    var(--background-secondary) 0%
  );
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inner {
  width: 25px;
  aspect-ratio: 1;
  background: var(--background-main);
  border-radius: 100%;
}
</style>
