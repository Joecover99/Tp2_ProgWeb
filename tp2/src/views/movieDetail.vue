<template>
    <div class="movieDetail">
        <h1>{{ movie.title }}</h1>
        <img :src= movie.image alt="Affiche du film">
        <p>{{ }}vote: (pas coder) etoile grise si pas de 5 crit</p>
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
        <Footer/>
    </div>
</template>

<script>
import MoviesServices1 from '../services/MoviesService.js'
import Footer from '../components/Footer.vue'

    export default {
        components: {
            Footer,
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

</style>