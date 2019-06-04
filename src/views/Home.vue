<template>
  <div container>
    <div class="row">
      <div class="col-12">
        <img src="../assets/banner.jpg" alt="banner" width="100%">
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <juices></juices>
      </div>
      <div class="col-md-4">
        <cart></cart>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Juices from '@/components/Juices.vue'
import Cart from '@/components/Cart.vue';

export default {
  name: 'home',
  components: {
    Juices,
    Cart
  }
}
</script>
