<script setup>
import { ref } from "vue";
import { useProductStore } from "../stores/productStore";
const productStore = useProductStore();

const props = defineProps({
  categoryToDisplay: String,
});
const categoryToDisplay = ref(
  productStore.getCategory(props.categoryToDisplay)
);

console.log(categoryToDisplay.value);
</script>

<template>
  <BContainer fluid>
    <h2 class="text-center my-4">{{ props.categoryToDisplay }}</h2>
    <BRow>
      <BCol
        col="6"
        md="3"
        v-for="category in categoryToDisplay"
        :key="category.id"
      >
        <BCard
          class="rounded-0"
          border-variant="light"
          :title="category.modelName"
          img-src="/src/assets/sunwear.png"
          img-alt="Image"
          img-top
          tag="products"
          style="max-width: 20rem"
        >
          <BCardText> {{ category.brand }}</BCardText>
          <BCardText> {{ category.price }} SEK </BCardText>
          <a
            to="/product"
            class="text-danger"
            style="text-decoration: underline"
            >See Details</a
          >
        </BCard>
      </BCol>
    </BRow>
    <BCol class="d-flex justify-content-center m-4">
      <BButton variant="primary">See all</BButton>
    </BCol>
  </BContainer>
</template>

<style scoped></style>
