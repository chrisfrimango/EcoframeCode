<script setup></script>

<template>
  <BContainer fluid>
    <BRow>
      <BCol sm="12" lg="6" class="no-padding">
        <BCol class="text-wrapper">
          <h2>Lorem, ipsum.</h2>
          <p>
            {{ textContent }}
          </p>
          <a href="">Read more</a>
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
.text-wrapper a {
  color: #de3d4c;
}
</style>
