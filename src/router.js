import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/HomePage',
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   meta: { requiresAuth: true },
    // },
    // {
    //   path: '/',
    //   name: 'DashboardforCustomer',
    //   component: Dashboard,
    //   children: [
    //   ],
    // },
    {
      path: '/',
      name: 'Home',
      component: () => import('./components/Home/Home.vue'),
      redirect: '/HomePage',
      children: [
        {
          path: '/HomePage',
          name: 'HomePage',
          component: () => import('./views/front/HomePage.vue'),
        },
        {
          path: 'frontProducts',
          name: 'FrontProducts',
          component: () => import('./views/front/FrontProducts.vue'),
        },
      ],
    },
    {
      path: '/orders',
      name: 'Orders',
      component: () => import('./views/front/Orders.vue'),
    },
    {
      path: '/checkout/:orderId',
      name: 'Checkout',
      component: () => import('./views/front/Checkout.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('./components/Dashboard.vue'),
      children: [
        {
          path: 'products',
          name: 'Products',
          component: () => import('./views/Products.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: () => import('./views/Coupons.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'orderlist',
          name: 'OrderList',
          component: () => import('./views/OrderList.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: () => import('./views/CustomerOrders.vue'),
        },
        {
          path: 'customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: () => import('./views/CustomerCheckout.vue'),
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
