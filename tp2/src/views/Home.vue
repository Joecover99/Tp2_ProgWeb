<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <nav-bar/>
    <HelloWorld msg="Bienvenu sur l'API Films"/>
    <movies-carousel msg="Nos 3 Film en vedette"/>
    <Footer/>
  </div>
</template>

<script>
import MoviesCarousel from '../components/MoviesCarousel.vue';
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';

export default {
  name: 'Home',
  components: {
    MoviesCarousel,
    Footer,
    NavBar,
  
  },
}
</script>
