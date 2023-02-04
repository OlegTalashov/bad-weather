import Vue from 'vue'
import BadWeather from './BadWeather.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(BadWeather),
}).$mount('#app')
