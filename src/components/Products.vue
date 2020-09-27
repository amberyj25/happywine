<template>
  <div>
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
        <b-col class="introduction_bottom_div" cols="12 mb-5" md="6" lg="3" v-for="item in productsPicks" :key="item.num" v-if="recentPage ==item.unit">
          <div class="wine">
            <div class="product_top">
              <div class="product_left" style="width:60%;">
                <h5>{{item.title}}</h5>
                <p>{{item.category}}</p>
                <div class="year">
                  <div class="am">
                    <p class="title">AM</p>
                    <p>85</p>
                  </div>
                  <div class="ws">
                    <p class="title">WS</p>
                    <p>100</p>
                  </div>
                </div>
                <div class="sale_price">
                  <div class="sale">＄{{item.origin_price}}</div>
                  <div class="price">＄{{item.price}}</div>
                </div>
              </div>
              <div class="product_right" style="width:30%;">
                <img :src="item.image" alt="product">
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
              </div>
            </div>   
          </b-col>   
        </b-row>
    </div>

    <div class="products_news">
      <b-row class="top">
        <b-col cols="11">
          <h2>products news</h2>
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
        <b-col class="introduction_bottom_div" cols="12 mb-5" md="6" lg="3" v-for="item in productsNews" :key="item.num" v-if="recentPage2 ==item.unit">
          <div class="wine">
            <div class="product_top">
              <div class="product_left" style="width:60%;">
                <h5>{{item.title}}</h5>
                <p>{{item.category}}</p>
                <div class="year">
                  <div class="am">
                    <p class="title">AM</p>
                    <p>85</p>
                  </div>
                  <div class="ws">
                    <p class="title">WS</p>
                    <p>100</p>
                  </div>
                </div>
                <div class="sale_price">
                  <div class="sale">＄{{item.origin_price}}</div>
                  <div class="price">＄{{item.price}}</div>
                </div>
              </div>
              <div class="product_right" style="width:30%;">
                <img :src="item.image" alt="product">
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
              </div>
            </div>   
          </b-col>   
        </b-row>
    </div>

  </div>
</template>

<script>
export default {
    name: 'Products',
    data() {
      return {
        recentPage:1,
        recentPage2:1,   
      }
  },
  mounted(){
    this.$store.dispatch("wineProductsPicks");
    this.$store.dispatch("wineProductsNews");
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
        if(this.recentPage >= 3){
          this.recentPage = 2;
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
        if(this.recentPage2 >= 3){
          this.recentPage2 = 2;
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
      productsPicks(){
        return this.$store.state.productsPicks;
      },
      productsNews(){
        return this.$store.state.productsNews;
      },
  },
}

</script>

<style scoped>
.products_picks,.products_news{
  margin: 55px 0;
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
  width: 100%;
  height: 350px;
  object-fit: cover;
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
.sale_price{
  margin:80px 0 0;
}
.wine .sale{
  font-size: 30px;
  color: red;
}
.wine .price{
  font-size: 20px;
  text-decoration:line-through;
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

@media (max-width:768px){
    .wine img{
      width: 100%;
      height: 350px;
      object-fit: contain;
    }
  }
</style>