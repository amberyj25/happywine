<template>
        <div>
          <b-navbar toggleable="lg" type="dark" variant="info" class="header_navabar">
            <b-navbar-brand class="navbar_h1">
              <h1>
                <router-link to="/">Wine Space</router-link>
              </h1>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse" class="navbar_button"><i class="fas fa-bars menu_color"></i></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav class="navbar_button_content">
              <b-navbar-nav class="ml-auto navbar_right">
                <b-nav-item right>
                  <router-link to="/">首頁</router-link>
                </b-nav-item>
                <b-nav-item right>
                  <router-link to="/productslist">商品</router-link>
                </b-nav-item>
                <b-nav-item right>
                  <router-link to="/login" v-show="logInOrOut == false">Login</router-link>
                  <p v-show="logInOrOut == true" @click="signOut">Logout</p>
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>

            <div class="navbar_shopping">
              <b-dropdown id="dropdown-right" right text="Right align" size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
                <template v-slot:button-content>
                  <i class="fas fa-shopping-cart" @click="shopping"></i>
                  <b-badge variant="primary">{{productLength}}</b-badge>
                </template>
                <p class="title">已選購 Classic 商品</p>
                <b-dropdown-item href="#" v-for="(item,index) in catchShoppingProductsClassic" :key="index" class="content">
                  <div class="content_item">
                    <span>{{item.product.title}}</span>  
                    <span>{{item.qty}}瓶</span>
                    <span>${{item.qty*item.product.price}}</span>
                    <span @click.prevent="delectProductClassic(item.id)"><i class="far fa-trash-alt"></i></span>
                  </div>
                  <hr>
                </b-dropdown-item>
                <p class="title">已選購 New 商品</p>
                <b-dropdown-item href="#" v-for="(item,index) in catchShoppingProductsNew" :key="index" class="content">
                  <div class="content_item">
                    <span>{{item.product.title}}</span>  
                    <span>{{item.qty}}瓶</span>
                    <span>${{item.qty*item.product.price}}</span>
                    <span @click.prevent="delectProductNew(item.id)"><i class="far fa-trash-alt"></i></span>
                  </div>
                  <hr>
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
    shopping(){
      this.$store.dispatch("shoppingProductsClassic");
      this.$store.dispatch("shoppingProductsNew");
    },
    delectProductClassic(id){
      this.$store.dispatch("delectProductsClassic",id);
    },
    delectProductNew(id){
      this.$store.dispatch("delectProductsNew",id);
    },
    signOut(){
      this.$store.dispatch("signOutChange")
    }
  },
  mounted(){
    this.shopping();
  },
  computed:{
    logInOrOut(){
      return this.$store.state.signinChange;
    },
    catchShoppingProductsClassic(){
      return this.$store.state.shoppingProductsClassic1;
    },
    catchShoppingProductsNew(){
      return this.$store.state.shoppingProductsNew1;
    },
    productLength(){
      console.log(this.$store.state.shoppingProductsClassic1.length + this.$store.state.shoppingProductsNew1.length);
      return this.$store.state.shoppingProductsClassic1.length + this.$store.state.shoppingProductsNew1.length;
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
.title{
  text-align:center;
  font-size:1.3rem;
  color: #8c6e55;
  }
.content{
  width:250px;
}
.content_item{
  display:flex; 
  justify-content:space-between;
}
hr{
  border:1px solid black;
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
    .navbar_h1{
      order:1;
    }
    .navbar_shopping{
      order:2;
    }
    .navbar_button{
      order:3;
    }
    .navbar_button_content{
      order:4;
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