import Store from ".../src/cart.vue";
import Juice from ".../src/components/juice.vue";
import { shallowMount } from "@vue/test-utils";

describe("JuiceFunctions", () => {
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

  it("Cart count will be + 1 when item added", () => {
    const wrapper = shallowMount(Juice, {
      computed: {
        inCartQuantity: () => 1
      }
    });
    wrapper.addToCart(1);
    expect(wrapper.inCartQuantity).toEqual(2);
  });
});
