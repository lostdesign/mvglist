import Vue from 'vue'
import App from '~Components/App'
import router from './router'
import {store} from './store'

Vue.config.devtools = true
Vue.config.productionTip = false

Vue.filter('calcTime', (depTime) => {
  let now = Date.now();
  let diff = depTime - now;
  depTime = Math.floor(diff/1000/60);
  return depTime;
})

Vue.filter('formatTime', (time)=>{
  const dateFromTime = new Date(time);
  let formatedDate = dateFromTime.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
  return formatedDate;
})


const app = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
})