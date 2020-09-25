<template>
  <div id="app">
  
    <Header></Header>

    <main>
      <MainIntroduction></MainIntroduction>
    </main>

      <div class="products_picks">
            <b-row class="top">
              <b-col cols="11">
                <h2>top picks</h2>
              </b-col>
              <b-col cols="1" class="page justify-content-center mb-4">
                  <div>
                    <i class="fas fa-angle-left" @click="before"></i>
                  </div>
                  <div>
                    <i class="fas fa-angle-right" @click="after"></i>
                  </div>
              </b-col>
            </b-row>
          <b-row>
              <b-col class="introduction_bottom_div" cols="12 mb-5" md="6" lg="3" v-for="item in productsPicks" :key="item.id" v-if="recentPage ==item.page">
                <div class="wine">
                  <div class="product_top">
                    <div class="product_left">
                      <h5>{{item.wine}}</h5>
                      <p>{{item.about}}</p>
                      <div class="year">
                        <div class="am">
                          <p class="title">AM</p>
                          <p>{{item.am}}</p>
                        </div>
                        <div class="ws">
                          <p class="title">WS</p>
                          <p>{{item.ws}}</p>
                        </div>
                      </div>
                      <div class="sale">{{item.sale}}</div>
                      <div class="price">{{item.price}}</div>
                    </div>
                    <div class="product_right">
                      <span>
                        <i class="fab fa-gratipay"></i>
                      </span>
                      <img :src="item.img" alt="product">
                    </div>
                    <div class="product_top_detail">
                      <div class="product_top_detail_inner">
                        <p>Vintage :{{item.vintage}}</p>
                        <p>Country :{{item.country}}</p>
                        <p>Region :{{item.region}}</p>
                        <p>Size :{{item.size}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="product_bottom">
                    <div class="cart_num_out">
                      <div class="cart_num">
                        <div class="reduce" @click="reduce1(item.id)">-</div>
                        <div class="num">{{item.num}}</div>
                        <div class="add" @click="add1(item.id)">+</div>
                      </div>
                      <button @click="addCart1(item.id)">Add to cart</button>
                    </div>
                    <div class="cart">
                      <p>已加入購物車的數量：{{item.cart}}</p>
                      <p>庫存數量：{{item.total}}</p>
                    </div>
                  </div>
                </div>   
              </b-col>   
          </b-row>
      </div>

      <div class="products_news">
          <b-row class="top">
            <b-col cols="11">
              <h2>New arrival ...</h2>
            </b-col>
            <b-col cols="1" class="page justify-content-center mb-4">
                <div>
                  <i class="fas fa-angle-left" @click="beforeNews"></i>
                </div>
                <div>
                  <i class="fas fa-angle-right" @click="afterNews"></i>
                </div>
            </b-col>
          </b-row>
          <b-row>
              <b-col class="introduction_bottom_div" cols="12 mb-5" md="6" lg="3 mb-0" v-for="(item,key) in productsNews" :key="item.id" v-if="recentPage2 ==item.page">
                <div class="wine">
                  <div class="product_top">
                    <div class="product_left">
                      <h5>{{item.wine}}</h5>
                      <p>{{item.about}}</p>
                      <div class="year">
                        <div class="am">
                          <p class="title">AM</p>
                          <p>{{item.am}}</p>
                        </div>
                        <div class="ws">
                          <p class="title">WS</p>
                          <p>{{item.ws}}</p>
                        </div>
                      </div>
                      <div class="sale">{{item.sale}}</div>
                      <div class="price">{{item.price}}</div>
                    </div>
                    <div class="product_right">
                      <span>
                        <i class="fab fa-gratipay"></i>
                      </span>
                      <img :src="item.img" alt="product">
                    </div>
                    <div class="product_top_detail">
                      <div class="product_top_detail_inner">
                        <p>Vintage :{{item.vintage}}</p>
                        <p>Country :{{item.country}}</p>
                        <p>Region :{{item.region}}</p>
                        <p>Size :{{item.size}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="product_bottom">
                    <div class="cart_num_out">
                      <div class="cart_num">
                        <div class="reduce" @click="reduce2(item.id)">-</div>
                        <div class="num">{{item.num}}</div>
                        <div class="add" @click="add2(item.id)">+</div>
                      </div>
                      <button @click="addCart2(item.id)">Add to cart</button>
                    </div>
                    <div class="cart">
                      <p>已加入購物車的數量：{{item.cart}}</p>
                      <p>庫存數量：{{item.total}}</p>
                    </div>
                  </div>
                </div>   
              </b-col>   
          </b-row>
      </div>
    <Footer></Footer>  


  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import MainIntroduction from "@/components/MainIntroduction.vue"
import Footer from "@/components/Footer.vue"


export default {
  name: 'App',
    components:{
    Header,
    MainIntroduction,
    Footer
  },
  data() {
      return {
        recentPage:1,
        recentPage2:1,   
        productsPicks:"", 
        productsNews:"",
      }
  },
  mounted(){
    this.products();
  },
  methods: {
      before(){
        this.recentPage -=1;
        if(this.recentPage <=0){
          this.recentPage = 1;
        }
      },
      after(){
        this.recentPage +=1;
        if(this.recentPage >= 5){
          this.recentPage = 4;
        }
      },      
      beforeNews(){
        this.recentPage2 -=1;
        if(this.recentPage2 <=0){
          this.recentPage2 = 1;
        }
      },
      afterNews(){
        this.recentPage2 +=1;
        if(this.recentPage2 >= 5){
          this.recentPage2 = 4;
        }
      },
      add1(id){
        this.$store.commit("add1",id);
      },
      add2(id){
        this.$store.commit("add2",id);
      },
      reduce1(id){
        this.$store.commit("reduce1",id);
      },
      reduce2(id){
      this.$store.commit("reduce2",id);
      },
      addCart1(id){
        this.$store.commit("addCart1",id);
      },
      addCart2(id){
        this.$store.commit("addCart2",id);
      }
    },
  computed: {
      products(){
        this.productsPicks = this.$store.state.productsPicks;
        this.productsNews = this.$store.state.productsNews;
      },
  },
}
</script>

<style>
.products_picks,.products_news{
  margin: 55px 0;
}
.introduction_bottom_div{
  width:100%;
}
.wine{
    width:100%;
    box-sizing:border-box;
    box-shadow: gray 0 0 8px;
}
.wine span{
  display:block;
  font-size:24px; 
  margin-left:80px;
}
.wine img{
  width: 100px;
  height:350px;
}
.wine .year{
  display:flex;
  margin-top:80px;
}
.year div{
  width: 50px;
  border:2px solid #5e3a1a;
}
.wine .year div+div{
  margin-left: 15px;
}
.wine .year div .title{
  background-color:#5e3a1a;
  color: white;
}
.wine .year div p{
  text-align:center;
  color: gray;
  margin: 0;
}
.wine .sale{
  text-align: center;
  font-size: 20px;
  color: red;
}
.wine .price{
    margin-top:80px;
    font-size: 25px;
}
.wine .product_bottom{
  background-color:#c1ad9e;
  padding:25px;
}
.wine .product_bottom .cart_num_out{
  display: flex;
  justify-content: space-around;
}

.wine .product_bottom .cart_num{
  display:flex;
  border:1px solid white;
}
.wine .product_bottom .cart{
  margin:25px 0 0 20px;
}
.wine .product_bottom .cart_num .reduce,.wine .product_bottom .cart_num .add,.wine .product_bottom .cart_num .num{
  width:25px;
  text-align:center;
  height: 35px;
  line-height:35px;
}

.wine .product_bottom button{
  border-radius: 35px;
  border:1px solid #7f5c5c;
  padding:5px 20px;
  background: #7f5c5c;
  color: white;
}

.wine .product_bottom .cart_num .reduce,.wine .product_bottom .cart_num .add{
  background:#b59983;
  color:white;
}
.wine .product_bottom .cart_num .reduce,.wine .product_bottom .cart_num .add{
  background:#b59983;
  color:white;
}
h2{
  font-size: 50px;
}

.top{
  display:flex;
  justify-content: space-between;
}

/* products 遮色片*/
.wine .product_top{
  width:100%;
  height:400px;
  padding: 15px;
  display: flex;
  position: relative;
  box-sizing:border-box;
  overflow:hidden;
}
.wine .product_top_detail{
  position: absolute;
  bottom: -401px;
  left:0;
  width:100%;
  height:100%;
  background-color: #bfac9a;
  opacity: 0.9;
  transition: all 1s;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  color:white;
}
.wine .product_top:hover .product_top_detail{
  bottom: 0px;
}


main .products_news .top .page,main .products_picks .top .page{
  display:flex;
  box-sizing:border-box;
  padding-top:25px; 
}
main .products_picks .fa-angle-left,main .products_picks .fa-angle-right{
  font-size:35px; 
}
main .products_news .fa-angle-left,main .products_news .fa-angle-right{
  font-size:35px; 
}

main .products_news .top .page div,main .products_picks .top .page div{
  width: 35px;
  height:35px;
  border:1px solid #b49782;
  text-align:center;
}

main .products_news .top .page div+div,main .products_picks .top .page div+div{
  margin-left: 5px;
}
</style>