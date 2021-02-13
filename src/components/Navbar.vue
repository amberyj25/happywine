<template>
  <b-navbar class="navabar_root" toggleable="lg">
    <!-- logo -->
    <b-navbar-brand class="brand_name">
      <h1>
        <router-link to="/">Wine Space</router-link>
      </h1>
    </b-navbar-brand>

    <!-- rwd - 漢堡選單 -->
    <b-navbar-toggle target="nav-collapse" class="navigation_btn_rwd">
      <i class="fas fa-bars"></i>
    </b-navbar-toggle>

    <!-- 不是 rwd - 會呈現在navigation 各個選項 -->
    <b-collapse id="nav-collapse" is-nav class="navigation_content">
      <b-navbar-nav class="ml-auto navigation_content_right">
        <b-nav-item right>
          <router-link to="/">首頁</router-link>
        </b-nav-item>
        <b-nav-item right>
          <router-link to="/productsPage">商品</router-link>
        </b-nav-item>
        <b-nav-item right>
          <router-link to="/login" v-if="checkLogIn === false">Login</router-link>
          <p v-else @click="signOut">Logout</p>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <!-- shopping_cart -->
    <div class="shopping_cart">
      <b-dropdown
        id="dropdown-right"
        right
        text="Right align"
        size="lg"
        variant="link"
        toggle-class="text-decoration-none"
        no-caret
      >
        <template v-slot:button-content>
          <i class="fas fa-shopping-cart"></i>
          <b-badge variant="primary">{{ shoppingItemsLength }}</b-badge>
        </template>
        <p class="title">已選購 Classic 商品</p>
        <b-dropdown-item
          href="#"
          v-for="(classicProduct, index) in getClassicProducts"
          :key="`classicProduct${index}`"
          class="content"
        >
          <div class="content_item">
            <span>{{ classicProduct.product.title }}</span>
            <span>{{ classicProduct.qty }}瓶</span>
            <span>${{ classicProduct.qty*classicProduct.product.price }}</span>
            <span @click.prevent="deleteClassicProduct(classicProduct.id)" class="deleteIcon">
              <i class="far fa-trash-alt"></i>
            </span>
          </div>
          <hr />
        </b-dropdown-item>
        <p class="title">已選購 New 商品</p>
        <b-dropdown-item
          href="#"
          v-for="(newProduct, index) in getNewProducts"
          :key="`newProduct${index}`"
          class="content"
        >
          <div class="content_item">
            <span>{{ newProduct.product.title }}</span>
            <span>{{ newProduct.qty }}瓶</span>
            <span>${{ newProduct.qty*newProduct.product.price }}</span>
            <span @click.prevent="deleteNewProduct(newProduct.id)" class="deleteIcon">
              <i class="far fa-trash-alt"></i>
            </span>
          </div>
          <hr />
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Navbar",
  data () {
    return {
      classicProductData: [],
      newProductData: [],
      totalDataLength: "",
      checkSignInData: false
    };
  },
  computed: {
    ...mapState([
      "checkSignIn",
      "currentShoppingCartClassic",
      "currentShoppingCartNew"
    ]),
    checkLogIn () {
      return this.checkSignIn;
    },
    getClassicProducts () {
      return this.currentShoppingCartClassic;
    },
    getNewProducts () {
      return this.currentShoppingCartNew;
    },
    shoppingItemsLength () {
      return this.totalDataLength;
    }
  },
  watch: {
    currentShoppingCartClassic () {
      this.getShoppingCartClassic();
      this.getTotalNumData();
    },
    currentShoppingCartNew () {
      this.getShoppingCartNew();
      this.getTotalNumData();
    }
  },
  mounted() {
    this.getShoppingCartClassic();
    this.getShoppingCartNew();
    this.getTotalNumData();
  },
  methods: {
    ...mapActions([
      "getCurrentShoppingCartClassic",
      "getCurrentShoppingCartNew",
      "signOutChange"
    ]),
    getTotalNumData () {
      this.totalDataLength = this.classicProductData.length + this.newProductData.length;
    },
    getShoppingCartClassic () {
      this.classicProductData = this.currentShoppingCartClassic;
    },
    getShoppingCartNew () {
      this.newProductData = this.currentShoppingCartNew;
    },
    deleteClassicProduct (id) {
      this.$store.dispatch("deleteProductsClassic", id);
    },
    deleteNewProduct (id) {
      this.$store.dispatch("deleteProductsNew", id);
    },
    signOut () {
      this.signOutChange();
    }
  }
};
</script>

<style scoped>
.navabar_root {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #7B7B7B !important;
  padding: 0 100px;
  opacity: 0.9;
}
.navabar_root a {
  color: white;
  text-decoration: none;
}
.navabar_root h1 {
  margin: 0;
  font-size: 0;
  font-weight: normal;
}
.navabar_root h1 a {
  font-size: 1.5rem;
}
.navabar_root button i {
  font-size: 25px;
  color: white;
}

.navabar_root .navigation_content_right a {
  margin: 0 30px;
  font-size: 1.2rem;
}
#header a:hover {
  font-weight: bold;
}
.title {
  text-align: center;
  font-size: 1.3rem;
  color: #8c6e55;
}
.content {
  width: 250px;
}
.content_item {
  display: flex;
  justify-content: space-between;
}
hr {
  border: 1px solid black;
}
.deleteIcon {
  display: inline-block;
  width: 25px;
  height: 25px;
  text-align: center;
}
/* media query*/
@media (max-width: 1200px) {
  .navabar_root {
    padding: 0 50px;
  }
  .carousel_img {
    height: 50%;
  }
}
@media (max-width: 992px) {
  .navabar_root h1 a {
    font-size: 2rem;
  }
  .brand_name {
    order: 1;
  }
  .shopping_cart {
    order: 2;
  }
  .navigation_btn_rwd {
    order: 3;
  }
  .navigation_content {
    order: 4;
  }
}
@media (max-width: 576px) {
  .navabar_root h1 a {
    font-size: 1.5rem;
  }
}
/* 
@media (max-width: 992px) {
  }
  */
</style>