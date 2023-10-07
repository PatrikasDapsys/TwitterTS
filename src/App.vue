<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="container">
    <div class="sidebar"><Sidebar /></div>
    <div class="feed">middle</div>
    <div class="widgets">right side</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1300px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.sidebar {
  width: 20%;
}
.feed {
  border-left: 0.5px solid var(--border-main);
  border-right: 1px solid var(--border-main);
  width: 50%;
}
.widgets {
  width: 30%;
  text-align: right; //temp
}
</style>
