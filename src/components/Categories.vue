<script setup>
import { ref } from "vue";
import { useProductStore } from "../stores/productStore";

const productStore = useProductStore();

const categories = ref([
  {
    title: "Popular",
    products: productStore.products.filter(p => p.category === "Popular").slice(0, 4),
  },
  {
    title: "New",
    products: productStore.products.filter(p => p.category === "New Arrivals").slice(0, 4),
  },
  {
    title: "Sunwear",
    products: productStore.products.filter(p => p.category === "Sunglasses").slice(0, 4),
  },
]);
</script>

<template>
  <div class="container">
    <div v-for="category in categories" :key="category.title" class="category-section mb-5">
      <h2 class="text-center my-4">{{ category.title }}</h2>
      <div class="row">
        <!-- 4 produkter per kategori -->
        <div class="col-6 col-md-3" v-for="product in category.products" :key="product.id">
          <div class="card">
            <img src="../assets/sunwear.png" class="card-img-top" alt="Product Image">
            <div class="card-body">
              <h5 class="card-title">{{ product.modelName }}</h5>
              <p class="card-text"> {{ product.price }} SEK</p>
              <a href="#" class="text-danger" style="text-decoration: underline;">See Details</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-3">
        <button class="btn btn-primary">See All</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.card-img-top {
  width: 100%;
  height: auto;
}
@media (max-width: 768px) {
  .card {
    margin-bottom: 20px;
  }
  .card-img-top {
    width: 80px;
    height: 80px;
  }
  .card-body {
    padding: 10px;
  }
}
</style>
