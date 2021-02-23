<template>
  <div>
    <HeaderNavbar class="header_img"></HeaderNavbar>

    <main class="container">
      <div class="filter">
        <h5 class="category">酒品分類</h5>
        <div v-for="(category, index) in wineCategory" :key="index">
          <p
            :class="{filter_category: categoryRender === category}"
            @click="getCategory(category)"
          >{{ category }}</p>
        </div>
      </div>

      <div class="products_outer">
        <div class="products" v-for="(category, index) in categoryProducts" :key="index">
          <b-row class="top">
            <b-col cols="12">
              <h2>{{ category.title }}</h2>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              class="product"
              cols="12 mb-5"
              md="6"
              lg="3"
              v-for="(product, index) in category.data"
              :key="index"
            >
              <div class="wine">
                <div class="product_top">
                  <div class="product_left">
                    <h5>{{ product.title }}</h5>
                    <p>{{ product.category }}</p>
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
                      <div class="sale">＄{{ product.price }}</div>
                      <div class="price">＄{{ product.origin_price }}</div>
                    </div>
                  </div>
                  <div class="product_right">
                    <img :src="product.image" alt="product" />
                  </div>
                </div>
                <div class="product_bottom">
                  <div class="cart_num_out">
                    <select class="cart_num" v-model="product.productNum">
                      <option :value="num" v-for="(num, index) in 10" :key="index">{{ num }}</option>
                    </select>
                    <button @click="addCart(product.title, product.id, product.productNum)">Add to cart</button>
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
import { mapState, mapActions } from 'vuex'
import HeaderNavbar from '@/layout/HeaderNavbar.vue'
import Footer from '@/layout/Footer.vue'

export default {
  name: 'ProductsPage',
  components: {
    HeaderNavbar,
    Footer
  },
  data () {
    return {
      wineCategory: ['New酒品', 'Classic酒品', '全部酒品'],
      categoryRender: 'New酒品',
      classicAndNewData: []
    }
  },
  computed: {
    ...mapState([
      'orgProductsClassic',
      'orgProductsNews',
      'currentShoppingCartClassic',
      'currentShoppingCartNew'
    ]),
    categoryProducts () {
      return this.getCategoryProducts()
    }
  },
  watch: {
    orgProductsClassic () {
      const tempClassicData = {}
      // eslint-disable-next-line dot-notation
      tempClassicData['title'] = 'classic'
      // eslint-disable-next-line dot-notation
      tempClassicData['data'] = this.orgProductsClassic
      this.classicAndNewData.push(tempClassicData)
    },
    orgProductsNews () {
      const tempNewData = {}
      // eslint-disable-next-line dot-notation
      tempNewData['title'] = 'new'
      // eslint-disable-next-line dot-notation
      tempNewData['data'] = this.orgProductsNews
      this.classicAndNewData.push(tempNewData)
    }
  },
  mounted () {
    this.getOrgProductsClassic()
    this.getOrgProductsNews()
    this.getCurrentShoppingCartClassic()
    this.getCurrentShoppingCartNew()
  },
  methods: {
    ...mapActions([
      'getOrgProductsClassic',
      'getOrgProductsNews',
      'getCurrentShoppingCartClassic',
      'getCurrentShoppingCartNew'
    ]),
    addCart (title, id, qty) {
      const titleSplit = title.split('')
      const checkClassicItemIsDoubleOrNot = this.currentShoppingCartClassic.filter(item => item.product.id === id)
      const checkNewItemIsDoubleOrNot = this.currentShoppingCartNew.filter(item => item.product.id === id)
      const params = {
        product_id: id,
        qty: qty
      }
      // 判斷 是否與現有的 shoppingCart 的 item有相同, 有相同去打API 修改
      if (checkClassicItemIsDoubleOrNot.length !== 0) {
        const doubleItemIdClassic = checkClassicItemIsDoubleOrNot[0].id
        const doubleItemOrgQtyClassic = checkClassicItemIsDoubleOrNot[0].qty
        params.qty = doubleItemOrgQtyClassic + qty

        switch (titleSplit[0]) {
          case 'A':
            this.$store.dispatch('deleteProductsClassic', doubleItemIdClassic)
            this.$store.dispatch('addCartClassic', params)
            return
          case 'B':
            this.$store.dispatch('deleteProductsClassic', doubleItemIdClassic)
            this.$store.dispatch('addCartClassic', params)
            return
        }
      }

      if (checkNewItemIsDoubleOrNot.length !== 0) {
        const doubleItemIdNew = checkNewItemIsDoubleOrNot[0].id
        const doubleItemOrgQtyNew = checkNewItemIsDoubleOrNot[0].qty
        params.qty = doubleItemOrgQtyNew + qty
        switch (titleSplit[0]) {
          case 'V':
            this.$store.dispatch('deleteProductsNew', doubleItemIdNew)
            this.$store.dispatch('addCartNews', params)
            return
        }
      }

      // 經過 上面 判斷是否有與shoppingCart 的 item有相同, 沒有才會繼續從這邊往下跑
      switch (titleSplit[0]) {
        case 'A':
          this.$store.dispatch('addCartClassic', params)
          break
        case 'B':
          this.$store.dispatch('addCartClassic', params)
          break
        case 'V':
          this.$store.dispatch('addCartNews', params)
          break
      }
    },
    getCategory (category) {
      switch (category) {
        case 'New酒品':
          this.categoryRender = 'New酒品'
          break
        case 'Classic酒品':
          this.categoryRender = 'Classic酒品'
          break
        case '全部酒品':
          this.categoryRender = '全部酒品'
          break
      }
    },
    getCategoryProducts () {
      switch (this.categoryRender) {
        case 'New酒品':
          return this.classicAndNewData.filter(item => item.title === 'new')
        case 'Classic酒品':
          return this.classicAndNewData.filter(
            item => item.title === 'classic'
          )
        case '全部酒品':
          return this.classicAndNewData
      }
    }
  }
}
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
  width: 15%;
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
.filter_category {
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
.products_outer {
  width: 85%;
}
.products,
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
.wine .product_left {
  width: 60%;
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
  width: 90%;
}

main .products_news .top .page,
main .products .top .page {
  display: flex;
  box-sizing: border-box;
  padding-top: 25px;
}
main .products .fa-angle-left,
main .products .fa-angle-right {
  font-size: 35px;
}
main .products_news .fa-angle-left,
main .products_news .fa-angle-right {
  font-size: 35px;
}

main .products_news .top .page div,
main .products .top .page div {
  width: 35px;
  height: 35px;
  border: 1px solid #b49782;
  text-align: center;
}

main .products_news .top .page div + div,
main .products .top .page div + div {
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
