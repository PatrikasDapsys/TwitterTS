<script setup lang="ts">
import { watch } from "vue";

const props = defineProps({
  isModalOpen: {
    type: Boolean,
    default: false,
  },
});
const bodyElement: HTMLBodyElement | null = document.querySelector("body");
setTimeout(() => {
  const searchBar = document.getElementById("searchBar");
  if (searchBar) {
    watch(
      () => props.isModalOpen,
      (newValue) => {
        if (newValue) {
          searchBar.classList.add("activeModal");
        } else {
          searchBar.classList.remove("activeModal");
        }
      }
    );
  }
}, 0);

if (bodyElement) {
  watch(
    () => props.isModalOpen,
    (newValue) => {
      if (newValue) {
        bodyElement.classList.add("activeModal");
      } else {
        bodyElement.classList.remove("activeModal");
      }
    }
  );
}
</script>
<template>
  <div v-if="isModalOpen">MODAL</div>
</template>

<style lang="scss" scoped>
div {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 16000px;
  height: 100vh;
  background-color: rgba(#242d34, 0.8);
}
</style>
