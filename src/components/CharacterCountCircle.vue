<script setup lang="ts">
import { watch } from "vue";

const props = defineProps({
  characterCount: {
    type: Number,
    default: 0,
  },
  maxLength: {
    type: Number,
    default: 270,
  },
});

watch(
  () => props.characterCount,
  () => {
    const circle: HTMLElement | null = document.getElementById("circle");
    const innerCircle: HTMLElement | null =
      document.getElementById("innerCircle");
    const percentageOfColoredCircle: number = Math.round(
      props.characterCount / 2.7
    );

    if (props.characterCount > props.maxLength - 21) {
      if (innerCircle && circle) {
        innerCircle.innerHTML = (
          props.maxLength - props.characterCount
        ).toString();
        circle.style.background = `conic-gradient(
          #e9c405 ${percentageOfColoredCircle}%,
          var(--background-secondary) ${percentageOfColoredCircle}%
          )`;
        circle.classList.add("scaleUp");
      }
    } else if (circle && innerCircle) {
      innerCircle.innerHTML = "";
      circle.style.background = `conic-gradient(
        var(--brandBlue) ${percentageOfColoredCircle}%,
        var(--background-secondary) ${percentageOfColoredCircle}%
        )`;
      circle.classList.remove("scaleUp");
    }
  }
);
</script>

<template>
  <div class="outer" id="circle">
    <div class="inner" id="innerCircle"></div>
  </div>
</template>

<style lang="scss" scoped>
.outer {
  width: 30px;
  aspect-ratio: 1;
  background: conic-gradient(
    var(--brandBlue) 1%,
    var(--background-secondary) 1%
  );
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease;
}
.inner {
  font-size: 13px;
  width: 26px;
  aspect-ratio: 1;
  background: var(--background-main);
  border-radius: 100%;
  display: grid;
  place-items: center;
}

.scaleUp {
  transform: scale(1.2);
}
</style>
