<template>
  <div>
    <!-- <div class="mb-5"> -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light homenavbar">
      <router-link class="text-light" to="/homePage">
        <i
          class="fas fa-home fa-2x mr-3"
          :class="{ 'home-navbar-item-active': isActiveofHomeNavebar==='homepage' }"
        ></i>
      </router-link>
      <div class="search-md">
        <Search/>
      </div>
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
          <li class="nav-item ml-3 mt-1">
            <router-link
              class="h5 home-navbar-item"
              :class="{ 'home-navbar-item-active': isActiveofHomeNavebar==='product' }"
              to="/frontProducts"
            >本店商品</router-link>
          </li>
          <li class="nav-item mx-3 mt-1">
            <router-link
              class="h5 home-navbar-item"
              :class="{ 'home-navbar-item-active': isActiveofHomeNavebar==='about' }"
              to="/about"
            >關於我們</router-link>
          </li>
          <li class="search-sm">
            <Search/>
          </li>
        </ul>
        <Shoppingcart/>
        <router-link
          class="nav-link mx-2 btn btn-outline-primary navbar-dashboard"
          to="/admin/products"
        >後台</router-link>
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
.search-md {
  display: none;
  margin-right: auto;
}
@media (max-width: 990px) {
  .search-md {
    display: block;
    margin-bottom: -15px;
  }
}
@media (max-width: 541px) {
  .search-md {
    display: none;
    max-width: 100%;
  }
}
.search-sm {
  display: inline;
}
@media (max-width: 990px) {
  .search-sm {
    display: none;
  }
}
@media (max-width: 541px) {
  .search-sm {
    display: block;
  }
}
</style>
