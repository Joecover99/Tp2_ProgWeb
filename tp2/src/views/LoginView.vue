<template>
    <div class="Login">
        <div :hidden="this.$parent.userIsAuth || this.$parent.userIsConnected">
            Login <input type="text" name="username" placeholder="Username" value="Utilisateur" v-model="login" maxlength="50" @keyup.enter="logIn">
            Password <input type="password" name="password" placeholder="Password" value="Mot De Passe" v-model="password" maxlength="50" @keyup.enter="logIn">
            <br>
            <button @click="logIn" >Log in</button>
            <p v-show="errorMessage">Wrong Loggin / Password</p>
        </div>
        <div v-show="this.$parent.userIsAuth || this.$parent.userIsConnected">
            <p>Welcome : {{ logged_user }}</p>
        </div> 
    </div>
</template>

<script>
    export default {
        name: "login",
    
        data() {
            return {
                login: "",
                password: "",
                logged_user: null,
                logged_pass: null,
                ADMIN_LOG: {
                    type: String,
                    default: "ADMIN"
                    },
                ADMIN_PASS: {
                    type: String,
                    default: "0000"
                    },
                errorMessage: false,
            }
        },

        methods: {
            logIn() {
                if (this.login == this.ADMIN_LOG.default && this.password == this.ADMIN_PASS.default || this.login == "user" && this.password == "pass") {
                    this.logged_user = this.login
                    this.logged_pass = this.password
                    this.errorMessage = false
                    if(this.logged_user ==this.ADMIN_LOG.default){
                        this.$emit('Login::userIsAuth', {loginResult: true})
                     }
                     else{
                        this.$emit('LoginU::userIsConnected', {loginResult: true})
                     }
                }
                else{
                    this.errorMessage = true 
                    return false
                }
                this.goto();
            },
            goto(){
                 this.$router.push({ name: "Home"});
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>