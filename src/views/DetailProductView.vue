<script>

import sourceData from '@/data-details.json'

export default{
  computed: {
    productId() {
      return parseInt(this.$route.params.id);
    },
    product() {
      return sourceData.products.find(product => product.id === this.productId);
    }
  }
}

  </script>

<template>
    <div class="main-wrapper">
      <section class="product-details">
        <h1>{{ product.name }}</h1>

          <p>{{ product.text }}</p>
          <p>{{ product.price }}</p>
         
      </section>
    </div>
</template>
  
  