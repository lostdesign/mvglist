import Vue from 'vue';
import Router from 'vue-router';
import App from '@/components/App';

const routes = [
  {
    path: '/settings',
    name: 'settings',
    title: 'Settings',
    component: App,
  },
  {
    path: '*',
    redirect: { name: 'settings' },
  },
];

export default new Router({
  routes,
});