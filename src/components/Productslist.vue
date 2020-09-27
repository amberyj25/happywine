<template>
  <div>
    <header>
      <Navbar></Navbar>
      <div class="header_img"></div>
    </header>

    <main>

      <Products></Products>

    </main>

    <Footer></Footer>  

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Products from "@/components/Products.vue"
import Footer from "@/components/Footer.vue"


export default {
  name: 'Productslist',
    components:{
      Navbar,
      Products,
      Footer
    }
}
</script>

<style scoped>

.header_img{
  width:100%;
  height:580px;
  background: url("https://i.imgur.com/3isOg5S.jpg") no-repeat 50% 50%;
  background-size: cover;
}
</style>