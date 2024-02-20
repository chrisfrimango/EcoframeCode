<template>
  <BContainer fluid>
    <BRow>
      <BCol sm="12" lg="6" class="no-padding" v-if="imagePosition === 'left'">
        <img src="../assets/eye-check.png" alt="Image" />
      </BCol>
      <BCol sm="12" lg="6" class="no-padding">
        <div id="text-box">
          <h2>Lorem, ipsum.</h2>
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

<style>
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
</style>

<script>
export default {
  props: {
    imagePosition: String,
    textContent: String,
  },
};
</script>
