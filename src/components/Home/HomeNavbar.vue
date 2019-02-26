<template>
  <div>
    <!-- <div class="mb-5"> -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light homenavbar">
      <router-link class to="/homePage">
        <i
          class="fas fa-home fa-2x mr-3"
          :class="{ 'home-navbar-item-active': isActiveofHomeNavebar==='homepage' }"
        ></i>
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
          <li class="nav-item ml-3 mt-1 active">
            <router-link
              class="h5 home-navbar-item"
              :class="{ 'home-navbar-item-active': isActiveofHomeNavebar==='product' }"
              to="/frontProducts"
            >本店商品</router-link>
          </li>
          <li class="nav-item ml-3 mt-1">
            <router-link
              class="h5 home-navbar-item"
              :class="{ 'home-navbar-item-active': isActiveofHomeNavebar==='about' }"
              to="/about"
            >關於我們</router-link>
          </li>
        </ul>
        <Shoppingcart></Shoppingcart>
        <router-link class="nav-link ml-1 btn btn-outline-primary" to="/admin/products">後台</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import Shoppingcart from '../Shoppingcart.vue';

export default {
  components: {
    Shoppingcart,
  },
  computed: {
    isActiveofHomeNavebar() {
      return this.$store.state.isActiveofHomeNavebar;
    },
  },
};
</script>

<style scoped>
.home-navbar-item {
  text-decoration: none;
  color: rgb(255, 255, 255);
}
.home-navbar-item:hover,
.home-navbar-item-active {
  color: rgb(255, 255, 255);
  text-shadow: 0px 0px 10px #fff, 0px 0px 10px #fff;
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
