<script setup lang="ts">
import tabRow from "./tabRow.vue";
import CreatePostModal from "./CreatePostModal.vue";
import { ref } from "vue";

defineEmits(["close-modal"]);
const isModalOpen = ref<boolean>(false);

function toggleModal() {
  isModalOpen.value = !isModalOpen.value;
}

const Tabs: {
  name: string;
  icon: string;
  active: boolean;
}[] = [
  {
    name: "Home",
    icon: "fa-solid fa-house",
    active: true,
  },
  {
    name: "Explore",
    icon: "fa-solid fa-magnifying-glass",
    active: false,
  },
  {
    name: "Notifications",
    icon: "fa-regular fa-bell",
    active: false,
  },
  {
    name: "Messages",
    icon: "fa-regular fa-envelope",
    active: false,
  },
  {
    name: "Lists",
    icon: "fa-solid fa-bars",
    active: false,
  },
  {
    name: "Bookmarks",
    icon: "fa-regular fa-bookmark",
    active: false,
  },
  {
    name: "Communities",
    icon: "fa-solid fa-users",
    active: false,
  },
  {
    name: "Premium",
    icon: "fa-brands fa-x-twitter",
    active: false,
  },
  {
    name: "Profile",
    icon: "fa-regular fa-circle-user",
    active: false,
  },
  {
    name: "More",
    icon: "fa-solid fa-ellipsis",
    active: false,
  },
];
</script>

<template>
  <section>
    <div class="container">
      <a href="/">
        <figure>
          <font-awesome-icon icon="fa-brands fa-x-twitter" />
        </figure>
      </a>
      <ul>
        <li v-for="tab in Tabs">
          <tabRow :name="tab.name" :icon="tab.icon" :active="tab.active" />
        </li>
      </ul>
      <div class="postWrapper">
        <button class="postButton" @click="toggleModal">Post</button>
      </div>
    </div>
  </section>
  <CreatePostModal :isModalOpen="isModalOpen" @close-modal="toggleModal" />
</template>

<style lang="scss" scoped>
.container {
  padding: 8px;
  margin-right: 16px;
  a {
    color: unset;
  }
}
figure {
  svg {
    width: 30px;
    height: 30px;
  }
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-left: 6px;
  margin-bottom: 8px;
  transition: all 200ms ease;
  &:hover {
    background-color: var(--background-secondary);
  }
}

li {
  list-style: none;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    button {
      background-color: var(--background-secondary);
    }
  }
}

.postWrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.postButton {
  width: 90%;
  height: 52px;
  border-radius: 9999px;
  background-color: var(--brandBlue);
  color: var(--text-main);
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  transition: all 200ms ease;
  margin-top: 24px;
  &:hover {
    filter: brightness(0.85);
  }
}
</style>
