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
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
  },
  modules: {
    productsModules,
    cartModules,
    messageModules,
  },
});
