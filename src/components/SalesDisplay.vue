<script setup>
const props = defineProps({
  discountToDisplay: Number,
});
</script>

<template>
  <BContainer fluid>
    <BRow>
      <BCol sm="12" lg="6" class="no-padding bg-danger">
        <BCol class="text-light text-wrapper">
          <h1 class="display-5 text-light">SPRING SALES</h1>
          <h4>{{ props.discountToDisplay }}% off on slected frames</h4>
          <p>To the end of April, only for members</p>
        </BCol>
      </BCol>
      <BCol sm="12" lg="6" class="no-padding">
        <img src="../assets/eye-close-up.png" alt="Image" />
      </BCol>
    </BRow>
  </BContainer>
</template>

<style>
.no-padding {
  padding: 0;
}

img {
  width: 100%;
}
.text-wrapper {
  padding: 5rem;
}
</style>
