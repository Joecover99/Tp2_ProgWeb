<template>
    <div>
        <h1>{{ movie.title }}</h1>
        <img :src= movie.image alt="Affiche du film">
        <div class="movieRating" >
            <star-rating v-model="rating"></star-rating>
        </div>
        <p><strong>Description :</strong> {{ movie.description }}</p>
        <p><strong>Rated : </strong>{{ movie.rating }}</p>
        <p><strong>Time : </strong>{{ movie.length }} minutes</p>
        <p><strong>published : </strong>{{ movie.release_year }}</p>
        <h3>Acteurs:</h3>
            <div id="actors"  v-for="actor in actors" :key="actor.id" > 
                <hr>
                <p><strong>Last Name : </strong> {{actor.last_name}}</p>
                <p><strong>First Name : </strong>{{actor.first_name}}</p>
                <p><strong>Birth Date : </strong> {{actor.birthdate}}</p>
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
    width: 100%;
    margin-left: 44%;
    margin-right: 56%; 
    margin-top: 1%;
}

</style>