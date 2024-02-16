<template>
  <!-- <div id="flex-container">
    <div id="img-block">
      <img src="../assets/eye-check.png" alt="">
    </div>
    <div id="text-block">
      <h1>Lorem, ipsum.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deleniti amet ullam repellendus placeat qui dignissimos, nisi dolores tenetur quidem ipsa numquam! Voluptates at doloremque molestias quibusdam aperiam tempore saepe!</p>
      <a href="">Read more</a>
    </div>
  </div> -->

  <div id="flex-container">
    <div v-if="imagePosition === 'left'" class="left-column">
      <img src="../assets/eye-check.png" alt="Image">
    </div>
    <div class="content">
      <h2>Lorem, ipsum.</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, quos quod. Unde, excepturi aliquam numquam aliquid cupiditate saepe, vel in asperiores ducimus voluptate rem provident. Quidem sed cum commodi tenetur.</p>
      <a href="">Read more</a>
    </div>
    <div class="right-column">
      <img id="raba" v-if="imagePosition === 'right'" src="../assets/eye-close-up.png" alt="Image">
    </div>
  </div>

</template>

<style>
#flex-container {
  display: flex;
}
#img-block img, .left-column img, .right-column img {
  width: 50vw;
}
#text-block, .content {
 width: 50vw;
 padding-left: 80px;
 padding-right: 80px;
 padding-top: 150px;
}
</style>

<script>
  export default {
    props: {
      imagePosition: String
    }
  }
</script>
