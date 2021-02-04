<template>
  <div>
    <header class="header_img">
      <Navbar></Navbar>
    </header>
    <main class="container">
      <div class="filter">
        <h5 class="category">酒品分類</h5>
        <div v-for="(category,index) in wineCategory" :key="index">
          <p
            :class="{filter_p: wineRender === category}"
            @click="getCategory(category)"
          >{{ category }}</p>
        </div>
      </div>
      <div class="products">
        <div class="products_classic" v-show="wineRender === 'Classic酒品' || '全部酒品'">
          <b-row class="top">
            <b-col cols="12">
              <h2>Classic</h2>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              class="introduction_bottom_div"
              cols="12 mb-5"
              md="6"
              lg="3"
              v-for="productClassic in productsPicks"
              :key="productClassic.num"
            >
              <div class="wine">
                <div class="product_top">
                  <div class="product_left" style="width:60%;">
                    <h5>{{productClassic.title}}</h5>
                    <p>{{productClassic.category}}</p>
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
                      <div class="sale">＄{{productClassic.price}}</div>
                      <div class="price">＄{{productClassic.origin_price}}</div>
                    </div>
                  </div>
                  <div class="product_right">
                    <img :src="productClassic.image" alt="product" />
                  </div>
                </div>
                <div class="product_bottom">
                  <div class="cart_num_out">
                    <select class="cart_num" v-model="productClassic.nums">
                      <option :value="num" v-for="num in 10" :key="num">{{num}}</option>
                    </select>
                    <button @click="addCart1(productClassic.id,productClassic.nums)">Add to cart</button>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>

        <div class="products_news" v-show="wineRender === 'New酒品' || '全部酒品'">
          <b-row class="top">
            <b-col cols="12">
              <h2>New</h2>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              class="introduction_bottom_div"
              cols="12 mb-5"
              md="6"
              lg="4"
              xl="3"
              v-for="productNew in productsNews"
              :key="productNew.num"
            >
              <div class="wine">
                <div class="product_top">
                  <div class="product_left" style="width:60%;">
                    <h5>{{productNew.title}}</h5>
                    <p>{{productNew.category}}</p>
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
                      <div class="sale">＄{{productNew.price}}</div>
                      <div class="price">＄{{productNew.origin_price}}</div>
                    </div>
                  </div>
                  <div class="product_right">
                    <img :src="productNew.image" alt="product" />
                  </div>
                </div>
                <div class="product_bottom">
                  <div class="cart_num_out">
                    <select class="cart_num" v-model="productNew.nums">
                      <option :value="num" v-for="num in 10" :key="num">{{num}}</option>
                    </select>
                    <button @click="addCart2(productNew.id,productNew.nums)">Add to cart</button>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Products from "@/components/Products.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Productslist",
  components: {
    Navbar,
    Products,
    Footer
  },
  data() {
    return {
      wineCategory: ['New酒品', 'Classic酒品', '全部酒品'],
      wineRender: 'New酒品',
      winecategorynews: true
    };
  },
  mounted() {
    this.$store.dispatch("wineProductsPicks");
    this.$store.dispatch("wineProductsNews");
  },
  methods: {
    addCart1(id, qty) {
      let params = {};
      params.product_id = id;
      params.qty = qty;
      this.$store.dispatch("addCartClassic", params);
      this.$store.dispatch("totalClassicProducts");
    },
    addCart2(id, qty) {
      let params = {};
      params.product_id = id;
      params.qty = qty;
      this.$store.dispatch("addCartNews", params);
      this.$store.dispatch("totalNewProducts");
    },
    getCategory (category) {
      switch (category) {
        case 'New酒品':
          this.wineRender = 'New酒品'
          break
        case 'Classic酒品':
          this.wineRender = 'Classic酒品'
          break
        case '全部酒品':
          this.wineRender = '全部酒品'
          break
      }
    }
  },
  computed: {
    productsPicks() {
      return this.$store.state.productsPicks;
    },
    productsNews() {
      return this.$store.state.productsNews;
    }
  }
};
</script>

<style scoped>
.header_img {
  width: 100%;
  height: 580px;
  background: url("../assets/banner.jpg") no-repeat 50% 50%;
  background-size: cover;
}

.container {
  max-width: 1400px;
  padding: 25px;
  display: flex;
}

.filter {
  width: 45%;
  height: 400px;
  margin: 55px 20px 0 0;
  box-sizing: border-box;
  box-shadow: 0 0 3px black;
}
.filter .category,
.filter p {
  text-align: center;
  line-height: 100px;
  height: 100px;
  margin: 0;
  border-bottom: 1px solid gray;
}
.filter_p {
  background-color: #c1ad9e;
}
.filter p:hover {
  background-color: #e7bc91;
  cursor: pointer;
}
.category {
  background-color: #7f5c5c;
  color: white;
}
.products_classic,
.products_news {
  margin: 55px 0;
}

.wine {
  width: 100%;
  box-sizing: border-box;
  box-shadow: gray 0 0 8px;
}
.wine span {
  display: block;
  font-size: 24px;
  margin-left: 80px;
}
.wine .product_right {
  width: 40%;
  text-align: center;
}
.wine img {
  max-width: 100%;
  height: 350px;
  object-fit: cover;
}
.wine .year {
  display: flex;
  margin-top: 80px;
}
.year div {
  width: 50px;
  border: 2px solid #5e3a1a;
}
.wine .year div + div {
  margin-left: 15px;
}
.wine .year div .title {
  background-color: #5e3a1a;
  color: white;
}
.wine .year div p {
  text-align: center;
  color: gray;
  margin: 0;
}
.sale_price {
  margin: 50px 0 0;
}
.wine .sale {
  font-size: 30px;
  color: red;
}
.wine .price {
  font-size: 20px;
  text-decoration: line-through;
}
.wine .product_bottom {
  background-color: #c1ad9e;
  padding: 20px;
}
.wine .product_bottom .cart_num_out {
  display: flex;
  justify-content: space-around;
}
.wine .product_bottom .cart_num {
  width: 35%;
  height: 45px;
  border: 1px solid white;
}
.wine .product_bottom .cart {
  margin: 25px 0 0 20px;
}

.wine .product_bottom button {
  border-radius: 35px;
  border: 1px solid #7f5c5c;
  padding: 5px 20px;
  background: #7f5c5c;
  color: white;
}
h2 {
  font-size: 50px;
}

.top {
  display: flex;
  justify-content: space-between;
}

/* products 遮色片*/
.wine .product_top {
  width: 100%;
  height: 400px;
  padding: 15px;
  display: flex;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}
.wine .product_top_detail {
  position: absolute;
  bottom: -401px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #bfac9a;
  opacity: 0.9;
  transition: all 1s;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
}
.wine .product_top:hover .product_top_detail {
  bottom: 0px;
}

main {
  width: 85%;
}

main .products_news .top .page,
main .products_classic .top .page {
  display: flex;
  box-sizing: border-box;
  padding-top: 25px;
}
main .products_classic .fa-angle-left,
main .products_classic .fa-angle-right {
  font-size: 35px;
}
main .products_news .fa-angle-left,
main .products_news .fa-angle-right {
  font-size: 35px;
}

main .products_news .top .page div,
main .products_classic .top .page div {
  width: 35px;
  height: 35px;
  border: 1px solid #b49782;
  text-align: center;
}

main .products_news .top .page div + div,
main .products_classic .top .page div + div {
  margin-left: 5px;
}
@media (max-width: 992px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .filter {
    width: 85%;
    margin: 55px 0 0 0;
  }
}
</style>