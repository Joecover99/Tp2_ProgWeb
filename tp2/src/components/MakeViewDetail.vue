<template>
    <div>
        <h1>{{ movie.title }}</h1>
        <img :src= movie.image alt="Affiche du film">
        <div class="movieRating" style="width: 100%;" ><star-rating v-model="rating" style="width: 100%;"></star-rating></div>
        <p>{{ movie.description }}</p>
        <p>{{ movie.rating }}</p>
        <p>{{ movie.length }} minutes</p>
        <p>{{ movie.release_year }}</p>
        <h3>Acteurs:</h3>
            <div id="actors"  v-for="actor in actors" :key="actor.id" > 
                <hr>
                <p>Nom: {{actor.last_name}}</p>
                <p>Prenom: {{actor.first_name}}</p>
                <p>Date de naissance: {{actor.birthdate}}</p>
            </div>
    </div>
</template>

<script>
import MoviesServices1 from '../services/MoviesService.js'
import StarRating from 'vue-star-rating'
    export default {
        components:{
            StarRating
        },
         data() {
            return {
                error: null,
                movie: null,
                actors: null,
            }
        },
        created () {
                MoviesServices1.getMovie(this.$route.params.id)
                .then(reponse =>{ 
                    this.movie = reponse.data.film;
                     console.log(reponse.data.film);
                })
                
                .catch(error => {
                    this.error = error;
                })
                MoviesServices1.getMovieActors(this.$route.params.id)
                .then(reponse =>{
                    this.actors = reponse.data;
                })
        }
    }
</script>

<style lang="scss" scoped>
.movieRating{
    margin-left: 43%;
    margin-right: 57%; 
    margin-top: 1%;
}

</style>