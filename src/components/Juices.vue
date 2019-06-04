<template>
  <div class="container">
    <div class="row">
      <div v-for="ju in juices" :key="ju.id">
        <Juice :juice="ju"></Juice>
      </div>
    </div>
  </div>
</template>

<script>
import Juice from './Juice';
export default {
  components: {
    Juice
  },
  computed: {
    juices() {
      return this.$store.state.juices;
    }
  },
  created() {
    this.$store.dispatch("fetchJuices");
  }
}
</script>

<style>
</style>
