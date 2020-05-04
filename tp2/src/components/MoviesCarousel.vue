<template>
    <div class="movieCarousel">
        <h1 class="carousel-head">{{ msg }}</h1>
        <carousel v-bind:movies="movies" :isActive="onLoad"/>
    </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import MoviesServices from '../services/MoviesService.js';


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
        },
        
            data() {
                return {
                    movies: [],
                    error: null,
                    loading: false,
                    isActive: {
                        type: Boolean,
                        value: false
                    },

                }
            },
            computed: {
                onLoad() {
                    if(this.loading == false){
                        return this.isActive
                    }
                    return false
                }
            },
            created () {
                this.loading = true;
                MoviesServices.getMoviesLast()
                .then(reponse =>{ 
                    this.movies = reponse.data;
                })
                
                .catch(error => {
                    this.error = error;
                })
                .finally(() => this.loading = false);

            },
        methods: {
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