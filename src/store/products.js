import axios from 'axios';

export default {
    // state屬於模組區域變數
    // actions,mutations,getters屬於全域變數
    namespaced: true, // actions,mutations,getters改為區域變數
    state: {
        productsAll: [],
        productsFilted: [],
        productsRevealed: [],
        productsrecommended: [],
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
            const numofPerpage = 6;
            const urlAll = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
            context.commit('LOADING', true, { root: true });

            axios.get(urlAll).then((response) => {
                context.commit('PRODUCTSALL', response.data.products);
                context.commit('LOADING', false, { root: true });
                // context.commit('PRODUCTSFILTED', context.state.productsAll);
                // 以filter過濾資料
                context.commit('PRODUCTSFILTED', vm.state.productsModules.productsAll.slice().filter((item) => {
                    if (vm.state.productsModules.productFilter === '' && vm.state.productsModules.searchFilter === '') {
                        return true;
                    }
                    if (vm.state.productsModules.productFilter === '' && vm.state.productsModules.searchFilter !== ''
                        && (item.title.match(vm.state.productsModules.searchFilter)
                            || item.content.match(vm.state.productsModules.searchFilter)
                            || item.description.match(vm.state.productsModules.searchFilter))) {
                        return true;
                    }
                    if (vm.state.productsModules.productFilter !== '' && vm.state.productsModules.searchFilter === '' && item.category.match(vm.state.productsModules.productFilter)) {
                        return true;
                    }
                    if (item.category.match(vm.state.productsModules.productFilter)
                        && (item.title.match(vm.state.productsModules.searchFilter)
                            || item.content.match(vm.state.productsModules.searchFilter)
                            || item.description.match(vm.state.productsModules.searchFilter))) {
                        return true;
                    }
                    return false;
                }));
                // 以filter過濾資料
                // 計算pagination資料
                context.commit('PAGINATION_TOTAL', Math.ceil(vm.state.productsModules.productsFilted.length / numofPerpage));
                context.commit('PAGINATION_CURRENT', vm.state.productsModules.page);
                if (vm.state.productsModules.pagination.current_page > 1) {
                    context.commit('PAGINATION_HASPRE', true);
                } else {
                    context.commit('PAGINATION_HASPRE', false);
                }
                if (vm.state.productsModules.pagination.current_page
                    < vm.state.productsModules.pagination.total_pages) {
                    context.commit('PAGINATION_HASNEXT', true);
                } else {
                    context.commit('PAGINATION_HASNEXT', false);
                }
                // 計算pagination資料
                context.commit('PRODUCTSREVEALED',
                    vm.state.productsModules.productsFilted.slice(numofPerpage * (vm.state.productsModules.pagination.current_page - 1),
                        numofPerpage * vm.state.productsModules.pagination.current_page));
            });
        },
        getRecommendedProducts(context, { theCategory, theId }) {
            context.dispatch('getProducts');
            console.log('{ category, id }:', theCategory, theId);
            context.commit('PRODUCTSRECOMMENDED', this.state.productsModules.productsAll.slice().filter((item) => {
                if (item.category === theCategory && item.id !== theId) {
                    return true;
                }
                return false;
            }));
        },
    },
    mutations: {
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
        PRODUCTSRECOMMENDED(state, payload) {
            state.productsrecommended = payload;
        },

    },
};
