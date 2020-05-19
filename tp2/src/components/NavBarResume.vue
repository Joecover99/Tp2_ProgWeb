<template>
    <div class="NavBarResume">
        <div :hidden='isHidden()'>
                <p>Aucun Resultat trouver</p>
        </div>
        <div v-for=" movie in searchMovies" :key="movie.id">
                <h2 @click="onSelect(movie)">{{ movie.title }}</h2>
                <img :src="movie.image" @click="onSelect(movie)"  alt="Affiche du film">
                <p>cote(pas fait)</p>
                <p>Synopsis: {{ movie.description.slice(0,100) }}</p>
                <p>Rating: {{movie.rating }}</p>
<<<<<<< HEAD
=======
                <p> manque logique pour Affiche les 100 prem carac avec <strong v-if="movie.description.length > 100"> (...) </strong></p>
>>>>>>> master
                <p>Durée: {{movie.length }} Mins</p>
                <button @click="onSelect(movie)">See more Details</button>
        </div>
        <p :hidden="isNoResult">Aucun Resultat</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ischange: {
                    type: Boolean,
                    default: false
                },
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
                    },

                    isNoResult(){
                        if(this.keyword != "" && this.searchMovies.length == 0){
                            return false
                        }
                        return true
                    }
                },
            methods: {
            onSelect(movie) {
                this.$router.push({ name: "movie", params: { id: movie.id} });
                            
            },

            isHidden(Reshearch) {
                if(Reshearch == null){
                    this.ischange = true
                }
                else{
                     this.ischange = false
                }
                return this.ischange
            }
        }
    }
</script>

<style lang="scss" scoped>
   
</style>