import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAgile from 'vue-agile'
import vue2Filters from 'vue2-filters'

Vue.use(vue2Filters)

Vue.use(VueAgile)

Vue.config.productionTip = false

Vue.use(require('vue-moment'));

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
