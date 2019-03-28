<template>
  <div class="wrap-FrontProducts container-fluid">
    <loading :active.sync="isLoading"></loading>
    <div class="row pt-5 pb-4">
      <div class="col-md-3 col-lg-2 pb-3">
        <div
          class="nav nav-pills nav-pills-frontproducts row sticky-top"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <!-- <a
            class="nav-link active nav-link-frontproducts col-md-12 col-sm-6 col-12 productmenu-item"
            id="v-pills-home-tab"
            data-toggle="pill"
            href="#v-pills-home"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
            @click.prevent="productFilter='';getProducts();"
          >全部</a>-->
          <a
            class="nav-link nav-link-frontproducts col-md-12 col-sm-6 col-12 productmenu-item"
            :class="{ 'active': productFilter==='' }"
            id="v-pills-home-tab"
            data-toggle="pill"
            href="#v-pills-home"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
            @click.prevent="updateFilter('');getProducts();"
          >
            <div>全部</div>
            <div class="fs-12">ゼンブ</div>
          </a>
          <a
            class="nav-link nav-link-frontproducts col-md-12 col-sm-6 col-12 productmenu-item"
            :class="{ 'active': productFilter==='関東' }"
            id="v-pills-profile-tab"
            data-toggle="pill"
            href="#v-pills-profile"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
            @click.prevent="updateFilter('関東');getProducts();"
          >
            <div>関東</div>
            <div class="fs-12">カントウ</div>
          </a>
          <a
            class="nav-link nav-link-frontproducts col-md-12 col-sm-6 col-12 productmenu-item"
            :class="{ 'active': productFilter==='関西' }"
            id="v-pills-messages-tab"
            data-toggle="pill"
            href="#v-pills-messages"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
            @click.prevent="updateFilter('関西');getProducts();"
          >
            <div>関西</div>
            <div class="fs-12">カンサイ</div>
          </a>
          <a
            class="nav-link nav-link-frontproducts col-md-12 col-sm-6 col-12 productmenu-item"
            :class="{ 'active': productFilter==='北海道' }"
            id="v-pills-settings-tab"
            data-toggle="pill"
            href="#v-pills-settings"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
            @click.prevent="updateFilter('北海道');getProducts();"
          >
            <div>北海道</div>
            <div class="fs-12">ホッカイドウ</div>
          </a>
        </div>
      </div>
      <div class="row col-md-9 col-lg-10 mx-md-auto" style="padding-bottom:100px;height:100%;">
        <div class="flyGift text-success">
          <i class="fas fa-gift fa-2x"></i>
        </div>
        <div class="col-md-12">
          <Pagination class="pt-3" :page-data="pagination" @pagemove="getProducts"></Pagination>
        </div>
        <div class="col-md-12 row mx-md-auto" style="height:100%;">
          <!-- <div class="col-md row" style="overflow-y:scroll;"> -->
          <div
            class="col-lg-4 col-md-6 col-sm-12 pb-5"
            v-for="item in productsRevealed"
            :key="item.id"
          >
            <!-- 改造中 -->
            <div
              class="border-0"
              style=" background-size: cover; background-position: center"
              :style="{backgroundImage:`url(${item.imageUrl})`}"
            >
              <div class="product-inner-wrap">
                <h5 class="text-left pl-3 pt-3">
                  <strong class="text-primary border border-primary rounded p-1">{{item.title}}</strong>
                </h5>
                <div class="h-100 w-100 product-inner hover">
                  <button
                    type="button"
                    class="btn h-100 w-100"
                    @click.prevent="gettheProduct(item.id)"
                  >
                    <div class="card-body">
                      <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
                      <h5 class="text-left">
                        <strong>
                          <a
                            href="#"
                            class="text-light border border-light p-1"
                            @click.prevent="gotoTheProduct(item.id)"
                          >{{item.title}}</a>
                        </strong>
                      </h5>
                      <div class="frontproduct-text text-light">
                        <p class="card-text">{{item.content}}</p>
                      </div>
                      <div class="d-flex justify-content-between align-items-baseline">
                        <div class="h5" v-if="!item.price">{{item.origin_price}} 元</div>
                        <div class="h5 text-warning ml-auto" v-if="item.price">售價:{{item.price}}元</div>
                      </div>
                    </div>
                  </button>
                  <div class="card-footer d-flex">
                    <button
                      type="button"
                      class="btn btn-outline-light btn-sm"
                      @click="gotoTheProduct(item.id)"
                    >
                      <i class="fas fa-spinner fa-spin" v-if="status.loadingItem===item.id"></i>
                      查看更多
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-warning btn-sm ml-auto"
                      @click="addtoCart(item.id);"
                    >
                      <i class="fas fa-spinner fa-spin" v-if="status.loadingItem===item.id"></i>
                      加到購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- 改造中 -->
            <!-- back up
            <div class="card border-0 shadow-sm">
              <div class="card-pic-wrap w-100 h-100">
                <div
                  class="card-pic"
                  style="height: 150px; background-size: cover; background-position: center"
                  :style="{backgroundImage:`url(${item.imageUrl})`}"
                >
                  <button
                    type="button"
                    class="btn btn-sm h-100 w-100"
                    @click.prevent="gettheProduct(item.id)"
                  ></button>
                </div>
              </div>
              <div class="card-body">
                <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
                <h5 class="card-title">
                  <strong>
                    <a
                      href="#"
                      class="text-dark"
                      @click.prevent="gotoTheProduct(item.id)"
                    >{{item.title}}</a>
                  </strong>
                </h5>
                <div class="frontproduct-text">
                  <p class="card-text">{{item.content}}</p>
                </div>
                <div class="d-flex justify-content-between align-items-baseline">
                  <div class="h5" v-if="!item.price">{{item.origin_price}} 元</div>
                  <div class="h5 text-danger ml-auto" v-if="item.price">售價:{{item.price}}元</div>
                </div>
              </div>
              <div class="card-footer d-flex">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm"
                  @click="gotoTheProduct(item.id)"
                >
                  <i class="fas fa-spinner fa-spin" v-if="status.loadingItem===item.id"></i>
                  查看更多
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm ml-auto"
                  @click="addtoCart(item.id);"
                >
                  <i class="fas fa-spinner fa-spin" v-if="status.loadingItem===item.id"></i>
                  加到購物車
                </button>
              </div>
            </div>
            -->
          </div>
        </div>
      </div>
    </div>

    <!--購物車-->
    <div
      class="dropup"
      v-if="carts.carts"
      style="position:fixed;left:15px;bottom:80px;z-index:9999;"
    >
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
            class="btn btn-primary btn-block"
            to="/finishorder/orders"
            v-if="carts.carts.length!==0"
          >
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
          <img :src="product.imageUrl" class="img-fluid" alt>
          <!--<div class="modal-body">
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
          </div>-->
          <!-- <div class="modal-footer">
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
          </div>-->
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
  </div>
