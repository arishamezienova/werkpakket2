<script>
 export default{
        data(){
            return{
                imageRihanna: ["src/assets/images/rihanna.png"],
                   
            }
        }
    }
</script>

<template>
    <section class="about">
    <div class="about-left">
        <img :src="imageRihanna" alt="Picture of rihanna - Fenty Beauty">
    </div>
    <div class="about-right">
        <h1>"MAKEUP IS THERE FOR YOU TO PLAY WITH. IT'S THERE FOR YOU TO HAVE FUN WITH. IT SHOULD NEVER FEEL LIKE PRESSURE, AND IT SHOULD NEVER FEEL LIKE A UNIFORM."</h1>
        <p>- RIHANNA <br>
            FOUNDER, CEO & AND OWNER OF FENTY BEAUTY</p>
    </div>
</section>
</template>