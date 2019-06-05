import Store from ".../src/store.js";

describe("StoreFunctions", () => {
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
    Store.addToCart(Store.state, 2);
  });

  it("setUpJuices update Juices with items", () => {
    const state = {
      juice: []
    };
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

    Store.setUpJuices(state, { items });
    expect(state.items).toBe(items);
  });

  it("Cart qty when reduce item added then remove", () => {
    Store.removeFromCart(Store.state, 2);
    expect(Store.state.cart.count).toEqual(1);
  });

  it("Cart empty when delete itmes on cart", () => {
    Store.deleteFromCart(Store.state);
    expect(Store.state.cart.count).toEqual(0);
  });
});
