<template>
  <div class="wrap-FrontProducts container-fluid">
    <loading class="topofAll" :active.sync="isLoading">
      <img src="./../../assets/gif/no.gif" alt>
    </loading>
    <div class="row pt-5 pb-4">
      <!-- <div class="col-md-3 col-lg-2 pb-3"> -->
      <!-- <div
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
            @click.prevent="updateFilter('');"
          >
            <div class="row justify-content-center">
              <div class="col-lg-5 col-md-6 col-4">
                <img class="ml-auto productmenu-item-img-all" src style="max-width:70px;">
              </div>
              <div class="col-lg-6 col-md-6 col-4 text-center" style="padding-left:0;">
                <div class="productmenu-item-zh">全部</div>
                <div class="fs-12 productmenu-item-jp">ゼンブ</div>
              </div>
            </div>
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
            @click.prevent="updateFilter('関東');"
          >
            <div class="row justify-content-center">
              <div class="col-lg-5 col-md-6 col-4" style>
                <img class="ml-auto productmenu-item-img-kantou" style="max-width:70px;">
              </div>
              <div class="col-lg-6 col-md-6 col-4 text-center" style="padding-left:0;">
                <div class="productmenu-item-zh">関東</div>
                <div class="fs-12 productmenu-item-jp">カントウ</div>
              </div>
            </div>
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
            @click.prevent="updateFilter('関西');"
          >
            <div class="row justify-content-center">
              <div class="col-lg-5 col-md-6 col-4" style>
                <img class="ml-auto productmenu-item-img-kansai" style="max-width:70px;">
              </div>
              <div class="col-lg-6 col-md-6 col-4 text-center" style="padding-left:0;">
                <div class="productmenu-item-zh">関西</div>
                <div class="fs-12 productmenu-item-jp">カンサイ</div>
              </div>
            </div>
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
            @click.prevent="updateFilter('北海道');"
          >
            <div class="row justify-content-center">
              <div class="col-lg-5 col-md-6 col-4" style>
                <img class="ml-auto productmenu-item-img-hokkaidou" style="max-width:70px;">
              </div>
              <div class="col-lg-6 col-md-6 col-4 text-center" style="padding-left:0;">
                <div class="productmenu-item-zh">北海道</div>
                <div class="fs-12 productmenu-item-jp">ホッカイドウ</div>
              </div>
            </div>
          </a>
      </div>-->
      <!-- </div> -->
      <div class="row col-md-12 col-lg-12 mx-md-auto" style="padding-bottom:100px;height:100%;">
        <div class="flyGift">
          <i class="fas fa-gift fa-2x"></i>
        </div>
        <div class="col-md-12 mt-3">
          <!--  -->
          <div>
            <ol class="breadcrumb" style="background-color:#fff;">
              <!-- <li class="breadcrumb-item">
                <a href="#/">首頁</a>
              </li>-->
              <li class="breadcrumb-item">
                <a
                  href="#/frontProducts"
                  @click.prevent="gotoProducts(product.category)"
                >{{product.category}}</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{product.title}}</li>
            </ol>
          </div>
          <div class="row my-3">
            <div class="col-md-5">
              <div class="card text-center">
                <div class="card-body">
                  <img :src="product.imageUrl" class="img-fluid" alt>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <h3
                    class="modal-title text-left mb-2 pb-2"
                    style="border-bottom:2px solid rgb(120,120,120);"
                  >紹介</h3>
                  <p class>{{product.content}}</p>
                  <p
                    class="text-right"
                    style="font-size:70%;color:rgb(120,120,120);"
                  >{{product.description}}</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center">
                <div class="card-body">
                  <h5
                    class="badge badge-danger float-right"
                    style="font-size:16px;"
                  >{{product.category}}</h5>
                  <h1
                    class="h2 font-bolder text-left mb-2 pb-2"
                    style="border-bottom:2px solid rgb(120,120,120);"
                  >{{product.title}}</h1>
                  <div class="row justify-content-between">
                    <div class="h5 col-4 text-left">單位:</div>
                    <div class="h5 col-4 text-right">1/{{product.unit}}</div>
                  </div>
                  <br>
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
    <!-- slides -->
    <h3>你可能也有興趣</h3>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="px-1" v-for="item in productsRecommended" :key="item.id">
        <div class>
          <!--<div
          class="border-0"
          style=" background-size: cover; background-position: center;box-shadow:0 1px 5px #000;"
          :style="{backgroundImage:`url(${item.imageUrl})`}"
          >-->
          <div class="product-inner-wrap">
            <div class="card h-100 w-100 product-inner hover">
              <button type="button" class="btn h-100 w-100" @click.prevent="gettheProduct(item.id)">
                <div class="card-title" style="position:relative;">
                  <img class="img-fluid" :src="`${item.imageUrl}`" style="height:250px;" alt>
                  <span
                    class="badge badge-danger"
                    style="font-size:16px;position:absolute;top:0;right:0;"
                  >{{item.category}}</span>
                </div>
                <div class="card-body">
                  <h5 class="text-left">
                    <strong>
                      <a
                        href="#"
                        class="text-info border border-info p-1 product-inner-title"
                        @click.prevent="gotoTheProduct(item.id)"
                      >{{item.title}}</a>
                    </strong>
                  </h5>
                  <div class="frontproduct-text text-dark" style="height:50px;overflow-y:auto;">
                    <p class="card-text">{{item.content}}</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-baseline">
                    <div class="h5" v-if="!item.price">{{item.origin_price}} 元</div>
                    <div class="h5 text-primary ml-auto" v-if="item.price">售價:{{item.price}}元</div>
                  </div>
                </div>
              </button>
              <div class="card-footer d-flex">
                <button
                  type="button"
                  class="btn btn-outline-info btn-sm"
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
      </swiper-slide>
      <!-- Optional controls
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
import $ from 'jquery';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  data() {
    return {
      product: {},
      theProductId: '',
      status: {
        loadingItem: '',
      },
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 0,
        speed: 600,
        autoplay: {
          delay: 5000,
        },
        breakpoints:
        {
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 1,
          },
        },
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
        vm.getRecommended();
        vm.gotoTop();
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
    gotoTop() {
      $('html, body').animate({
        scrollTop: 0,
      }, 500);
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
    gotoTheProduct(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(url).then((response) => {
        vm.product = response.data.product;
        vm.gotoTop();
        vm.$router.push(`/frontProducts/${id}`);
        // $('#productModal').modal('show');
        // vm.product.num = 1;
        // console.log(response.data);
        vm.status.loadingItem = '';
      });
    },
    getRecommended() {
      const theCategory = this.product.category;
      const theId = this.product.id;
      this.$store.dispatch('productsModules/getRecommendedProducts', { theCategory, theId });
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    productFilter() {
      return this.$store.state.productsModules.productFilter;
    },
    productsRevealed() {
      return this.$store.state.productsModules.productsRevealed;
    },
    productsRecommended() {
      return this.$store.state.productsModules.productsrecommended;
    },
  },
  components: {
    swiper,
    swiperSlide,
  },
  created() {
    const vm = this;
    this.theProductId = this.$route.params.productrId;
    this.gettheProduct(vm.theProductId);
  },
};
</script>
<style lang="scss" scoped>
@media (max-width: 768px) {
  .mx-md-auto {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
