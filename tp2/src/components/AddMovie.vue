<template>
    <form @submit.prevent="submit">
        <!---  Titre        --->
        <div class="form-group" :class="{ 'form-group--error': $v.title.$error }">
                <label class="form__label">Title</label>
                <input class="form__input" v-model.trim="$v.title.$model"/>
        </div>
            <div class="error" v-if="!$v.title.required">Title is required</div>
            <div class="error" v-if="!$v.title.maxLength">Title is too long</div>
            <div class="error" v-if="!$v.title.minLength">Title is too short</div>

        <!---  Synopsis     --->
        <div class="form-group" :class="{ 'form-group--error': $v.synopsis.$error }">
                <label class="form__label">Synopsis</label>
                <input class="form__input" v-model.trim="$v.synopsis.$model"/>
        </div>
            <div class="error" v-if="!$v.synopsis.required">Synopsis is required</div>
            <div class="error" v-if="!$v.synopsis.minLength">Synopsis is too short</div>

        <!---  Length       --->
        <div class="form-group" :class="{ 'form-group--error': $v.length.$error }">
                <label class="form__label">Length</label>
                <input class="form__input" v-model.trim="$v.length.$model"/>
        </div>
            <div class="error" v-if="!$v.length.required">Length is required</div>

        <!---  Publish Date --->
        <div class="form-group" :class="{ 'form-group--error': $v.date.$error }">
                <label class="form__label">Publish date</label>
                <input class="form__input" type="datetime" max:2020 v-model.trim="$v.date.$model"/>
        </div>
            <div class="error" v-if="!$v.date.required">Publish date is required</div>

        <!---  button       --->
        <button class="button" type="submit" >Submit!</button>


    </form>
</template>

<script type="text/javascript" src="js/jquery.validate.min.js"></script>
<script>

import MoviesService from '../services/MoviesService.js'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

export default {
    data() {
        return {
            title: null,
            
            synopsis: null,
            rated: null,
            date: null,
            length: null,
            language: null,
            ratings: null,
            languages: null
        }
    },
    validations: {
        title: {
            required,
            maxLength: maxLength(50),
            minLength: minLength(3)
        },
        synopsis: {
            required,
            minLength: minLength(3),
        },
        rated: {
            required,
        },
        date: {
            required,
        },
        length: {
            required
        },
        language: {
            required
        },
    },
    created:{
        onLoad(){
            this.ratings = MoviesService.getRatings()
            this.languages = MoviesService.getLanguage()
        },
    },
   methods: {
    submit() {
     
      this.$v.$touch()
      if (this.$v.$invalid) {
           console.log('ca marche pas')
         
      } else {
        MoviesService.createMovie(this.title, this.date, this.length, this.synopsis, this.rated, this.language)
    
      }
    }
  }
}
</script>