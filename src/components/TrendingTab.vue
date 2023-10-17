<script setup lang="ts">
defineProps({
  place: Number,
  name: String,
});
</script>
<template>
  <div class="container">
    <div class="top">
      <div>
        {{ place }} &nbsp;<span class="dot">&#8226;</span>&nbsp; Trending
      </div>
      <font-awesome-icon icon="fa-solid fa-ellipsis" />
    </div>
    <div class="bottom">#{{ name }}</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 12px 16px;
  transition: all 200ms ease;
  &:hover {
    background-color: #1d1f23;
  }
}

.dot {
  font-size: 4px;
}

.top {
  display: flex;
  justify-content: space-between;
  color: gray;
  font-size: 13px;
  margin-bottom: 2px;
  :first-child {
    display: flex;
    align-items: center;
  }
}

.bottom {
    font-weight: 700;
}
</style>
