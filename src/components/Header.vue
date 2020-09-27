<template>
  <header>
    <div class="carousel">
        <div>
          <b-navbar toggleable="lg" type="dark" variant="info" class="header_navabar">
            <b-navbar-brand>
              <h1>
                <router-link to="/">Wine Space</router-link>
              </h1>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"><i class="fas fa-bars menu_color"></i></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto navbar_right">
                <b-nav-item right>
                  <router-link to="/">首頁</router-link>
                </b-nav-item>
                <b-nav-item right>
                  <router-link to="/products">商品</router-link>
                </b-nav-item>
                <b-nav-item right>
                  <router-link to="/login" v-show="logInOrOut == false">Login</router-link>
                  <p v-show="logInOrOut == true" @click="logOut">Logout</p>
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      
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
export default{
  name:"Header",
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
    },
    computed:{
      logInOrOut(){
        return this.$store.state.signinChange;
      }
    }
}
</script>
<style scoped>
.header_navabar{
  width:100%;
  position:absolute;
  top:0;
  left:0;
  z-index:2;
  background-color:#494b50 !important;
  padding: 10px 100px;
  opacity:0.9;
}
.header_navabar a{
  color:white;
  text-decoration: none;
}
.header_navabar h1 a{
  font-size:3rem;
}
.header_navabar button i{
  font-size: 25px;
  color: white;
}

.header_navabar .navbar_right a{
  margin:0 20px;
  font-size: 1.4rem;
}
#header a:hover{
    font-weight:bold;
}

#carousel-1{
  position:relative;
}
.carousel_img{
  height:580px;
}
/* media query*/
@media (max-width: 1200px) {
    .header_navabar{
      padding: 10px 50px;
    }
    .carousel_img{
      height:50%;
    }
  }
    /* 
@media (max-width: 992px) {
  }
@media (max-width: 576px) {

  }
  */
</style>