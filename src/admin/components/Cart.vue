<script setup lang="ts">
import store from '../store'
function minusNum(id: number) {
    let ele = store.state.cart.find(ele => ele.id == id)
    ele.number--
    let stockele = store.state.products.find(ele => ele.id == id)
    stockele.number++
    if (ele.number == 0) {
    }
}
function plusNum(id: number) {
    let ele = store.state.cart.find(ele => ele.id == id)
    ele.number++
    let stockele = store.state.products.find(ele => ele.id == id)
    stockele.number--
    // todo handle stock below 0
}
</script>

<template>
    <div>
        <div v-for="item in store.state.cart" :key="item.id">
            <p>{{ item.name }}</p>
            <p>{{ item.number }}</p>
            <button @click="minusNum(item.id)">-</button>
            <button @click="plusNum(item.id)">+</button>
        </div>
    </div>
</template>

<style lang="css" scoped></style>