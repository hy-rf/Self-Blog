<script setup lang="ts">
import store from '../store'
</script>

<template>
    <div>
        <div v-for="item in store.state.cart" :key="item.id">
            <p>{{ item.name }}</p>
            <p>{{ item.number }}</p>
        </div>
    </div>
</template>

<style lang="css" scoped></style>