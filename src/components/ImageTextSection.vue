<template>
  <BContainer fluid>
    <BRow>
      <BCol class="no-padding" v-if="imagePosition === 'left'" col="6">
        <img src="../assets/eye-check.png" alt="Image" />
      </BCol>
      <BCol class="no-padding" col="6">
        <div id="text-box">
          <h2>Lorem, ipsum.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, quos
            quod. Unde, excepturi aliquam numquam aliquid cupiditate saepe, vel
            in asperiores ducimus voluptate rem provident. Quidem sed cum
            commodi tenetur.
          </p>
          <a href="">Read more</a>
        </div>
      </BCol>
      <BCol class="no-padding" v-if="imagePosition === 'right'" col="6">
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
  padding: 150px 80px 0 80px;
}
a {
  color: #de3d4c;
}
</style>

<script>
export default {
  props: {
    imagePosition: String,
  },
};
</script>
