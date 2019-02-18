<template>
  <div class="wrap-FrontProducts container-fluid">
    <loading :active.sync="isLoading"></loading>
    <div class="row" style="height:100%;padding-top:60px">
      <div class="col-md-3 col-lg-2 pb-3 mx-2">
        <div class="nav nav-pills row" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a
            class="nav-link active btn btn-outline-primary col-md-12 col-sm-6 col-12"
            id="v-pills-home-tab"
            data-toggle="pill"
            href="#v-pills-home"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
            @click.prevent="productFilter='';getProducts();"
          >全部</a>
          <a
            class="nav-link btn btn-outline-primary col-md-12 col-sm-6 col-12"
            id="v-pills-profile-tab"
            data-toggle="pill"
            href="#v-pills-profile"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
            @click.prevent="productFilter='関東';getProducts();"
          >関東</a>
          <a
            class="nav-link btn btn-outline-primary col-md-12 col-sm-6 col-12"
            id="v-pills-messages-tab"
            data-toggle="pill"
            href="#v-pills-messages"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
            @click="productFilter='関西';getProducts();"
          >関西</a>
          <a
            class="nav-link btn btn-outline-primary col-md-12 col-sm-6 col-12"
            id="v-pills-settings-tab"
            data-toggle="pill"
            href="#v-pills-settings"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
            @click="productFilter='北海道';getProducts();"
          >北海道</a>
        </div>
      </div>
      <div class="row col-md-9 col-lg-10" style="padding-bottom:100px;height:100%;">
        <div class="row col-md-12">
          <!-- <div class="mb-5 col-md-12 row"> -->
          <div class="col-md-4">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="想找點什麼呢?"
                aria-label="find"
                aria-describedby="basic-addon1"
                v-model="searchFilter"
              >
              <button type="text" class="btn btn-primary" @click="getProducts()">搜尋</button>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <Pagination class="pt-2" :page-data="pagination" @pagemove="getProducts"></Pagination>
        </div>
        <div class="col-md-12 row cardrealved" style="height:100%;">
          <!-- <div class="col-md row" style="overflow-y:scroll;"> -->
          <div
            class="col-lg-4 col-md-6 col-sm-12 pb-5"
            v-for="item in productsRevealed"
            :key="item.id"
          >
            <div class="card border-0 shadow-sm">
              <div
                style="height: 150px; background-size: cover; background-position: center"
                :style="{backgroundImage:`url(${item.imageUrl})`}"
              ></div>
              <div class="card-body">
                <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
                <h5 class="card-title">
                  <a href="#" class="text-dark">{{item.title}}</a>
                </h5>
                <p class="card-text">{{item.content}}</p>
                <div class="d-flex justify-content-between align-items-baseline">
                  <div class="h5" v-if="!item.price">{{item.origin_price}} 元</div>
                  <del class="h6" v-if="item.price">原價{{item.origin_price}}元</del>
                  <div class="h5" v-if="item.price">現在只要{{item.price}}元</div>
                </div>
              </div>
              <div class="card-footer d-flex">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm"
                  @click="gettheProduct(item.id)"
                >
                  <i class="fas fa-spinner fa-spin" v-if="status.loadingItem===item.id"></i>
                  查看更多
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm ml-auto"
                  @click="addtoCart(item.id)"
                >
                  <i class="fas fa-spinner fa-spin" v-if="status.loadingItem===item.id"></i>
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--購物車-->
    <div class="dropup" v-if="carts.carts" style="position:fixed;left:15px;bottom:80px;">
      <button class="btn btn-sm btn-cart" data-toggle="dropdown" data-flip="false">
        <i
          class="fa fa-shopping-cart text-success fa-2x animated infinite bounce slow"
          aria-hidden="true"
        ></i>
        <span class="badge badge-pill badge-danger">{{carts.carts.length}}</span>
      </button>
      <div class="dropdown-menu dropdown-menu-right" style="min-width: 350px" data-offset="400">
        <div class="m-3 alert alert-warning" role="alert" v-if="carts.total===0">您尚未選擇任何商品</div>
        <div class="px-3 py-4" v-if="carts.total!==0">
          <h6>已選擇商品</h6>
          <div class="row justify-content-center">
            <div class="col-md-12">
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
          <router-link class="btn btn-primary btn-block" to="/orders" v-if="carts.carts.length!==0">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i> 結帳去
          </router-link>
          <!--  -->
        </div>
      </div>
    </div>
    <!-- modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{product.title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt>
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{product.content}}</p>
              <footer class="blockquote-footer text-right">{{product.description}}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="!product.price">{{product.origin_price}} 元</div>
              <del class="h6" v-if="product.price">原價{{product.origin_price}}元</del>
              <div class="h5" v-if="product.price">現在只要{{product.price}}元</div>
            </div>
            <select name class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">選購{{num}}{{product.unit}}</option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計
              <strong>{{product.num*product.price}}</strong>
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addtoCart(product.id,product.num)"
            >
              <i class="fas fa-spinner fa-spin" v-if="product.id===status.loadingItem"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      // productsAll: [],
      productsFilted: [],
      productsRevealed: [],
      product: {}, // 存放modal資料
      // isLoading: false, // true時啟動loading效果
      status: {
        loadingItem: '',
      },
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
      carts: [],
      pagination: {
        current_page: 0,
        has_pre: '',
        has_next: '',
        total_pages: 0,
      },
      coupon_code: '',
      productFilter: '',
      searchFilter: '',
    };
  },
  methods: {
    getProducts(page = 1) {
      const vm = this;
      const numofPerpage = 9;
      console.log('3');
      this.$store.dispatch('getProducts').then(() => {
        // 以filter過濾資料
        vm.productsFilted = vm.productsAll.slice().filter((item) => {
          if (vm.productFilter === '' && vm.searchFilter === '') {
            return true;
          }
          if (vm.productFilter === '' && vm.searchFilter !== ''
            && (item.title.match(vm.searchFilter)
              || item.content.match(vm.searchFilter)
              || item.description.match(vm.searchFilter))) {
            return true;
          }
          if (vm.productFilter !== '' && vm.searchFilter === '' && item.category.match(vm.productFilter)) {
            return true;
          }
          if (item.category.match(vm.productFilter)
            && (item.title.match(vm.searchFilter)
              || item.content.match(vm.searchFilter)
              || item.description.match(vm.searchFilter))) {
            return true;
          }
          return false;
        });
        // 以filter過濾資料
        console.log('vm.productsFilted_after:', vm.productsFilted, vm.productsFilted.length);
        // 計算pagination資料
        vm.pagination.total_pages = Math.ceil(vm.productsFilted.length / numofPerpage);
        console.log('numofPerpage:', numofPerpage);
        console.log('vm.productsFilted.length:', vm.productsFilted.length);
        console.log('vm.pagination.total_pages', vm.pagination.total_pages);
        vm.pagination.current_page = page;
        console.log('page:', page);
        if (vm.pagination.current_page > 1) {
          vm.pagination.has_pre = true;
        } else {
          vm.pagination.has_pre = false;
        }
        if (vm.pagination.current_page < vm.pagination.total_pages) {
          vm.pagination.has_next = true;
        } else {
          vm.pagination.has_next = false;
        }
        console.log('pagination:', vm.pagination);
        // 計算pagination資料
        vm.productsRevealed = vm.productsFilted
          .slice(numofPerpage * (vm.pagination.current_page - 1),
            numofPerpage * vm.pagination.current_page);
        console.log('vm.productsRevealed:', vm.productsRevealed);
      });
    },



    // getProducts(page = 1) {
    //   const vm = this;
    //   const numofPerpage = 9;
    //   /* const url = `${process.env.VUE_APP_APIPATH}/api/
    //   ${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`; */
    //   // const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
    //   const urlAll = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
    //   vm.$store.dispatch('updateLoading', true);
    //   this.$http.get(urlAll).then((response) => {
    //     vm.$store.dispatch('updateLoading', false);
    //     vm.productsAll = response.data.products;
    //     console.log('vm.productsFilted_before:', vm.productsFilted, vm.productsFilted.length);
    //     // 以filter過濾資料
    //     vm.productsFilted = vm.productsAll.slice().filter((item) => {
    //       if (vm.productFilter === '' && vm.searchFilter === '') {
    //         return true;
    //       }
    //       if (vm.productFilter === '' && vm.searchFilter !== ''
    //         && (item.title.match(vm.searchFilter)
    //           || item.content.match(vm.searchFilter)
    //           || item.description.match(vm.searchFilter))) {
    //         return true;
    //       }
    //       if (vm.productFilter !== '' && vm.searchFilter === '' && item.category.match(vm.productFilter)) {
    //         return true;
    //       }
    //       if (item.category.match(vm.productFilter)
    //         && (item.title.match(vm.searchFilter)
    //           || item.content.match(vm.searchFilter)
    //           || item.description.match(vm.searchFilter))) {
    //         return true;
    //       }
    //       return false;
    //     });
    //     // 以filter過濾資料
    //     console.log('vm.productsFilted_after:', vm.productsFilted, vm.productsFilted.length);
    //     // 計算pagination資料
    //     vm.pagination.total_pages = Math.ceil(vm.productsFilted.length / numofPerpage);
    //     console.log('numofPerpage:', numofPerpage);
    //     console.log('vm.productsFilted.length:', vm.productsFilted.length);
    //     console.log('vm.pagination.total_pages', vm.pagination.total_pages);
    //     vm.pagination.current_page = page;
    //     console.log('page:', page);
    //     if (vm.pagination.current_page > 1) {
    //       vm.pagination.has_pre = true;
    //     } else {
    //       vm.pagination.has_pre = false;
    //     }
    //     if (vm.pagination.current_page < vm.pagination.total_pages) {
    //       vm.pagination.has_next = true;
    //     } else {
    //       vm.pagination.has_next = false;
    //     }
    //     console.log('pagination:', vm.pagination);
    //     // 計算pagination資料
    //     vm.productsRevealed = vm.productsFilted
    //       .slice(numofPerpage * (vm.pagination.current_page - 1),
    //         numofPerpage * vm.pagination.current_page);
    //     console.log('vm.productsRevealed:', vm.productsRevealed);
    //   });
    // },
    gettheProduct(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(url).then((response) => {
        vm.product = response.data.product;
        $('#productModal').modal('show');
        vm.product.num = 1;
        console.log(response.data);
        vm.status.loadingItem = '';
      });
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: cart }).then((response) => {
        console.log(response.data);
        vm.status.loadingItem = '';
        vm.getCart();
        $('#productModal').modal('hide');
      });
    },
    getCart() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.$store.dispatch('updateLoading', true);
      this.$http.get(url).then((response) => {
        console.log('getCart()_response:', response.data);
        vm.$store.dispatch('updateLoading', false);
        vm.carts = response.data.data;
        console.log('getCart()_data(vm.carts):', vm.carts);
        //
        this.$bus.$emit('cartinfo', response.data.data);
        //
      });
    },
    removeCartItem(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      vm.$store.dispatch('updateLoading', true);
      this.$http.delete(url).then((response) => {
        console.log(response.data);
        vm.getCart();
        vm.$store.dispatch('updateLoading', false);
      });
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.$store.dispatch('updateLoading', true);
      this.$http.post(url, { data: coupon }).then((response) => {
        console.log(response.data);
        vm.getCart();
        vm.$store.dispatch('updateLoading', false);
      });
    },
    createOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const order = vm.form;
      vm.$store.dispatch('updateLoading', true);
      this.$validator.validate().then((result) => {
        if (result) {
          this.$http.post(url, { data: order }).then((response) => {
            console.log('訂單已建立', response.data);
            if (response.data.success) {
              vm.$router.push(`/customer_checkout/${response.data.orderId}`);// 使用router轉換頁面
            }
            // vm.getCart();
            vm.$store.dispatch('updateLoading', false);
          });
        } else {
          console.log('欄位不完整');
        }
      });
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    productsAll() {
      return this.$store.state.isLoading;
    },
  },
  created() {
    this.getProducts();
    this.getCart();

    const vm = this;
    // 自定義名稱 'idofDeleteItem'
    // deleteID: 傳入參數
    vm.$bus.$on('idofDeleteItem', (deleteID) => {
      vm.removeCartItem(deleteID);
    });
  },
};
</script>
<style scoped>
.btn-cart {
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
@media (min-width: 541px) {
  .wrap-FrontProducts {
    background-image: url("../../assets/home_bg/product_.jpg");
    height: 1152px;
  }
  .cardrealved {
    overflow-y: scroll;
  }
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
