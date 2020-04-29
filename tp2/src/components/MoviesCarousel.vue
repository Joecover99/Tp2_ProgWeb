<template>
    <div class="Carousel">
        <h1 class="carousel-head">{{ msg }}</h1>
        <carousel/>
        <Footer/>
    </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import Footer from '../components/Footer.vue';

    export default {
        name: 'MouvieCarousel',
        components: {
            Carousel,
            Footer
        },
        props: {
            msg: {
                type: String,
                default: "Film en vedette"
            },
            data() {
                return {
                    mouvies:{
                        type: Array,
                        value:[]
                    },

                }
            },
        },
    }
</script>

<style lang="css" scoped>
.filter{
    padding: 10px;
}
.carousel-head { 
    font-family: fantasy;
    color: red;
    
}
.carousel-head:hover{ 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: orangered;
    
}
</style>