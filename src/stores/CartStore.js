import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
    //per saber quins productes anem afegint al carrito
    state: () => {
        return {
            items: []
        }
    }
})