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
  justify-content: space-around;
  padding: 10px;
  background-color: #f1f1f1;
}
</style>
