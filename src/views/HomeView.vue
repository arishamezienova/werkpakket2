<script>
import HeaderComponents from '../components/HeaderComponents.vue';
import AboutComponent from '../components/AboutComponent.vue';
import PopularProductsComponent from '../components/PopularProductsComponent.vue';

import { products } from '../data';
import { bestsellers } from '../data-bestsellers';


export default {
  data() {
    return {
      products: products,
      bestsellers: bestsellers
      
        
        
      
    }
  },
  components: {
    HeaderComponents,
    AboutComponent,
    PopularProductsComponent,
},
}
</script>
<template>
  <HeaderComponents/>
  <AboutComponent/>
  <h1 class="bestsellers">Bestsellers</h1>
  <section class="bestsellers">
    <PopularProductsComponent
    />
  </section>
</template>
  
 