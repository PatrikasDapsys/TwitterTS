<script setup lang="ts"></script>
<template>
  <section>
    <div class="container">
      <figure>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
          alt=""
        />
      </figure>
      <ul>
        <li>
          <button>

          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.container {
  padding: 8px;
}
i {
  color: red;
  font-size: 50px;
  background-color: inherit;
}
figure {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  padding: 8px;
  transition: all 200ms ease;
  &:hover {
    background-color: var(--background-secondary);
  }
}
</style>
