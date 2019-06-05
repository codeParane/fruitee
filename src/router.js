import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Cart from "./components/Cart.vue";
import JuiceDesc from "./views/JuiceDesc.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/desc/:id",
      name: "juiceDesc",
      component: JuiceDesc
    }
  ]
});
