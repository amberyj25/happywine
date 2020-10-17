<template>
  <div id="app">
  
    <Header></Header>

    <main>
      <div class="container">
        <Products></Products>
        <MainIntroduction></MainIntroduction>
      </div>
    </main>

    <Footer></Footer>  

  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import MainIntroduction from "@/components/MainIntroduction.vue"
import Products from "@/components/Products.vue"
import Footer from "@/components/Footer.vue"


export default {
  name: 'App',
    components:{
    Header,
    MainIntroduction,
    Products,
    Footer
  }
}
</script>

<style>
.container{
  max-width:1400px !important;
  padding: 35px;
}
</style>