<template>
   
      <agile :autoplay="true" :navButtons="false" :dots="false">
        <div class="slide1">
            <h3>slide 1</h3>
            <h2>Titre: {{}}</h2>
            <img src="../assets/logo.png" alt="photo"> 
            <!-- a changer pour avoir lien de limage provenant de lapi -->
            <p>cote membre: {{}}</p>
            <p>synop.:{{}}</p>
            <button>Detail</button>
        </div>
        
        <div class="slide2">
            <h3>slide 2</h3>
              <h2>Titre: {{}}</h2>
            <img src="../assets/logo.png" alt="photo"> 
            <!-- a changer pour avoir lien de limage provenant de lapi -->
            <p>cote membre: {{}}</p>
            <p>synop.:{{}}</p>
            <button>Detail</button>
        </div>
    </agile>
    
</template>

<script>
import { VueAgile } from 'vue-agile'

export default { 
    components: {
        agile: VueAgile 
    },
    
    
}
</script>


<style lang="scss" scoped>

</style>