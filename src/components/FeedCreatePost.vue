<script setup lang="ts">
import { ref, watch } from "vue";
import axios from "axios";

const emit = defineEmits();

const text = ref<string>("");
const username = ref<string>("");
const handle = ref<string>("");
const profileImg = ref<string>("");
const allowPost = ref<boolean>(false);
function submitForm(event: Event) {
  event.preventDefault();
  axios
    .post("http://localhost:8080/post", {
      id: createUniqueID(),
      username: username.value,
      handle: handle.value,
      profileImg:
        profileImg.value === ""
          ? "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
          : profileImg.value,
      text: text.value,
      likes: 0,
      createdAt: Date.now(),
    })
    .then(() => {
      text.value = "";
      username.value = "";
      handle.value = "";
      profileImg.value = "";
      allowPost.value = false;
      emit("reload-post");
    })
    .catch((error: any) => {
      if (error.code === "ERR_NETWORK") {
        alert("The server isn't online, run 'npm run server' ");
      } else {
        alert(error);
      }
    });
}

function createUniqueID() {
  const id = Math.round(Math.random() * 100000000000);
  return id;
}

//Allow Post
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
//Extend textarea
const textareaResize = () => {
  const textarea: HTMLTextAreaElement | null =
    document.querySelector("textarea");
  if (!textarea) return;
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
};
</script>

<template>
  <form type="submit" @submit="submitForm">
    <div class="createPost">
      <div class="createPost__top">
        <figure>
          <img
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
            alt=""
          />
        </figure>
        <div class="inputs">
          <div class="usernames">
            <input
              type="text"
              placeholder="Username"
              maxlength="15"
              v-model="username"
              required
            />
            <input
              type="text"
              placeholder="Handle"
              maxlength="15"
              required
              v-model="handle"
            />
            <input
              type="text"
              placeholder="Profile Image Link"
              v-model="profileImg"
            />
          </div>
          <textarea
            type="text"
            placeholder="What is happening?!"
            maxlength="200"
            @input="textareaResize"
            v-model="text"
            required
          />
        </div>
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
        <button type="submit" :disabled="!allowPost">Post</button>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.createPost {
  width: 100%;
  border-bottom: 1px solid var(--border-main);
  padding: 16px;
  padding-bottom: 4px;
  .createPost__top {
    display: flex;
    width: 100%;
    figure {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      overflow: hidden;
      margin-right: 16px;
    }
    .inputs {
      flex-direction: column;
      flex: 1;
      .usernames {
        display: flex;
        font-size: 12px;
      }

      input,
      textarea {
        color: var(--text-main);
        flex: 1;
        background: none;
        outline: none;
        resize: none;
        &::placeholder {
          color: gray;
        }
      }
      textarea {
        margin-top: 8px;
        font-size: 20px;
        width: 100%;
        transition: height 0.3s;
        overflow-y: scroll;
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
</style>