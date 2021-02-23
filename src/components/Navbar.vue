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
        <b-nav-item right>
          <router-link to="/checkout">結帳</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <!-- shopping_cart -->
    <ShoppingCart></ShoppingCart>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ShoppingCart from '@/components/ShoppingCart.vue'

export default {
  name: 'Navbar',
  components: {
    ShoppingCart
  },
  data () {
    return {
      checkSignInData: false
    }
  },
  computed: {
    ...mapState([
      'checkSignIn'
    ]),
    checkLogIn () {
      return this.checkSignIn
    }
  },
  methods: {
    ...mapActions([
      'signOutChange'
    ]),
    signOut () {
      this.signOutChange()
    }
  }
}
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
.navabar_root .navigation_content_right a {
  margin: 0 30px;
  font-size: 1.2rem;
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
  /* style 使用 shopping_cart_root 吃到 component ShoppingCart 內的 class shopping_cart_root */
  .shopping_cart_root {
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
</style>
