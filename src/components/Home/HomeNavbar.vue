<template>
  <div>
    <!-- <div class="mb-5"> -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light homenavbar">
      <router-link class="text-light" to="/homePage">
        <i
          class="fas fa-home fa-2x mr-3"
          :class="{ 'home-navbar-item-home-active': isActiveofHomeNavebar==='homepage' }"
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
          <li
            class="nav-item nav-item-homenav px-3 pt-3 pb-2"
            :class="{ 'home-navbar-item-active': isActiveofHomeNavebar==='product' }"
          >
            <router-link class="h5 home-navbar-item" to="/frontProducts">本店商品</router-link>
          </li>
          <li
            class="nav-item nav-item-homenav px-3 pt-3 pb-2"
            :class="{ 'home-navbar-item-active': isActiveofHomeNavebar==='about' }"
          >
            <router-link class="h5 home-navbar-item" to="/about">關於我們</router-link>
          </li>
          <li class="search-sm px-3">
            <Search/>
          </li>
        </ul>
        <Member/>
        <div class="px-2"></div>
        <Shoppingcart/>
        <router-link
          class="nav-link mx-2 btn btn-outline-primary navbar-dashboard"
          to="/admin/products"
          v-if="userHomeNavbar===userAdministrator"
        >後台</router-link>
        <div class="navbar-dashboard" v-if="userHomeNavbar!==userAdministrator"></div>
      </div>
    </nav>
  </div>
</template>

<script>
import Shoppingcart from '../Shoppingcart.vue';
import Member from '../Member.vue';

export default {
  components: {
    Shoppingcart,
    Member,
  },
  data() {
    return {
      // userAdministrator: process.env.VUE_APP_ADMINISTRATOR,
      userAdministrator: 'PaReC1Xb60gwBnTMskMhtBvM43U2',
    };
  },
  computed: {
    isActiveofHomeNavebar() {
      return this.$store.state.isActiveofHomeNavebar;
    },
    userHomeNavbar() {
      return this.$store.state.userWho;
    },
  },
  created() {
    console.log('userHomeNavbar()', this.userHomeNavbar);
    console.log('process.env.VUE_APP_APIPATH', process.env.VUE_APP_APIPATH);
    console.log('process.env.USER_ADMINISTRATOR', process.env.VUE_APP_ADMINISTRATOR);
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
  padding: 12px 0 8px 0;
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
