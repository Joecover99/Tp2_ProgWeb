<template>
    <div class="Carousel">
        <h1 class="carousel-head">{{ msg }}</h1>
        <carousel/>
    </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';

    export default {
        name: 'MouvieCarousel',
        components: {
            Carousel
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