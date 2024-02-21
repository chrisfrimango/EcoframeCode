<template>
  <BContainer fluid>
    <BRow>
      <BCol sm="12" lg="6" class="no-padding" v-if="imagePosition === 'left'" >
        <img src="../assets/eye-check.png" alt="Image" />
      </BCol>
      <BCol sm="12" lg="6" class="no-padding" >
        <div id="text-box">
          <h2>Lorem, ipsum.</h2>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, quos
          quod. Unde, excepturi aliquam numquam aliquid cupiditate saepe, vel in
          asperiores ducimus voluptate rem provident. Quidem sed cum commodi
          tenetur.
          </p>
          <a href="">Read more</a>
        </div>
      </BCol>
      <BCol sm="12" lg="6" class="no-padding" v-if="imagePosition === 'right'" >
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
  color: #DE3D4C;
}
</style>

<script>
export default {
  props: {
    imagePosition: String
  }
};
</script>
