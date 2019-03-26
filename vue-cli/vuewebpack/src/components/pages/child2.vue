<template>
   <div>
     <div class="card" style="width: 18rem;">
        <img src="https://picsum.photos/200/300/?random?image=123" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card 2</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
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
