<template>
  <div id="app">
    <HeaderNavbarAndCarousel></HeaderNavbarAndCarousel>

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
import { mapActions } from "vuex";
import HeaderNavbarAndCarousel from "@/layout/HeaderNavbarAndCarousel.vue";
import Introduction from "@/components/Introduction.vue";
import Products from "@/components/Products.vue";
import Footer from "@/layout/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderNavbarAndCarousel,
    Introduction,
    Products,
    Footer
  }
}
</script>

<style>
.container {
  max-width: 1400px !important;
  padding: 35px;
}
</style>