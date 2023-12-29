<script> 
import NavComponent from './components/NavComponent.vue';
import FooterComponents from './components/FooterComponents.vue';

import { products } from './data';


export default {
  data() {
    return {
      products: products
      
        
        
      
    }
  },
  components: {
    NavComponent,
    
    FooterComponents,
    FooterComponents
},
}
</script>

<template>
  <NavComponent/>

  
  <router-view/>
  <FooterComponents/>
</template>



<style lang="scss">

 @import '../scss/main.scss'

</style>