<template>
    <div class="movieDetail">
        <make-view-detail/>
        <Footer/>
    </div>
</template>

<script>
// import MoviesServices1 from '../services/MoviesService.js'
import Footer from '../components/Footer.vue'
import MakeViewDetail from '../components/MakeViewDetail.vue'

    export default {
        components: {
            Footer,
            MakeViewDetail,
        },
    }
</script>

<style lang="scss" scoped>

</style>