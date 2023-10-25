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
  <div class="backdrop" v-if="isModalOpen">
    <section class="container">
      <div class="top">
        <font-awesome-icon icon="fa-solid fa-x" @click="$emit('close-modal')" />
        <button class="button__drafts">Drafts</button>
      </div>
      <div class="middle">
        <div class="middle__left">
          <figure>
            <img
              src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
              alt="profile image"
            />
          </figure>
        </div>
        <div class="middle__rigth">
          <div class="middle__rigthTop">
            <div value="">Everyone</div>
          </div>
          <div class="middle__rigthBottom">
            <textarea cols="30" rows="10" placeholder="What is happening?!"></textarea>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background-color: rgba(#242d34, 0.8);
}

.container {
  background-color: var(--background-main);
  width: 576px;
  padding: 0px 16px;
  border-radius: 16px;
  margin: 0 auto;
  margin-top: 53px;
}

.top {
  height: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .fa-x {
    background-color: unset;
    width: 16px;
    height: 16px;
    padding: 10px;
    border-radius: 100%;
    cursor: pointer;
    transition: all 200ms ease;
    &:hover {
      background-color: var(--background-secondary);
    }
  }
  .button__drafts {
    font-size: 14px;
    font-weight: 700;
    color: var(--brandBlue);
    background-color: unset;
    border-radius: 9999px;
    padding: 8px 16px;
    cursor: pointer;
    transition: all 200ms ease;
    &:hover {
      background-color: rgba(#1d9bf0, 0.1);
    }
  }
}

.middle {
  height: 160px;
  display: flex;
  .middle__left {
    height: 100%;
    figure {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      margin: 12px 12px 0 0;
      overflow: hidden;
    }
  }
}
</style>
