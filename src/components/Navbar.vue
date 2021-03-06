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
        <b-nav-item right>
          <div class="product_category_search">
            <input
              type="text"
              placeholder="經典款 or 新款"
              v-model="searchText"
              @keyup.enter="searchProductCategory"
            >
            <div class="search" @click="searchProductCategory">
              <i class="fas fa-search"></i>
            </div>
          </div>
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
      searchText: '',
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
    searchProductCategory () {
      if (!this.searchText) return
      this.$store.commit('navbarSearchProductCategory', this.searchText)
      this.$router.push('/productsPage')
    },
    signOut () {
      this.signOutChange()
    }
  }
}
</script>

<style lang="scss" scoped>
.navabar_root {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #7B7B7B !important;
  padding: 0 100px;
  opacity: 0.9;
  h1 {
    margin: 0;
    font-size: 0;
    font-weight: normal;
    a {
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
    }
  }
}
.navabar_root {
  .navigation_content_right {
    .product_category_search {
      display: flex;
      input {
        width: 10vw;
        height: 30px;
        margin-right: 5px;
      }
      ::placeholder {
        color: #ababab;
      }
      .search {
        width: 2vw;
        text-align: center;
      }
    }
    a {
      color: white;
      text-decoration: none;
      margin: 0 10px;
      font-size: 1.2rem;
    }
  }
}
@media (max-width: 1200px) {
  .navabar_root {
    padding: 0 50px;
  }
}
@media (max-width: 992px) {
  .navabar_root {
    .brand_name {
      order: 1;
      h1 {
        a {
          font-size: 2rem;
        }
      }
    }
    .navigation_btn_rwd {
      order: 3;
    }
    .navigation_content {
      order: 4;
    }
    .shopping_cart_root {
      order: 2;
    }
  }
}
@media (max-width: 576px) {
  .navabar_root {
    h1 {
      a {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
