import Vue from "vue";
import Vuex from "vuex";
import apiCall from "./apiCall";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juices: null,
    cart: []
  },
  getters: {
    cartSize: state => {
      return state.cart.length;
    },
    cartTotalAmount: state => {
      return state.cart.reduce((total, juice) => {
        let tot = total + juice.price * juice.quantity;
        let dis = tot > 500 ? tot * 0.02 : 0;
        let vat = (tot - dis) * 0.12;
        let finalTotal = tot - dis + vat;
        return finalTotal;
      }, 0);
    },
    cartTotalDiscount: state => {
      return state.cart.reduce(total => {
        return total > 500 ? total * 0.2 : 0;
      }, 0);
    },
    cartTotalVat: state => {
      return state.cart * 1.2;
    }
  },

  mutations: {
    setUpJuices: (state, juicesPL) => {
      state.juices = juicesPL;
    },
    addToCart: (state, juiceId) => {
      var juice = state.juices.find(juice => juice.id === juiceId);
      var cartJuice = state.cart.find(juice => juice.id === juiceId);

      if (cartJuice) {
        cartJuice.quantity++;
      } else {
        state.cart.push({
          ...juice,
          stock: juice.quantity,
          quantity: 1
        });
      }
      juice.quantity--;
    },
    removeFromCart: (state, juiceId) => {
      let juice = state.juices.find(juice => juice.id === juiceId);
      let cartJuice = state.cart.find(juice => juice.id === juiceId);

      cartJuice.quantity--;
      juice.quantity++;
    },
    deleteFromCart: (state, juiceId) => {
      let juice = state.juices.find(juice => juice.id === juiceId);
      let cartJuiceIndex = state.cart.findIndex(juice => juice.id === juiceId);
      juice.quantity = state.cart[cartJuiceIndex].stock;
      state.cart.splice(cartJuiceIndex, 1);
    }
  },
  actions: {
    fetchJuices: ({ commit }) => {
      apiCall.getJuices().then(juices => {
        commit("setUpJuices", juices);
      });
    },
    descJuice: (state, juiceId) => {
      return state.juices.find(juice => juice.id === juiceId);
    },
    addToCart: ({ commit }, juiceId) => {
      commit("addToCart", juiceId);
    },
    removeFromCart: ({ commit }, juiceId) => {
      commit("removeFromCart", juiceId);
    },
    deleteFromCart: ({ commit }, juiceId) => {
      commit("deleteFromCart", juiceId);
    }
  }
});
