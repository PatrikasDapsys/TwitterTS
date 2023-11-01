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
  id: {
    type: Number,
    required: true,
  },
});

watch(
  () => props.characterCount,
  () => {
    const circle: HTMLElement | null = document.getElementById(
      `circle${props.id}`
    );
    const innerCircle: HTMLElement | null = document.getElementById(
      `innerCircle${props.id}`
    );

    const percentageOfColoredCircle: number = Math.round(
      props.characterCount / (props.maxLength / 100)
    );
    //characterCount over Maxlength
    if (props.characterCount > props.maxLength - 1) {
      if (innerCircle && circle) {
        innerCircle.innerHTML = (
          props.maxLength - props.characterCount
        ).toString();
        circle.style.background = `conic-gradient(
          #e8232b ${percentageOfColoredCircle}%,
          var(--background-secondary) ${percentageOfColoredCircle}%
          )`;
        circle.classList.add("scaleUp");
        innerCircle.classList.add("redText");
      }
      //characterCount 20 under maxlength
    } else if (props.characterCount > props.maxLength - 21) {
      if (innerCircle && circle) {
        innerCircle.innerHTML = (
          props.maxLength - props.characterCount
        ).toString();
        circle.style.background = `conic-gradient(
          #e9c405 ${percentageOfColoredCircle}%,
          var(--background-secondary) ${percentageOfColoredCircle}%
          )`;
        circle.classList.add("scaleUp");
        innerCircle.classList.remove("redText");
      }
      //characterCount less than: maxlength - 20
    } else if (circle && innerCircle) {
      innerCircle.innerHTML = "";
      circle.style.background = `conic-gradient(
        var(--brandBlue) ${percentageOfColoredCircle}%,
        var(--background-secondary) ${percentageOfColoredCircle}%
        )`;
      circle.classList.remove("scaleUp");
      innerCircle.classList.remove("redText");
    }
  }
);
</script>

<template>
  <div class="outer" :id="`circle${id}`">
    <div class="inner" :id="`innerCircle${id}`"></div>
  </div>
</template>

<style lang="scss" scoped>
.outer {
  width: 30px;
  height: 30px;
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

.redText {
  color: red;
}
</style>
