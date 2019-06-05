import Store from ".../src/cart.vue";
import Cart from ".../src/components/cart.vue";
import { shallowMount } from "@vue/test-utils";

describe("CartFunctions", () => {
  beforeEach(() => {
    const items = [
      {
        name: "Apple",
        id: 1,
        image: "https://i.ibb.co/bPgzxzt/apple.jpg",
        price: 230.0,
        quantity: 5
      },
      {
        name: "Orange",
        id: 2,
        image: "https://i.ibb.co/pznd5vv/orange.jpg",
        price: 300.0,
        quantity: 5
      }
    ];
    Store.setUpJuices(Store.state, { items });
  });

  it("Cart count will be 1 when item added", () => {
    const wrapper = shallowMount(Cart);
    wrapper.addToCart(1);
    expect(Store.state.cart.count).toEqual(1);
  });

  it("Cart item will be 1 when 2 item added then reomve 1", () => {
    const wrapper = shallowMount(Cart);
    wrapper.addToCart(1);
    wrapper.removeFromCart(1);
    expect(Store.state.cart.count).toEqual(1);
  });

  it("Cart item will be 0 when item delete", () => {
    const wrapper = shallowMount(Cart);
    wrapper.addToCart(1);
    wrapper.deleteFromCart(1);
    expect(Store.state.cart.count).toEqual(0);
  });
});
