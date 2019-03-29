<template>
  <div id="app">
   
    <router-view/>
   
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      data: {}
    };
  },
  created() {
    const api = `${process.env.APIPATH}/api/${
      process.env.CUSTOMEPATH
    }/products`;
    // API 伺服器路徑   and  所申請的api-Path
    this.$http.get(api).then(response => {
      this.data = response.data;
    });
  }
};
</script>

<style lang="scss">
@import "./assets/all";
</style>
