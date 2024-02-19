<template>
  <div class="shop-view container">
    <Cta />
    <div class="row justify-content-center mb-4">
      <h2 class="text-center">Shop</h2>
    </div>
    <div class="row">
      <div class="col-lg-3">
        <Filter />
      </div>
      <div class="col-lg-9">
      <!-- shop innehåll ska vara här -->
      </div>
    </div>
  </div>
</template>

<script>
import Filter from '../components/Filter.vue';

export default {
  components: {
    Filter
  }
}
</script>
<style scoped>
@media (min-width: 992px) {
  .shop-view .row:first-child {
    flex-direction: column;
  }
}
</style>
