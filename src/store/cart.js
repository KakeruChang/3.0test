import axios from 'axios';

export default {
    // state屬於模組區域變數
    // actions,mutations,getters屬於全域變數
    namespaced: true, // actions,mutations,getters改為區域變數
    state: {
        carts: [],
        firebasedata: {},
    },
    actions: {
        getCart(context) {
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            const { firebaseDb } = window; //

            context.commit('LOADING', true, { root: true });
            // vm.$store.dispatch('updateLoading', true);
            axios.get(url).then((response) => {
                // 將資料寫入firebase並讀取
                const user = this.state.userWho;
                // if (user) {
                firebaseDb.ref(`user/${user}/cart`).set(response.data.data);
                firebaseDb.ref(`user/${user}/cart`).once('value', (snapshot) => {
                    const result = {};
                    Object.assign(result, snapshot.val());
                    result.final_total = Math.floor(result.final_total);
                    if (result.carts) {
                        result.carts.forEach((item) => {
                            item.final_total = Math.floor(item.final_total);
                        });
                    }
                    // context.commit('FIREBASE', result);
                    context.commit('CARTS', result);
                });
                // }
                // context.commit('LOADING', false, { root: true });
                //
                response.data.data.final_total = Math.floor(response.data.data.final_total);
                response.data.data.carts.forEach((item) => {
                    item.final_total = Math.floor(item.final_total);
                });
                context.commit('CARTS', response.data.data);
                context.commit('LOADING', false, { root: true });
            });
        },
        removeCartItem(context, id) {
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
            context.commit('LOADING', true, { root: true });
            axios.delete(url).then((response) => {
                context.dispatch('getCart');
                context.commit('LOADING', false, { root: true });
                response.data.status = 'danger';
                console.log('removeCartItem', response);
                context.dispatch('messageModules/updateMessage', response.data, { root: true });
            });
        },
        addtoCart(context, { id, qty }) {
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            const cart = {
                product_id: id,
                qty,
            };
            // const { firebaseDb } = window; //

            return new Promise((resolve, reject) => {
                axios.post(url, { data: cart }).then((response) => {
                    resolve(response);
                    //
                    // const user = this.state.userWho;
                    // firebaseDb.ref(`user/${user}/cart`).push(response.data.data);
                    //
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
        FIREBASE(state, payload) {
            Object.assign(state.firebasedata, payload);
        },
    },
};
