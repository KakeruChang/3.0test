<template>
  <div class="message-alert">
    <div
      class="alert alert-dismissible"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages"
      :key="i"
    >
      <span class="mr-5">
        <i class="far fa-thumbs-up" v-if="item.status==='success'"></i>
        <i class="far fa-thumbs-down" v-else></i>
        <span v-if="item.data">{{ item.data.product.title }}x{{ item.data.qty }}</span>
        {{ item.message }}
      </span>
      <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      // messages: [],
    };
  },
  methods: {
    updateMessage(message, status) {
      this.$store.dispatch('updateMessage', { message, status });
    },
    removeMessage(num) {
      this.$store.dispatch('removeMessage', num);
    },
  },
  computed: {
    messages() {
      return this.$store.state.messageModules.messages;
    },
  },
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 56px;
  right: 20px;
  z-index: 1100;
}
</style>
