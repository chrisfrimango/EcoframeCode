<script setup>
import FAQ from "@/components/FAQ.vue";
import { BCol } from "bootstrap-vue-next";
</script>

<template>
  <BContainer fluid>
    <BRow
      class="position-relative d-flex align-items-center justify-content-center"
    >
      <h1 class="position-absolute text-center">Customer support</h1>
      <BImg
        src="/src/assets/Image/customer support image.jpg"
        fluid
        alt="Responsive image"
        style="width: 100%; max-height: 300px; object-fit: cover"
      />
    </BRow>
    <BRow class="m-4">
      <BCol col="6" class="m-0 p-0">
        <h3 class="text-center p-2">Freuqently asked questions</h3>
        <FAQ />
      </BCol>
      <BCol col="6" class="m-0 p-0">
        <h3 class="text-center p-2">Contact us</h3>
        <BRow>
          <!-- icon -->
          <p class="text-center">
            If you have any questions or need help, please contact us at
            <!-- <a href="mailto: -->
          </p>
        </BRow>
      </BCol>
    </BRow>
    <!-- bild search -->
    <!-- vanliga frågor med svar och rubrik samt icon  -->
    <!-- kontaktformulär -->
  </BContainer>
</template>

<style scoped></style>
