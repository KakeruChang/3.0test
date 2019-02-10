<template>
  <div>
    <HomeNavbar/>
    <div class="container-fluid">
      <div>
        <!-- <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4"> -->
        <main role="main">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import HomeNavbar from './HomeNavbar';

export default {
  components: {
    HomeNavbar,
  },
};
</script>
<style scoped>
.container-fluid {
  background-image: url("../../assets/sky_ocean.jpg");
  /* background-repeat: no-repeat; */
  background-position: center;
  background-size: cover;
  height: 2000px;
}
</style>
