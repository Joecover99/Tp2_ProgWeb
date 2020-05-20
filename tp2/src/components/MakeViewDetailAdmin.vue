<template>
    <div>
        <h1>{{ movie.title }}</h1>
            <img :src= movie.image alt="Affiche du film">
            <p><strong>published : </strong>{{ movie.release_year }}</p>
            <p><strong>Time : </strong>{{ movie.length }} minutes</p>
            <p><strong>Rating : </strong>{{movie.rating}} </p>
        <h3>Actors:</h3>
            <div id="actors" v-for="actor in actors" :key="actor.id" > 
                <hr>
                <p><strong>Last Name : </strong> {{actor.last_name}}</p>
                <p><strong>First Name : </strong>{{actor.first_name}}</p>
                <p><strong>Birth Date : </strong> {{actor.birthdate}}</p>
            </div>  
        <h3> Synopsis </h3>
            <p> {{movie.description}} </p>
    </div>
</template>

<script>
import MoviesServices1 from '../services/MoviesService.js'

    export default {
         data() {
            return {
                error: null,
                movie: null,
                actors: null,
                score: null,
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
        }
    }
</script>

<style lang="scss" scoped>
.loginhref{
    float: right;
    padding-right: 5%;
}

.movieRating{
    margin-left: 44%;
    margin-right: 56%; 
    margin-top: 1%;
}
.comment-form{
    display: block;
    width: 80%;
    margin: auto;
}

textarea{
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 7px;
    height: 70px;
    font-family: Verdana, Helvetica, sans-serif;
    padding: 5px;
}

.author1{
     width: 100%;
    border: 2px solid #ccc;
    border-radius: 7px;
    height: 20px;
    font-family: Verdana, Helvetica, sans-serif;
    padding: 5px;
}

input{
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 5px;
}

button{
    background: #333;
    color: #ccc;
    border: 0;
    padding: 5px;
    cursor: pointer;
}

#editButton{
    background: rgb(116, 116, 116);
    float: right;
    
}

/*Comment Box*/

.comments-box{
    width: 90%;
    margin: auto;
    padding: 20px 0;
    border-bottom: 1px solid #000;
}

.delete{
    background: rgb(0, 0, 0);
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    display: inline;
    padding: 3px;
}

.author{
    margin: 10px 0;
    font-weight: bold;
}
</style>