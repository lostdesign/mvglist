import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '~Components/Dashboard.vue'
import Settings from '~Components/Settings.vue'

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'Dashboard',
    title: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/settings',
    name: 'settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '*',
    redirect: { name: 'app' },
  },
];

export default new VueRouter({
  routes,
});