<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
// import products from "@/data/products.json";
import { useProductStore } from "./stores/ProductStore";
// import { storeToRefs } from "pinia";
import { useCartStore } from "./stores/CartStore";
const productStore = useProductStore();
const cartStore = useCartStore();
productStore.fill()
// const { products } = storeToRefs(useProductStore()); /*--> S'utilitza per no perde la reactivitat de productStore*/

const addToCart = (count, product) => {
  count = parseInt(count)
  for (let index = 0; index < count; index++) {
    cartStore.items.push(product);
  }
}
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard v-for="product in productStore.products" :key="product.name" :product="product"
        @addToCart="addToCart($event, product)" />
    </ul>
  </div>
</template>
