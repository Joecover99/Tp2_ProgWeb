<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Bienvenu sur l'API Films"/>
    <movies-carousel msg="Film en vedette"/>
    <Footer/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import MoviesCarousel from '../components/MoviesCarousel.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MoviesCarousel,
    Footer
  },
  data() {
    return {
      
    }
  },
}
</script>
