interface Product {
  id: number;
  name: string;
  price: number;
  number: number;
}
import { createStore } from 'vuex';
let products: Product[] = [];
for (let i = 1; i <= 45; i++) {
  let product: Product = {
    id: i,
    name: `Product ${i}`,
    price: Math.floor(Math.random() * 100) + 1,
    number: Math.floor(Math.random() * 99) + 1,
  };
  products.push(product);
}
export default createStore({
  state() {
    return {
      products: products,
      cart: [],
    };
  },
  mutations: {
    add(product: any, state: any) {
      state.products.push({ product, id: state.products.length + 1 });
    },
    update(product: any, state: any) {
      let index = state.products.findIndex((p: any) => p.id == product.id);
      state.products[index] = product;
    },
    delete(id: number, state: any) {
      let index = state.products.findIndex((p: any) => p.id == id);
      state.products.splice(index, 1);
    },
  },
  actions: {
    // ...
  },
  modules: {
    // ...
  },
});
