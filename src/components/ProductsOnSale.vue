<script setup>
import { ref } from "vue";
import { useProductStore } from "../stores/productStore";
const productStore = useProductStore();

const productOnSale = ref(productStore.getProductsOnSale());
console.log(productOnSale.value);
</script>

<template>
  <BContainer fluid>
    <BRow>
      <BCol col="12" md="12" v-for="product in productOnSale" :key="product.id">
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
          <BCardText> {{ product.brand }}</BCardText>
          <BCardText> {{ product.sale }} SEK </BCardText>
          <a
            to="/product"
            class="text-danger"
            style="text-decoration: underline"
            >See Details</a
          >
        </BCard>
      </BCol>
    </BRow>
    <!-- <BCol class="d-flex justify-content-center m-4">
      <BButton variant="primary">See all</BButton>
    </BCol> -->
  </BContainer>
</template>

<style scoped></style>
