<template v-slot= default>
   
      <agile v-if="isActive" :autoplay="true" :navButtons="false" :dots="false" :centerMode="true" :initialSlide='0'>
        <div class="slide" v-for="movie in movies.data.slice(1)" :key="movie.id"> <!-- need to be 3 newest movies (sort3NewestMovies dans un array newestMovies) -->
            
                <h2> {{ movie.title }}</h2>
                <img :src="movie.image" alt="Affiche du film">
                <p>{{cote()}}</p>
                <p> {{ sliceThis(movie.description) }} (...) </p>
                <button @click="onSelect(movie)"><strong>details</strong></button>
            
        </div>
    </agile>
    
</template>

<script>
import { VueAgile } from 'vue-agile'

export default { 
    
    components: {
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

        cote(){
            var score;
            if(this.critics.length > 0){
                for(this.critics.score in this.critics){
                    score += this.critics.score
                }
                score = score / this.critics.length;
            }
            
            return score;
        },

        sliceThis(discription){
            var tripDis = discription.slice(0,99);
            return tripDis;
        },

        onSelect(movie) {
            this.$router.push({ name: "movie", params: { id: movie.id} });
                           
        },

    },
    function:{

    }
    
    
}
</script>


<style lang="scss" scoped>

</style>