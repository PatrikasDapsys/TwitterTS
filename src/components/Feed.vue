<script setup lang="ts">
import { ref } from "vue";
const text = ref("");
</script>

<template>
  <section>
    <header>
      <div class="header__title">Home</div>
      <div class="header__feedOptions">
        <div class="active">For You</div>
        <div class="">Following</div>
      </div>
    </header>
    <div class="createPost">
      <div class="createPost__top">
        <figure>
          <img
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
            alt=""
          />
        </figure>
        <textarea
          type="text"
          placeholder="What is happening?!"
          v-model="text"
        />
      </div>
      <div class="createPost__bottom">
        <div class="createPost__options">
          <font-awesome-icon icon="fa-regular fa-image" />
          <font-awesome-icon icon="fa-regular fa-square" />
          <font-awesome-icon icon="fa-solid fa-pause" />
          <font-awesome-icon icon="fa-regular fa-face-smile" />
          <font-awesome-icon icon="fa-regular fa-calendar" />
          <font-awesome-icon icon="fa-solid fa-location-dot" />
        </div>
        <button :disabled="true">Post</button>
      </div>
    </div>
    <main>
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
      feed
      <br />
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
    transition: all 300ms ease;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
    cursor: pointer;
    &:hover {
      background-color: rgba(#181919, 0.5);
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

.createPost {
  min-height: 116px;
  height: fit-content;
  width: 100%;
  border-bottom: 1px solid var(--border-main);
  padding: 16px;
  padding-bottom: 0;
  figure {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    overflow: hidden;
    margin-right: 16px;
  }
  .createPost__top {
    display: flex;
    textarea {
      color: var(--text-main);
      flex: 1;
      background: none;
      outline: none;
      font-size: 20px;
      resize: none;
      &::placeholder {
        color: gray;
      }
    }
  }
  .createPost__bottom {
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .createPost__options {
      display: flex;
      align-items: center;
      color: var(--brandBlue);
      gap: 4px;
      margin-left: 56px;
      .fa-pause {
        transform: rotate(90deg);
      }
      > * {
        transition: all 200ms ease;
        padding: 10px;
        border-radius: 100%;
        aspect-ratio: 1/1;
        cursor: pointer;
        &:hover {
          /* background-color: var(--background-secondary); */
          background-color: rgba(#1d9bf0, 0.1);
        }
      }
    }
    button {
      padding: 8px 16px;
      border-radius: 9999px;
      background-color: var(--brandBlue);
      color: var(--text-main);
      font-weight: 700;
      transition: all 200ms ease;
      &:hover {
        filter: brightness(0.85);
      }
      &:disabled {
        filter: brightness(0.6);
      }
    }
  }
}
</style>
