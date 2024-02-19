<template>
  <BContainer fluid>
    <BRow>
      <BCol  class="no-padding" v-if="imagePosition === 'left'" >
        <img src="../assets/eye-check.png" alt="Image" />
      </BCol>
      <BCol  class="no-padding" >
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
      <BCol class="no-padding" v-if="imagePosition === 'right'" >
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
padding-left: 5rem;
padding-right: 5rem;
padding-top: 5rem;
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
