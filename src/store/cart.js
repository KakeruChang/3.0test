import axios from 'axios';

export default {
    // state屬於模組區域變數
    // actions,mutations,getters屬於全域變數
    namespaced: true, // actions,mutations,getters改為區域變數
    state: {
        carts: [],
    },
    actions: {
        getCart(context) {
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            context.commit('LOADING', true, { root: true });
            // vm.$store.dispatch('updateLoading', true);
            axios.get(url).then((response) => {
                context.commit('CARTS', response.data.data);
                context.commit('LOADING', false, { root: true });
            });
        },
        removeCartItem(context, id) {
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
            context.commit('LOADING', true, { root: true });
            axios.delete(url).then((response) => {
                console.log('removeCartItem:response~~', response.data);
                context.dispatch('getCart');
                context.commit('LOADING', false, { root: true });
                response.data.status = 'danger';
                context.dispatch('messageModules/updateMessage', response.data, { root: true });
            });
        },
        addtoCart(context, { id, qty }) {
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            const cart = {
                product_id: id,
                qty,
            };
            return new Promise((resolve, reject) => {
                axios.post(url, { data: cart }).then((response) => {
                    resolve(response);
                    context.dispatch('getCart');
                    response.data.status = 'success';
                    context.dispatch('messageModules/updateMessage', response.data, { root: true });
                }, (error) => {
                    reject(error);
                });
            });
        },
    },
    mutations: {
        CARTS(state, payload) {
            state.carts = payload;
        },
    },
};
