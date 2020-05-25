<template>
    <div class="movieDetailAdmin">
        <make-view-detailAdmin/>
        <Footer/>
    </div>
</template>

<script>
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