<template v-slot= default>
   
      <agile v-if="isActive" :autoplay="true" :navButtons="false" :dots="false" :centerMode="true" :initialSlide='0'>
        <div class="slide" v-for="movie in movies.data.slice(0,20)" :key="movie.id"> <!-- need to be 3 newest movies (sort3NewestMovies dans un array newestMovies) -->
            
                <h2> {{ movie.title }}</h2>
                <img :src="movie.image" alt="Affiche du film">
                <p>cote(pas fait)</p>
                <p> {{ sliceThis(movie.description) }} (...) </p>
                <button @click="onSelect(movie)">detail</button>
            
        </div>
    </agile>
    
</template>

<script>
import { VueAgile } from 'vue-agile'

export default { 
    
    components: {
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


        sliceThis(discription){
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