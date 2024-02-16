<template>
  <div id="flex-container">
    <div id="img-block">
      <img src="../assets/eye-check.png" alt="">
    </div>
    <div id="text-block">
      <h1>Lorem, ipsum.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deleniti amet ullam repellendus placeat qui dignissimos, nisi dolores tenetur quidem ipsa numquam! Voluptates at doloremque molestias quibusdam aperiam tempore saepe!</p>
      <a href="">Read more</a>
    </div>
  </div>
</template>

<style>
#flex-container {
  display: flex;
}
#img-block img {
  width: 50vw;
}
#text-block {
 width: 50vw;
 padding-left: 80px;
 padding-right: 80px;
 padding-top: 150px;
}

</style>

<script>
  export default {

  }
</script>
