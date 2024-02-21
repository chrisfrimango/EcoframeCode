<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useProductStore } from "../stores/productStore";
const router = useRouter();
const productStore = useProductStore();

const props = defineProps({
  categoryToDisplay: String,
});

const categoryToDisplay = ref(
  productStore.getCategory(props.categoryToDisplay)
);

const goToProductPage = (productId) => {
  console.log(productId);
  router.push({ name: "ProductPage", params: { productId } });
};

console.log(categoryToDisplay.value);
</script>

<template>
  <BContainer fluid>
    <h2 class="text-center my-4 text-primary">{{ props.categoryToDisplay }}</h2>
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
          <BCardText class="mb-1 custom-font-style">
            {{ category.brand }}</BCardText
          >
          <BCardText> {{ category.price }} SEK </BCardText>
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
    <BCol class="d-flex justify-content-center m-4">
      <BButton to="/shop" variant="primary">See all</BButton>
    </BCol>
  </BContainer>
</template>

<style scoped>
.custom-font-style {
  font-weight: 200;
}
</style>
