<template>
    <div>
         <loading :active.sync="isLoading"></loading>
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
                <tr class="text-success">
                    <td></td>
                    <td></td>
                    <td class="text-right">折扣價</td>
                    <td class="text-right">{{ cartList.final_total | currency  }}</td>
                </tr>
            </tbody>
            </table>
        </div>
        <div class="noChioce my-4" v-else>
            <p class="text-center text-danger h1">您尚未選擇任何商品</p>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      isLoading: false,
      status:{
          loadingItem:''
      },
      cartList:[],
      cartLen: ''
    };
  },
  methods: {
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
    }
  },
  created() {
    this.getCart()
  },
};
</script>