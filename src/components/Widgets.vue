<script setup lang="ts">
import FollowSuggestion from "./FollowSuggestion.vue";
import TrendingTab from "./TrendingTab.vue";
import { ref } from "vue";

const searchBarText = ref<string>("");
const searchInput = ref<HTMLElement | null>(null);

function resetSearchBarText() {
  searchBarText.value = "";
  if (searchInput.value) searchInput.value.focus();
}

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
    <div class="searchBar__container">
      <div class="searchBar">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <input
          type="text"
          placeholder="Search"
          maxlength="30"
          v-model="searchBarText"
          ref="searchInput"
        />
        <font-awesome-icon
          icon="fa-solid fa-circle-xmark"
          v-show="searchBarText"
          @click="resetSearchBarText"
        />
      </div>
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
    <nav class="copyright">
      <div>Terms of Service</div>
      <div>Privacy Policy</div>
      <div>Cookie Policy</div>
      <div>Accessibility</div>
      <div>Ads Info</div>
      <div>More <font-awesome-icon icon="fa-solid fa-ellipsis" /></div>
      <div>&copy; 2023 X Corp.</div>
    </nav>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin-left: 24px;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;
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

.searchBar__container {
  position: sticky;
  top: 0;
  background: var(--background-main);
  padding: 4px 0;
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
  border: 1px solid var(--background-blue-main);
  color: gray;
  input {
    background-color: transparent;
    outline: none;
    color: inherit;
    flex: 1;
    font-size: 14px;
    color: white;
  }
  .fa-circle-xmark {
    color: var(--brandBlue);
    cursor: pointer;
    position: absolute;
    right: 12px;
    padding: 4px;
  }
  &:focus-within {
    background-color: var(--background-main);
    border: 1px solid var(--brandBlue);
    .fa-magnifying-glass {
      color: var(--brandBlue);
    }
  }
  &:not(:focus-within) {
    .fa-circle-xmark {
      opacity: 0;
    }
  }
}

.premium {
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  gap: 12px;
  font-weight: 700;
  font-size: 15px;
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

.copyright {
  color: gray;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  font-size: 13px;
  div {
    white-space: nowrap;
    padding-right: 12px;
    margin: 2px 0;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
