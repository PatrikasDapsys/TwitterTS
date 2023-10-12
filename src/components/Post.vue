<script setup lang="ts">
const props = defineProps({
  text: String,
  username: String,
  handle: String,
  profileImg: String,
});
</script>

<template>
  <article class="post">
    <div class="post__profileImg">
      <figure>
        <img :src="profileImg" alt="" />
      </figure>
    </div>
    <div class="post__text">
      <!-- text -->
      <div class="post__top">
        <div class="post__topLeft">
          <h2 class="post__top--username">
            {{ username }}
          </h2>
          <figure class="verified">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png"
              alt=""
            />
          </figure>
          <h1 class="post__top--handle">
            {{ handle }}
          </h1>
          <span class="dot"> &#8226;</span>
          <span> 8h</span>
        </div>
        <font-awesome-icon icon="fa-solid fa-ellipsis" />
      </div>

      <p class="post__middle">
        {{ text }}
      </p>
      <div class="post__bottom">
        <div>
          <font-awesome-icon icon="fa-regular fa-comment" />
          <span>&nbsp;8</span>
        </div>
        <div>
          <font-awesome-icon icon="fa-solid fa-retweet" />
          <span>&nbsp;8</span>
        </div>
        <div>
          <font-awesome-icon icon="fa-regular fa-heart" />
          <span>&nbsp;8</span>
        </div>
        <div>
          <font-awesome-icon icon="fa-solid fa-chart-simple" />
          <span>&nbsp;8</span>
        </div>
        <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" />
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.post {
  display: flex;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-main);
  transition: all 200ms ease;
  &:hover {
    background-color: var(--background-secondary);
  }
}
.post__profileImg {
  margin-right: 12px;
  figure {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    overflow: hidden;
  }
}
.dot {
  font-size: 8px;
  display: flex;
  align-items: center;
  margin: 0 8px;
}

.verified {
  width: 16px;
  display: flex;
  align-items: center;
  margin: 0 8px 0 4px;
}

.post__text {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.post__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  *:not(:first-child) {
    color: gray;
  }
  .post__topLeft {
    display: flex;
    h1,
    h2 {
      font-size: 15px;
    }
    h1 {
      font-weight: normal;
    }
    span:first-child {
      cursor: pointer;
      font-weight: 700;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .fa-ellipsis {
    padding: 8px;
    border-radius: 100%;
    transition: all 200ms ease;
    aspect-ratio: 1/1;
    &:hover {
      color: var(--brandBlue);
      background-color: rgba(#1d9bf0, 0.1);
    }
  }
}

.post__middle {
  margin-bottom: 8px;
}
.post__bottom {
  display: flex;
  justify-content: space-between;
  color: gray;
}
</style>
