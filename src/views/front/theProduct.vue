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
          <a
            class="nav-link nav-link-frontproducts col-md-12 col-sm-6 col-12 productmenu-item"
            :class="{ 'active': productFilter==='' }"
            id="v-pills-home-tab"
            data-toggle="pill"
            href="#v-pills-home"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
            @click.prevent="gotoProducts('')"
          >全部</a>
          <a
            class="nav-link nav-link-frontproducts col-md-12 col-sm-6 col-12 productmenu-item"
            :class="{ 'active': productFilter==='関東' }"
            id="v-pills-profile-tab"
            data-toggle="pill"
            href="#v-pills-profile"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
            @click.prevent="gotoProducts('関東')"
          >関東</a>
          <a
            class="nav-link nav-link-frontproducts col-md-12 col-sm-6 col-12 productmenu-item"
            :class="{ 'active': productFilter==='関西' }"
            id="v-pills-messages-tab"
            data-toggle="pill"
            href="#v-pills-messages"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
            @click.prevent="gotoProducts('関西')"
          >関西</a>
          <a
            class="nav-link nav-link-frontproducts col-md-12 col-sm-6 col-12 productmenu-item"
            :class="{ 'active': productFilter==='北海道' }"
            id="v-pills-settings-tab"
            data-toggle="pill"
            href="#v-pills-settings"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
            @click.prevent="gotoProducts('北海道')"
          >北海道</a>
        </div>
      </div>
      <div class="row col-md-9 col-lg-10" style="padding-bottom:100px;height:100%;">
        <div class="flyGift">
          <i class="fas fa-gift fa-2x"></i>
        </div>
        <div class="col-md-12 mt-3">
          <!--  -->
          <div class="row my-3">
            <div class="col-md-8">
              <div
                class="card text-center"
                style="background: url('https://subtlepatterns.com/patterns/restaurant_icons.png');"
              >
                <div class="card-body">
                  <img :src="product.imageUrl" class="img-fluid" alt>
                  <h3
                    class="modal-title text-left mb-2 pb-2"
                    style="border-bottom:2px solid rgb(120,120,120);"
                  >紹介</h3>
                  <p class="card-title h5">{{product.content}}</p>
                  <p
                    class="text-right"
                    style="font-size:70%;color:rgb(120,120,120);"
                  >{{product.description}}</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div
                class="card text-center"
                style="background: url('https://subtlepatterns.com/patterns/restaurant_icons.png');"
              >
                <div class="card-body">
                  <h6
                    class="modal-title text-left mb-2 pb-2"
                    style="border-bottom:2px solid rgb(120,120,120);"
                  >{{product.title}}</h6>
                  <div class="d-flex justify-content-between align-items-baseline">
                    <div class="h5" v-if="!product.price">{{product.origin_price}} 元</div>
                    <del class="h6" v-if="product.price">原價{{product.origin_price}}元</del>
                    <div class="h5 text-danger" v-if="product.price">
                      現在只要
                      <strong>{{product.price}}</strong>元
                    </div>
                  </div>
                  <select name class="form-control mt-3" v-model="product.num">
                    <option :value="num" v-for="num in 10" :key="num">選購{{num}}{{product.unit}}</option>
                  </select>
                  <div class="text-muted text-nowrap mr-3">
                    小計
                    <strong>{{product.num*product.price}}</strong>
                  </div>
                </div>
                <div class="card-footer text-muted">
                  <button
                    type="button"
                    class="btn btn-addToCart w-100"
                    @click="addtoCart(product.id,product.num)"
                  >
                    <i class="fas fa-spinner fa-spin" v-if="product.id===status.loadingItem"></i>
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      product: {},
      theProductId: '',
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    gettheProduct(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      this.$http.get(url).then((response) => {
        vm.product = response.data.product;
        vm.product.num = 1;
      });
    },
    moveGift() {
      $('.flyGift').css({
        display: 'inline',
      });
      $('.flyGift').css({
        left: `${window.event.clientX}px`, top: `${window.event.clientY}px`, 'z-index': '999',
      });
      setTimeout(() => {
        $('.flyGift').css({
          left: '91%', top: '3%',
        });
      }, 50);
    },
    returnGift() {
      $('.flyGift').css({
        'z-index': '-1', left: '-3%', top: '-3%', display: 'none',
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
    gotoProducts(filter) {
      this.$store.dispatch('productsModules/updateProductFilter', filter);
      this.$router.push('/frontProducts');
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    productFilter() {
      return this.$store.state.productsModules.productFilter;
    },
  },
  created() {
    const vm = this;
    this.theProductId = this.$route.params.productrId;
    this.gettheProduct(vm.theProductId);
  },
};
</script>
