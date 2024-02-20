<script setup>
import FAQ from "@/components/FAQ.vue";
import { BCol } from "bootstrap-vue-next";
</script>

<template>
  <BContainer fluid>
    <BRow
      class="position-relative d-flex align-items-center justify-content-center"
    >
      <BImg
        src="/src/assets/Image/customer support image.jpg"
        fluid
        alt="Responsive image"
        style="
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          filter: brightness(50%);
        "
      />
      <h1 class="position-absolute text-center text-light">Customer support</h1>
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
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
            />
          </svg>
        </BRow>
      </BCol>
    </BRow>
  </BContainer>
</template>

<style scoped></style>
