// import Vue from 'vue'
// import BadWeather from './BadWeather.vue'

// // Vue.config.productionTip = false

// // new Vue({
// //   render: h => h(BadWeather),
// // }).$mount('#app')

// export default BadWeather

import BadWeather from './BadWeather.vue'
import Vue from 'vue'

export default Vue.component("BadWeather", BadWeather)

export { BadWeather };