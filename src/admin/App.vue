<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">Dashboard</RouterLink>
    <RouterLink to="/department">Department</RouterLink>
    <RouterLink to="/employee">Employee</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style lang="css" scoped>
nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: #f1f1f1;
  height: 90%;
}

nav>* {
  padding: 10px;
  text-align: center;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 5px;
}

a {
  text-decoration: none;
  color: #333;
}

a:hover {
  background-color: #333;
  color: #f1f1f1;
  transition: 0.1s;
}

a:not(:hover) {
  background-color: #f1f1f1;
  color: #333;
  transition: 0.1s;
}
</style>
