import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Stocks from '@/components/Stocks';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/stocks',
      name: 'Stocks',
      component: Stocks,
    },
  ],
});
