
<script>
    export default{
        data(){
            return{
            }
        }
    }
</script>
<template>
     <header class="header">
        <a href="index.html" class="logo">Arisha</a>

        <input type="checkbox" id="check">
        <label for="check" class="icons">
            <i class="bx bx-menu" id="menu-icon"></i>
            <i class="bx bx-x" id="close-icon"></i>
           
        </label>
        <nav>
            <ul>
                <li class="link"><router-link to="/">Home</router-link></li>
                <li class="link"><router-link to="/about">About</router-link></li>
                <li class="link"><router-link to="/shop">Shop</router-link></li>
                <li class="link"><router-link to="/sign-up">Sign-up</router-link></li>
            </ul>
        </nav>
    </header>
</template>
