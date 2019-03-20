<template>
  <div class="homepageWrap">
    <div class="homepage-slogan text-center">
      <h1 class="text-light">前往亞洲最美文化國度:日本</h1>
      <p class="text-light font-weight-bold h3 pt-4 pb-2">不論是自然美景，或是文化藝術，絕對會讓您留連忘返。</p>
      <a class="px-5 py-2 btn btn-light homepageToProduct" href="#/frontProducts">馬上出發</a>
      <!-- <a class="px-5 py-2 btn btn-light homepageToProduct" href="#/frontProducts">馬上出發</a> -->
    </div>
    <div id="carouselExampleControls" class="carousel slide h-100" data-ride="carousel">
      <div class="carousel-inner h-100">
        <div class="carousel-item carousel-item-1 h-100 active"></div>
        <div class="carousel-item carousel-item-2 h-100"></div>
        <div class="carousel-item carousel-item-3 h-100"></div>
      </div>
      <!-- <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>-->
    </div>
  </div>
</template>


<script>
import $ from 'jquery';

$(document).ready(() => {
  $('.carousel').carousel({
    interval: 2000,
    wrap: true,
  });
  // resize
  $(window).resize(() => {
    $('.homepageWrap').css('height', `${window.innerHeight}px`);
  });
});

export default {
  methods: {
    updateActiveOfNavbar(item) {
      this.$store.dispatch('updateHomeActive', item);
    },
    reCountHeight() {
      $('.homepageWrap').css('height', `${window.innerHeight}px`);
    },
  },
  created() {
    this.updateActiveOfNavbar('homepage');
  },
  mounted() {
    this.reCountHeight();
  },
};
</script>
<style lang="scss" scoped>
.carousel-item {
  background-size: cover;
  background-position: center center;
}
.carousel-item-1 {
  background-image: url("../../assets/home_bg/14536971751_77833884e5_k.jpg");
}
.carousel-item-2 {
  background-image: url("../../assets/home_bg/30691690338_a2e5ab4d31_k.jpg");
}
.carousel-item-3 {
  background-image: url("../../assets/home_bg/31781713132_96cfc765f3_k.jpg");
}
.homepage-slogan {
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  top: 45%;
  left: 0%;
  right: 0%;
  z-index: 1000;
}
.homepageToProduct {
  color: rgb(0, 0, 0);
}
.homepageToProduct:hover {
  color: rgb(100, 100, 100);
}
.btn-light:focus,
.btn-light.focus {
  box-shadow: none;
}
</style>
