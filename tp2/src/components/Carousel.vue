<template v-slot= default>
   
      <agile v-if="isActive" :autoplay="true" :navButtons="false" :dots="false" :centerMode="true" :initialSlide='0'>
        <div class="slide" v-for="movie in movies.data.slice(1)" :key="movie.id"> <!-- need to be 3 newest movies (sort3NewestMovies dans un array newestMovies) -->
            <h2> {{ movie.title }}</h2>
            <img :src="movie.image" alt="Affiche du film">
            <div class="movieRating" >
                <star-rating :rating="overallStarRating" :read-only="true" v-bind:increment="0.5"></star-rating>
            </div>  
            <p><strong>overall Rating: </strong>{{overAllRating}}/ 100</p>
            <p> {{ sliceThis(movie.description) }} <strong v-if="movie.description.length > 100" > (...) </strong></p>
            <button @click="onSelect(movie)"><strong>details</strong></button>
        </div>
    </agile>
</template>

<script>
import { VueAgile } from 'vue-agile'
import StarRating from 'vue-star-rating'
export default {    
    components: {
        StarRating,
        agile: VueAgile,
        
    },
    props: {
        movies: null,
        isActive: {
                type: Boolean,
                default: true
        }
    },
    computed:{ 
       /* overAllRating(){
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
            },*/
        }, 
    methods: {

        sliceThis(discription){
            var tripDis = discription.slice(0,100);
            return tripDis;
        },
        

        onSelect(movie) {
            if (this.$parent.$parent.$parent.userIsAuth == true) {
                this.$router.push({ name: "movie2", params: { id: movie.id} });
            }
            else{
                 this.$router.push({ name: "movie", params: { id: movie.id} });
            }               
        },

    },
}
</script>

<style lang="scss" scoped>
.movieRating{
    margin-left: 44%;
    margin-right: 56%; 
    margin-top: 1%;
}
</style>