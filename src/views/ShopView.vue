<script>
import ProductCardComponent from '../components/ProductCardComponent.vue';


export default {
  data() {
    return {
      
    }
  },
  components: {
    ProductCardComponent
},
}
</script>
<template>
     <div class="intro">
        <h1>FENTY BEAUTY <span>LIP</span> MAKEUP</h1>
        <p>Discover the ultimate lip makeup lineup with Fenty Beauty lipstick and glosses: Whether you’re looking for the perfect matte red lip, universally flattering nude gloss, or high-impact metallic pop, Fenty Beauty by Rihanna lipstick and glosses deliver it all. Add to your lip makeup collection with longwear cream lipsticks, super creamy lip glosses—including the best-selling Gloss Bomb!—and iconic budgeproof liquid lipstick, each created by Rihanna to flatter all. Rihanna loves changing up her lipstick depending on her current mood, so she wanted to create a lip makeup collection that would empower everyone to explore new looks. “I love that makeup has so many colors, so many options, so many ways to create looks, so many moods that you can express through different products. I think makeup is one of the most fun ways to express yourself.” <br><br>– Rihanna</p>
    </div>
    <div class="filter-btns">
        <button type="button" class="filter-btn" id="all">All</button>
        <button type="button" class="filter-btn" id="Lipgloss-Heat-Glow">Lipgloss Heat Glow</button>
        <button type="button" class="filter-btn" id="Lipgloss-Cream-Gloss">Lipgloss Cream Gloss</button>
        <button type="button" class="filter-btn" id="Lipgloss-Limited-Edition">Lipgloss Limited-Edition</button>
    </div>
    <h1 class="bestsellers">Our Products</h1>
    <section class="bestsellers">
    <ProductCardComponent/>
    </section>
</template>
  
  