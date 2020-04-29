<template>
    <div>
        <h1>{{ movie.title }}</h1>
        <img :src= movie.image alt="photo">
        <p>{{ }}vote: (pas coder)</p>
        <p>{{ movie.description }}</p>
        <p>{{ movie.rating }}</p>
        <p>{{ movie.length }}</p>
        <p>{{ movie.release_year }}</p>
        <p>{{ }} actor: (pas coder)</p>
    </div>
</template>

<script>
import MoviesServices1 from '../services/MoviesService.js'

    export default {
        data() {
            return {
                error: null,
                movie: null,
            }
        },
        created () {
                MoviesServices1.getMovie(this.$route.params.id)
                .then(reponse =>{ 
                    this.movie = reponse.data.film;
                })
                
                .catch(error => {
                    this.error = error;
                })
        }
        
        
      
    }
</script>

<style lang="scss" scoped>

</style>