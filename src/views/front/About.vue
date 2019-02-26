<template>
  <div class="bg-dark" style="height:1000px;">
    <div class="h1">關於我們</div>
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