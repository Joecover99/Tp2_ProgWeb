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

        <!---  Movie Cover  --->
        <div class="form-group" :class="{ 'form-group--error': $v.mCover.$error }">
                <label class="form__label">Movie cover</label>
                <input class="form__input" v-model.trim="$v.mCover.$model"/>
        </div>
            <div class="error" v-if="!$v.mCover.required">Movie cover is required</div>

        <!---  Synopsis  --->
        <div class="form-group" :class="{ 'form-group--error': $v.snyopsis.$error }">
                <label class="form__label">Synopsis</label>
                <input class="form__input" v-model.trim="$v.snyopsis.$model"/>
        </div>
            <div class="error" v-if="!$v.snyopsis.required">Synopsis is required</div>
            <div class="error" v-if="!$v.snyopsis.maxLength">Synopsis is too long</div>
            <div class="error" v-if="!$v.snyopsis.minLength">Synopsis is too short</div>
        <!---  Rate         --->
        <div class="form-group" :class="{ 'form-group--error': $v.rated.$error }">
                <label class="form__label">Rated</label>
                <input class="form__input" v-model.trim="$v.rated.$model"/>
        </div>

        <!---  Publish Date --->
        <div class="form-group" :class="{ 'form-group--error': $v.date.$error }">
                <label class="form__label">Publish date</label>
                <input class="form__input" type="datetime" v-model.trim="$v.date.$model"/>
        </div>
            <div class="error" v-if="!$v.date.required">Publish date is required</div>

        <!---  acteur       --->
        <!---  button       --->
        <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>

        <p class="typo__p" v-if="submitStatus === 'OK'">Registration successful</p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Make sure everything is filled</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Pending for confirmation...</p>

    </form>
</template>

<script>
import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

export default {
    data() {
        return {
        title: '',
        mCover: '',
        snyopsis: '',
        rated: '',
        date: '',
        acteur: '',
        submitStatus: null
        }
    },
    validations: {
        title: {
            required,
            maxLength: maxLength(50),
            minLength: minLength(3)
        },
        mCover: {
            required,
            maxLength: maxLength(50),
            minLength: minLength(3)
        },
        snyopsis: {
            required,
            minLength: minLength(3),
        },
        rated: {
            required,
        },
        date: {
            required,
        },
        acteur: {
            required,
        }
    },
   methods: {
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  }
}
</script>

<style>

</style>