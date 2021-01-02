import Vue from 'vue'
import App from './App.vue'

import { router } from '@/routes/index.js'
// import store from '@/stores/index.js'
Vue.config.productionTip = false

import "normalize.css"

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
