<template>
    <div>
        <h1>{{ movie.title }}</h1>
            <img :src= movie.image alt="Affiche du film">
            <div class="movieRating" >
                <star-rating :rating="overallStarRating"  :read-only="true" v-bind:increment="0.5"></star-rating>
            </div>
            <p><strong>overall Rating: </strong>{{overAllRating}}/ 100</p>
            <p><strong>number of votes : </strong>{{countNumberOfCritics}}</p>
            <p><strong>Description :</strong> {{ movie.description }}</p>
            <p><strong>Rated : </strong>{{ movie.rating }}</p>
            <p><strong>Time : </strong>{{ movie.length }} minutes</p>
            <p><strong>published : </strong>{{ movie.release_year }}</p>
        <h3>Actors:</h3>
            <div id="actors"  v-for="actor in actors" :key="actor.id" > 
                <hr>
                <p><strong>Last Name : </strong> {{actor.last_name}}</p>
                <p><strong>First Name : </strong>{{actor.first_name}}</p>
                <p><strong>Birth Date : </strong> {{actor.birthdate}}</p>
            </div>    
        <Comment v-bind:critics="critics" v-show="this.$parent.$parent.userIsConnected"/>          
    </div>
</template>

<script>
import MoviesServices1 from '../services/MoviesService.js'
import MoviesServices2 from '../services/MoviesService.js'
import StarRating from 'vue-star-rating'
import Comment from '../components/Comments.vue'

    export default {
        components:{
            StarRating,
            Comment
        },

         data() {
            return {
                error: null,
                movie: null,
                actors: null,
                score: null,
                critic_first_name: null,
                critic_last_name: null,
                critics: [],
                comments: [],
            }
         },
         
        computed:{ 
            countNumberOfCritics(){
                return this.critics.length;                 
            },
            overAllRating(){
                if(this.critics.length < 5){
                    return "N/D";
                }
                else{
                    let overallScore = 0;
                    this.critics.forEach(c => overallScore += Number(c.score));
                    return (overallScore /= this.critics.length).toPrecision(3);
                }
            },
            overallStarRating(){
                if(this.critics.length < 5){
                    return 0;
                }
                else{
                    let overallScore = 0;
                    let dividedScoreBy = 20;
                    this.critics.forEach(c => overallScore += Number(c.score));
                    overallScore = (overallScore /= this.critics.length).toPrecision(3);
                    overallScore /=  dividedScoreBy;
                    overallScore = Math.round(2*overallScore) / 2                  
                    return overallScore;
                }
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
            MoviesServices1.getMovieActors(this.$route.params.id)
            .then(reponse =>{
                this.actors = reponse.data;
            });
            MoviesServices2.getMovie(this.$route.params.id)
            .then(reponse =>{
                this.critics = reponse.data.critic;
                console.log(reponse.data.critic);
            });
            MoviesServices2.getComments(this.$route.params.id)
            .then(reponse =>{
                this.comments = reponse.data.bpi;
                console.log(reponse.data.bpi);
            });
        }
    }
</script>

<style lang="scss" scoped>
.movieRating{
    margin-left: 44%;
    margin-right: 56%; 
    margin-top: 1%;
}
</style>