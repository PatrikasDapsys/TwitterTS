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

const textareaResize = () => {
  const textarea: HTMLTextAreaElement | null =
    document.querySelector("textarea");
  if (!textarea) return;
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
};
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
            <div>
              Everyone &nbsp;
              <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </div>
          </div>
          <div class="middle__rigthBottom">
            <textarea
              placeholder="What is happening?!"
              maxlength="270"
              @input="textareaResize"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom__top">
          <font-awesome-icon icon="fa-solid fa-earth-americas" />
          &nbsp;Everyone can reply
        </div>
        <div class="bottom__bottom">sdas</div>
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
  height: auto;
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
  .middle__rigth {
    display: flex;
    flex-direction: column;
    flex: 1;
    .middle__rigthTop {
      color: var(--brandBlue);
      padding: 4px 0 12px 0;
      div {
        display: flex;
        align-items: center;
        width: fit-content;
        font-size: 14px;
        font-weight: 700;
        height: 22px;
        border: 1px solid rgb(83, 100, 113);
        border-radius: 18px;
        padding: 0 12px;
        cursor: pointer;
        transition: all 200ms ease;
        &:hover {
          background-color: rgba(#1d9bf0, 0.1);
        }
      }
    }
    .middle__rigthBottom {
      textarea {
        min-height: 96px;
        width: 100%;
        background: transparent;
        margin: 12px 0;
        color: #fff;
        font-size: 20px;
        outline: none;
        resize: none;
        overflow-y: hidden;
      }
    }
  }
}

.bottom {
  .bottom__top {
    color: var(--brandBlue);
    font-weight: 700;
    font-size: 14px;
    padding: 0 12px 12px 12px;
    border-bottom: 1px solid rgb(47, 51, 54);
  }
}
</style>
