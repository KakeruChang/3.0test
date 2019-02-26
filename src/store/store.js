import Vue from 'vue';
import Vuex from 'vuex';

import productsModules from './products';
import cartModules from './cart';
import messageModules from './message';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    isActiveofHomeNavebar: '',
    isActiveofCheckout: '',
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    updateHomeActive(context, status) {
      context.commit('HOMEACTIVE', status);
    },
    updateCheckoutActive(context, status) {
      context.commit('CHECKOUTACTIVE', status);
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    HOMEACTIVE(state, payload) {
      state.isActiveofHomeNavebar = payload;
    },
    CHECKOUTACTIVE(state, payload) {
      state.isActiveofCheckout = payload;
    },
  },
  modules: {
    productsModules,
    cartModules,
    messageModules,
  },
});
