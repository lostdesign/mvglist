import Vue from 'vue'
import App from '~Components/App'

Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render (h) {
    return h(App)
  }
})