import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "@/App.vue"
import Login from "@/components/Login.vue"
import Products from "@/components/Products.vue"


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "App",
      component: App,
    },{
      path: "/products",
      name: "Products",
      component: Products,
    },{
      path: "/login",
      name: "Login",
      component: Login,
    }
  ]
})
