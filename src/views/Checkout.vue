<template>
  <div>
    <div class="nav_bar_root">
      <Navbar></Navbar>
    </div>
    <div class="container">
      <h1>結帳</h1>
      <div class="checkout_sop">
        <div
          v-for="(item, index) in checkoutSop"
          :key="index"
          class="checkout_sop_item"
        >
          <h2> {{item.title}} </h2>
        </div>
        <component :is="changeTab"></component>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import CheckoutShoppingCartContent from '@/components/CheckoutShoppingCartContent.vue'

export default {
  name: 'Checkout',
  components: {
    Navbar,
    CheckoutShoppingCartContent
  },
  data () {
    return {
      componentTab: 'CheckoutShoppingCartContent',
      checkoutSopItem: [
        {
          title: '1.確認購物車內容',
          component: 'CheckoutShoppingCartContent'
        },
        {
          title: '2.輸入收件人資料',
          // component: 'CheckoutShoppingCartContent'
        },
        {
          title: '3.訂單完成',
          // component: 'CheckoutShoppingCartContent'
        }
      ]
    }
  },
  computed: {
    changeTab () {
      return this.componentTab
    },
    checkoutSop () {
      return this.checkoutSopItem
    }
  },
  mounted () {
    this.getOrgProductsClassic()
    this.getOrgProductsNews()
    this.getCurrentShoppingCartClassic()
    this.getCurrentShoppingCartNew()
  }
}
</script>

<style scoped>
.container {
  max-width: 1140px;
  padding: 0 50px;
}
.nav_bar_root {
  height: 50px;
}
h1 {
  color: #7c757d;
  font-size: 1.5rem;
  text-align: center;
}
.checkout_sop {
  display: flex;
  justify-content: center;
}
.checkout_sop div+div {
  margin-left: 35px;
}
.checkout_sop_item {
  padding: 15px 100px;
}
.checkout_sop_item h2{
  font-size: 1rem;
}
</style>