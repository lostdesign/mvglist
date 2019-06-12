import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../components/Dashboard.vue'
import Settings from '../components/Settings.vue'

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