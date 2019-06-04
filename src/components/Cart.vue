<template>
  <div class="container">
    <h1 class="my-2">
      Cart
      <span class="badge badge-secondary">{{cartSize}}</span>
    </h1>
    <div
      v-if="!cartSize"
      class="alert alert-secondary my-5"
      role="alert"
    >Stomach is empty! Please get some Juices.</div>
    <table v-else class="table table-striped mb-5">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Juice</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Delete</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(juice, index) in cart" :key="juice.id">
          <th scope="row">{{index + 1}}</th>
          <td>{{juice.name}}</td>
          <td>$ {{juice.price}}</td>
          <td>
            <button
              @click="removeFromCart(juice.id)"
              :disabled="juice.quantity === 1"
              class="btn btn-outline-danger btn-small"
            >-</button>
            <span class="mx-2">{{juice.quantity}}</span>
            <button
              @click="addToCart(juice.id)"
              :disabled="juice.quantity === juice.stock"
              class="btn btn-outline-success btn-small"
            >+</button>
          </td>
          <td>
            <button @click="deleteFromCart(juice.id)" class="btn btn-danger btn-small">Delete</button>
          </td>
          <td>$ {{juice.quantity* juice.price}}</td>
        </tr>

        <tr class="table-footer">
          <td colspan="5" class="total">Total:</td>
          <td>$ {{cartTotalAmount}}</td>
        </tr>
        <!-- <tr class="table-footer"> -->
        <td>
          <router-link to="/cart" tag="button">Checkout</router-link>
        </td>
        <!-- </tr> -->
      </tbody>
    </table>
  </div>
</template>
 
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapState([
      "cart"
    ]),
    ...mapGetters([
      "cartSize",
      "cartTotalAmount"
    ])
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch("addToCart", id);
    },
    removeFromCart(id) {
      this.$store.dispatch("removeFromCart", id);
    },
    deleteFromCart(id) {
      this.$store.dispatch("deleteFromCart", id);
    }
  }
} 
</script> 

<style scoped>
.table-footer {
  font-size: 1.2em;
  font-weight: bold;
}

.total {
  text-align: right;
}
</style>