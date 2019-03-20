<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Alert/>
    <!--訂單-->
    <div class="row justify-content-center" v-if="carts.total!==0">
      <div class="col-lg-8 row">
        <div
          class="row col-md-12 border-b my-2 py-2 orders-order"
          v-for="item in carts.carts"
          :key="item.id"
        >
          <div
            class="col-lg-3 orders-order-pic"
            :style="{ 'background-image': `url(${item.product.imageUrl})` }"
            style=" background-size: cover; background-position: center"
          >
            <!-- <img class="img-fluid" :src="item.product.imageUrl" alt> -->
          </div>
          <div class="col-lg-1 col-sm-1 col-xxs-d-none">
            <span class="badge badge-secondary">{{item.product.category}}</span>
          </div>
          <div class="col-lg-3 col-sm-4 col-4">
            {{item.product.title}}
            <div class="text-success" v-if="item.coupon">
              <span class="d-xxs-none">{{item.coupon.title}}:</span>
              <span>折扣</span>
              <span class="text-danger">{{item.coupon.percent}}</span>%
            </div>
          </div>
          <div class="col-lg-2 col-sm-2 col-2">{{item.qty}}/{{item.product.unit}}</div>
          <div class="col-lg-2 col-sm-3 col-4">
            <span v-if="item.final_total===item.total">{{item.total}}</span>
            <del class="font-weight-light" v-if="item.final_total!==item.total">{{item.total}}</del>
            <strong
              class="font-weight-bold text-danger"
              v-if="item.final_total!==item.total"
            >{{item.final_total}}</strong>
            元
          </div>
          <div class="col-lg-1 col-sm-2 col-2">
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="removeCartItem(item.id)"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
        <!-- <table class="table my-5">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carts.carts" :key="item.id">
              <td>
                <div class="w-100">
                  <img class="img-fluid" :src="item.product.imageUrl" alt>
                </div>
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
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.id)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
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
        </table>-->
        <!-- <div class="row justify-content-between">
          <div class="col-md-6">
            <div class="input-group mb-5 input-group-sm">
              <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" @click="addCouponCode">套用優惠碼</button>
              </div>
            </div>
          </div>
          <div class="text-right">
            <router-link class="btn btn-danger mx-3" to="/finishorder/address">填寫寄送資訊</router-link>
            <router-link class="btn btn-success mx-3" to="/frontProducts">繼續逛逛</router-link>
          </div>
        </div>-->
      </div>
      <div class="col-lg-4">
        <div class="card text-center">
          <div class="card-body" style="background-color: rgb(243, 190, 43);">
            <h1 class="h3 border-b mb-1 pb-1">訂單總額</h1>
            <div class="row justify-content-between">
              <div class="col-4">合計</div>
              <div class="col-6">
                <del>{{carts.total}}元</del>
              </div>
            </div>
            <div class="row justify-content-between mt-4 text-danger">
              <div class="col-6 text-left">
                <strong class="h3">優惠價</strong>
              </div>
              <div class="col-6">
                <strong class="h3">{{carts.final_total}}元</strong>
              </div>
            </div>
            <div class="input-group mb-3 mt-2 input-group-sm">
              <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
              <div class="input-group-append">
                <button class="btn btn-success" @click="addCouponCode">套用優惠碼</button>
              </div>
            </div>
          </div>
          <div class="row" style="margin:0;">
            <div class="col-6" style="padding:0;">
              <router-link
                class="btn btn-danger w-100 h-100"
                style="border-radius:0;"
                to="/finishorder/address"
              >填寫寄送資訊</router-link>
            </div>
            <div class="col-6" style="padding:0;">
              <router-link
                class="btn btn-success w-100 h-100"
                style="border-radius:0;"
                to="/frontProducts"
              >繼續逛逛</router-link>
            </div>
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
      this.$http.post(url, { data: coupon }).then(() => {
        vm.getCart();
        vm.$store.commit('LOADING', false);
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
<style lang="scss" scoped>
.border-b {
  border-bottom: solid 1px rgb(120, 120, 120);
}
.orders-order {
  height: 80px;
}
@media (max-width: 990px) {
  .orders-order-pic {
    display: none;
  }
}
@media (max-width: 408px) {
  .d-xxs-none {
    display: none;
  }
}
@media (max-width: 576px) {
  .col-xxs-d-none {
    display: none;
  }
}
</style>
