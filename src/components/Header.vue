<template>
  <header>
    <div class="carousel">
        <!-- Bootstrap -->
        <!-- navbar-expand-xl 從這改漢堡在xl以上不出現 -->
          <nav class="navbar navbar-expand-xl bg-light" id="header">
            <div>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="fas fa-bars menu_color"></i></span>
              </button>
            </div>

            <div class="logo w-xl-50">
              <h1>
                <a href="##">Wine Space</a>
              </h1>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">SHOP<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">PROMITION</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">EVENTS</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">ABOUT US</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">CONTACT</a>
                    </li>
                    <li class="nav-item">
                      <router-link to="/Login" v-show="logInOrOut == false">Login</router-link>
                      <p v-show="logInOrOut == true" @click="logOut">Logout</p>
                    </li>
                </ul>
              </div>
            </div>

          </nav>
      
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
/* 以下ｏｋ */
#header{
  width:100%;
  position:absolute;
  top:0;
  left:0;
  z-index:2;
  background-color:#494b50 !important;
  padding: 20px;
  opacity:0.9;
}
header nav{
  color:white;
  padding: 25px 50px !important;
  font-size: 25px;
}
header button i{
  font-size: 25px;
  color: 	#AAAAAA;
}
header ul a{
  font-size: 1rem;
}
header .logo {
  width:100%;
}
header h1 {
  text-align:center;
}
header .logo a{
  display: block;
  color: white;
}

header .logo img{
  display:block;
  margin: auto;
}
header .logo ul{
  margin: 5px auto;
}
header .logo ul li{
  padding: 0 10px;
  margin: 0 10px
}
header .shopping ul{
  margin-left: auto;
}
header .shopping ul a{
  color:white;
}
/* 以上ｏｋ */

.header .logo img{
  width:25%;
  margin: auto;
  display: block;
}
.header .logo .navbar nav a{
  display: inline-block;
  margin: 5px 25px ;
  text-decoration: none;
  color: white;
}
.navbar a:hover{
    font-weight:bold;
}
.header .shopping{
  display: flex;
}
.header .shopping a{
  text-decoration:none;
  color:white;
}
.header .shopping :nth-child(2){
  margin: 0 20px;
}

header nav .n12{
  background-color:blue;
}
#carousel-1{
  position:relative;
}
.carousel_img{
  height:580px;
}
/* media query*/
@media (max-width: 1200px) {
    .header .logo img{
      width:50%;
    }
    #header{
      padding: 10px !important;
    }
    .carousel_img{
      height:50%;
    }
  }

@media (max-width: 992px) {
    header .logo img{
      width: 50px;
    }
  }
@media (max-width: 576px) {
    header .logo img{
      width: 25px;
    }
  }
</style>