// import Vue from 'vue'
// import BadWeather from './BadWeather.vue'

// // Vue.config.productionTip = false

// // new Vue({
// //   render: h => h(BadWeather),
// // }).$mount('#app')

// export default BadWeather

import GoodWeather from './GoodWeather.vue'
import Vue from 'vue'

export default Vue.component("GoodWeather", GoodWeather)

export { GoodWeather };