</template>

<script>
import $ from 'jquery';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
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
      // carts: [],
      coupon_code: '',
      // productFilter: '',
      searchFilter: '',
    };
  },
  methods: {
    getProducts(page = 1) {
      this.$store.dispatch('productsModules/updatePage', page);
      // this.$store.dispatch('productsModules/updateProductFilter', this.productFilter);
      // this.$store.dispatch('productsModules/updateSearchFilter', this.searchFilter);//
      this.$store.dispatch('productsModules/getProducts');
    },
    updateFilter(filter) {
      this.$store.dispatch('productsModules/updateProductFilter', filter);
    },
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
    moveGift() {
      // const clickX = window.event.clientX;
      // const clickY = window.event.clientY;
      $('.flyGift').css({
        display: 'inline',
      });
      $('.flyGift').css({
        left: `${window.event.clientX}px`, top: `${window.event.clientY}px`, 'z-index': '999',
      });
      setTimeout(() => {
        console.log('moveGiftofwindow:', window.innerWidth);
        if (window.innerWidth > 990) {
          $('.flyGift').css({
            left: `${window.innerWidth - 160}px`, top: '25px',
          });
        } else {
          $('.flyGift').css({
            left: `${window.innerWidth - 80}px`, top: '25px',
          });
        }
      }, 50);
    },
    returnGift() {
      $('.flyGift').css({
        'z-index': '-1', left: '-50px', top: '-50px', display: 'none',
      });
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      vm.moveGift();
      setTimeout(() => {
        vm.returnGift();
        vm.status.loadingItem = id;
        vm.$store.dispatch('cartModules/addtoCart', { id, qty }).then(() => {
          vm.status.loadingItem = '';
          $('#productModal').modal('hide');
        });
      }, 1000);
    },
    ...mapActions('cartModules', ['getCart']),
    gotoTheProduct(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(url).then((response) => {
        vm.product = response.data.product;
        vm.$router.push(`/frontProducts/${id}`);
        // $('#productModal').modal('show');
        // vm.product.num = 1;
        // console.log(response.data);
        vm.status.loadingItem = '';
      });
    },
    // getCart() {
    //   this.$store.dispatch('getCart');
    // }
    removeCartItem(id) {
      this.$store.dispatch('cartModules/removeCartItem', id);
    },
    updateActiveOfNavbar(item) {
      this.$store.dispatch('updateHomeActive', item);
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    productsRevealed() {
      return this.$store.state.productsModules.productsRevealed;
    },
    productFilter() {
      return this.$store.state.productsModules.productFilter;
    },
    pagination() {
      return this.$store.state.productsModules.pagination;
    },
    carts() {
      return this.$store.state.cartModules.carts;
    },
  },
  created() {
    this.getProducts();
    this.getCart();
    this.updateActiveOfNavbar('product');

    // const vm = this;
    // // 自定義名稱 'idofDeleteItem'
    // // deleteID: 傳入參數
    // vm.$bus.$on('idofDeleteItem', (deleteID) => {
    //   vm.removeCartItem(deleteID);
    // });
  },
};
</script>
<style  lang="scss" scoped>
a:hover {
  text-decoration: none;
}
.searchInput {
  border: none;
  font-size: 18px;
}
.searchInput:focus {
  outline: none;
}
.wrapofSearch {
  background-color: #fff;
  border-radius: 24px;
}
// .product-inner {
//   opacity: 0;
//   transition: all 1s;
//   transform: translateY(50px);
//   h5 {
//     transition: all 2s;
//     transform: translateX(-50px);
//   }
// }
.product-inner-wrap {
  & > h5 {
    position: absolute;
  }
  .product-inner {
    opacity: 0;
    transition: all 1s;
    transform: translateY(50px);
    h5 {
      transition: all 2s;
      transform: translateX(-50px);
    }
  }
}
@media (min-width: 991px) {
  .product-inner-wrap:hover {
    & > h5 {
      opacity: 0;
    }
    .product-inner {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.5);
      transform: translateY(0);
      h5 {
        transform: translateX(0);
      }
    }
  }
}
@media (max-width: 990px) {
  .product-inner-wrap {
    & > h5 {
      opacity: 0;
    }
  }
  .product-inner.hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
    transform: translateY(0);
    h5 {
      transform: translateX(0);
    }
  }
}
.fs-12 {
  font-size: 12px;
  line-height: 75%;
}
</style>
