<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld/>
    <movies-carousel msg="Film en vedette"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import MoviesCarousel from '../components/MoviesCarousel.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MoviesCarousel
  },
  data() {
    return {
      
    }
  },
}
</script>
