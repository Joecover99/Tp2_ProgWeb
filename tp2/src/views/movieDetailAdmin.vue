<template>
    <div class="movieDetailAdmin">
        <make-view-detailAdmin/>
        <Footer/>
    </div>
</template>

<script>
// import MoviesServices1 from '../services/MoviesService.js'
import Footer from '../components/Footer.vue'
import MakeViewDetailAdmin from '../components/MakeViewDetailAdmin.vue'

    export default {
        components: {
            Footer,
            MakeViewDetailAdmin,
        },
    }
</script>

<style scoped>
</style>