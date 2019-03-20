<template>
  <div>
    <div class="py-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="createOrder">
        <div class="form-group">
          <label for="useremail">Email</label>
          <input
            type="email"
            class="form-control"
            :class="{'is-invalid':errors.has('email')}"
            name="email"
            id="useremail"
            v-validate="'required|email'"
            v-model="form.user.email"
            placeholder="請輸入 Email"
            required
          >
          <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
        </div>

        <div class="form-group">
          <label for="username">收件人姓名</label>
          <input
            type="text"
            class="form-control"
            name="name"
            id="username"
            :class="{'is-invalid':errors.has('name')}"
            v-model="form.user.name"
            v-validate="'required'"
            placeholder="輸入姓名"
          >
          <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
        </div>

        <div class="form-group">
          <label for="usertel">收件人電話</label>
          <input
            type="tel"
            name="tel"
            class="form-control"
            :class="{'is-invalid':errors.has('tel')}"
            id="usertel"
            v-model="form.user.tel"
            v-validate="'required'"
            placeholder="請輸入電話"
          >
          <span class="text-danger" v-if="errors.has('tel')">電話必須輸入</span>
        </div>

        <div class="form-group">
          <label for="useraddress">收件人地址</label>
          <input
            type="address"
            class="form-control"
            name="address"
            :class="{'is-invalid':errors.has('address')}"
            id="useraddress"
            v-model="form.user.address"
            v-validate="'required'"
            placeholder="請輸入地址"
          >
          <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
        </div>

        <div class="form-group">
          <label for="userpayment_method">付款方式</label>
          <input
            type="address"
            class="form-control"
            name="payment_method"
            :class="{'is-invalid':errors.has('payment_method')}"
            id="userpayment_method"
            v-model="form.user.payment_method"
            v-validate="'required'"
            placeholder="請輸入付款方式"
          >
          <span class="text-danger" v-if="errors.has('payment_method')">付款方式不得留空</span>
        </div>

        <div class="form-group">
          <label for="useraddress">留言</label>
          <textarea name id class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
        </div>
        <div class="text-right">
          <button class="btn btn-primary">送出訂單</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
// import Alert from '../../components/AlertMessage.vue';

export default {
  // components: {
  //   Alert,
  // },
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          payment_method: '',
        },
        message: '',
      },
    };
  },
  methods: {
    createOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const order = vm.form;
      vm.$store.commit('LOADING', true);
      this.$validator.validate().then((result) => {
        if (result) {
          this.$http.post(url, { data: order }).then((response) => {
            console.log('訂單已建立', response.data);
            if (response.data.success) {
              vm.$router.push(`/checkout/${response.data.orderId}`);// 使用router轉換頁面
            }
            // vm.getCart();
            vm.$store.commit('LOADING', false);
          });
        } else {
          console.log('欄位不完整', result);
          const response = {
            message: '欄位不完整',
            status: 'danger',
          };
          console.log('欄位不完整?', response);
          vm.$store.dispatch('messageModules/updateMessage', response, { root: true });
          vm.$store.commit('LOADING', false);
        }
      });
    },
    updateActiveOfCheckout(item) {
      this.$store.dispatch('updateCheckoutActive', item);
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  created() {
    this.updateActiveOfCheckout('address');
  },
};
</script>
