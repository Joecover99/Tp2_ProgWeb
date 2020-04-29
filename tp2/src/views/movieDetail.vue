<template>
    <div>
        <h1>{{ movie.id }}</h1>
    </div>
</template>

<script>
import MoviesServices1 from '../services/MoviesService.js'

    export default {
        data() {
            return {
               movie: null,
               loading: false,
            }
        },
        created () {
                this.loading = true;
                MoviesServices1.getMovie(this.$route.params.id)
                .then(reponse =>{ 
                    this.movie = reponse.data.film;
                })
                
                .catch(error => {
                    this.error = error;
                })
                .finally(() => this.loading = false);
        }
        
        
      
    }
</script>

<style lang="scss" scoped>

</style>