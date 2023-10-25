<script setup lang="ts">
defineProps({
  username: {
    type: String,
    required: true,
  },
  handle: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <div class="text">
      <figure class="profile">
        <img :src="profileImg" alt="" />
      </figure>
      <div class="">
        <div class="username">
          {{ username }}
          <figure class="verified">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png"
              alt=""
            />
          </figure>
        </div>
        <div class="handle">@{{ handle }}</div>
      </div>
    </div>
    <button>Follow</button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 200ms ease;
  &:hover {
    background-color: #1d1f23;
  }
}

.text {
  display: flex;
}
.profile {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  overflow: hidden;
  margin-right: 8px;
}
button {
  cursor: pointer;
  width: 78px;
  height: 32px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 9999px;
}

.username {
  display: flex;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
}

.handle {
  color: gray;
  font-weight: 400;
}
</style>
