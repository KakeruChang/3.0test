import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';

import Dashboard from './components/Dashboard.vue';
import Login from './views/Login.vue';
import Products from './views/Products.vue';
import Coupons from './views/Coupons.vue';
import CustomerOrder from './views/CustomerOrders.vue';
import CustomerCheckout from './views/CustomerCheckout.vue';
import OrderList from './views/OrderList.vue';
import Home from './components/Home/Home.vue';
import HomeTest from './views/front/HomeTest.vue';
import FrontProducts from './views/front/FrontProducts.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login',
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   meta: { requiresAuth: true },
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/admin',
      name: 'DashboardtoCoupons',
      component: Dashboard,
      children: [
        {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/admin',
      name: 'DashboardtoOrderList',
      component: Dashboard,
      children: [
        {
          path: 'orderlist',
          name: 'OrderList',
          component: OrderList,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/',
      name: 'DashboardforCustomer',
      component: Dashboard,
      children: [
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: CustomerOrder,
        },
        {
          path: 'customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: CustomerCheckout,
        },
      ],
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'homeTest',
          name: 'HomeTest',
          component: HomeTest,
        },
        {
          path: 'frontProducts',
          name: 'FrontProducts',
          component: FrontProducts,
        },
      ],
    },
  ],
});
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home,
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
//     },
//   ],
// });
