<template v-slot= default>
   
      <agile v-if="isActive" :autoplay="true" :navButtons="false" :dots="false" :centerMode="true" :initialSlide='0'>
        <div class="slide" v-for="movie in movies.data.slice(0,3)" :key="movie.id">
            
                <h2>{{ movie.title }}</h2>
                <img :src="movie.image" alt="photo">
                <p>cote(pas fait)</p>
                <p>{{movie.description}}</p>
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
        onSelect(movie) {
            this.$router.push({ name: "movie", params: { id: movie.id} });
                           
        },

    },
    
    
    
}
</script>


<style lang="scss" scoped>

</style>