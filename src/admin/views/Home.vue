<script setup lang="ts">
import SiteHits from '@/admin/components/SiteHits.vue'
import DataOut from '@/admin/components/DataOut.vue'
</script>

<template>
    <div>
        <SiteHits />
        <DataOut />
    </div>
</template>

<style lang="css" scoped>
div {
    display: grid;
    justify-content: space-around;
    padding: 10px;
    background-color: #f1f1f1;
    height: 90%;
}
</style>