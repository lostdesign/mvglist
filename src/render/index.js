import Vue from 'vue'
import App from './components/App'
import router from './router'
import {store} from './store'

import './assets/tailwind.css';

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

Vue.filter('convertLineType', (line) => {
  const lineTypes = {
    'u': 'U',
    's': 'S',
    'b': 'B'
  }

  return lineTypes[line];
})


const app = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
})