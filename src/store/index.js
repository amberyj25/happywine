import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    orgProductsClassic: "",
    orgProductsNews: "",
    checkSignIn: false,
    addCartClassic: "",
    addCartNews: "",
    currentShoppingCartClassic: "",
    currentShoppingCartNew: ""
  },
  mutations: {
    getOrgProductsClassic(state, payload) {
      payload.forEach(item => item.productNum = 1)

      state.orgProductsClassic = payload
    },
    getOrgProductsNews(state, payload) {
      payload.forEach(item => item['productNum'] = 1)

      state.orgProductsNews = payload
    },
    checkSignIn(state, payload) {
      state.checkSignIn = payload;
    },
    addCartClassic(state, payload) {
      state.addCartClassic = payload;
    },
    addCartNews(state, payload) {
      state.addCartNews = payload;
    },
    getCurrentShoppingCartClassic(state, payload) {
      state.currentShoppingCartClassic = payload;
    },
    getCurrentShoppingCartNew(state, payload) {
      state.currentShoppingCartNew = payload;
    }
  },
  actions: {
    getOrgProductsClassic(context) {
      axios
        .get("https://vue-course-api.hexschool.io/api/wine5/products")
        .then(res => {
          context.commit("getOrgProductsClassic", res.data.products);
        });
    },
    getOrgProductsNews(context) {
      axios
        .get("https://vue-course-api.hexschool.io/api/wine52/products")
        .then(res => {
          context.commit("getOrgProductsNews", res.data.products);
        });
    },
    addCartClassic(context, payload) {
      axios
        .post("https://vue-course-api.hexschool.io/api/wine5/cart", {
          data: payload
        })
        .then(res => {
          context.commit("addCartClassic", res.data);
        });
    },
    addCartNews(context, payload) {
      axios
        .post("https://vue-course-api.hexschool.io/api/wine52/cart", {
          data: payload
        })
        .then(res => {
          context.commit("addCartNews", res.data.data);
        });
    },
    getCurrentShoppingCartClassic(context) {
      axios
        .get("https://vue-course-api.hexschool.io/api/wine5/cart")
        .then(res => {
          context.commit("getCurrentShoppingCartClassic", res.data.data.carts);
        });
    },
    getCurrentShoppingCartNew(context) {
      axios
        .get("https://vue-course-api.hexschool.io/api/wine52/cart")
        .then(res => {
          context.commit("getCurrentShoppingCartNew", res.data.data.carts);
        });
    },
    deleteProductsClassic(context, payload) {
      axios
        .delete(`https://vue-course-api.hexschool.io/api/wine5/cart/${payload}`)
        // .then(res => {
        //   context.dispatch("currentClassicProducts");
        // });
    },
    deleteProductsNew(context, payload) {
      axios
        .delete(
          `https://vue-course-api.hexschool.io/api/wine52/cart/${payload}`
        )
        // .then(res => {
        //   context.dispatch("currentNewProducts");
        // });
    },
    signOutChange(context) {
      axios.post("https://vue-course-api.hexschool.io/logout").then(result => {
        context.commit("checkSignIn", false);
      })
    }
  }
})
