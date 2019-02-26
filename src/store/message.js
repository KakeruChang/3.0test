export default {
    // state屬於模組區域變數
    // actions,mutations,getters屬於全域變數
    namespaced: true, // actions,mutations,getters改為區域變數
    state: {
        messages: [],
    },
    actions: {
        updateMessage(context, { message, status, data }) {
            const timestamp = Math.floor(new Date() / 1000);
            context.commit('UPDATEMESSAGE',
                {
                    message, status, data, timestamp,
                });
            context.dispatch('removeMessageWithTiming', timestamp);
        },
        removeMessage(context, num) {
            context.commit('REMOVEMESSAGE', num);
        },
        removeMessageWithTiming(context, timestamp) {
            const vm = this;
            console.log(vm.state);
            setTimeout(() => {
                vm.state.messageModules.messages.forEach((item, i) => {
                    if (item.timestamp === timestamp) {
                        context.commit('REMOVEMESSAGE', i);
                    }
                });
            }, 2500);
        },
    },
    mutations: {
        UPDATEMESSAGE(state, payload) {
            console.log('UPDATEMESSAGE', state, payload);
            state.messages.push(payload);
            console.log('after', state.messages);
        },
        REMOVEMESSAGE(state, payload) {
            state.messages.splice(payload, 1);
        },
    },
};
