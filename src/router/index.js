import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "@/App.vue"
import Login from "@/components/Login.vue"
import ProductsList from "@/components/ProductsList.vue"


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "App",
      component: App,
    },{
      path: "/productsList",
      name: "ProductsList",
      component: ProductsList,
    },{
      path: "/login",
      name: "Login",
      component: Login,
    }
  ]
})
