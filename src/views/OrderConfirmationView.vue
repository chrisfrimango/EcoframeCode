<script setup>
import { useProductStore } from "../stores/productStore";
import { useRouter } from "vue-router";
const router = useRouter();
const productStore = useProductStore();
const orderNumber = productStore.createOrderNumber();

const continueShopping = () => {
  router.push({ name: "home" });
};
</script>
<template>
  <BContainer fluid class="d-flex justify-content-center flex-column">
    <BRow class="mt-5 mb-5">
      <BCol
        class="d-flex justify-content-center align-items-center flex-column"
      >
        <h1 class="mt-3">Order Confirmation</h1>
        <p class="mt-3">
          Thank you for your order! Your order number is:
          <strong>{{ orderNumber }}</strong>
        </p>
        <p class="mt-3">
          You will receive an email with your order details shortly.
        </p>
        <BButton @click="continueShopping" variant="outline-dark" class="mt-3"
          >Continue Shopping</BButton
        >
      </BCol>
    </BRow>
  </BContainer>
</template>
