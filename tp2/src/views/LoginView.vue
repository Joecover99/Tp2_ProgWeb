<template>
    <div class="Login">
        Login <input type="text" name="username" placeholder="Username">
        Mot De Passe <input type="password" name="password" placeholder="Password">
        <br>
      <button @click="logIn">Log in</button>
    </div>
</template>

<script>
    export default {
        name: "login",
        
        data() {
            return {
                // login,
                // password,
            }
        },
        methods: {
            logIn() {
            this.$emit('Login::userIsAuth', {loginResult: true})
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>