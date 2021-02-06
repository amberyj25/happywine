<template>
  <div id="app">
  
    <Header></Header>

    <main>
      <div class="container">
        <Products></Products>
        <Introduction></Introduction>
      </div>
    </main>

    <Footer></Footer>

  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Introduction from "@/components/Introduction.vue"
import Products from "@/components/Products.vue"
import Footer from "@/components/Footer.vue"


export default {
  name: 'App',
    components:{
    Header,
    Introduction,
    Products,
    Footer
  },
  mounted(){
    this.$store.dispatch("getOrgProductsPicks");
    this.$store.dispatch("getOrgProductsNews");
  }
}
</script>

<style>
.container{
  max-width:1400px !important;
  padding: 35px;
}
</style>