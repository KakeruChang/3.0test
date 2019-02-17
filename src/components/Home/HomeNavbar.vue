<template>
  <!-- <div class="mb-5"> -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light homenavbar">
    <router-link class to="/homePage">
      <i class="fas fa-home fa-2x mr-3"></i>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light" style="height:8%"> -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link
            class="btn btn-secondary text-light font-weight-bold h6 mr-2"
            to="/frontProducts"
          >本店商品</router-link>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0) "
            class="btn btn-secondary text-light font-weight-bold h6 mr-2"
          >店舖情報</a>
          <!-- <a href="javascript:void(0) " class="nav-link text-light font-weight-bold h6">店舖情報</a> -->
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0) "
            class="btn btn-secondary text-light font-weight-bold h6"
          >關於我們</a>
        </li>
      </ul>
      <Shoppingcart></Shoppingcart>
      <router-link class="nav-link ml-1 btn btn-outline-primary" to="/admin/products">後台</router-link>
    </div>
  </nav>
</template>

<script>
import Shoppingcart from '../Shoppingcart';

export default {
  components: {
    Shoppingcart
  },
};
</script>

<style scoped>
.nav-item .nav-link :hover {
  color: rgb(128, 122, 122);
}
.homenavbar {
  background: rgba(150, 150, 150, 0) !important;
}
@media (max-width: 767px) {
  .homenavbar {
    background: rgb(150, 150, 150) !important;
  }
}
</style>
