<script setup lang="ts">
import CharacterCountCircle from "./CharacterCountCircle.vue";
import { createUniqueID, areCharactersValid } from "./utils";
import axios from "axios";
import { ref, reactive } from "vue";
import { watch } from "vue";

const text = ref<string>("");
const username = ref<string>("");
const handle = ref<string>("");
const profileImg = ref<string>("");
const allowPost = reactive(ref<boolean>(false));
const CharacterCountCircleID: number = createUniqueID();

const emit = defineEmits();
const props = defineProps({
  isModalOpen: {
    type: Boolean,
    default: false,
  },
});

//Create Post
function createPost(event: Event) {
  if (!areCharactersValid(username.value, handle.value)) {
    alert("Please use valid characters(Aa-Zz;0-9) and try again.");
    return;
  }
  event.preventDefault();
  axios
    .post("http://localhost:8080/post", {
      id: createUniqueID(),
      username: username.value,
      handle: handle.value,
      profileImg: profileImg.value,
      text: text.value,
      likes: 0,
      createdAt: Date.now(),
    })
    .then(() => {
      text.value = "";
      username.value = "";
      handle.value = "";
      profileImg.value = "";
      emit("close-modal");
    })
    .catch((error: any) => {
      if (error.code === "ERR_NETWORK") {
        alert("The server isn't online, run 'npm run server' ");
      } else {
        alert(error);
      }
    });
}

//Allow post
watch(
  [text, username, handle],
  ([newText, newUsername, newHandle]) => {
    allowPost.value =
      newText.length !== 0 &&
      newText.length < 271 &&
      newUsername.length !== 0 &&
      newHandle.length !== 0;
  },
  { immediate: true }
);

//Modal size
const textareaResize = () => {
  const textarea: HTMLTextAreaElement | null =
    document.querySelector("textarea");
  if (!textarea) return;
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
};
//Modal backdrop below
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
      <form @submit="createPost">
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
              <div class="usernames">
                <input
                  type="text"
                  required
                  placeholder="Username"
                  maxlength="15"
                  v-model="username"
                />
                <input
                  type="text"
                  required
                  placeholder="Handle"
                  maxlength="15"
                  v-model="handle"
                />
                <input
                  type="text"
                  placeholder="Profile Img"
                  v-model="profileImg"
                />
              </div>
              <textarea
                placeholder="What is happening?!"
                @input="textareaResize"
                v-model="text"
                maxlength="1269"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="bottom__top">
            <font-awesome-icon icon="fa-solid fa-earth-americas" />
            &nbsp;Everyone can reply
          </div>
          <div class="bottom__bottom">
            <div class="bottum__options">
              <font-awesome-icon icon="fa-regular fa-image" />
              <font-awesome-icon icon="fa-regular fa-square" />
              <font-awesome-icon icon="fa-solid fa-pause" />
              <font-awesome-icon icon="fa-regular fa-face-smile" />
              <font-awesome-icon icon="fa-regular fa-calendar" />
              <font-awesome-icon icon="fa-solid fa-location-dot" />
            </div>
            <div class="bottom__post">
              <CharacterCountCircle
                v-if="text"
                :characterCount="text.length"
                :maxLength="270"
                :id="CharacterCountCircleID"
              />
              <button type="submit" :disabled="!allowPost">Post</button>
            </div>
          </div>
        </div>
      </form>
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
      .usernames {
        input {
          background: transparent;
          color: white;
          outline: none;
        }
      }
      textarea {
        min-height: 96px;
        max-height: 500px;
        overflow-y: scroll;
        width: 100%;
        background: transparent;
        margin: 12px 0;
        color: #fff;
        font-size: 20px;
        outline: none;
        resize: none;
        &::-webkit-scrollbar {
          display: block;
          width: 12px;
        }

        &::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.5); /* Color of the thumb */
          border-radius: 6px; /* Round the thumb */
        }

        &::-webkit-scrollbar-thumb:hover {
          background-color: rgba(
            255,
            255,
            255,
            0.7
          ); /* Hover color of the thumb */
        }

        &::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2); /* Color of the track */
        }

        &::-webkit-scrollbar-track:hover {
          background: rgba(0, 0, 0, 0.3); /* Hover color of the track */
        }
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
  .bottom__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0 8px;
    .bottum__options {
      display: flex;
      align-items: center;
      color: var(--brandBlue);
      gap: 4px;
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
          background-color: rgba(#1d9bf0, 0.1);
        }
      }
    }
    .bottom__post {
      display: flex;
      align-items: center;
      gap: 16px;
      button {
        font-size: 15px;
        color: var(--text-main);
        font-weight: 700;
        padding: 8px 16px;
        border-radius: 9999px;
        background-color: var(--brandBlue);
        transition: all 200ms ease;
        cursor: pointer;
        &:hover {
          filter: brightness(0.85);
        }
        &:not(:disabled):active {
          transform: scale(0.9);
        }
        &:disabled {
          cursor: default;
          filter: brightness(0.6);
        }
      }
    }
  }
}
</style>
