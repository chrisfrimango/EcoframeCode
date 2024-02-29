<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { ref } from "vue";
import { useProductStore } from "../stores/productStore";
const productStore = useProductStore();

const productOnSale = ref(productStore.getProductsOnSale());
console.log(productOnSale.value);

const goToProductPage = (productId) => {
  console.log(productId);
  router.push({ name: "ProductPage", params: { productId } });
};

const toggleFavorite = (productId) => {
  productStore.toggleFavorite(productId);
};

const isFavorite = (productId) => {
  return productStore.isFavorite(productId);
};
</script>

<template>
  <BContainer fluid>
    <BRow>
      <BCol
        md="4"
        v-for="product in productOnSale"
        :key="product.id"
        class="mt-5 d-flex justify-content-center"
      >
        <BCard
          class="rounded-0 mb-5"
          border-variant="light"
          :title="product.modelName"
          img-src="/src/assets/sunwear.png"
          img-alt="Image"
          tag="products"
          style="max-width: 20rem"
        >
          <BCardText> {{ product.brand }}</BCardText>
          <BCardText class="onsale-color mb-1">
            {{ productStore.updateProductSalesPrice(product.id) }} SEK
          </BCardText>
          <BCardText class="custom-font-style">
            {{ product.price }} SEK
          </BCardText>
          <BCardText>Color: {{ product.color }}</BCardText>
          <BCol class="d-flex justify-content-between">
            <router-link
              @click.prevent="goToProductPage(product.id)"
              to="/product/:id"
              class="text-primary"
              style="text-decoration: underline"
              >See Details</router-link
            >
            <i
              @click.prevent="toggleFavorite(product.id)"
              class="bi bi-heart icon-large custom"
              :class="isFavorite(product.id) ? 'text-danger' : 'text-secondary'"
            ></i>
          </BCol>
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
</template>

<style lang="scss" scoped>
.custom-font-style {
  text-decoration: line-through;
  font-weight: 200;
  color: #6c757d;
}

.onsale-color {
  color: #de3d4c;
  font-weight: 600;
}

.custom {
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
}
</style>
