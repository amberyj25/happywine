<template>
  <div id="app">
  
    <Header></Header>

    <main>
      <div class="container">

        <MainIntroduction></MainIntroduction>

        <Products></Products>

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
  max-width:1400px;
  padding: 35px;
}
</style>