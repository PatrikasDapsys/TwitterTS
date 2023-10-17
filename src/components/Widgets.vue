<script setup lang="ts">
import FollowSuggestion from "./FollowSuggestion.vue";
import TrendingTab from "./TrendingTab.vue";

const trendingTabs = [
  {
    place: 1,
    name: "Lithuania",
  },
  {
    place: 2,
    name: "Latvia",
  },
  {
    place: 3,
    name: "Estonia",
  },
  {
    place: 4,
    name: "Poland",
  },
  {
    place: 5,
    name: "USA",
  },
  {
    place: 6,
    name: "China",
  },
  {
    place: 7,
    name: "UK",
  },
  {
    place: 8,
    name: "Germany",
  },
  {
    place: 9,
    name: "France",
  },
  {
    place: 10,
    name: "Australia",
  },
];
</script>
<template>
  <section>
    <div class="searchBar">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <input type="text" placeholder="Search" maxlength="30" />
    </div>
    <div class="premium background--rounded">
      <strong class="title"> Subscribe to premium </strong>
      <p>
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <button>Subscribe</button>
    </div>
    <div class="followSuggestions background--rounded">
      <strong class="title">Who to follow</strong>
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
      <button class="showMore">Show more</button>
    </div>
    <div class="trending background--rounded">
      <strong class="title">Lithuania trends</strong>
      <div v-for="tab in trendingTabs" :key="tab.place" class="">
        <TrendingTab :place="tab.place" :name="tab.name" />
      </div>
      <button class="showMore">Show more</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin: 4px 0 0 24px;
}

.background--rounded {
  background-color: var(--background-blue-secondary);
  border-radius: 14px;
}

.title {
  font-size: 20px;
  font-weight: 800;
  padding: 12px 16px;
}
.showMore {
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
  padding: 12px 16px;
  gap: 12px;
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 16px;
  button {
    width: fit-content;
    padding: 8px 16px;
    border-radius: 16px;
    background-color: var(--brandBlue);
    color: white;
    font-size: 15px;
    font-weight: 700;
  }
  .title {
    padding: unset;
  }
}

.followSuggestions {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 16px;
  .title {
    padding: 12px 16px;
  }
}

.trending {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
