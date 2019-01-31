import Vue from 'vue';

Vue.prototype.$bus = new Vue();
// Message
// vm.$bus.$emit('message:push',message,status) 内層用emmit觸發
// message(String):訊息內容
// status(String):Alert樣式(under bootstrap)
