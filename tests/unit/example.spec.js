import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Cart from "@/components/Cart.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("Cart.vue", () => {
  it("Cart have juice when added", () => {
    const wrapper = shallowMount(Cart, {});
    wrapper.addToCart(5);
    expect(wrapper.storejuice.id).toMatch(5);
  });
});
