<template>
    <div class="NavBarResume">
        <div v-for=" movie in searchMovies" :key="movie.id">

                <h2>{{ movie.title }}</h2>
                <img :src="movie.image" alt="Affiche du film">
                <p>cote(pas fait)</p>
                <p>{{ movie.description }}</p>
                <p> manque logique pour Affiche les 100 prem carac avec (...)</p>
                <button @click="onSelect(movie)">detail</button>

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
    }
</script>

<style lang="scss" scoped>

</style>