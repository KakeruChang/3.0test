<template>
  <div class="dropdown ml-auto" v-if="carts.carts">
    <loading :active.sync="isLoading"></loading>
    <button class="btn btn-sm btn-cart" data-toggle="dropdown" data-flip="false">
      <i
        class="fa fa-shopping-cart text-secondary fa-2x animated infinite flip slower"
        aria-hidden="true"
      ></i>
      <span class="badge badge-pill badge-danger">{{carts.carts.length}}</span>
    </button>
    <div class="dropdown-menu dropdown-menu-right" style="min-width: 350px" data-offset="400">
      <div class="m-3 alert alert-warning" role="alert" v-if="carts.total===0">您尚未選擇任何商品</div>
      <div class="px-3 py-4" v-if="carts.total!==0">
        <h6>已選擇商品</h6>
        <div class="row justify-content-center">
          <div class="col-md-12 shoppingcart-left-menu">
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
                <tr></tr>
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
                  <td>{{item.product.title}}</td>
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
              </tfoot>
            </table>
          </div>
        </div>
        <router-link
          class="btn btn-success btn-block"
          to="/finishorder/orders"
          v-if="carts.carts.length!==0"
        >
          <i class="fa fa-shopping-cart" aria-hidden="true"></i> 結帳去
        </router-link>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';

export default {
  name: 'Shoppingcart',
  data() {
    return {
      // carts: [],
    };
  },
  methods: {
    removeCartItem(id) {
      this.$store.dispatch('cartModules/removeCartItem', id);
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
    // this.getCart();
    // const vm = this;
    // // 自定義名稱 'cartinfo'
    // // message: 傳入參數
    // // status: 樣式，預設值為 warning
    // vm.$bus.$on('cartinfo', (carts) => {
    //   // message對應上方變數 status對應bootstrap樣式(外層用on註冊)
    //   vm.seeCart(carts);
    // });
  },
};
</script>
<style scoped>
/* .btn-cart {
  background-color: transparent;
  position: relative;
}
.btn-cart .badge {
  position: absolute;
  top: -1px;
  right: -1px;
}
.dropdown-menu-right {
  right: 0;
  left: auto;
}
/* SASS
.btn-cart
    background-color: transparent
    position: relative
    .badge
        position: absolute
        top: -1px
        right: -1px
.dropdown-menu-right
    right: 0
    left: auto
 */
</style>
