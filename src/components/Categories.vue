<script setup>
// import { ref } from "vue";
import { useProductStore } from "../stores/productStore";

const productStore = useProductStore();
console.log(productStore.products);

const uniqueCategories = productStore.getUniqueCategories();
console.log(uniqueCategories);
</script>

<template>
  <BContainer fluid>
    <h2 class="display-5 text-center">{{ uniqueCategories[0] }}</h2>
    <BRow class="g-0 custom-height">
      <BCol
        col="12"
        class="bg-color"
        v-for="categories in uniqueCategories"
        :key="categories"
      >
        {{ categories }}
      </BCol>
    </BRow>
  </BContainer>
</template>

<style scoped>
.custom-height {
  min-height: 30vh;
}
.bg-color {
  background-color: #ebebeb;
}
</style>
