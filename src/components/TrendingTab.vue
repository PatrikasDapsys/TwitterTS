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
      <font-awesome-icon icon="fa-solid fa-ellipsis"/>
    </div>
    <div class="bottom">#{{ name }}</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 10px 16px 12px;
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
  height: 20px;
  :first-child {
    display: flex;
    align-items: center;
  }
}

.bottom {
  font-weight: 700;
}

.fa-ellipsis {
  cursor: pointer;
  font-size: 18px;
  padding: 8px;
  border-radius: 100%;
  transition: all 200ms ease;
  &:hover {
    color: var(--brandBlue);
    background-color: rgba(#1d9bf0, 0.1);
  }
}
</style>
