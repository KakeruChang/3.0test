<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Alert/>
    <!--訂單-->
    <div class="row justify-content-center" v-if="carts.total!==0">
      <div class="col-md-8">
        <table class="table my-5">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carts.carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.id)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
              <td>
                {{item.product.title}}
                <div class="text-success" v-if="item.coupon">已套用優惠券
                  <p>
                    {{item.coupon.title}}:折扣
                    <span class="text-danger">{{item.coupon.percent}}</span>%
                  </p>
                </div>
              </td>
              <td>{{item.qty}}/{{item.product.unit}}</td>
              <td class="text-right">{{item.total}}元</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <strong>合計</strong>
              </td>
              <td colspan="2"></td>
              <td class="text-right">
                <strong>{{carts.total}}元</strong>
              </td>
            </tr>
            <tr v-if="carts.final_total!==carts.total">
              <td>
                <strong class="text-success">優惠價</strong>
              </td>
              <td colspan="2"></td>
              <td class="text-right text-success">
                <strong>{{Math.floor(carts.final_total)}}元</strong>
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="row justify-content-between">
          <div class="col-md-6">
            <div class="input-group mb-5 input-group-sm">
              <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" @click="addCouponCode">套用優惠碼</button>
              </div>
            </div>
          </div>
          <div class="text-right col-md-3">
            <router-link class="btn btn-success" to="/frontProducts">繼續逛逛</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center" v-if="carts.total===0">
      <div class="col-md-8">
        <div class="alert alert-warning mt-5" role="alert">您尚未選擇任何商品</div>
        <div class="text-right">
          <router-link class="btn btn-danger" to="/frontProducts">繼續逛逛</router-link>
        </div>
      </div>
    </div>
    <!--  -->
    <div
      class="py-5 row justify-content-center"
      v-if="carts.total!==0"
      style="background:rgb(180,180,180);"
    >
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
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </form>
    </div>
    <!--  -->
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Alert from '../../components/AlertMessage.vue';

export default {
  components: {
    Alert,
  },
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
      coupon_code: '',
    };
  },
  methods: {
    ...mapActions('cartModules', ['getCart']),
    removeCartItem(id) {
      this.$store.dispatch('cartModules/removeCartItem', id);
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.$store.commit('LOADING', true);
      this.$http.post(url, { data: coupon }).then((response) => {
        console.log(response.data);
        vm.getCart();
        vm.$store.commit('LOADING', false);
      });
    },
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
    carts() {
      return this.$store.state.cartModules.carts;
    },
  },
  created() {
    this.getCart();
    this.updateActiveOfCheckout('orders');
  },
};
</script>
