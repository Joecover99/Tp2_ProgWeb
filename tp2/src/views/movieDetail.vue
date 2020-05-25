<template>
    <div class="movieDetail">
        <make-view-detail/>
        <Footer/>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import MakeViewDetail from '../components/MakeViewDetail.vue'

    export default {
        components: {
            Footer,
            MakeViewDetail,
        },
    }
</script>

<style scoped>
</style>