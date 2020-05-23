<template>
  
    <form @submit.prevent="submit">
        //Nom ----------------------------
        <div class="form-group" :class="{ 'form-group--error': $v.fName.$error }">
            <label class="form__label">Prenom</label>
            <input class="form__input" v-model.trim="$v.fName.$model"/>
        </div>
        <div class="error" v-if="!$v.fName.required">First name is required</div>
        <div class="error" v-if="!$v.fName.maxLength">First name is too long</div>
        <div class="error" v-if="!$v.fName.minLength">First name is too short</div>

        <div class="form-group" :class="{ 'form-group--error': $v.lName.$error }">
            <label class="form__label">Nom de famille</label>
            <input class="form__input" v-model.trim="$v.lName.$model"/>
        </div>
        <div class="error" v-if="!$v.lName.required">Last name is required</div>
        <div class="error" v-if="!$v.fName.maxLength">Last name is too long</div>
        <div class="error" v-if="!$v.fName.minLength">Last name is too short</div>


        //Username ------------------------
        <div class="form-group" :class="{ 'form-group--error': $v.username.$error }">
            <label class="form__label">Nom d'utilisateur</label>
            <input class="form__input" v-model.trim="$v.username.$model"/>
        </div>
        <div class="error" v-if="!$v.lName.required">UserName is required</div>
        <div class="error" v-if="!$v.fName.maxLength">UserName is too long</div>
        <div class="error" v-if="!$v.fName.minLength">UserName is too short</div>

        //Password -----------------------
        <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
            <label class="form__label">Mot de passe</label>
            <input class="form__input" type="password" v-model.trim="$v.password.$model"/>
        </div>
        <div class="error" v-if="!$v.lName.required">Password is required</div>
        <div class="error" v-if="!$v.fName.maxLength">Password is too long</div>
        <div class="error" v-if="!$v.fName.maxLength">Password is too short</div>

        <div class="form-group" :class="{ 'form-group--error': $v.passwordConfimation.$error }">
            <label class="form__label">Confirmation</label>
            <input class="form__input" type="password" v-model.trim="$v.passwordConfimation.$model"/>
        </div>
        <div class="error" v-if="!$v.lName.sameAsPassword">The password is not the same</div>

        //Email ----------------------------
        <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
            <label class="form__label">Courriel</label>
            <input class="form__input" v-model.trim="$v.email.$model"/>
        </div>
        <div class="error" v-if="!$v.lName.required">Email is required</div>
        <div class="error" v-if="!$v.fName.maxLength">Email is too short</div>
        <div class="error" v-if="!$v.fName.email">Courriel does not exist</div>

        //Button confirmation --------------
        <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>

        <p class="typo__p" v-if="submitStatus === 'OK'">Registration successful</p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Make sure everything is filled</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Pending for confirmation...</p>
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
