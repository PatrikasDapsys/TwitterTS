<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
const props = defineProps({
  text: String,
  username: String,
  handle: String,
  likes: Number,
  profileImg: {
    type: String,
    default:
      "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
  },
  createdAt: {
    type: Number,
    default: 0,
  },
  id: Number,
});
const whenCreated = ref<number | string>(props.createdAt || 0);
const timeFormat = ref<string>("");
const totalLikes = ref<number>(props.likes || 0);
const hasLikedBeenClicked = ref<boolean>(false);
function calcuteWhenCreated() {
  const date = new Date(whenCreated.value);
  const now = new Date();

  const differenceInMilliseconds = now.getTime() - date.getTime();
  const hoursPassed = Math.round(differenceInMilliseconds / (60 * 60 * 1000));
  const minutesPassed = Math.round(differenceInMilliseconds / (60 * 1000));

  if (hoursPassed > 24) {
    const dateInDaysArray = date.toDateString().split(" ");
    const dateInDays = dateInDaysArray[1] + " " + dateInDaysArray[2];
    whenCreated.value = dateInDays;
    timeFormat.value = "";
  } else if (hoursPassed < 1) {
    whenCreated.value = minutesPassed;
    timeFormat.value = "m";
  } else {
    whenCreated.value = hoursPassed;
    timeFormat.value = "h";
  }
}
calcuteWhenCreated();

function likeClicked() {
  if (hasLikedBeenClicked.value === true) {
    totalLikes.value -= 1;
  } else {
    totalLikes.value += 1;
  }
  axios.patch(`http://localhost:8080/post/${props.id}`, {
    likes: totalLikes.value,
  });
  hasLikedBeenClicked.value = !hasLikedBeenClicked.value;
}
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
          <h1 class="post__top--handle">@{{ handle }}</h1>
          <span class="dot"> &#8226;</span>
          <span> {{ whenCreated }}{{ timeFormat }}</span>
        </div>
        <font-awesome-icon icon="fa-solid fa-ellipsis" />
      </div>

      <p class="post__middle">
        {{ text }}
      </p>
      <div class="post__bottom">
        <div>
          <font-awesome-icon icon="fa-regular fa-comment" />
        </div>
        <div>
          <font-awesome-icon icon="fa-solid fa-retweet" />
        </div>
        <div class="likes">
          <font-awesome-icon
            v-show="!hasLikedBeenClicked"
            icon="fa-regular fa-heart"
            @click="likeClicked"
          />
          <font-awesome-icon
            v-show="hasLikedBeenClicked"
            icon="fa-solid fa-heart"
            style="color: #e81777"
            @click="likeClicked"
          />
          <div style="width: 24px">{{ totalLikes }}</div>
        </div>
        <div>
          <font-awesome-icon icon="fa-solid fa-chart-simple" />
        </div>
        <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" />
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.post {
  display: flex;
  padding: 12px 16px 4px 16px;
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
    img {
      object-fit: cover;
    }
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
  height: 20px;
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
  .likes {
    display: flex;
    align-items: center;
    .fa-heart{
      padding: 8px;
      border-radius: 100%;
    }
    &:hover {
      color: #e81777;
      .fa-heart{
        background-color: rgba(#e81777, 0.1);
      }
    }
  }
}
</style>
