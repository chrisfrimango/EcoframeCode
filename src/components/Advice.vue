<template>
  <BContainer fluid>
    <BRow id="order-container">
      <BCol sm="12" lg="6" class="no-padding" v-if="imagePosition === 'left'">
        <img src="../assets/eye-check.png" alt="Image" />
      </BCol>
      <BCol sm="12" lg="6" class="no-padding" id="text-content">
        <div id="text-box">
          <h2>{{ heading }}</h2>
          <p>
            {{ textContent }}
          </p>
          <a href="">Read more</a>
        </div>
      </BCol>
      <BCol sm="12" lg="6" class="no-padding" v-if="imagePosition === 'right'">
        <img src="../assets/eye-close-up.png" alt="Image" />
      </BCol>
    </BRow>
  </BContainer>
</template>

<style scoped>
.no-padding {
  padding: 0;
}
img {
  width: 100%;
}
#text-box {
  padding: 5rem;
}
#text-box a {
  color: #de3d4c;
}
@media (max-width: 992px) {
  #text-content {
    order: 1;
  }
}
</style>

<script>
export default {
  props: {
    imagePosition: String,
    textContent: String,
    heading: String,
  },
};
</script>
