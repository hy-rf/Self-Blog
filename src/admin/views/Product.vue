<script setup lang="ts">
import ProductList from '@/admin/components/ProductList.vue'
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <div>
        <RouterLink to="/product/list">ProductList</RouterLink>
        <RouterLink to="/product/cart">Cart</RouterLink>
        <RouterView />
    </div>
</template>

<style lang="css" scoped></style>