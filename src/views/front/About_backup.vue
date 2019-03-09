<template>
  <div>
    <div class="wrap">
      <nav class="navbar navbar-default">
        <div class="container">
          <a href="#" class="logo pull-left">
            <span class="hidden-mobile">六角學院</span> 視差滾動範例
          </a>
          <ul class="nav-menu pull-right clearfix hidden-mobile">
            <li>
              <a href="#three-point" class="scrollTop" title="三大重點">三大重點</a>
            </li>
            <li>
              <a href="#skills" class="scrollTop" title="技能熟練度">技能熟練度</a>
            </li>
            <li>
              <a href="#profiles" class="scrollTop" title="個人簡介">個人簡介</a>
            </li>
          </ul>
        </div>
      </nav>

      <section class="header-wrap">
        <div class="container h100 relative" id="header-ele">
          <div class="header-text text-white bg-gradient1">
            <h1 class>六角學院</h1>
            <h2>視差滾動範例</h2>
          </div>

          <div class="header-img hidden-mobile"></div>
        </div>
      </section>

      <section id="three-point" class="section bg-white section-rotate box-shadow">
        <div class="section-rotate-fixed">
          <div class="container p-y-3">
            <h2 class="text-center m-b-2">三大重點</h2>
            <div class="row">
              <div class="col-three-one">
                <div class="text-center m-y-2">
                  <span class="fa fa-mobile fa-5x"></span>
                </div>
                <h3 class="text-center m-y-1">Fully Responsive</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aut dolorem in autem veniam, nisi repellendus amet a eum laboriosam veritatis doloremque consectetur.</p>
              </div>
              <div class="col-three-one">
                <div class="text-center m-y-2">
                  <span class="fa fa-code fa-5x"></span>
                </div>
                <h3 class="text-center m-y-1">Easy to learn</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aut dolorem in autem veniam, nisi repellendus amet a eum laboriosam veritatis doloremque consectetur.</p>
              </div>
              <div class="col-three-one">
                <div class="text-center m-y-2">
                  <span class="fa fa-html5 fa-5x"></span>
                </div>
                <h3 class="text-center m-y-1">HTML + CSS</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aut dolorem in autem veniam, nisi repellendus amet a eum laboriosam veritatis doloremque consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" class="bg-gradient1 text-white section-rotate">
        <div class="section-rotate-fixed">
          <div class="container p-y-3">
            <h2 class="text-center m-b-2">技能熟練度</h2>
            <div class="row">
              <div class="col-half">
                <div class="text-center m-y-2">
                  <span class="fa fa-code fa-5x"></span>
                </div>
                <h3 class="text-center m-y-1">HTML + CSS</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aut dolorem in autem veniam, nisi repellendus amet a eum laboriosam veritatis doloremque consectetur.</p>
              </div>
              <div class="col-half">
                <div class="m-b-1">
                  <span>
                    <span class="fa fa-html5"></span> HTML
                  </span>
                  <div class="progress">
                    <div class="progress-bar" style="width: 85%">85</div>
                  </div>
                </div>
                <div class="m-b-1">
                  <span>
                    <span class="fa fa-css3"></span> CSS3
                  </span>
                  <div class="progress">
                    <div class="progress-bar" style="width: 85%">80</div>
                  </div>
                </div>
                <div class="m-b-1">
                  <span>
                    <span class="fa fa-database"></span> Database
                  </span>
                  <div class="progress">
                    <div class="progress-bar" style="width: 75%">75</div>
                  </div>
                </div>
                <div class="m-b-1">
                  <span>
                    <span class="fa fa-git"></span> Git
                  </span>
                  <div class="progress">
                    <div class="progress-bar" style="width: 60%">60</div>
                  </div>
                </div>
                <div class="m-b-1">
                  <span>
                    <span class="fa fa-group"></span> Team work
                  </span>
                  <div class="progress">
                    <div class="progress-bar" style="width: 90%">90</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="profiles"
        class="p-y-3 section-rotate box-shadow"
        style="background: url('https://subtlepatterns.com/patterns/restaurant_icons.png');"
      >
        <div class="section-rotate-fixed">
          <div class="container">
            <h2 class="text-center m-b-1">自我簡介</h2>
            <div class="row">
              <div class="col-half m-b-2">
                <h3>Casper</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam molestiae, perspiciatis deserunt provident tempora iusto quis rem accusantium, accusamus commodi iure aliquid animi cupiditate saepe autem corporis facilis ullam cumque!</p>
                <div class="m-t-1 text-right">
                  <a href="#" class="text-link">
                    <span class="fa fa-facebook-official fa-2x"></span>
                  </a>
                  <a href="#" class="text-link">
                    <span class="fa fa-twitter-square fa-2x"></span>
                  </a>
                  <a href="#" class="text-link">
                    <span class="fa fa-google-plus-square fa-2x"></span>
                  </a>
                </div>
                <p class="text-right">accusamus commodi iure aliquid animi cupiditate saepe
                  <br>autem corporis facilis ullam cumque!
                </p>
              </div>
              <div class="col-half">
                <img
                  src="https://images.unsplash.com/photo-1456534231849-7d5fcd82d77b?dpr=2&auto=format&fit=crop&w=750&h=423&q=80&cs=tinysrgb&crop="
                  alt
                  class="img-fluid box-shadow"
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer p-y-3 text-right">
        <div class="container">視差滾動範例</div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    updateActiveOfNavbar(item) {
      this.$store.dispatch('updateHomeActive', item);
    },
  },
  created() {
    this.updateActiveOfNavbar('about');
  },
}
</script>
<style lang="scss" scoped>
// font
$font-family: "Microsoft JhengHei", PMingLiU, MingLiu, "Segoe UI", "Helvetica",
  Garuda, Arial, sans-serif;
