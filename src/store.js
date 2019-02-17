import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    products: [],
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    getProducts(context) {
      /* const url = `${process.env.VUE_APP_APIPATH}/api/
      ${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`; */
      // const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      const urlAll = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      context.commit('LOADING', true);
      // this.$store.dispatch('updateLoading', true);
      console.log('1');
      axios.get(urlAll).then((response) => {
        console.log('2');
        console.log('Mom i am here:', response.data.products);
        context.commit('PRODUCTS', response.data.products);
        // this.productsAll = response.data.products;
        console.log('Mom i am here:', response.data.products);
        context.commit('LOADING', false);
        // this.$store.dispatch('updateLoading', false);
      });
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    PRODUCTS(state, payload) {
      state.products = payload;
    },
  },
});
