<script>
import { products } from '../data';


export default {
  data() {
    return {
      products: products
    }
  },
}
</script>
<template>
    <div class="product"
        v-for="product in products"
        :key="product.name">
    <div class="card">
        <img
            :src="product.image" 
            @mouseover="product.image = product.hoverImage"
            @mouseleave="product.image = product.defaultImage"
            
            class="card-image">
        <div class="overlay">
        <h2 class="card-overlay-h2">{{product.name}}</h2>
        <h3 class="card-overlay-h3">{{product.type }}</h3>
        <p class="card-overlay-p">{{ product.describe }}</p>
        <p class="card-overlay-p-price">{{ product.price }}</p>
        <p id="tax">{{product.tax}}</p>
        <p class="card-overlay-p-stock">Left in stock: {{ product.stock }}</p>
        <a>Buy</a>
    </div>  
    </div>
</div>
</template>