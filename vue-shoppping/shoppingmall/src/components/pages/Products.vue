<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click.prevent="openModal(true)">新增商品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="140">商品類型</th>
          <th>商品名稱</th>
          <th width="140">單位</th>
          <th width="140" class="text-center">原價</th>
          <th width="140" class="text-center">特價</th>
          <th width="100" >啟用狀態</th>
          <th class="text-center" width="140">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.unit }}</td>
          <td class="text-right">{{ item.origin_price | currency }}</td>
          <td class="text-right">{{ item.price | currency }}</td>
          <td class="text-center">
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-danger">未啟用</span>
          </td>
          <td>
            <button
              class="btn btn-outline-primary btn-sm mx-1"
              @click.prevent="openModal(false , item)"
            >編輯</button>
            <button
              class="btn btn-outline-danger btn-sm mx-1"
              @click.prevent="openDelModal(item)"
            >刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!--page-->
    <Page :pagination = "pagination" v-on:getPageProducts = "getProducts"/>
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    v-model="tempProduct.image"
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                  >
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <i class="fas fa-spinner fa-spin" v-if="status.fileUploading"></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    @change="uploadFile()"
                    ref="files"
                  >
                </div>
                <img :src="tempProduct.image || tempProduct.imageUrl" class="img-fluid" alt>
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    v-model="tempProduct.title"
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                  >
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      v-model="tempProduct.category"
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入分類"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      v-model="tempProduct.unit"
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                    >
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      v-model="tempProduct.origin_price"
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      v-model="tempProduct.price"
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                    >
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    v-model="tempProduct.description"
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    v-model="tempProduct.content"
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                    >
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click.prevent="updateProduct">確認</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="delProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click.prevent="deleteProduct">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import $ from "jquery"
import Page from '../Pagination'
export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false
      }
    }
  },
  methods: {
    getProducts(page = 1) {
      const vm = this
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMEPATH
      }/admin/products?page=${page}`
      vm.isLoading = true
      vm.$http.get(api).then(response => {
        console.log(response.data)
        vm.isLoading = false
        this.products = response.data.products
        vm.pagination = response.data.pagination
      })
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {}
        this.isNew = true
      } else {
        this.tempProduct = Object.assign({}, item)
        this.isNew = false
      }
      $("#productModal").modal("show")
    },
    openDelModal(item) {
      this.tempProduct = Object.assign({}, item)
      $("#delProductModal").modal("show")
    },
    deleteProduct() {
      const vm = this
      let api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMEPATH
      }/admin/product/${vm.tempProduct.id}`
      vm.$http.delete(api).then(res => {
        console.log(res.data)
        if (res.data.success) {
          $("#delProductModal").modal("hide")
          vm.getProducts()
          this.$bus.$emit("messsage:push", res.data.message, "success")
        } else {
          $("#delProductModal").modal("hide")
          vm.getProducts()
          this.$bus.$emit("messsage:push", res.data.message, "danger")
        }
      })
    },
    uploadFile() {
      console.log(this)
      const uploadedFile = this.$refs.files.files[0]
      const vm = this
      vm.status.fileUploading = true
      const formData = new FormData()
      formData.append("file-to-upload", uploadedFile)
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMEPATH
      }/admin/upload`
      this.$http
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          vm.status.fileUploading = false
          if (res.data.success) {
            vm.$set(vm.tempProduct, "imageUrl", res.data.imageUrl)
            this.$bus.$emit("messsage:push", "上傳成功", "success")
          } else {
            this.$bus.$emit("messsage:push", res.data.message, "danger")
          }
        })
    },
    updateProduct() {
      const vm = this
      let httpMethod = "post"
      let api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMEPATH
      }/admin/product`
      if (!vm.isNew) {
        api = `${process.env.APIPATH}/api/${
          process.env.CUSTOMEPATH
        }/admin/product/${vm.tempProduct.id}`
        httpMethod = "put"
      }

      vm.$http[httpMethod](api, { data: vm.tempProduct }).then(response => {
        console.log(response.data)
        if (response.data.success) {
          $("#productModal").modal("hide")
          vm.getProducts()
          this.$bus.$emit("messsage:push", response.data.message, "success")
        } else {
          $("#productModal").modal("hide")
          vm.getProducts()
          this.$bus.$emit("messsage:push", "新增失敗", "danger")
        }
      })
    }
  },
  created() {
    this.getProducts()
  },
  components:{
    Page
  }
}
</script>