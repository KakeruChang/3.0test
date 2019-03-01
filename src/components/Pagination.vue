<template>
  <div class="wrap">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled':!pageData.has_pre}">
          <a
            class="page-link"
            href="#"
            @click.prevent="pageMove(pageData.current_page-1)"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li
          class="page-item ml-2"
          v-for="page in pageData.total_pages"
          :key="page"
          :class="{'active':pageData.current_page===page}"
        >
          <a class="page-link" href="#" @click.prevent="pageMove(page)">{{page}}</a>
        </li>
        <li class="page-item ml-2" :class="{'disabled':!pageData.has_next}">
          <a
            class="page-link"
            href="#"
            @click.prevent="pageMove(pageData.current_page+1)"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pageData: {
      type: Object,
      default: function () { return {} },
    },
  },
  methods: {
    pageMove(page) {
      this.$emit('pagemove', page);
    },
  },
};
</script>
<style scoped>
.page-item:first-child .page-link {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.page-item:last-child .page-link {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.page-item .page-link {
  background-color: rgba(100, 100, 100, 0);
  border-color: #fff;
  color: #fff;
}
.page-item.active .page-link {
  text-shadow: 0px 0px 10px #fff, 0px 0px 10px #fff, 0px 0px 10px #fff,
    0px 0px 10px #fff, 0px 0px 10px #fff, 0px 0px 10px #fff, 0px 0px 10px #fff,
    0px 0px 10px #fff;
}

.page-item.disabled .page-link {
  color: #6c757d;
}
</style>
