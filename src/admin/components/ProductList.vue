<script setup lang="ts">
import store from '@/admin/store'
import type Product from '@/admin/types/Product'
import { ref } from 'vue';

let products: Product[] = store.state.products
let numbers = ref(1)
function handleAddCart(productId: number) {
    // update product in store / call backend api to update product
    store.state.products[productId - 1].number -= numbers.value
    // add to cart
    let target = store.state.cart.find(ele => ele.id == productId)
    if (target !== undefined) {
        target.number += numbers.value
    } else {
        store.state.cart.push({ ...store.state.products[productId - 1], number: numbers.value })
    }
    console.log(store.state.cart);
    console.log(store.state.products);

}
function handleChangeNumber(e: any) {
    numbers.value = parseInt(e.target!.value)
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