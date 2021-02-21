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
          :class="{bgColor: changeTab === item.component}"
        >
          <h2> {{item.title}} </h2>
        </div>
      </div>
      <div class="checkout_sop_content">
        <component
            :is="changeTab"
            :classicProductData = classicProductData
            :newProductData = newProductData
          ></component>
      </div>

    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import CheckoutShoppingCartContent from '@/components/CheckoutShoppingCartContent.vue'
import { mapState, mapActions } from 'vuex'

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
          title: '2.輸入收件人資料'
          // component: 'CheckoutShoppingCartContent'
        },
        {
          title: '3.訂單完成'
          // component: 'CheckoutShoppingCartContent'
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'currentShoppingCartClassic',
      'currentShoppingCartNew'
    ]),
    classicProductData () {
      return this.currentShoppingCartClassic
    },
    newProductData () {
      return this.currentShoppingCartNew
    },
    changeTab () {
      return this.componentTab
    },
    checkoutSop () {
      return this.checkoutSopItem
    }
  },
  mounted () {
    this.getCurrentShoppingCartClassic()
    this.getCurrentShoppingCartNew()
  },
  methods: {
    ...mapActions([
      'getCurrentShoppingCartClassic',
      'getCurrentShoppingCartNew'
    ])
  }
}
</script>

<style scoped>
* {
  margin-bottom: 0;
}
.container {
  max-width: 1140px;
  padding: 0 48px;
}
.nav_bar_root {
  height: 48px;
}
h1 {
  color: #7c757d;
  font-size: 1.5rem;
  text-align: center;
  margin: 25px 0;
}
.checkout_sop {
  display: flex;
  justify-content: center;
  margin: 25px 0;
}
.checkout_sop div+div {
  margin-left: 35px;
}
.checkout_sop_item {
  padding: 15px 100px;
}
.checkout_sop_item h2{
  font-size: 1rem;
  font-weight: 400;
}
.bgColor {
  background-color:bisque;
  border-radius: 5px;
}
</style>
