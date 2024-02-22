<script setup></script>
<template>
  <BContainer fluid>
    <BRow class="g-0 custom-card">
      <BCol md="6" class="bg-color d-flex align-items-center">
        <BContainer class="p-5">
          <h2 class="display-5 text-danger">Spring Sale</h2>
          <p class="lead text-danger">20% off selected frames</p>
          <BButton to="/sales" variant="primary">Shop Now</BButton>
        </BContainer>
      </BCol>
      <BCol md="6" class="image-col d-none d-md-flex">
        <img
          src="/src/assets/cta-image.jpg"
          class="img-fluid full-height-width"
          alt="Spring Sale"
        />
      </BCol>
    </BRow>
  </BContainer>
</template>

<style scoped>
.bg-color {
  background-color: #cbbeae;
}
.custom-card {
  min-height: 50vh;
}

.image-col {
  position: relative;
}

.full-height-width {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

h2 {
  font-weight: 400;
}
</style>
