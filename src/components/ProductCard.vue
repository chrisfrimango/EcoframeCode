<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../stores/productStore";
const productStore = useProductStore();
const route = useRoute();
const productId = computed(() => route.params.productId);
console.log(productId.value);
const product = ref(productStore.getProductById(productId.value));

const productPrice = computed(() => {
  if (product.value && product.value.onSale) {
    return productStore.updateProductSalesPrice(product.value.id);
  }
  return product.value.price;
});
</script>

<template>
  <BContainer class="mt-5 mb-5" fluid>
    <BRow>
      <BCol sm="12" md="6" class="columns">
        <img src="../assets/sunwear.png" alt="Image" />
      </BCol>
      <BCol sm="12" md="6" class="columns p-5">
        <BRow class="product-info breadcrumb">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item"><a href="/Shop">Shop</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                {{ product.modelName }}
              </li>
            </ol>
          </nav>
        </BRow>
        <BRow class="product-info">
          <h2>{{ product.modelName }}</h2>
          <h5>{{ product.brand }}</h5>
          <h2 v-if="product" :class="{ 'sales-color': product.onSale }">
            {{ productPrice }} SEK
          </h2>
          <h4 v-if="product.onSale" :class="{ 'old-price': product.onSale }">
            {{ product.price }} SEK
          </h4>
          <h5 :style="{ color: product.color }">{{ product.color }}</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
            quas deleniti quod vel magnam nostrum. Id commodi blanditiis porro
            fugit, ab, fugiat necessitatibus similique, culpa asperiores veniam
            excepturi unde! Optio.
          </p>
        </BRow>
        <BButton variant="primary">Add To Cart</BButton>
      </BCol>
    </BRow>
  </BContainer>
</template>

<style scoped>
.sales-color {
  color: red;
}

.old-price {
  text-decoration: line-through;
  font-weight: 300;
}
</style>
