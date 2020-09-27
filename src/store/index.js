import Vue from 'vue'
import Vuex from "vuex"
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    productsPicks:"",
    productsNews:"",
    signinChange: false,
  },
  mutations: {
    add1(state, id) {
      if (state.productsPicks[id].num >= 5) {
        state.productsPicks[id].num = 5;
      } else {
        state.productsPicks[id].num += 1;
      };
    },
    add2(state, id) {
      if (state.productsNews[id].num >= 5) {
        state.productsNews[id].num = 5;
      } else {
        state.productsNews[id].num += 1;
      }
    },
    reduce1(state, id) {
      if (state.productsPicks[id].num <= 1) {
        state.productsPicks[id].num = 1;
      } else {
        state.productsPicks[id].num -= 1;
      }
    },
    reduce2(state, id) {
      if (state.productsPicks[id].num <= 1) {
        state.productsNews[id].num = 1;
      } else {
        state.productsNews[id].num -= 1;
      }
    },
    addCart1(state, id) {
      if (state.productsPicks[id].total >= state.productsPicks[id].num) {
        state.productsPicks[id].cart += state.productsPicks[id].num;
      };
      if (state.productsPicks[id].total >= state.productsPicks[id].num) {
        state.productsPicks[id].total -= state.productsPicks[id].num;
      };
      if (state.productsPicks[id].total == 0) {
        state.productsPicks[id].sale = "OUT OF STOCK";
      }
    },
    addCart2(state, id) {
      if (state.productsNews[id].total >= state.productsNews[id].num) {
        state.productsNews[id].cart += state.productsNews[id].num;
      };
      if (state.productsNews[id].total >= state.productsNews[id].num) {
        state.productsNews[id].total -= state.productsNews[id].num;
      };
      if (state.productsNews[id].total == 0) {
        state.productsNews[id].sale = "OUT OF STOCK";
      }
    },
    productsPicks(state, payload) {
      state.productsPicks = payload;
    },
    productsNews(state, payload) {
      state.productsNews = payload;
    },
    signinChange(state, payload){
      state.signinChange = payload;
    }
  },
  actions:{
    wineProductsPicks(context){
      axios.get("https://vue-course-api.hexschool.io/api/wine5/products").then((res)=>{
        context.commit("productsPicks",res.data.products);
      })
    },
    wineProductsNews(context){
      axios.get("https://vue-course-api.hexschool.io/api/wine52/products").then((res)=>{
        context.commit("productsNews",res.data.products);
      })
    }
  }
})