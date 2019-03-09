<template>
  <div class="d-flex px-3 wrapofSearch">
    <div class="py-1 findsomething">
      <input
        type="text"
        class="searchInput"
        placeholder="想找點什麼呢?"
        aria-label="find"
        aria-describedby="basic-addon1"
        v-model="searchFilter"
      >
    </div>
    <div class="pl-1 my-auto">
      <a href="javascript:void(0)" @click.prevent="cleanSearch()">
        <i class="fas fa-times"></i>
      </a>
    </div>
    <div class="pl-3 my-auto">
      <a href="javascript:void(0)" @click.prevent="gotoSearch()">
        <i class="fas fa-search"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchFilter: '',
    };
  },
  methods: {
    gotoSearch() {
      this.$store.dispatch('productsModules/updateSearchFilter', this.searchFilter);
      this.$router.push(`/frontProducts`);
      this.$store.dispatch('productsModules/getProducts');
    },
    cleanSearch() {
      this.searchFilter = '';
    }
  },
};
</script>
<style scoped>
.searchInput {
  border: none;
  font-size: 18px;
}
.searchInput:focus {
  outline: none;
}
.wrapofSearch {
  background-color: #fff;
  border-radius: 24px;
}

@media (max-width: 990px) {
  .findsomething {
    margin-right: auto;
    max-width: 260px;
  }
  .wrapofSearch {
    margin-bottom: 15px;
    margin-right: 15px;
    max-width: 260px;
  }
}

a {
  color: #000;
}
</style>

