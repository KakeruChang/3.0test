<template>
  <div class="wrap">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item btn-to-left" :class="{'disabled':!pageData.has_pre}">
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
        <li class="page-item ml-2 btn-to-right" :class="{'disabled':!pageData.has_next}">
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
      default() { return {}; },
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
  background-color: rgba(100, 100, 100, 0.3);
  border-color: #fff;
  color: #000;
  box-shadow: #000 0px 1px 3px;
}
.page-item.active .page-link {
  /* text-shadow: 0px 0px 10px #fff, 0px 0px 10px #fff, 0px 0px 10px #fff,
    0px 0px 10px #fff, 0px 0px 10px #fff, 0px 0px 10px #fff, 0px 0px 10px #fff,
    0px 0px 10px #fff; */
  background-color: rgba(243, 190, 43, 0.5);
}

.page-item.disabled .page-link {
  color: rgba(0, 0, 0, 0.1);
}
@media (max-width: 768px) {
  .btn-to-left {
    margin-left: auto;
  }
  .btn-to-right {
    margin-right: auto;
  }
}
</style>
