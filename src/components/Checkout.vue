<template>
  <div>
    <p>Dina uppgifter:</p>

    <div class="input-container">
      <div role="group">
        <BFormInput
          id="input-email"
          v-model="email"
          :state="emailIsValid ? true : false"
          aria-describedby="input-email-help"
          placeholder="E-postadress"
          trim
        />
      </div>

      <div role="group">
        <BFormInput
          id="input-zipcode"
          v-model="zipcode"
          :state="zipcodeIsValid ? true : false"
          aria-describedby="input-zipcode-help"
          placeholder="Postnummer"
          trim
          @input="onZipcodeInput"
        />
      </div>
    </div>
    <div class="button">
      <BButton squared variant="success">Fortsätt</BButton>
    </div>
    <div class="options-container">
      <p>Välj en leveransmetod:</p>
      <div>
        <BFormRadio
          v-for="option in options"
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const email = ref('');
const zipcode = ref('');

const emailIsValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.value);
});

const zipcodeIsValid = computed(() => {
  const zipcodeRegex = /^\d{5}$/;
  return zipcodeRegex.test(zipcode.value);
});

const onZipcodeInput = (event) => {
  // Gör att endast siffror är godkända för postnummer 
  zipcode.value = event.target.value.replace(/\D/g, '');
};

const options = [
  { text: 'Postnord', value: 'A', name: 'delivery-option', disabled: false },
  { text: 'Instabox', value: 'B', name: 'delivery-option', disabled: false },
  { text: 'Hämta i butik', value: 'C', name: 'delivery-option', disabled: false }
];

const selectedOption = ref('');
</script>

<style scoped>
.input-container {
  display: flex;
  justify-content: space-between;
}
.input-container > div {
  flex: 1;
  padding-right: 50px;
  padding-bottom: 30px;
}
.options-container {
  padding-top: 20px;
}
.button {
  margin-top: 20px;
  margin-left: auto;
  margin-right: 200px;
}
</style>
