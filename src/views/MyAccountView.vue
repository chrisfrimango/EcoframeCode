<script setup>
import { useProductStore } from "../stores/productStore";
const productStore = useProductStore();

const currentAccount = productStore.getCurrentAccountFromSession();
// const checkLoggedIn = productStore.getLoggedInFromSession();
</script>

<template>
  <BContainer fluid class="custom-height">
    <h1 class="text-secondary">Hi, {{ currentAccount.fullName }}</h1>
    <h5>Welcome to my account</h5>
    <BRow class="mt-5">
      <BCol md="6" class="border">
        <BCol>
          <h4>Credentials</h4>
          <p>Email: {{ currentAccount.email }}</p>
          <p>Password: {{ currentAccount.password }}</p>
        </BCol>
      </BCol>
      <BCol md="6" class="border">
        <BCol>
          <h4>Orders</h4>
          <p>Order 1</p>
          <p>Order 2</p>
        </BCol>
      </BCol>
    </BRow>
    <BButton
      @click="productStore.logout()"
      to="/"
      class="mt-4"
      variant="primary"
    >
      Logout
    </BButton>
  </BContainer>
</template>

<style scoped>
.custom-height {
  min-height: 60vh;
}
</style>
