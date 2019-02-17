import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import VeeValidate from 'vee-validate';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';


import App from './App.vue';
import router from './router';
import store from './store';
import './bus';
import currencyFilter from './filters/currency';
import Pagination from './components/Pagination.vue';
// import Shoppingcart from './components/Shoppingcart.vue';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuex);

Vue.use(VeeValidate, {
  events: 'input|blur',
});
VeeValidate.Validator.localize('zh_tw', zhTWValidate);

Vue.component('Loading', Loading); // 全域啟用,其他地方使用不需重新載入
Vue.component('Pagination', Pagination);
// Vue.component('Shoppingcart', Shoppingcart);
Vue.filter('currency', currencyFilter);

axios.defaults.withCredentials = true;

new Vue({
  router,
  store,
  // Swiper,
  components: { App }, //
  template: '<App/>', //
  render: h => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    // this.$http.post(api).then(response => { 須在vue元件中才能用this.$http
    axios.post(api).then((response) => {
      if (response.data.success === true) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
