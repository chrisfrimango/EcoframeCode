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

<template>
  <BContainer fluid>
    <BRow>
      <BCol col="6" md="3">
        <BCard
          class="rounded-0"
          border-variant="light"
          :title="product.modelName"
          img-src="/src/assets/sunwear.png"
          img-alt="Image"
          img-top
          tag="products"
          style="max-width: 20rem"
        >
          <BCardText class="mb-1 custom-font-style">
            {{ product.brand }}</BCardText
          >
          <BCardText> {{ product.price }} SEK </BCardText>
          <router-link
            @click.prevent="goToProductPage(category.id)"
            to="/product/:id"
            class="text-primary"
            style="text-decoration: underline"
            >See Details</router-link
          >
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
</template>
