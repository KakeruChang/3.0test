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
    // userWho: {},
    userWho: '',
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
    updateUser(context, status) {
      context.commit('USERNOW', status);
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
    USERNOW(state, payload) {
      console.log('USERNOW:', payload);
      // Object.assign(state.userWho, payload);
      // state.userWho = payload.uid;
      state.userWho = payload;
    },
  },
  modules: {
    productsModules,
    cartModules,
    messageModules,
  },
});
