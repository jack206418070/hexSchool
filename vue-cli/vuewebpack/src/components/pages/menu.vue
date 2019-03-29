<template>
<div class="container">
  <div class="hello my-3">
    <ul class="nav">
      <li class="nav-item">
        <router-link   class="nav-link" to="/page/">卡片1</router-link>
      </li>
      <li class="nav-item">
        <router-link   class="nav-link" to="/page/child2">卡片2</router-link>
      </li>
      <li class="nav-item">
       <router-link   class="nav-link" to="/page/child3">卡片3</router-link>
      </li>
      <li class="nav-item">
       <a href="#" class="nav-link" @click.prevent="updatePath">切換到指定頁面</a>
      </li>
       <li class="nav-item">
       <a href="#" class="nav-link" @click.prevent="beforePath">上一個頁面</a>
      </li>
       <li class="nav-item">
       <a href="#" class="nav-link" @click.prevent="afterPath">下一個頁面</a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: process.env.NODE_ENV,
      http: process.env.HTTP_PATH
    }
  },
  methods:{
    updatePath(){
      this.$router.push('/page/child2')
    },
    beforePath(){
      this.$router.back()
    },
    afterPath(){
      this.$router.go(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
