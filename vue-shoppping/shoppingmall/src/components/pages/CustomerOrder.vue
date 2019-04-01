<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
        <div class="card border-0 shadow-sm">
          <div
            style="height: 150px; background-size: cover; background-position: center"
            :style="{backgroundImage: `url(${item.image})`}"
          ></div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{item.title}}</a>
            </h5>
            <p class="card-text">{{item.content}}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if=" !item.price ">現在只要 {{ item.origin_price | currency }}</div>
              <del class="h6" v-if=" item.price && item.origin_price != 0">原價 {{ item.origin_price | currency }}</del>
              <div class="h5" v-if=" item.price ">現在只要 {{ item.price | currency }}</div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm"
              @click.prevent="getProduct(item.id)"
            >
              <i class="fas fa-spinner fa-spin" v-if="item.id == status.loadingItem"></i>
              查看更多
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm ml-auto"
                @click.prevent="addtoCart(item.id)">
              <i class="fas fa-spinner fa-spin" v-if="item.id == status.loadingItem"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <Page :pagination="pagination" v-on:getPageProducts="getProducts"></Page>
    <div style="width:60%; margin: 100px auto;" v-if="cartLen !== 0">
    <p class="text-center text-primary h1">購物車清單模擬</p>
    <table class="table table-sm mt-4">
      <thead>
        <tr>
          <th> </th>
          <th>商品類型</th>
          <th>數量</th>
          <th class="text-right">單位</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartList.carts" :key="item.id">
            <td>
                <button
                class="btn btn-outline-danger btn-sm mx-1"
                    @click.prevent="delCart(item.id)">
                <i class="fas fa-spinner fa-spin" v-if="item.id === status.loadingItem"></i>
                <i class="fas fa-trash-alt" v-else></i>
                </button>
            </td>
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }} {{  item.product.unit }}</td>
            <td class="text-right">{{ item.final_total | currency }}</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td class="text-right">總計</td>
            <td class="text-right">{{ cartList.total | currency }}</td>
        </tr>
         <tr class="text-success" v-if="cartList.final_total !== cartList.total">
            <td></td>
            <td></td>
            <td class="text-right">折扣價</td>
            <td class="text-right">{{ cartList.final_total | currency  }}</td>
        </tr>
      </tbody>
    </table>
    <div class="input-group mb-3 input-group-sm">
        <input class="form-control" type="text" placeholder="請輸入優惠碼" v-model = "coupon_code">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"
                @click.prevent="addCouponCode">
            加入優惠券
            </button>
        </div>
    </div>    
    </div>
    <div v-else class="noChoice">
        <p class="text-center text-danger h1">您尚未選擇任何商品</p>
    </div>


    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.image" class="img-fluid" alt>
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">{{ product.description }}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
              <del class="h6" v-if="product.price && product.origin_price != 0">原價 {{ product.origin_price }} 元</del>
              <div class="h4" v-if="product.price">現在只要 {{ product.price }} 元</div>
            </div>
            <select name class="form-control mt-3" v-model="product.num">
              <option value="0" selected disabled>--請選擇數量--</option>
              <option :value="num" v-for="num in 10" :key="num">選購 {{num}} {{product.unit}}</option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計
              <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addtoCart(product.id, product.num)"
            >
              <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Page from "../Pagination";
import $ from "jquery";
export default {
  data() {
    return {
      products: [],
      isLoading: false,
      pagination: {},
      product: {},
      status:{
          loadingItem:''
      },
      cartList:[],
      cartLen: '',
      coupon_code:''
    };
  },
  methods: {
    getProducts(page = 1) {
      const vm = this;
      let api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMEPATH
      }/products?page=${page}`;
      // const api = `${process.env.APIPATH}/api/${process.env.CUSTOMEPATH}/products/all`

      vm.isLoading = true;
      vm.$http.get(api).then(res => {
        console.log(res.data);
        vm.isLoading = false;
        vm.products = res.data.products;
        vm.pagination = res.data.pagination;
        let total_Page = Math.ceil(vm.products.length / 9); //總頁數
      });
    },
    getProduct(id) {
      const vm = this;
      let api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMEPATH
      }/product/${id}`;
      vm.status.loadingItem = id;
      vm.$http.get(api).then(res => {
        console.log(res.data.product)
        vm.product = res.data.product;
        vm.product.num = 0
        $('#productModal').modal('show')
        vm.status.loadingItem = ''
      });
    },
    addtoCart(id , qty = 1){
        const vm = this;
        let api = `${process.env.APIPATH}/api/${
            process.env.CUSTOMEPATH
        }/cart`;
        vm.status.loadingItem = id;
        const cart = {
            product_id: id,
            qty
        }
        vm.$http.post(api , { data:cart }).then(res => {
            console.log(res.data)
            vm.status.loadingItem = ''
            vm.getCart()
            $('#productModal').modal('hide')
      });
    },
    delCart(id){
         const vm = this;
      let api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMEPATH
      }/cart/${id}`;
      vm.status.loadingItem = id;
      vm.$http.delete(api).then(res => {
        console.log(res.data)
        vm.status.loadingItem = ''
        vm.getCart()
      });
    },
    getCart(){
        const vm = this;
        let api = `${process.env.APIPATH}/api/${
            process.env.CUSTOMEPATH
        }/cart`
        vm.isLoading = true
        vm.$http.get(api).then(res => {
            console.log(res.data.data.carts)
            vm.cartList = res.data.data
            vm.cartLen = res.data.data.carts.length
            vm.isLoading = false
        });
    },
    addCouponCode(){
        const vm = this;
        let api = `${process.env.APIPATH}/api/${
            process.env.CUSTOMEPATH
        }/coupon`
        const coupon = {
            code: vm.coupon_code
        }
        vm.isLoading = true
        vm.$http.post(api , {data: coupon }).then(res => {
           if(res.data.success){
               this.$bus.$emit("messsage:push", res.data.message, "success")
           }else if(res.data.message === '找不到優惠券!'){
               this.$bus.$emit("messsage:push", res.data.message, "danger")
           }else{
               this.$bus.$emit("messsage:push", res.data.message, "warning")
           }
           vm.isLoading = false
        });
    }
  },
  created() {
    this.getProducts()
    this.getCart()
  },
  components: {
    Page
  }
};
</script>