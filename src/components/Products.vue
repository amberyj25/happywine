<template>
  <div>
    <div class="products_picks">
      <div
          class="products"
          v-for="(category, index) in categoryProducts"
          :key="index"
        >
        <b-row class="top">
          <b-col cols="11">
            <h2>{{ category.title }}</h2>
          </b-col>
          <b-col cols="1" class="page justify-content-center mb-4">
            <div>
              <i class="fas fa-angle-left" @click="getPreviousPage(category.title)"></i>
            </div>
            <div>
              <i class="fas fa-angle-right" @click="getNextPage(category.title)"></i>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            class="products"
            cols="12 mb-5"
            md="6"
            lg="3"
            v-for="(item, index) in category.data"
            :key="index"
          >
            <div class="wine">
              <div class="introduction">
                <div class="product_left">
                  <h5>{{ item.title }}</h5>
                  <p>{{ item.category }}</p>
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
                    <div class="sale">＄{{ item.price }}</div>
                    <div class="price">＄{{ item.origin_price }}</div>
                  </div>
                </div>
                <div class="product_right">
                  <img :src="item.image" alt="product" />
                </div>
                <div class="product_top_detail">
                  <div class="product_top_detail_inner">
                    <p>經典</p>
                  </div>
                </div>
              </div>
              <div class="product_bottom">
                <div class="cart_num_out">
                  <select class="cart_num" v-model="item.nums">
                    <option :value="num" v-for="(num, index) in 10" :key="index">{{num}}</option>
                  </select>
                  <button @click="addCart(item.title, item.id, item.nums)">Add to cart</button>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState , mapActions } from 'vuex'

export default {
  name: "Products",
  data() {
    return {
      currentClassicPage: 1,
      currentNewPage: 1,
      classicData: {},
      newData: {},
      classicAndNewData: []
    }
  },
  computed: {
    ...mapState(['orgProductsClassic', 'orgProductsNews']),
    categoryProducts () {
      return this.getCategoryProducts();
    }
  },
  watch: {
    orgProductsClassic () {
      const tempClassicData = {}
      this.classicData['title'] = 'classic';
      this.classicData['data'] = this.orgProductsClassic.filter(item => item.num < 5);
      this.classicAndNewData.push(this.classicData)
    },
    orgProductsNews () {
      const tempNewData = {}
      this.newData['title'] = 'new';
      this.newData['data'] = this.orgProductsNews.filter(item => item.num < 5);
      this.classicAndNewData.push(this.newData)
    },
    currentClassicPage () {
      this.classicAndNewData = [];
      switch (this.currentClassicPage) {
        case 1:
          this.classicData['data'] = this.orgProductsClassic.filter(item => item.num < 5);
          break
        case 2:
          this.classicData['data'] = this.orgProductsClassic.filter(item => 4 < item.num && item.num < 9);
          break
      }
      this.classicAndNewData.push(this.classicData);
      this.classicAndNewData.push(this.newData);
    },
    currentNewPage () {
      this.classicAndNewData = [];
      switch (this.currentNewPage) {
        case 1:
          this.newData['data'] = this.orgProductsNews.filter(item => item.num < 5);
          break;
        case 2:
          this.newData['data'] = this.orgProductsNews.filter(item => 4 < item.num && item.num < 9);
          break;
      }
      this.classicAndNewData.push(this.classicData);
      this.classicAndNewData.push(this.newData);
    }
  },
  mounted () {
    this.getOrgProductsClassic();
    this.getOrgProductsNews();
    this.getCurrentClassicProducts();
    this.getCurrentNewProducts();
  },
  methods: {
    ...mapActions(['getOrgProductsClassic', 'getOrgProductsNews', 'getCurrentClassicProducts', 'getCurrentNewProducts']),
    getPreviousPage (category) {
      switch (category) {
        case 'classic':
          if (this.currentClassicPage === 1) return

          this.currentClassicPage -= 1;
          break;
        case 'new':
          if (this.currentNewPage === 1) return

          this.currentNewPage -= 1;
          break;
      }
    },
    getNextPage (category) {
      switch (category) {
        case 'classic':
          if (this.currentClassicPage === 2) return

          this.currentClassicPage += 1;
          break;
        case 'new':
          if (this.currentNewPage === 2) return

          this.currentNewPage += 1;
          break;
      }
    },
    addCart(title, id, qty) {
      const params = {
        product_id: id,
        qty: qty
      };
      const titleSplit = title.split('')
      switch (titleSplit[0]) {
        case "A":
          this.$store.dispatch("addCartClassic", params);
          setTimeout(() => {
            this.getCurrentClassicProducts();
          }, 500)
          break;
        case "B":
          this.$store.dispatch("addCartClassic", params);
          setTimeout(() => {
            this.getCurrentClassicProducts();
          }, 500)
          break;
        case "V":
          this.$store.dispatch("addCartNews", params);
          setTimeout(() => {
            this.getCurrentNewProducts();
          }, 500)
          break;
      }
    },
    getCategoryProducts () {
      return this.classicAndNewData;
    }
  }
}
</script>

<style scoped>
.products_picks, .products_news {
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
.wine .product_left {
  width: 60%;
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
  margin: 80px 0 0;
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
  padding: 25px;
}
.wine .product_bottom .cart_num_out {
  display: flex;
  justify-content: space-around;
}

.wine .product_bottom .cart_num {
  width: 100px;
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
.wine .introduction {
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
.wine .introduction:hover .product_top_detail {
  bottom: 0px;
}
.product_top_detail_inner {
  font-size: 2rem;
}

main .products_news .top .page,
main .products_picks .top .page {
  display: flex;
  box-sizing: border-box;
  padding-top: 25px;
}
main .products_picks .fa-angle-left,
main .products_picks .fa-angle-right {
  font-size: 35px;
}
main .products_news .fa-angle-left,
main .products_news .fa-angle-right {
  font-size: 35px;
}

main .products_news .top .page div,
main .products_picks .top .page div {
  width: 35px;
  height: 35px;
  border: 1px solid #b49782;
  text-align: center;
}

main .products_news .top .page div + div,
main .products_picks .top .page div + div {
  margin-left: 5px;
}
</style>