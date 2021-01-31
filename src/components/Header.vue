<template>
  <header>
    <navbar></navbar>

    <carousel></carousel>
  </header>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import carousel from "@/components/carousel.vue";

export default {
  name: "Header",
  components: {
    Navbar,
    carousel
  }
};
</script>
<style scoped>
</style>