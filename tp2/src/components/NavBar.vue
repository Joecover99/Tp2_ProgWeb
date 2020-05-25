<template>
    <div class="Navbar">
        <div class="searchBar">
            <Strong>Recherche: <input v-model="Reshearch"/></Strong>
        </div>
        <div :hidden='isHidden(Reshearch)'>
            <h4>Resultat</h4>
            <hr>
            <nav-bar-resume :items='movies' v-bind:keyword="Reshearch"/>
            <hr>
        </div>
    </div>
</template>

<script>
import MoviesServices2 from '../services/MoviesService.js';
import NavBarResume from '../components/NavBarResume.vue';

    export default {
        components: {
            NavBarResume
        },

        data() {
            return {
                Reshearch: "",
                movies:[],
                ischange: {
                    type: Boolean,
                    default: false
                },
            }
        },

        created () {
                this.loading = true;
                MoviesServices2.getMovies()
                .then(reponse =>{ 
                    this.movies = reponse.data.data;
                })
                
                .catch(error => {
                    this.error = error;
                });

         },
        
        methods: {
            isHidden(Reshearch) {
                if(Reshearch == ""){
                    this.ischange = true
                }
                else if(Reshearch.length >= 3){
                     this.ischange = false
                }
                return this.ischange;
            },
        
        }
    }
</script>

<style lang="scss" scoped>

.searchBar{
    margin-top: 1%;
}

</style>