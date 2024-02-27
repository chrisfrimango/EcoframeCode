<template>
  <div>
    <h2>Checkout</h2>
    <br>
    <div class="input-container">
      <!-- Email input -->
      <div role="group">
        <BFormInput
          id="input-email"
          v-model="email"
          :state="emailIsValid ? true : false"
          aria-describedby="input-email-help"
          placeholder="Email address"
          trim
        />
      </div>

      <div role="group">
        <!-- Zipcode input -->
        <BFormInput
          id="input-zipcode"
          v-model="zipcode"
          :state="zipcodeIsValid ? true : false"
          aria-describedby="input-zipcode-help"
          placeholder="Zipcode"
          trim
          @input="onZipcodeInput"
        />
      </div>
    </div>
    <div class="button">
      <!-- Continue button with disabled attribute -->
      <BButton variant="success" style="min-width: 200px;" @click="toggleContent" :disabled="!isFormValid">Continue</BButton>
    </div>
    <div v-if="showContent">
      <!-- Delivery options -->
      <div class="deliveryOptions-container">
        <p>Delivery options:</p>
        <div>
          <BFormRadio
            v-for="option in deliveryOptions"
            :key="option.value"
            v-model="selectedDeliveryOption"
            :name="'delivery-option'"
            :value="option.value"
            :disabled="option.disabled"
          >
            {{ option.text }} 
            <br>
            {{ option.description }}
          </BFormRadio>
        </div>
      </div>
      <div class="line"></div>
      <!-- Shipping address -->
      <div class="address-form">
        <p>Shipping address:</p>
        <BFormInput v-model="firstName" placeholder="First name" />
        <BFormInput v-model="lastName" placeholder="Last name" />
        <BFormInput v-model="address" placeholder="Address" />
        <BFormInput v-model="city" placeholder="City" />
        <BFormInput v-model="phone" placeholder="Phone" />
      </div>
      <div class="line"></div>
      <!-- Payment options -->
      <div class="paymentOptions-container">
        <p>Payment options:</p>
        <div v-for="option in paymentOptions" :key="option.value">
          <BFormRadio
            v-model="selectedPaymentOption"
            :name="'payment-option'"
            :value="option.value"
            :disabled="option.disabled"
          >
            {{ option.text }} 
          </BFormRadio>
        </div>
      </div>
      <!-- Card payment input -->
      <div v-if="showCardPaymentInput && selectedPaymentOption === 'X'" class="card-payment-input">
        <p>Card Information:</p>
        <BFormInput placeholder="Card Number" />
      </div>
      <!-- Pay button -->
      <div class="line"></div>
      <div class="button">
        <BButton variant="primary" style="min-width: 200px;" @click="pay" :disabled="!isPaymentValid">Pay</BButton>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const showContent = ref(false);

const email = ref('');
const zipcode = ref('');
const firstName = ref('');
const lastName = ref('');
const address = ref('');
const city = ref('');
const phone = ref('');

const emailIsValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.value);
});

const zipcodeIsValid = computed(() => {
  const zipcodeRegex = /^\d{5}$/;
  return zipcodeRegex.test(zipcode.value);
});

// Computed property to check if email and zipcode are valid
const isFormValid = computed(() => {
  return emailIsValid.value && zipcodeIsValid.value;
});

const isPaymentValid = computed(() => {
  return isFormValid.value && firstName.value !== '' && lastName.value !== '' && address.value !== '' && city.value !== '' && phone.value !== '' && selectedPaymentOption.value !== '';
});

const onZipcodeInput = (event) => {
  zipcode.value = event.target.value.replace(/\D/g, '');
};

const deliveryOptions = [
  { text: 'Box shipping', value: 'A', name: 'delivery-option', description: 'Delivers to closest Instabox', disabled: false },
  { text: 'Post office', value: 'B', name: 'delivery-option', description:'Delivers to closest post office', disabled: false },
  { text: 'Collect at store', value: 'C', name: 'delivery-option', disabled: false }
];

const paymentOptions = [
  { text: 'Cardpayment', value: 'X', name: 'payment-option', disabled: false },
  { text: 'Swish', value: 'Y', name: 'payment-option', disabled: false },
  { text: 'Invoice', value: 'Z', name: 'payment-option', disabled: false } 
];

// Selected delivery and payment options
const selectedDeliveryOption = ref('');
const selectedPaymentOption = ref('');

const toggleContent = () => {
  showContent.value = !showContent.value;
};

// Watch for changes in selected payment option to show/hide card payment input
const showCardPaymentInput = ref(false);

watch(selectedPaymentOption, (newValue) => {
  showCardPaymentInput.value = newValue === 'X';
});

const pay = () => {
console.log('Payment initiated');
}
</script>

<style scoped>
.input-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.input-container > div {
  flex: 1;
  padding-right: 20px;
}

.button {
  margin-bottom: 20px;
}

.address-form {
  margin-bottom: 20px;
}

.inline-input {
  display: inline-block;
  width: calc(50%);
}

.button {
  margin-top:20px;
  text-align: right;
}

.line {
  border-top: 1px solid #8a8787;
  margin-top: 20px; 
  margin-bottom: 20px; 
}

p {
  text-align: center; 
}
</style>
