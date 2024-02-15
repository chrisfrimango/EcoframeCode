<script setup></script>

<template>
  <BContainer>
    <BRow>
      <BCol col="12" md="6" class="bg-color d-flex p-5 align-items-center">
        <h2 class="display-5"><span>eco</span>frame</h2>
      </BCol>
      <BCol
        col="12"
        md="6"
        class="bg-color d-flex p-5 align-items-center justify-content-end gap-5"
      >
        <a class="link" to="/">Help</a>
        <a class="link" to="/">Account</a>
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
