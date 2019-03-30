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
};
</script>

<style lang="scss">
@import "./assets/all";
</style>
