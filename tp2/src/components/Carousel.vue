<template v-slot= default>

      <agile v-if="isActive" :autoplay="true" :navButtons="false" :dots="false" :centerMode="true" :initialSlide='0'>
        <div class="slide" v-for="movie in movies.data.slice(0, 20)" :key="movie.id"> <!-- need to be 3 newest movies (sort3NewestMovies dans un array newestMovies) -->
            
                <h2> {{ movie.title }}</h2>
                <img :src="movie.image" alt="Affiche du film">
                <div class="movieRating" >
                    <star-rating v-model="rating"></star-rating>
                </div>
                <p> {{ sliceThis(movie.description) }} (...) </p>
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
        agile: VueAgile 
    },
    props: {
        movies: null,
        isActive: {
                type: Boolean,
                default: true
        }
    },
    methods: {

        split(){
            var trip = this.movies.pop(); 
            trip = this.movies.pop();
            trip = this.movies.pop();
            return trip; 
        },

        sliceDescription(discription){
            var tripDis = discription.slice(0,99);
            return tripDis;
        },

        onSelect(movie) {
            this.$router.push({ name: "movie", params: { id: movie.id} });
                           
        },

    },
    
    
    
}
</script>


<style lang="scss" scoped>

</style>