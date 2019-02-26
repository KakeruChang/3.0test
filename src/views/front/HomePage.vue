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
              class="d-block homepage-carousel-pic"
              src="../../assets/home_bg/14536971751_77833884e5_k.jpg"
              alt="First slide"
            >
            <div class="carousel-caption d-md-block">
              <h3 class="font-weigh-bold">心動不如馬上行動</h3>
              <p class="h3 my-auto">優惠代碼:tokyo</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block homepage-carousel-pic"
              src="../../assets/home_bg/30691690338_a2e5ab4d31_k.jpg"
              alt="Second slide"
            >
            <div class="carousel-caption d-md-block">
              <h3 class="font-weigh-bold">你還在這邊幹嘛</h3>
              <p class="h3 my-auto">優惠代碼:osaka</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block homepage-carousel-pic"
              src="../../assets/home_bg/31781713132_96cfc765f3_k.jpg"
              alt="Third slide"
            >
            <div class="carousel-caption d-md-block">
              <h3 class="font-weigh-bold">機會不等人</h3>
              <p class="h3 my-auto">優惠代碼:japan</p>
            </div>
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
});
export default {
  methods: {
    updateActiveOfNavbar(item) {
      this.$store.dispatch('updateHomeActive', item);
    },
  },
  created() {
    this.updateActiveOfNavbar('homepage');
  },
};
</script>
<style scoped>
.homepage-carousel-pic {
  width: 2048px;
}
.carousel-caption {
  bottom: 50%;
  background-color: rgba(50, 50, 50, 0.2);
}
</style>
