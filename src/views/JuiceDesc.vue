<template>
  <div>
    <router-link to="/" tag="button" class="btn btn-info">Continue Shopping</router-link>
    <div class="card">
      <img class="card-img-top" v-bind:src="juice.image" alt="Card image cap" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{juice.name}}</h5>
        <p class="card-text">
          Price:
          <b>${{juice.price}}</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      juice: null
    };
  },
  mounted() {
    var a = this.$store.state.juices;
    var b = this.$route.params.id;
    this.juice = a.find(juice => juice.id == b);
  }
}
</script>

<style>
</style>
