<template>
  <div class="hello">
    <div class="card" style="width: 18rem;">
      <router-view></router-view>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
