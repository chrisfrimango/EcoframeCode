<template>
  <div class="container mt-5 varukorg-container">
    <h2 class="mb-4 text-center">Varukorg</h2>
    <div v-if="cartItems.length > 0">
      <div class="row text-center mb-3 header-row">
        <div class="col-2">Produkt</div>
        <div class="col-3">Pris</div>
        <div class="col-3">Antal</div>
        <div class="col-4">Totalt</div>
      </div>
      <div class="cart-item mb-3" v-for="item in cartItems" :key="item.id">
        <div class="row align-items-center text-center item-row">
          <div class="col-2">
            <img src="../assets/sunwear.png" alt="Produktbild" class="img-fluid">
          </div>
          <div class="col-3">{{ item.modelName }}</div>
          <div class="col-3">{{ item.price }} SEK</div>
         <div class="col-2 ">
          <button class="btn btn-secondary btn-sm" style="background-color: white; color: black;" @click="updateQuantity(item, -1)">-</button>
          {{ item.quantity }}
          <button class="btn btn-secondary btn-sm" style="background-color: white; color: black;" @click="updateQuantity(item, 1)">+</button>
        </div>
          <div class="col-2">{{ item.quantity * item.price }} SEK</div>
          <div class="col-2">
            <a href="#" class="text-danger" @click.prevent="removeFromCart(item.id)">Ta bort</a>
          </div>
        </div>
      </div>
      <div class="total-price row justify-content-end mt-4">
        <div class="col-6 col-md-4">
          <strong>Totalt: {{ cartTotal }} SEK</strong>
        </div>
      </div>
    </div>
    <div v-else class="empty-cart-container">
      <p>Din varukorg är tom.</p>
    </div>
    <div class="buttons mt-4 d-flex flex-column align-items-center">
      <button class="btn btn-outline-dark mb-2" style="min-width: 200px;" @click="continueShopping">Fortsätt handla</button>
      <button class="btn btn-success" style="min-width: 200px;" @click="checkout">Till kassan</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProductStore } from '../stores/productStore';

const productStore = useProductStore();
const cartItems = computed(() => productStore.getCartItems);
const cartTotal = computed(() => productStore.cartTotal);

function updateQuantity(item, amount) {
  productStore.updateItemQuantity(item.id, amount);
}

function removeFromCart(itemId) {
  productStore.removeItemFromCart(itemId);
}

function continueShopping() {
  // Implementera logiken för att fortsätta handla
}

function checkout() {
  // Implementera logiken för att gå till kassan
}
</script>

<style scoped>
.varukorg-container {
  width: 90%;
  margin: auto;
  margin-bottom: 50px;
  text-align: center;
}

.header-row, .item-row, .total-price {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.buttons .btn {
  padding: 10px 0;
  width: 75%;
  min-width: 200px;
}

.empty-cart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.item-row .col-3 {
  margin-top: -10px;
}

@media (max-width: 768px) {
  .varukorg-container {
    width: 95%;
    margin: auto;
  }
  .buttons .btn {
    width: 90%;
    margin-bottom: 10px;
  }
  .cart-item, .total-price {
    margin: 10px;
  }
  .img-fluid {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
  .item-row .col-3 {
    margin-top: 0;
  }
}

</style>
