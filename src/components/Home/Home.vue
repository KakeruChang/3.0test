<template>
  <div>
    <HomeNavbar/>
    <div class="container-fluid">
      <div class="row">
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import HomeNavbar from './HomeNavbar'

export default {
  components: {
    HomeNavbar,
  },
}
</script>
