<template>
  <div>
    <h2>Dina uppgifter:</h2>
    <br />
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
      <BButton
        squared
        variant="success"
        style="min-width: 200px"
        @click="toggleContent"
        >Fortsätt</BButton
      >
    </div>
    <div v-if="showContent">
      <div class="deliveryyOptions-container">
        <p>Leveransalternativ:</p>
        <div>
          <BFormRadio
            v-for="option in deliveryOptions"
            :key="option.value"
            v-model="selectedOption"
            :name="option.name"
            :value="option.value"
            :disabled="option.disabled"
          >
            {{ option.text }}
            <br />
            {{ option.description }}
          </BFormRadio>
        </div>
      </div>
      <div class="line"></div>
      <div class="address-form">
        <p>Adressuppgifter:</p>
        <BFormInput v-model="email" placeholder="E-postadress" />
        <BFormInput v-model="zipcode" placeholder="Postnummer" />
        <BFormInput class="inline-input" placeholder="Förnamn" />
        <BFormInput class="inline-input" placeholder="Efternamn" />
        <BFormInput placeholder="Adress" />
        <BFormInput placeholder="Ort" />
        <BFormInput placeholder="Telefonnummer" />
      </div>
      <div class="line"></div>
      <div class="paymentOptions-container">
        <p>Betalningsalternativ:</p>
        <BFormRadio
          v-for="option in paymentOptions"
          :key="option.value"
          v-model="selectedOption"
          :name="option.name"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.text }}
        </BFormRadio>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const showContent = ref(false);

const email = ref("");
const zipcode = ref("");
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
  return (
    isFormValid.value &&
    firstName.value !== "" &&
    lastName.value !== "" &&
    address.value !== "" &&
    city.value !== "" &&
    phone.value !== "" &&
    selectedPaymentOption.value !== ""
  );
});

const onZipcodeInput = (event) => {
  // Gör att endast siffror är godkända för postnummer
  zipcode.value = event.target.value.replace(/\D/g, "");
};

const deliveryOptions = [
  {
    text: "Paketskåp",
    value: "A",
    name: "delivery-option",
    description: "Levereras till närmsta Instabox",
    disabled: false,
  },
  {
    text: "Postombud",
    value: "B",
    name: "delivery-option",
    description: "Levereras till närmsta postombud",
    disabled: false,
  },
  {
    text: "Hämta i butik",
    value: "C",
    name: "delivery-option",
    disabled: false,
  },
];

const paymentOptions = [
  {
    text: "Kortbetalning",
    value: "X",
    name: "payment-option",
    disabled: false,
  },
  { text: "Swish", value: "Y", name: "payment-option", disabled: false },
  { text: "Faktura", value: "Z", name: "payment-option", disabled: false },
];

const selectedOption = ref("");
const toggleContent = () => {
  showContent.value = !showContent.value;
};
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
  margin-top: 20px;
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
