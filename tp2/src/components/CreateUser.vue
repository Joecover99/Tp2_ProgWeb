<template>
  
    <form @submit.prevent="submit">
        //Nom ----------------------------
        <div class="form-group" :class="{ 'form-group--error': $v.fName.$error }">
            <label class="form__label">Prenom</label>
            <input class="form__input" v-model.trim="$v.fName.$model"/>
        </div>
        <div class="error" v-if="!$v.fName.required">Prenom Requit</div>
        <div class="error" v-if="!$v.fName.maxLength">Prenom trop long</div>
        <div class="error" v-if="!$v.fName.minLength">Prenom trop coure</div>

        <div class="form-group" :class="{ 'form-group--error': $v.lName.$error }">
            <label class="form__label">Nom de famille</label>
            <input class="form__input" v-model.trim="$v.lName.$model"/>
        </div>
        <div class="error" v-if="!$v.lName.required">Nom de famille requit</div>
        <div class="error" v-if="!$v.fName.maxLength">Nom de famille trop long</div>
        <div class="error" v-if="!$v.fName.minLength">Nom de famille trop coure</div>


        //Username ------------------------
        <div class="form-group" :class="{ 'form-group--error': $v.username.$error }">
            <label class="form__label">Nom d'utilisateur</label>
            <input class="form__input" v-model.trim="$v.username.$model"/>
        </div>
        <div class="error" v-if="!$v.lName.required">Nom d'utilisateur requit</div>
        <div class="error" v-if="!$v.fName.maxLength">Nom d'utilisateur trop long</div>
        <div class="error" v-if="!$v.fName.minLength">Nom d'utilisateur trop coure</div>

        //Password -----------------------
        <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
            <label class="form__label">Mot de passe</label>
            <input class="form__input" v-model.trim="$v.password.$model"/>
        </div>
        <div class="error" v-if="!$v.lName.required">mot de passe requit</div>
        <div class="error" v-if="!$v.fName.maxLength">mot de passe trop long</div>
        <div class="error" v-if="!$v.fName.maxLength">mot de passe trop coure</div>

        <div class="form-group" :class="{ 'form-group--error': $v.passwordConfimation.$error }">
            <label class="form__label">Confirmation</label>
            <input class="form__input" v-model.trim="$v.passwordConfimation.$model"/>
        </div>
        <div class="error" v-if="!$v.lName.sameAsPassword">confirmation doit etre le meme</div>

        //Email ----------------------------
        <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
            <label class="form__label">Courriel</label>
            <input class="form__input" v-model.trim="$v.email.$model"/>
        </div>
        <div class="error" v-if="!$v.lName.required">Courriel requit</div>
        <div class="error" v-if="!$v.fName.maxLength">Courriel trop long</div>
        <div class="error" v-if="!$v.fName.email">Courriel n'existe pas</div>

        //Button confirmation --------------
        <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>

        <p class="typo__p" v-if="submitStatus === 'OK'">Inscription reussi</p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Assure vous que tout est bien remplit</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">En confimation...</p>
    </form>

</template>

<script>
import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
        name: '',
        username: '',
        password: '',
        passwordConfimation: '',
        email: '',
        submitStatus: null
        }
    },
    validations: {
        fName: {
            required,
            maxLength: maxLength(50),
            minLength: minLength(3)
        },
        lName: {
            required,
            maxLength: maxLength(50),
            minLength: minLength(3)
        },
        username: {
            required,
            maxLength: maxLength(50),
            minLength: minLength(3),
            isUnique(){
                
            }
        },
        password: {
            required,
            maxLength: maxLength(50),
            minLength: minLength(6)
        },
        passwordConfimation: {
            sameAsPassword: sameAs('password')
        },
        email: {
            required,
            maxLength: maxLength(50),
            email
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
