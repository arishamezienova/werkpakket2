<script>
    export default{
        data(){
            return{
                mainText: "New",
                nameGloss: "Champagne Bomb Gloss",
                subText: "Hybrid lip gloss and plumper delivers a hint of tint and fuller-looking lips.",
                subText2: "Give your lips an Instant Plump Job with Gloss Bomb. This lip luminizer and plumper hybrid delivers a hint of tint, and fuller-looking lips—thanks to an innovative Plump Job Complex. It’s the O.G. Gloss Bomb you love…but a few degrees hotter.",
                buttonText: "Shop now",

                defaultImage: ["src/assets/images/gloss/lipgloss - champ.jpg"],
                hoverImage: ["src/assets/images/gloss/close/lipgloss - champ - close.jpg"],
                image:["src/assets/images/gloss/lipgloss - champ.jpg"]
                   
                
            }
        }
    }
</script>


<template>
    <div class="container">
    <div class="colm-left">
        <img :src="image"
        @mouseover="image = hoverImage"
        @mouseleave="image = defaultImage">
        
    </div>
    <div class="colm-right">
        <div class="content">
            <h2 class="main-Text">{{ mainText }}</h2><br>
            <h1 class="name-Gloss">{{ nameGloss }}</h1> <br>
            <p class="subText">{{ subText }}</p>
            <p class="subText2">{{ subText2 }}</p> <br>
            <button class="shop-now" type="button"><a href="subpages/shop.html">{{ buttonText }}</a> </button>
        </div>
    </div>
</div>
</template>

<style>
.colm-left img{
    height: 600px;
              
}
</style>


