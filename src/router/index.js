import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "@/App.vue"
import Login from "@/components/Login.vue"


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "App",
      component: App,
    },{
      path: "/Login",
      name: "Login",
      component: Login,
    }
  ]
})
