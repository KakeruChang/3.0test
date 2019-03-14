<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>會員資料</th>
          <th>購買品項</th>
          <th>應付金額</th>
          <th>已否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orderList" :key="item.id">
          <td>{{item.create_at}}</td>
          <td>
            <p>姓名:{{item.user.name}}</p>
            <p>地址:{{item.user.address}}</p>
            <p>電子郵件:{{item.user.email}}</p>
          </td>
          <td>
            <p
              v-for="value in item.products"
              :key="value.id"
            >{{value.product.title}} 數量:{{value.qty}}{{value.product.unit}}</p>
          </td>
          <td>{{Math.floor(item.total)}}</td>
          <td>
            <span v-if="item.is_paid" class="text-success">已付款</span>
            <span v-else class="text-danger">未付款</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm" @click="Openmodal(item)">編輯</button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination v-if="pagination.total_pages>1" :page-data="pagination" @pagemove="getOrderList"></Pagination>
    <!-- add&edit Modal -->
    <div
      class="modal fade"
      id="orderListModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>修改訂單資料</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm">
                <div class="form-group">
                  <label for="create_at">訂單成立時間</label>
                  <input
                    type="text"
                    class="form-control"
                    id="create_at"
                    v-model="tempList.create_at"
                    disabled
                  >
                </div>
                <div class="form-group">
                  <label for>是否付款</label>
                  <br>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="true"
                      v-model="tempList.is_paid"
                    >
                    <label class="form-check-label" for="inlineRadio1">是</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="false"
                      v-model="tempList.is_paid"
                    >
                    <label class="form-check-label" for="inlineRadio2">否</label>
                  </div>
                </div>
                <div class="form-group">
                  <label for="message">留言</label>
                  <input type="text" class="form-control" id="message" v-model="tempList.message">
                </div>
                <div class="form-group">
                  <label for="payment_method">付款方式</label>
                  <input
                    type="text"
                    class="form-control"
                    id="payment_method"
                    v-model="tempList.user.payment_method"
                  >
                </div>

                <div class="form-group">
                  <label for="user">
                    <strong>訂單明細</strong>
                  </label>
                  <div class="form-row" v-for="item in tempList.products" :key="item.id">
                    <div class="col-6">
                      <input
                        type="text"
                        class="form-control"
                        id="product_title"
                        v-model="item.product.title"
                        disabled
                      >
                    </div>
                    <div class="col-1">
                      <input type="text" class="form-control" id="product_qty" v-model="item.qty">
                    </div>
                    <div class="col-1">
                      <input
                        type="text"
                        class="form-control"
                        id="product_coupon"
                        v-model="item.product.unit"
                        disabled
                      >
                    </div>
                    <span class="h5">優惠:</span>
                    <div class="col-1">
                      <input
                        type="text"
                        class="form-control"
                        id="product_unit"
                        v-model="item.coupon.percent"
                        disabled
                      >
                    </div>
                    <span class="h5">%</span>
                  </div>
                </div>
                <div class="form-group">
                  <label for="total">訂單總額</label>
                  <input type="text" class="form-control" id="total" v-model="tempList.total">
                </div>
                <div class="form-group">
                  <label for>
                    <strong>連絡資料</strong>
                  </label>
                  <br>姓名
                  <input
                    type="text"
                    class="form-control"
                    id="user_name"
                    v-model="tempList.user.name"
                  >
                  <br>電話
                  <input
                    type="text"
                    class="form-control"
                    id="user_tel"
                    v-model="tempList.user.tel"
                  >
                  <br>電子郵件
                  <input
                    type="text"
                    class="form-control"
                    id="user_email"
                    v-model="tempList.user.email"
                  >
                  <br>通訊地址
                  <input
                    type="text"
                    class="form-control"
                    id="user_address"
                    v-model="tempList.user.address"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateOrderList">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- add&edit Modal -->
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      orderList: [],
      pagination: {},
      tempList: {
        user: {
          name: '',
          email: '',
          address: '',
          tel: '',
        },
        products: [
        ],
      },
      isLoading: false,
    };
  },
  methods: {
    getOrderList(page = 1) {
      // 給個預設值page = 1
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        console.log('getOrderList()', response.data);
        vm.isLoading = false;
        vm.orderList = response.data.orders;
        vm.pagination = response.data.pagination;
      });
    },
    Openmodal(item) {
      this.tempList = Object.assign({}, item);
      $('#orderListModal').modal('show');
    },
    updateOrderList() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/order/${vm.tempList.id}`;
      this.$http.put(api, { data: vm.tempList }).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          $('#orderListModal').modal('hide');
          vm.getOrderList(vm.pagination.current_page);
          console.log('修改成功');
        } else {
          $('#orderListModal').modal('hide');
          vm.getOrderList();
          console.log('修改失敗');
        }
      });
    },
  },
  created() {
    this.getOrderList();
  },
};
</script>
