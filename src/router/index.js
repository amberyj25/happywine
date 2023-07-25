import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'App',
      component: () => import('../App.vue')
    }, {
      path: '/productsPage',
      name: 'ProductsPage',
      component: () => import('../views/ProductsPage.vue')
    }, {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    }, {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('../views/Checkout.vue')
    }, {
      path: '/singleProduct/:id',
      name: 'SingleProduct',
      component: () => import('../views/SingleProduct.vue')
    }
  ]
})
