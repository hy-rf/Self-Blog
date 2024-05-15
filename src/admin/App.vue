<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style lang="css" scoped></style>