$font-size: 16px;

// gutter
$gutter: 15px;

// color
$background-color: #fcfbf5;
$font-color: #333;
$font-color-gray: lighten($font-color, 55%);

$brand-primary: #039dff;
$brand-success: #00cc99;
$brand-accent: #e26789;
$brand-dark: $font-color;
$brand-facebook: #4080ff;

// navbar
$navbar-height: 42px;

// progress
$progress-height: 20px;

// section
$section-gutter: 45px;

// zindex
$navbar-zindex: 1000;
$fab-zindex: 1045;

// breakpoint
$mobile-size: 779px;

//** Base **//
* {
  box-sizing: border-box;
}
body,
html {
  height: 100%;
  line-height: 1.5;
  font-family: $font-family;
}
h1 {
  font-size: $font-size * 3;
}
h2 {
  font-size: $font-size * 2.5;
}
h3 {
  font-size: $font-size * 2;
}
a {
  color: $brand-primary;
}

//** Grid **//
.wrap {
  overflow: hidden;
  background-image: url(https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?dpr=2&auto=format&fit=crop&w=450&h=750&q=50&cs=tinysrgb&crop=);
  background-position: center center;
  background-size: cover;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}

.row {
  margin-left: -15px;
  margin-right: -15px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.col-half,
.col-three-one,
.col-quarter {
  float: left;
  padding-left: 15px;
  padding-right: 15px;
}

.col-half {
  width: 50%;
}
.col-half-center {
  margin-left: 25%;
}
.col-three-one {
  width: 33.33333%;
}
.col-three-one-center {
  margin-left: 33.33333%;
}
.col-quarter {
  width: 25%;
}

@media (max-width: $mobile-size) {
  .col-half,
  .col-three-one,
  .col-quarter {
    float: none;
    width: 100%;
  }

  .col-half-center,
  .col-three-one-center {
    margin-left: 0;
  }
}

//** Navbar **//
.navbar {
  position: fixed;
  top: 10%;
  left: 0;
  right: 0;
  z-index: $navbar-zindex;
  &.navbar-bottom {
    top: auto;
    bottom: 0;
  }
}

.navbar-default {
  background-color: rgba(black, 0.75);
  box-shadow: 0 0 5px rgba(black, 0.15);
}

.logo {
  display: block;
  padding: 12px 16px;
  text-decoration: none;
  color: white;
  font-size: $font-size + 2;
}

.nav-menu {
  margin: 0;
  list-style: none;
  li {
    float: left;
  }
  a {
    display: block;
    padding: 12px 16px;
    text-decoration: none;
    color: white;
    font-size: $font-size + 2;
    &:hover,
    &:active,
    &:focus {
      background-color: rgba(black, 0.05);
    }
    &.active {
      box-shadow: 0 -2px 0 $brand-accent inset;
    }
  }

  // style
  .nav-accent {
    color: white;
    background-color: $brand-accent;
    &:hover,
    &:active,
    &:focus {
      color: white;
      background-color: darken($brand-accent, 15%);
    }
    &.active {
      box-shadow: 0 -2px 0 darken($brand-accent, 15%) inset;
    }
  }
}

//** Section **//
.section {
  padding: 35px 0;
}
.section-rotate {
  transform: rotate(-7deg);
  margin-left: -80px;
  margin-right: -80px;
  padding: 35px 80px 35px 80px;
  .section-rotate-fixed {
    transform: rotate(7deg);
  }
}

//** Progress bar **//
.progress {
  height: $progress-height;
  overflow: hidden;
  background-color: rgba(#fafafa, 0.45);
  border-radius: 3px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  position: relative;
}
.progress-bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  font-size: 12px;
  line-height: $progress-height;
  color: #fff;
  text-align: center;
  background-color: $brand-accent;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  transition: width 1s ease;
}

//** Partials Header **//
.header-wrap {
  height: 600px;
  width: 130%;
  margin: -10% -15% 0 -15%;
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 10%;
  overflow: hidden;
  transform: rotate(-7deg);
}
.header-img {
  background-image: url(https://firebasestorage.googleapis.com/v0/b/hexschool-api.appspot.com/o/tutorials%2FRWD%2Fman-for-scroll-demo-light.png?alt=media&token=625670d9-4180-434b-a4bd-c1b1db0d0604);
  background-position: right 0;
  background-size: cover;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
.header-text {
  padding: 25px 35px;
  background-color: #555;
  background-image: linear-gradient(45deg, #333, #555);
  display: inline-block;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  box-shadow: 2px 5px 15px rgba(black, 0.25);
  & > * {
    transform: rotate(7deg);
  }
}

//** Utilities **//
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
.h100 {
  height: 100%;
}
.v-center {
  top: 50%;
  transform: translateY(-50%);
  position: relative;
}
.relative {
  position: relative;
}
.pull-left {
  float: left;
}
.pull-right {
  float: right;
}

.circle-border {
  border: transparent 2px solid;
  border-radius: 100%;
}
.border-white {
  border-color: white;
}

.bg-darker {
  background-color: darken($background-color, 5%);
}
.bg-dark {
  background-color: $brand-dark;
}
.bg-white {
  background-color: #fff;
}
.text-primary {
  color: $brand-primary;
}
.text-success {
  color: $brand-success;
}
.text-accent {
  color: $brand-accent;
}
.text-white {
  color: white;
  text-decoration: none;
}
.text-gray {
  color: $font-color-gray;
}
.text-right {
  text-align: right;
}
.block {
  display: block;
}
.box-shadow {
  position: relative;
  &:before {
    content: " ";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    box-shadow: 0 0 15px rgba(black, 0.15);
  }
}

// margin
.m-b-0 {
  margin-bottom: 0;
}
.m-t-1 {
  margin-top: $gutter;
}
.m-t-3 {
  margin-top: $gutter * 3;
}
.m-b-2 {
  margin-bottom: $gutter * 2;
}
.m-b-1 {
  margin-bottom: $gutter * 1;
}
.m-y-1 {
  margin-top: $gutter;
  margin-bottom: $gutter;
}
.m-y-2 {
  margin-top: $gutter * 2;
  margin-bottom: $gutter * 2;
}
.m-y-3 {
  margin-top: $gutter * 3;
  margin-bottom: $gutter * 3;
}
.m-x-1 {
  margin-left: $gutter;
  margin-right: $gutter;
}
.m-x-2 {
  margin-left: $gutter * 2;
  margin-right: $gutter * 2;
}
.p-y-1 {
  padding-top: $gutter;
  padding-bottom: $gutter;
}
.p-y-2 {
  padding-top: $gutter * 2;
  padding-bottom: $gutter * 2;
}
.p-y-3 {
  padding-top: $gutter * 3;
  padding-bottom: $gutter * 3;
}
.p-x-3 {
  padding-left: $gutter * 3;
  padding-right: $gutter * 3;
}
.p-a-3 {
  padding: $gutter * 3;
}

// align
.text-center {
  text-align: center;
}

// rwd
.img-fluid {
  display: block;
  max-width: 100%;
  height: auto;
}

// hidden
@media (max-width: $mobile-size) {
  .hidden-mobile {
    display: none !important;
  }
}
@media (min-width: $mobile-size) {
  .hidden-desktop {
    display: none !important;
  }
}

// Gradients

.bg-gradient1 {
  background-image: linear-gradient(45deg, #59f0ff, $brand-primary);
}
</style>

