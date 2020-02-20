import Vue from 'vue';
import VueRouter from 'vue-router';
// eslint-disable-next-line no-unused-vars
import Home from '../views/Home.vue';
import LogIn from '../views/LoginPage.vue';
import Management from '../views/Management.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ '../views/CSRanalysis.vue')
  },
  {
    path: '/Management',
    name: 'Management',
    component: Management
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/account',
    name: 'account',
    component: () => import( /* webpackChunkName: "about" */ '../views/CSRanalysis.vue')
  }
];

const router = new VueRouter({
  routes,
})

export default router;