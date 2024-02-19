<script setup>
import { ref } from "vue";
const showHelpModal = ref(false);
const showAccountModal = ref(false);
</script>

<template>
  <BContainer>
    <BRow>
      <BCol col="12" class="d-flex p-4">
        <h2 class="display-5"><span>eco</span>frame</h2>
      </BCol>
      <BCol
        col="12"
        class="d-flex p-4 align-items-center justify-content-end gap-4"
      >
        <BDropdown
          end
          class="custom-link"
          variant="link"
          @click="showHelpModal = !showHelpModal"
          v-model="showHelpModal"
          offset="10"
          text="Customer support"
        >
          <BDropdownItem>FAQs</BDropdownItem>
          <BDropdownItem>Contact</BDropdownItem>
          <BDropdownItem>Terms of Purchase and devlivery</BDropdownItem>
        </BDropdown>

        <BDropdown
          class="custom-link"
          variant="link"
          @click="showAccountModal = !showAccountModal"
          v-model="showAccountModal"
          offset="10"
          text="Account"
        >
          <BDropdownItem>Login</BDropdownItem>
          <BDropdownItem>Create account</BDropdownItem>
        </BDropdown>
      </BCol>
    </BRow>
  </BContainer>
</template>

<style scoped>
h2 {
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 0;
}

span {
  font-weight: 200;
}

/* Skapa en scss för att ändra färg på link  */

a {
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.link:hover {
  text-decoration: underline;
}
</style>
