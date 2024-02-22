<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../stores/productStore";
import sunwearImage from '@/assets/sunwear.png';


const productStore = useProductStore();
const route = useRoute();
const category = computed(() => route.params.category);
const products = computed(() => productStore.getCategory(category.value));
</script>

<template>
  <BContainer fluid>
    <h2 class="text-center my-4 text-primary">{{ category }}</h2>
    <BRow>
      <BCol
        col="12"
        md="4"
        v-for="product in products"
        :key="product.id"
      >
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
            @click.prevent="goToProductPage(product.id)"
            :to="`/product/${product.id}`"
            class="text-primary"
            style="text-decoration: underline"
            >See Details</router-link
          >
        </BCard>
      </BCol>
    </BRow>
    <!-- <BCol class="d-flex justify-content-center m-4">
      <BButton to="/shop" variant="primary">See all</BButton>
    </BCol> -->
  </BContainer>
</template>

<style scoped>
.custom-font-style {
  font-weight: 200;
}
</style>
