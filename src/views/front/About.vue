<template>
  <div class="wrap-about">
    <div class="list-about">
      <ul>
        <li class>
          <a class="text-light scrollTop" href="#three_persist">
            三項堅持
            <i class="fas fa-car"></i>
          </a>
        </li>
        <li class>
          <a class="text-light scrollTop" href="#contact">
            連絡方式
            <i class="fas fa-bicycle"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class>
      <div class="sec-rotate benefit" id="three_persist">
        <div class="container row mx-auto sec-rotate-inside pt-1 text-light">
          <div class="col-md-4 text-center animated-about">
            <span class="d-block" style="background-color:rgba(0,0,0,0);">
              <i class="fas fa-fighter-jet fa-5x"></i>
            </span>
            <span>我們擁有業界最快的飛機，讓您享受音速的快感。</span>
          </div>
          <div class="col-md-4 text-center animated-about">
            <span class="d-block">
              <i class="fas fa-hotel fa-5x"></i>
            </span>
            <span>總是為您選擇最好的飯店，讓您就算出外也能感到家的溫暖。</span>
          </div>
          <div class="col-md-4 text-center animated-about">
            <span class="d-block">
              <i class="fas fa-suitcase-rolling fa-5x"></i>
            </span>
            <span>甚至不論何時何地都能幫您保管行李，讓您在國外也能放心地遊玩及採買。</span>
          </div>
        </div>
      </div>
      <div
        class="sec-rotate benefit"
        id="contact"
        style="background: url('https://subtlepatterns.com/patterns/restaurant_icons.png');"
      >
        <div class="container row mx-auto sec-rotate-inside pt-1">
          <div class="col-md-6 contact-us animated-about-left">
            <span class="h2 text-center d-block mx-5">我們在哪裡</span>
            <ul>
              <li>公車：站牌「OOOO」站，可搭乘72、208、553、藍7、藍20(區)，下車步行約5分鐘。</li>
              <li>公車：站牌「OOO」站，可搭乘21、28、33、42、72、208、222、247、256、267、268、286、287、556、620、646、681、683、902、棕16、紅2、藍20、藍26，下車步行約10分鐘。</li>
              <li>捷運：文湖線「劍南路」站3號出口，往OOO方向步行約10分鐘。</li>
              <li>開車資訊《北上》：走國道一號，從國道一號23A－圓山號出口下交流道→大直橋→明水路→樂群一路→敬業三路→樂群三路(OO家樂福)</li>
              <li>開車資訊《南下》：走國道一號，請走汐止五股高架段前往內湖區→堤頂大道→植福路→樂群三路(OO家樂福)</li>
            </ul>
          </div>
          <div class="col-md-6 animated-about-right">
            <img src="../../assets/images/map.jpg" alt class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
// //////////////
$(document).ready(() => {
  $('.scrollTop').click(function moveToScrollTopClass(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    const targetPosition = $(target).offset().top;
    $('html, body').animate({ scrollTop: targetPosition }, 1000);
  });
  $(window).scroll(() => {
    const scrollPosition = $(window).scrollTop();
    const windowHeight = $(window).height();

    $('.scrollTop').each(function addActiveToScrollTop() {
      const target = $(this).attr('href');
      const targetPosition = $(target).offset().top;
      const targetHeight = $(target).outerHeight();
      if (scrollPosition >= targetPosition - 250
        && (targetPosition + targetHeight - 250) > scrollPosition) {
        $('.scrollTop').parent().removeClass('active');
        $(this).parent().addClass('active');
      } else {
        $(this).parent().removeClass('active');
      }
    });

    // animated-about
    $('.animated-about').each(function addFadeInToAnimatedAbout() {
      const thisPosition = $(this).offset().top;
      if ((windowHeight + scrollPosition - 200) >= thisPosition) {
        $(this).addClass('fadeIn');
      }
    });
    $('.animated-about-left').each(function addFadeInToAnimatedAboutLeft() {
      const thisPosition = $(this).offset().top;
      if ((windowHeight + scrollPosition - 200) >= thisPosition) {
        $(this).addClass('fadeIn-side');
      }
    });
    $('.animated-about-right').each(function addFadeInToAnimatedAboutRight() {
      const thisPosition = $(this).offset().top;
      if ((windowHeight + scrollPosition - 200) >= thisPosition) {
        $(this).addClass('fadeIn-side');
      }
    });

    // contact
    $('#contact').css('background-position-x', `${scrollPosition / 2}px`);
    // $('#three_persist').css('transform', 'translateY( ' + (scrollPosition / 2) + 'px )');
  });
});
// ////////////////
export default {
  methods: {
    updateActiveOfNavbar(item) {
      this.$store.dispatch('updateHomeActive', item);
    },
  },
  created() {
    this.updateActiveOfNavbar('about');
  },
};
</script>
<style lang="scss" scoped>
.sec-rotate {
  transform: rotate(7.5deg);
  margin: 0 -200px 0 -200px;
}
.sec-rotate-inside {
  transform: rotate(-7.5deg);
}
@media (max-width: 768px) {
  .sec-rotate-inside {
    padding-top: 3rem !important;
  }
}
.benefit {
  padding-top: 100px;
  height: 350px;
  background-color: rgba(0, 0, 0, 0.6);
}
@media (max-width: 768px) {
  .benefit {
    padding: 0 200px 0 170px;
    .col-md-4 {
      margin-bottom: 30px;
    }
  }
}
#three_persist {
  margin-top: 600px;
}
#contact {
  margin-bottom: 300px;
  height: 500px;
}
@media (max-width: 990px) {
  #contact {
    height: 700px;
  }
}
@media (max-width: 768px) {
  #three_persist {
    height: 500px;
  }
  #contact {
    height: 800px;
  }
}
.list-about {
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 15%;
  right: 0;
  z-index: 1000;
  > ul {
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
    > li {
      padding: 15px;
    }
    .active {
      background-color: rgba(243, 190, 43, 0.7) !important;
    }
  }
}
.scrollTop {
  text-decoration: none;
  // line-height: 35px;
}
.animated-about {
  opacity: 0;
  transition: all 2s;
  transform: translateY(50px);
}
.animated-about-left {
  opacity: 0;
  transition: all 2s;
  transform: translateX(-500px);
}
.animated-about-right {
  opacity: 0;
  transition: all 2s;
  transform: translateX(500px);
}
.fadeIn {
  opacity: 1;
  transform: translateY(0);
}
.fadeIn-side {
  opacity: 1;
  transform: translateX(0);
}
</style>
