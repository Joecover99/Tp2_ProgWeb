<template>
    <div class="NavBarResume">
      
        <div v-for=" movie in searchMovies" :key="movie.id">
                <h2 @click="onSelect(movie)">{{ movie.title }}</h2>
                <img  src=../assets/logo.png @click="onSelect(movie)"  alt="Affiche du film">
                <div class="movieRating" >
                    <star-rating :rating="overallStarRating" :read-only="true" v-bind:increment="0.5"></star-rating>
                </div>
                <p>Synopsis: {{ movie.description.slice(0,100) }} <strong v-if="movie.description.length > 100"> (...) </strong></p>
                <p>Rating: {{movie.rating }}</p>
                <p>Durée: {{movie.length }} minutes</p>
                <button @click="onSelect(movie)">See more Details</button>
        </div>
        <p :hidden="isNoResult">Aucun Resultat Trouvé</p>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

    export default {
        components:{
            StarRating,
        },
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
                       
                        let filtered = this.items;
                        if (this.keyword != "") {
                        filtered = this.items.filter(
                            m => m.title.toLowerCase().indexOf(this.keyword) > -1
                        );
                        }
                        return filtered;
                        
                    },

                    isNoResult(){
                        if(this.keyword != "" && this.searchMovies.length == 0){
                            return true
                        }
                        return false
                    }
                },
            methods: {
             onSelect(movie) {
            if (this.$parent.$parent.$parent.userIsAuth == true) {
                this.$router.push({ name: "movie2", params: { id: movie.id} });
            }
            else{
                 this.$router.push({ name: "movie", params: { id: movie.id} });
            }               
        },
        }
    }
</script>

<style lang="scss" scoped>
   .movieRating{
    margin-left: 44%;
    margin-right: 56%; 
    margin-top: 1%;
}
</style>