<template>
  <header>
    <div class="carousel">
      <navbar></navbar>
      
      <div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="2000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide img-src="https://i.imgur.com/6x0J234.jpg" class="carousel_img"></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://i.imgur.com/TBHJmjv.jpg" class="carousel_img"></b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="https://i.imgur.com/NCbpT18.jpg" class="carousel_img"></b-carousel-slide>
        </b-carousel>
      </div>
      
    </div>
  </header>

</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default{
  name:"Header",
  components:{
    Navbar
  },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
    }
}
</script>
<style scoped>

#carousel-1{
  position:relative;
}
.carousel_img{
  height:580px;
}
@media (min-width:992px) and (max-width:1200px){
  .carousel_img{
      height:450px;
    }
  }
@media (min-width:768px) and (max-width:991px){
  .carousel_img{
      height:400px;
    }
  }
@media (min-width:576px) and (max-width:767px){
  .carousel_img{
      height:300px;
    }
  }
@media (max-width:575px){
  .carousel_img{
      height:250px;
    }
  }

</style>