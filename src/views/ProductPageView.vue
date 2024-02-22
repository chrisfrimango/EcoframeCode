<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../stores/productStore";
const productStore = useProductStore();
const route = useRoute();
const productId = computed(() => route.params.productId);
console.log(productId.value);
const product = ref(productStore.getProductById(productId.value));
console.log(product.value);
</script>

<style scoped>
.infopadding {
  padding: 2rem;
}
.btn {
  width: 150px;
}
</style>

<template>

<BContainer fluid>
    <BRow>
      <BCol sm="12" md="6" class="columns">
        <img src="../assets/sunwear.png" alt="Image">
      </BCol>
      <BCol sm="12" md="6" class="columns infopadding">
        <BRow class="product-info breadcrumb">
          <nav aria-label="breadcrumb" class="no-padding">
            <ol class="breadcrumb no-padding">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item"><a href="/Shop">Shop</a></li>
              <li class="breadcrumb-item active" aria-current="page">{{ product.modelName }}</li>
            </ol>
          </nav>
        </BRow>
        <BRow class="product-info">
          <h2 class="no-padding">{{ product.modelName }}</h2>
          <h5 class="no-padding">{{ product.brand }}</h5>
          <h2 class="no-padding">{{ product.price }} SEK</h2>

          <p class="no-padding">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quas deleniti quod vel magnam nostrum. Id commodi blanditiis porro fugit, ab, fugiat necessitatibus similique, culpa asperiores veniam excepturi unde! Optio.</p>

          <h4 class="no-padding">Color: {{ product.color }}</h4>

          <button type="button" class="btn btn-primary">Add To Cart</button>

          <ul style="padding-top: 1rem;">
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </BRow>

      </BCol>
    </BRow>
    <BRow>
      <BCol>

      </BCol>
    </BRow>
  </BContainer>
</template>
