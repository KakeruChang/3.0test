<template>
  <div>
    <HomeNavbar/>
    <!--  -->
    <!--  -->
    <div class="wrap-all">
      <main>
        <!-- <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4"> -->
        <router-view></router-view>
      </main>
    </div>
    <nav class="navbar footerNavbar fixed-bottom">
      <span class="nav-item h4 text-light m-auto font-weight-bold">馬上開始你的日本之旅吧</span>
      <!-- <router-link
        class="btn btn-secondary text-light font-weight-bold h6 m-auto"
        to="/frontProducts"
      >馬上開始選擇你的旅程吧</router-link>-->
    </nav>
  </div>
</template>

<script>
import HomeNavbar from './HomeNavbar.vue';

export default {
  components: {
    HomeNavbar,
  },
};
</script>
<style scoped>
.wrap-all {
  /* background-image: url("../../assets/33615030586_bc0e948553_k (1).jpg"); */
  background-repeat: no-repeat;
  /* background-position: center;
  background-size: cover; */
  /* height: 853px; */
}
main {
  height: 100%;
}
.footerNavbar {
  background-color: rgba(150, 150, 150, 0.4) !important;
}
</style>
