import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import VeeValidate from 'vee-validate';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';
import VueFire from 'vuefire'; //
// import * as firebase from 'firebase' //Dev mode
import firebase from 'firebase/app'; //
import 'firebase/auth'; //
import 'firebase/database'; //


import App from './App.vue';
import router from './router';
import store from './store/store';
import './bus';
import currencyFilter from './filters/currency';
import Pagination from './components/Pagination.vue';
import Search from './components/Search.vue';
// import Shoppingcart from './components/Shoppingcart.vue';


// firebase
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_APIKEY,
//   authDomain: process.env.FIREBASE_AUTHDOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASEURKURL,
//   projectId: process.env.FIREBASE_PROJECTID,
//   storageBucket: process.env.FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGEINGSENDERID,
// }; //
const firebaseConfig = {
  apiKey: 'AIzaSyB8artxxayhFjDmFCHPMR6Uq2-FAf5aAck',
  authDomain: 'vueshop-bca8f.firebaseapp.com',
  databaseURL: 'https://vueshop-bca8f.firebaseio.com',
  projectId: 'vueshop-bca8f',
  storageBucket: 'vueshop-bca8f.appspot.com',
  messagingSenderId: '602858287830',
};
console.log('firebaseConfig:', firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig); //
window.firebase = firebase; //
window.firebaseDb = firebaseApp.database(); //
window.firebaseAuth = firebaseApp.auth(); //
Vue.use(VueFire); //

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuex);

Vue.use(VeeValidate, {
  events: 'input|blur',
});
VeeValidate.Validator.localize('zh_tw', zhTWValidate);

Vue.component('Loading', Loading); // 全域啟用,其他地方使用不需重新載入
Vue.component('Pagination', Pagination);
Vue.component('Search', Search);
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
