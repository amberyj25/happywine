import Vue from 'vue'
import Vuex from "vuex"
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    productsPicks: [
      {
        id: 0,
        num: 1,
        page: 1,
        wine: "a1",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/kCW5hRG.png"
      },
      {
        id: 1,
        num: 1,
        page: 1,
        wine: "a2",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/kCW5hRG.png"
      },
      {
        id: 2,
        num: 1,
        page: 1,
        wine: "a3",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/kCW5hRG.png"
      },
      {
        id: 3,
        num: 1,
        page: 1,
        wine: "a4",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/kCW5hRG.png"
      }, {
        id: 4,
        num: 1,
        page: 2,
        wine: "a5",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/JDzZM7p.png"
      }, {
        id: 5,
        num: 1,
        page: 2,
        wine: "a6",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/JDzZM7p.png"
      }, {
        id: 6,
        num: 1,
        page: 2,
        wine: "a7",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/JDzZM7p.png"
      }, {
        id: 7,
        num: 1,
        page: 2,
        wine: "a8",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/JDzZM7p.png"
      }, {
        id: 8,
        num: 1,
        page: 3,
        wine: "a9",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/kCW5hRG.png"
      },
      {
        id: 9,
        num: 1,
        page: 3,
        wine: "a10",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/kCW5hRG.png"
      },
      {
        id: 10,
        num: 1,
        page: 3,
        wine: "a11",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/kCW5hRG.png"
      },
      {
        id: 11,
        num: 1,
        page: 3,
        wine: "a12",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/kCW5hRG.png"
      }, {
        id: 12,
        num: 1,
        page: 4,
        wine: "a13",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/JDzZM7p.png"
      }, {
        id: 13,
        num: 1,
        page: 4,
        wine: "a14",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/JDzZM7p.png"
      }, {
        id: 14,
        num: 1,
        page: 4,
        wine: "a15",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/JDzZM7p.png"
      }, {
        id: 15,
        num: 1,
        page: 4,
        wine: "a16",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/JDzZM7p.png"
      }
    ],
    productsNews: [
      {
        id: 0,
        num: 1,
        page: 1,
        wine: "a1",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/rCvvLPE.jpg"
      },
      {
        id: 1,
        num: 1,
        page: 1,
        wine: "a2",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/rCvvLPE.jpg"
      },
      {
        id: 2,
        num: 1,
        page: 1,
        wine: "a3",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/rCvvLPE.jpg"
      },
      {
        id: 3,
        num: 1,
        page: 1,
        wine: "a4",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/rCvvLPE.jpg"
      }, {
        id: 4,
        num: 1,
        page: 2,
        wine: "a5",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/JDzZM7p.png"
      }, {
        id: 5,
        num: 1,
        page: 2,
        wine: "a6",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/JDzZM7p.png"
      }, {
        id: 6,
        num: 1,
        page: 2,
        wine: "a7",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/JDzZM7p.png"
      }, {
        id: 7,
        num: 1,
        page: 2,
        wine: "a8",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/JDzZM7p.png"
      }, {
        id: 8,
        num: 1,
        page: 3,
        wine: "a9",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/rCvvLPE.jpg"
      },
      {
        id: 9,
        num: 1,
        page: 3,
        wine: "a10",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/rCvvLPE.jpg"
      },
      {
        id: 10,
        num: 1,
        page: 3,
        wine: "a11",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/rCvvLPE.jpg"
      },
      {
        id: 11,
        num: 1,
        page: 3,
        wine: "a12",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/rCvvLPE.jpg"
      }, {
        id: 12,
        num: 1,
        page: 4,
        wine: "a13",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/JDzZM7p.png"
      }, {
        id: 13,
        num: 1,
        page: 4,
        wine: "a14",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/JDzZM7p.png"
      }, {
        id: 14,
        num: 1,
        page: 4,
        wine: "a15",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/JDzZM7p.png"
      }, {
        id: 15,
        num: 1,
        page: 4,
        wine: "a16",
        cart: 0,
        total: 5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        am: "100",
        ws: "100",
        sale: "On-Sale",
        price: "$500",
        vintage: "2018",
        country: "France",
        region: "Burgundy",
        size: "0.75L",
        img: "https://i.imgur.com/JDzZM7p.png"
      }
    ],
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
    rooms(state, payload) {
      state.products = payload;
    }
  },
})