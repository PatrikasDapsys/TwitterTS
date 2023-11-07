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
  max-height: 100vh;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  overflow-y: hidden;
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

@media (max-width: 1296px) {
  .container {
    width: 90%;
    margin-left: 0;
  }
  .sidebar {
    flex: 0;
  }
  .feed {
    flex: 1;
  }
  .widgets {
    flex: 0.58;
  }
}
@media (max-width: 1020px) {
  .widgets {
    display: none;
  }
  .feed {
    max-width: 600px;
  }
}
</style>
