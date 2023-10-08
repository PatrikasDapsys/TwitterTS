<script setup lang="ts">
defineProps({
  name: String,
  icon: String,
  active: Boolean,
});
</script>

<template>
  <button :style="{ fontWeight: active ? '900' : '400' }">
    <font-awesome-icon :icon="icon" />
    <div class="">{{ name }}</div>
  </button>
</template>

<style lang="scss" scoped>
button {
  text-decoration: none;
  background-color: transparent;
  color: var(--text-main);
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: 12px 18px;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 200ms ease;
  svg {
    width: 25px;
    height: 25px;
    color: var(--text-main);
    background-color: transparent;
  }
  div {
    margin: 0 20px;
  }
  /* &:hover {
    background-color: var(--background-secondary);
  } */
}
</style>
