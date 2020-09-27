import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "@/App.vue"
import Login from "@/components/Login.vue"
import Productslist from "@/components/Productslist.vue"


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "App",
      component: App,
    },{
      path: "/productslist",
      name: "Productslist",
      component: Productslist,
    },{
      path: "/login",
      name: "Login",
      component: Login,
    }
  ]
})
