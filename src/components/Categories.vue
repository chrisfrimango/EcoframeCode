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

const goToAllProductPage = (category) => {
  router.push({ name: "Shop", params: { category } });
};

const toggleFavorite = (productId) => {
  productStore.toggleFavorite(productId);
};

const isFavorite = (productId) => {
  return productStore.isFavorite(productId);
};

const productPrice = (product) => {
  if (product.value && product.onSale) {
    return productStore.updateProductSalesPrice(product.id);
  }
  return product.price;
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
          class="rounded-0 position-relative"
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
          <BCardText
            v-if="categoryToDisplay"
            :class="{ 'sales-color': category.onSale }"
          >
            {{ productPrice(category) }} SEK
          </BCardText>
          <BCardText
            v-if="category.onSale"
            :class="{ 'old-price': category.onSale }"
          >
            {{ category.price }} SEK
          </BCardText>
          <BCol class="d-flex justify-content-between">
            <router-link
              @click.prevent="goToProductPage(category.id)"
              to="/product/:id"
              class="text-primary"
              style="text-decoration: underline"
              >See Details</router-link
            >

            <i
              @click.prevent="toggleFavorite(category.id)"
              class="bi bi-heart icon-large custom"
              :class="
                isFavorite(category.id) ? 'text-danger' : 'text-secondary'
              "
            ></i>
          </BCol>
        </BCard>
      </BCol>
    </BRow>
    <BCol class="d-flex justify-content-center m-4">
      <BButton
        @click.prevent="goToAllProductPage(props.categoryToDisplay)"
        to="/shop"
        variant="primary"
        >See all</BButton
      >
    </BCol>
  </BContainer>
</template>

<style scoped>
.custom-font-style {
  font-weight: 200;
}

.custom {
  font-size: 1.3rem;
}

.sales-color {
  color: red;
}

.old-price {
  text-decoration: line-through;
  font-weight: 300;
}
</style>
