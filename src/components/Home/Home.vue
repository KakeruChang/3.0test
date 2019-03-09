<template>
  <div>
    <HomeNavbar/>
    <Alert/>
    <!--  -->
    <!--  -->
    <div>
      <main>
        <!-- <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4"> -->
        <router-view></router-view>
      </main>
    </div>
    <nav class="navbar footerNavbar fixed-bottom">
      <span
        class="nav-item m-auto text-light d-block"
      >Copyright© 日ノ本 TRAVEL SERVICE CO., LTD. All Rights Reserved</span>
      <!-- <router-link
        class="btn btn-secondary text-light font-weight-bold h6 m-auto"
        to="/frontProducts"
      >馬上開始選擇你的旅程吧</router-link>-->
    </nav>
  </div>
</template>

<script>
import HomeNavbar from './HomeNavbar.vue';
import Alert from '../AlertMessage.vue';

export default {
  components: {
    HomeNavbar,
    Alert,
  },
};
</script>
<style scoped>
main {
  height: 100%;
}
.footerNavbar {
  background-color: rgba(50, 50, 50, 0.3) !important;
}
</style>
