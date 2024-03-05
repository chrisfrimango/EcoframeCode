<script setup>
import { useProductStore } from "../stores/productStore";
const productStore = useProductStore();

const currentAccount = productStore.getCurrentAccountFromSession();
// const checkLoggedIn = productStore.getLoggedInFromSession();
productStore.getSavedCartItemsFromSession();

const savedCartItems = productStore.savedCartItems;

// rendera orders från getCurrentAccountFromSession
</script>

<template>
  <BContainer fluid class="custom-height">
    <h2 class="text-secondary">Hi, {{ currentAccount.fullName }}</h2>
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
          <div v-if="savedCartItems.length > 0">
            <div class="row text-center mb-3 header-row">
              <div class="col-4">Product</div>
              <div class="col-2">Price</div>
              <div class="col-2">Quantity</div>
              <div class="col-3">Total amount</div>
            </div>
            <div
              class="cart-item mb-3"
              v-for="item in savedCartItems"
              :key="item.id"
            >
              <div class="row align-items-center text-center item-row">
                <div class="col-2">
                  <img
                    src="../assets/sunwear.png"
                    alt="Product Image"
                    class="img-fluid"
                    style="max-height: 100px"
                  />
                </div>
                <div class="col-2">{{ item.modelName }}</div>
                <div v-if="item.onSale" class="col-2 text-danger">
                  {{ productStore.updateProductSalesPrice(item.id) }} SEK
                </div>
                <div v-else class="col-2">{{ item.price }} SEK</div>
                <div class="col-2">{{ item.quantity }}</div>
                <div v-if="item.onSale" class="col-3">
                  {{
                    item.quantity *
                    productStore.updateProductSalesPrice(item.id)
                  }}
                  SEK
                </div>
                <div v-else class="col-3">
                  {{ item.quantity * item.price }} SEK
                </div>
                <div v-else class="col-3">
                  {{ item.quantity * item.price }} SEK
                </div>
              </div>
            </div>
          </div>
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
