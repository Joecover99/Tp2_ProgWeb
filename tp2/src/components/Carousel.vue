<template v-slot= default>
   
      <agile v-if="isActive" :autoplay="true" :navButtons="false" :dots="false" :centerMode="true" :initialSlide='0'>
        <div class="slide" v-for="movie in movies.data.slice(1)" :key="movie.id">
            <h2> {{ movie.title }}</h2>
            <img src=../assets/logo.png alt="Affiche du film">
            <div class="movieRating" >
                <star-rating :rating="overallStarRating" :read-only="true" v-bind:increment="0.5"></star-rating>
            </div>  
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