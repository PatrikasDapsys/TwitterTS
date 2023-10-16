<script setup lang="ts">
import FollowSuggestion from "./FollowSuggestion.vue";
</script>
<template>
  <section>
    <div class="searchBar">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <input type="text" placeholder="Search" maxlength="30" />
    </div>
    <div class="premium background--rounded">
      <strong> Subscribe to premium </strong>
      <p>
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <button>Subscribe</button>
    </div>
    <div class="followSuggestions background--rounded">
      <strong>Who to follow</strong>
      <FollowSuggestion
        username="Elon Musk"
        handle="elonmusk"
        profileImg="https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg"
      />
      <FollowSuggestion
        username="John Doe"
        handle="therealjohndoe"
        profileImg="https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg"
      />
      <FollowSuggestion
        username="John Doe"
        handle="therealjohndoe"
        profileImg="https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg"
      />
      <button>Show more</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin: 16px 0 0 24px;
}

.background--rounded {
  background-color: var(--background-blue-secondary);
  border-radius: 14px;
}

.searchBar {
  background-color: var(--background-blue-main);
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: gray;
  margin-bottom: 16px;
  input {
    background-color: transparent;
    outline: none;
    color: inherit;
    flex: 1;
    font-size: 14px;
  }
}

.premium {
  display: flex;
  flex-direction: column;
  padding: 18px;
  gap: 12px;
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 16px;
  strong {
    font-size: 20px;
    font-weight: 900;
  }
  button {
    width: fit-content;
    padding: 8px 16px;
    border-radius: 16px;
    background-color: var(--brandBlue);
    color: white;
    font-size: 15px;
    font-weight: 700;
  }
}

.followSuggestions {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  strong {
    font-size: 20px;
    padding: 12px 16px;
    font-weight: 800;
  }
  button {
    background: none;
    text-align: left;
    padding: 16px;
    color: var(--brandBlue);
    font-size: 15px;
    cursor: pointer;
    transition: all 200ms ease;
    &:hover {
      background-color: #1d1f23;
    }
  }
}
</style>
