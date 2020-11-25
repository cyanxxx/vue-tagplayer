import Vue from 'vue'
import App from './App.vue'
import vueTagplayer from './lib/index.js'
Vue.use(vueTagplayer)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
