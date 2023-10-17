<script setup lang="ts">
import Feed from "./components/Feed.vue";
import Sidebar from "./components/Sidebar.vue";
import Widgets from "./components/Widgets.vue";
</script>

<template>
  <div class="container">
    <div class="sidebar"><Sidebar /></div>
    <div class="feed"><Feed /></div>
    <div class="widgets"><Widgets /></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  max-width: 1300px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  max-height: 100vh;
}
.sidebar {
  flex: 0.2;
}
.feed {
  border-left: 0.5px solid var(--border-main);
  border-right: 1px solid var(--border-main);
  flex: 0.45;
  overflow-y: scroll;
}
.widgets {
  flex: 0.3;
  overflow-y: scroll;
}
</style>
