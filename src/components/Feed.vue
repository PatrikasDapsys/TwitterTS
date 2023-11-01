<script setup lang="ts">
import Post from "./Post.vue";
import { ref, reactive, onMounted } from "vue";
import axios, { type AxiosResponse } from "axios";
import FeedCreatePost from "./FeedCreatePost.vue";
import Loader from "./Loader.vue";

defineEmits(["reload-post"]);
const postStatus = reactive(ref<string>(""));

type postType = {
  id: number;
  username: string;
  handle: string;
  profileImg: string;
  text: string;
  likes: number;
  createdAt: number;
};

const posts = ref<postType[]>([]);

async function fetchPost() {
  try {
    const response: AxiosResponse<any> = await axios.get(
      "http://localhost:8080/post"
    );
    const { data } = response;
    data.sort((a: any, b: any) => b.createdAt - a.createdAt);
    posts.value = data;
    postStatus.value = "ok";
  } catch (error: any) {
    if (error.code === "ERR_NETWORK") {
      postStatus.value = "ERR_NETWORK";
    } else {
      alert(error);
    }
    console.error(error);
  }
}

onMounted(() => {
  fetchPost();
});
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
    <FeedCreatePost @reload-post="fetchPost" />
    <main>
      <div v-if="postStatus === 'ERR_NETWORK'">
        There seems to be some issues with the server. If you haven't started it
        run "npm run server" in the console and refresh the page.
      </div>
      <div v-if="postStatus === 'ok'" v-for="post in posts" :key="post.id">
        <Post
          :text="post.text"
          :username="post.username"
          :handle="post.handle"
          :profileImg="post.profileImg"
          :likes="post.likes"
          :createdAt="post.createdAt"
          :id="post.id"
        />
      </div>
      <div class="loader" v-else v-if="postStatus === ''"><Loader /></div>
    </main>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  position: relative;
}

.loader {
  padding: 20px 12px;
  display: flex;
  justify-content: center;
}
header {
  width: 100%;
  height: 106px;
  border-bottom: 1px solid var(--border-main);
  position: sticky;
  top: 0;
  backdrop-filter: blur(12px);

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
}
</style>
