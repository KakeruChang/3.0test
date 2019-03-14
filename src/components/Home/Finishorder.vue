<template>
  <div class="finish-wrap">
    <div class="container">
      <div class="row mb-5 pt-5 justify-content-between">
        <button
          class="col-md-3 btn text-center sm-container mt-3"
          :class="{ 'btn-success': isActiveofCheckout==='orders',  'btn-secondary': isActiveofCheckout!=='orders'}"
          data-toggle="popover"
          data-placement="right"
          title="有優惠?!"
          data-content="試著輸入54312看看?"
        >
          <span class="text-light">1.確認訂單及輸入優惠碼</span>
        </button>
        <button
          class="col-md-3 btn text-center sm-container mt-3"
          :class="{ 'btn-success': isActiveofCheckout==='address',  'btn-secondary': isActiveofCheckout!=='address'}"
        >
          <span class="text-light">2.填寫寄送資訊</span>
        </button>
        <button
          class="col-md-3 btn text-center sm-container mt-3"
          :class="{ 'btn-success': isActiveofCheckout==='checkout',  'btn-secondary': isActiveofCheckout!=='checkout'}"
        >
          <span class="text-light">3.再次確認訂單並付款</span>
        </button>
      </div>
      <router-view/>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';

$(document).ready(() => {
  $(() => {
    $('[data-toggle="popover"]').popover();
  });
});
export default {
  computed: {
    isActiveofCheckout() {
      return this.$store.state.isActiveofCheckout;
    },
  },
};
</script>
<style lang="scss" scoped>
@media (max-width: 576px) {
  .sm-container {
    margin-left: 15px;
    margin-right: 15px;
  }
}

.finish-wrap {
  padding-bottom: 450px;
  background-image: url("https://subtlepatterns.com/patterns/restaurant_icons.png");
  background-size: cover;
  background-position: center center;
}
.btn:focus,
.btn.focus {
  box-shadow: none;
}
</style>
