<script setup lang="ts"></script>

<template>
  <section>
    <header>
      <div class="header__title">Home</div>
      <div class="header__feedOptions">
        <div class="active">For You</div>
        <div class="">Following</div>
      </div>
    </header>
    <main>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
      feed
      <br>
    </main>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  position: relative;
}
header {
  width: 100%;
  height: 106px;
  border-bottom: 1px solid var(--border-main);
  position: sticky;
  top: 0;
  backdrop-filter: blur(12px);
}

.header__title {
  font-size: 20px;
  font-weight: 900;
  height: 50%;
  padding: 0 16px;
  display: flex;
  align-items: center;
}

.header__feedOptions {
  font-size: 16px;
  display: flex;
  height: 50%;
  div {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
    cursor: pointer;
    &:hover {
      background-color: rgba(#181919, 0.5); /* Adjust the alpha value as needed */
    }
  }
  .active {
    text-decoration: underline;
    text-decoration-color: var(--brandBlue);
    text-decoration-thickness: 4px;
    text-underline-offset: 90%;
    font-weight: 700;
    color: var(--text-main);
  }
}
</style>
