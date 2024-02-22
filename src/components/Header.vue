<script setup>
import { ref } from "vue";
const showHelpModal = ref(false);
const showAccountModal = ref(false);
</script>

<template>
  <BContainer>
    <BRow class="d-flex align-items-center justify-between">
      <BCol col="12" class="d-flex pt-2">
        <router-link to="/" class="router-link-custom"
          ><h2 to="home" class="display-5">
            <span>eco</span>frame
          </h2></router-link
        >
      </BCol>
      <BCol
        col="12"
        class="d-flex p-4 align-items-center justify-content-end gap-4 d-none d-md-flex"
      >
        <BDropdown
          end
          variant="link"
          @click="showHelpModal = !showHelpModal"
          v-model="showHelpModal"
          offset="10"
          text="Customer support"
        >
          <BDropdownItem to="/CustomerSupport">FAQs</BDropdownItem>
          <BDropdownItem to="/CustomerSupport">Contact</BDropdownItem>
          <BDropdownItem to="/CustomerSupport"
            >Terms of Purchase and devlivery</BDropdownItem
          >
        </BDropdown>

        <BDropdown
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

<style lang="scss" scoped>
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

/* Stil för din router-link */
.router-link-custom {
  text-decoration: none; /* Tar bort understrykningen */
}

.router-link-custom h2,
.router-link-custom span {
  /* Dina stilar för att behålla utseendet på din h2 och span inuti router-link */
  color: #000; /* Exempel på textfärg */
}
</style>
