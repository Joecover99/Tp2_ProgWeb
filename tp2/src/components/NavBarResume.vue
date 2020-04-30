<template>
    <div class="NavBarResume">
        <div v-for=" movie in searchMovies" :key="movie.id">

                <h2>{{ movie.title }}</h2>
                <img :src="movie.image" alt="Affiche du film">
                <p>cote(pas fait)</p>
                <p>Synopsis: {{ movie.description }}</p>
                <p>Rating: {{movie.rating }}</p>
                <p> manque logique pour Affiche les 100 prem carac avec (...)</p>
                <p>Durée: {{movie.length }} Mins</p>
                <button @click="onSelect(movie)">See more Details</button>

        </div>
    </div>
</template>

<script>
    export default {
        
        data() {

            return {
              
                }
            },

            props: {
                items: {
                        type: [],
                        default: null,
                    },
                keyword: {
                    type: String,
                    default: "",
                },
            },
            computed: {
                    searchMovies(){
                        let filtered = this.items.data;
                        if (this.keyword) {
                        filtered = this.items.data.filter(
                            m => m.title.toLowerCase().indexOf(this.keyword) > -1
                        );
                        }
                        return filtered;
                    }
                },
            methods: {
            onSelect(movie) {
                this.$router.push({ name: "movie", params: { id: movie.id} });
                            
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>