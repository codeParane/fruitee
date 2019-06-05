<template>
  <div class="card">
    <a v-bind:href="'#/desc/'+juice.id">
      <img class="card-img-top" v-bind:src="juice.image" alt="Card image cap" style="width: 15rem;">
    </a>
    <div class="card-body">
      <h5 class="card-title">{{juice.name}}</h5>
      <p class="card-text">
        Price:
        <b>${{juice.price}}</b>
      </p>
      <button
        class="btn mt-3"
        :class="inCartQuantity ? 'btn-success' :  'btn-danger'"
        @click="addToCart(juice.id)"
        :disabled="!inCartQuantity"
      >{{inCartQuantity ? "Add to Cart" : "Out of stock"}}</button>
    </div>
  </div>
</template>

<script>

export default {
  props: ["juice"],
  computed: {
    inCartQuantity() {
      return this.juice.quantity;
    }
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch("addToCart", id);
    }
  }
}
</script>
<style scoped>
.card {
  padding: 2px;
  margin: 6px;
}
</style>
