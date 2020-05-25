<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home | </router-link> 
      <router-link to="/modify" v-show="userIsAuth || userIsConnected" >modify | </router-link> 
      <router-link to="/createUser" :hidden="userIsAuth || userIsConnected">Register | </router-link> 
      <router-link to="/filmsAdd" v-show="userIsAuth">Add Movie | </router-link> 
      <router-link to="/login" :hidden="userIsAuth || userIsConnected">Login | </router-link> 
      <button @click="userIsAuth = false" v-show="userIsAuth">Logout</button>
    <button id="logout" @click="userIsConnected = false" v-show="userIsConnected">Logout</button>
      
    </div>
    <router-view @Login::userIsAuth="changeLoginResult" @LoginU::userIsConnected="changeLoginUResult"/>
  </div>
</template>

<script>
    export default {

      data() {
        return {
          userIsAuth: false,
          userIsConnected: false,
        }
      },

       methods: {
          changeLoginResult({loginResult}) {
            this.userIsAuth = loginResult
          },

          changeLoginUResult({loginResult}) {
            this.userIsConnected = loginResult
          }
       },

       computed: {
          isLogged() {
            return this.userIsAuth
          },
          isRegister() {
            return this.userIsConnected
          },

        }, 
    }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:rgb(238, 235, 235);
}

#nav {
  padding: 30px;
  background:blanchedalmond;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#logout{
    font-weight: bold;
    background: #333;
    color: #ccc;
    border: 0;
    padding: 2px;
}
</style>
