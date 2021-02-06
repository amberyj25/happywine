import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    orgProductsPicks: "",
    orgProductsNews: "",
    checkSignIn: false,
    addCartClassic: "",
    addCartNews: "",
    currentClassicProducts: "",
    currentNewProducts: ""
  },
  mutations: {
    getOrgProductsClassic(state, payload) {
      const newPayload = payload.map(item => {
        item.nums = 1;
        return item;
      });
      state.orgProductsPicks = payload;
    },
    getOrgProductsNews(state, payload) {
      const newPayload = payload.map(item => {
        item.nums = 1;
        return item;
      });
      state.orgProductsNews = payload;
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
    getCurrentClassicProducts(state, payload) {
      state.currentClassicProducts = payload;
    },
    getCurrentNewProducts(state, payload) {
      state.currentNewProducts = payload;
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
    getCurrentClassicProducts(context) {
      axios
        .get("https://vue-course-api.hexschool.io/api/wine5/cart")
        .then(res => {
          context.commit("getCurrentClassicProducts", res.data.data.carts);
        });
    },
    getCurrentNewProducts(context) {
      axios
        .get("https://vue-course-api.hexschool.io/api/wine52/cart")
        .then(res => {
          context.commit("getCurrentNewProducts", res.data.data.carts);
        });
    },
    delectProductsClassic(context, payload) {
      axios
        .delete(`https://vue-course-api.hexschool.io/api/wine5/cart/${payload}`)
        // .then(res => {
        //   context.dispatch("currentClassicProducts");
        // });
    },
    delectProductsNew(context, payload) {
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
      });
    }
  }
});
