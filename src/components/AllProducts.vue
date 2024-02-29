<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "../stores/productStore";
import sunwearImage from "@/assets/sunwear.png";

const productStore = useProductStore();
const route = useRoute();
const router = useRouter();
const category = computed(() => route.params.category);
const filteredProducts = computed(() => productStore.filteredProducts);

const products = computed(() => {
  return filteredProducts.value.length > 0
    ? filteredProducts.value
    : productStore.getCategory(category.value);
});

const goToProductPage = (productId) => {
  router.push({ name: "ProductPage", params: { productId } });
};
</script>

<template>
  <BContainer fluid>
    <h2 class="text-center my-4 text-primary">{{ category }}</h2>
    <BRow>
      <BCol cols="6" md="4" v-for="product in products" :key="product.id">
        <BCard
          class="rounded-0"
          border-variant="light"
          :title="product.modelName"
          :img-src="sunwearImage"
          img-alt="Image"
          img-top
          tag="product"
          style="max-width: 20rem"
        >
          <BCardText class="mb-1 custom-font-style">
            {{ product.brand }}</BCardText
          >
          <BCardText> {{ product.price }} SEK </BCardText>
          <router-link
            :to="{ name: 'ProductPage', params: { productId: product.id } }"
            class="text-primary"
            style="text-decoration: underline"
          >See Details</router-link>
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
</template>

<style scoped>
.custom-font-style {
  font-weight: 200;
}
</style>
