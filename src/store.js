import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    productsAll: [],
    productsFilted: [],
    productsRevealed: [],
    productFilter: '',
    searchFilter: '',
    page: 0,
    pagination: {
      current_page: 0,
      has_pre: '',
      has_next: '',
      total_pages: 0,
    },
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    updatePage(context, status) {
      context.commit('PAGE', status);
    },
    updateProductFilter(context, status) {
      context.commit('PRODUCTFILTER', status);
    },
    updateSearchFilter(context, status) {
      context.commit('SEARCHFILTER', status);
    },
    getProducts(context) {
      const vm = this;
      const numofPerpage = 9;
      const urlAll = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      context.commit('LOADING', true);

      axios.get(urlAll).then((response) => {
        context.commit('PRODUCTSALL', response.data.products);
        context.commit('LOADING', false);
        // context.commit('PRODUCTSFILTED', context.state.productsAll);
        // 以filter過濾資料
        context.commit('PRODUCTSFILTED', vm.state.productsAll.slice().filter((item) => {
          if (vm.state.productFilter === '' && vm.state.searchFilter === '') {
            return true;
          }
          if (vm.state.productFilter === '' && vm.state.searchFilter !== ''
            && (item.title.match(vm.state.searchFilter)
              || item.content.match(vm.state.searchFilter)
              || item.description.match(vm.state.searchFilter))) {
            return true;
          }
          if (vm.state.productFilter !== '' && vm.state.searchFilter === '' && item.category.match(vm.state.productFilter)) {
            return true;
          }
          if (item.category.match(vm.state.productFilter)
            && (item.title.match(vm.state.searchFilter)
              || item.content.match(vm.state.searchFilter)
              || item.description.match(vm.state.searchFilter))) {
            return true;
          }
          return false;
        }));
        // 以filter過濾資料
        // 計算pagination資料
        context.commit('PAGINATION_TOTAL', Math.ceil(vm.state.productsFilted.length / numofPerpage));
        context.commit('PAGINATION_CURRENT', vm.state.page);
        if (vm.state.pagination.current_page > 1) {
          context.commit('PAGINATION_HASPRE', true);
        } else {
          context.commit('PAGINATION_HASPRE', false);
        }
        if (vm.state.pagination.current_page < vm.state.pagination.total_pages) {
          context.commit('PAGINATION_HASNEXT', true);
        } else {
          context.commit('PAGINATION_HASNEXT', false);
        }
        // 計算pagination資料
        context.commit('PRODUCTSREVEALED',
          vm.state.productsFilted.slice(numofPerpage * (vm.state.pagination.current_page - 1),
            numofPerpage * vm.state.pagination.current_page));
      });
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    PAGE(state, status) {
      state.page = status;
    },
    PAGINATION_CURRENT(state, status) {
      state.pagination.current_page = status;
    },
    PAGINATION_HASPRE(state, status) {
      state.pagination.has_pre = status;
    },
    PAGINATION_HASNEXT(state, status) {
      state.pagination.has_next = status;
    },
    PAGINATION_TOTAL(state, status) {
      state.pagination.total_pages = status;
    },
    PRODUCTFILTER(state, status) {
      state.productFilter = status;
    },
    SEARCHFILTER(state, status) {
      state.searchFilter = status;
    },
    PRODUCTSALL(state, payload) {
      state.productsAll = payload;
    },
    PRODUCTSFILTED(state, payload) {
      state.productsFilted = payload;
    },
    PRODUCTSREVEALED(state, payload) {
      state.productsRevealed = payload;
    },
  },
});
