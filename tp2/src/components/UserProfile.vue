<template>
    <div>
        <h1> Profile </h1>
        <p><strong> First name: </strong> {{user.name}} </p>
        <button> edit name </button>
        <p><strong> Password </strong> </p>
        <button> change your password </button>
    </div>
</template>


<script>
import MoviesService from '../services/MoviesService.js'
import Vue from 'vue'
    export default {
        data() {
            return {
            }
         },
         create(){
            MoviesServices1.getUser(this.$route.params.user)
                .then(reponse =>{ 
                    this.user = reponse.data.user;
                })
         }
    }
</script>

<style lang="scss" scoped>

</style>