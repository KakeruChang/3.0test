<template>
  <div class="container">
    <div class="row my-5 justify-content-between">
      <div
        class="col-md-5 alert text-center"
        :class="{ 'btn-success': isActiveofCheckout==='orders',  'btn-secondary': isActiveofCheckout!=='orders'}"
      >
        <span class="text-light">1.確認訂單及填寫</span>
      </div>
      <div
        class="col-md-5 alert text-center"
        :class="{ 'btn-success': isActiveofCheckout==='checkout',  'btn-secondary': isActiveofCheckout!=='checkout'}"
      >
        <span class="text-light">2.完成訂單並付款</span>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  computed: {
    isActiveofCheckout() {
      return this.$store.state.isActiveofCheckout;
    },
  },
  created() {
    console.log('123');
  }
};
</script>
