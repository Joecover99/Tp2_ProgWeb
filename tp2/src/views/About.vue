<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-show="this.$parent.userIsAuth">And You Are The Admin 's easter egg :P</h2>
  </div>
</template>

