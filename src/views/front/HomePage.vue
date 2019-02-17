<template>
  <div class>
    <div class="row">
      <div
        class="carousel slide col-md-12"
        style="opacity:1;"
        id="carouselExampleIndicators"
        data-ride="carousel"
      >
        <!-- <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>-->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="../../assets/home_bg/14536971751_77833884e5_k.jpg"
              alt="First slide"
            >
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="../../assets/home_bg/30691690338_a2e5ab4d31_k.jpg"
              alt="Second slide"
            >
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="../../assets/home_bg/31781713132_96cfc765f3_k.jpg"
              alt="Third slide"
            >
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
import $ from 'jquery';
$('.carousel').carousel({
  interval: 1000,
})
export default {
  // data() {
  //   return {
  //     carts: [],
  //   };
  // },
  // methods: {
  //   getCart() {
  //     const vm = this;
  //     const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
  //     this.$http.get(url).then((response) => {
  //       console.log('getCart()_response:', response.data);
  //       vm.carts = response.data.data;
  //       console.log('getCart()_data(vm.carts):', vm.carts);
  //       //
  //       this.$bus.$emit('cartinfo', response.data.data);
  //       //
  //     });
  //   },
  //   removeCartItem(id) {
  //     const vm = this;
  //     const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
  //     vm.isLoading = true;
  //     this.$http.delete(url).then((response) => {
  //       console.log(response.data);
  //       vm.getCart();
  //       vm.isLoading = false;
  //     });
  //   },
  // },
  // created() {
  //   this.getCart();
  //   const vm = this;
  //   // 自定義名稱 'idofDeleteItem'
  //   // deleteID: 傳入參數
  //   vm.$bus.$on('idofDeleteItem', (deleteID) => {
  //     vm.removeCartItem(deleteID)
  //   });
  // }
}
</script>


