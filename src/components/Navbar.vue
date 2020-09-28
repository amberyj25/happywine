<template>
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
                  <router-link to="/productslist">商品</router-link>
                </b-nav-item>
                <b-nav-item right>
                  <router-link to="/login" v-show="logInOrOut == false">Login</router-link>
                  <p v-show="logInOrOut == true">Logout</p>
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>

            <div>
              <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
                <template v-slot:button-content>
                  <i class="fas fa-shopping-cart" @click="aa"></i>
                </template>
                <p style="text-align:center">Classic</p>
                <b-dropdown-item href="#" v-for="(item,index) in ab2" :key="index">
                  <span>{{item.product.title}}</span>  <span>${{item.product.price}}</span>
                </b-dropdown-item>
                <p style="text-align:center">New</p>
                <b-dropdown-item href="#" v-for="(item,index) in abab2" :key="index">
                  <span>{{item.product.title}}</span>  <span>${{item.product.price}}</span>
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </b-navbar>
        </div>

</template>

<script>

export default{
  name:"Navbar",
  methods:{
    aa(){
      this.$store.dispatch("ab");
      this.$store.dispatch("abab");
    }
  },
  computed:{
    logInOrOut(){
      return this.$store.state.signinChange;
    },
    ab2(){
      return this.$store.state.ab1;
    },
    abab2(){
      return this.$store.state.abab1;
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
  padding: 0 100px;
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

/* media query*/
@media (max-width: 1200px) {
    .header_navabar{
      padding: 0 50px;
    }
    .carousel_img{
      height:50%;
    }
  }
@media (max-width: 992px) {
    .header_navabar h1 a{
    font-size:2rem;
      } 
  }
@media (max-width: 576px) {
  .header_navabar h1 a{
  font-size:1.5rem;
    } 
  }
    /* 
@media (max-width: 992px) {
  }
  */
</style>