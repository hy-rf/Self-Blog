<script setup lang="ts">
import store from '@/admin/store'
import type Product from '@/admin/types/Product'
import { ref } from 'vue';

let products: Product[] = store.state.products
let numbers = ref(0)
function handleAddCart(productId: number) {
    let index = products.findIndex((p: any) => p.id == productId);
    products[index].number -= numbers.value
    store.commit('update', products[index])
    console.log(store.state.products)
}
function handleChangeNumber(e: any) {
    numbers.value = e.target!.value
}
</script>

<template>
    <div>
        <div v-for="item in products" :key="item.id">
            <p>Neme: {{ item.name }}</p>
            <p>Price: {{ item.price }}</p>
            <p>In Stock: {{ item.number }}</p>
            <select @change="handleChangeNumber">
                <option v-for="i in item.number" :key="i" :value="i">{{ i }}</option>
            </select>
            <button @click="handleAddCart(item.id)">Add to Cart</button>
        </div>
    </div>
</template>

<style lang="css" scoped></style>