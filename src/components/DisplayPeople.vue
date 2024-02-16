<template>
  <div class="image-container">
    <div class="image-with-overlay">
      <img src="@/assets/man-sunglasses.jpg" alt="Man with sunglasses">
      <div class="overlay">
        <div class="text">Sunwear</div>
        <input @click="onClick" type="button" class="button" value="Buy">
      </div>
    </div>
    <div class="image-with-overlay">
      <img src="@/assets/woman-glasses.jpg" alt="Woman with glasses">
      <div class="overlay">
        <div class="text">Optical </div>
        <input @click="onClick" type="button" class="button" value="Buy">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      // Handle button click event
    }
  }
}
</script>

<style scoped>
.image-container {
  display: flex;
  padding: 10px;
}

.image-with-overlay {
  position: relative;
  flex: 1;
  overflow: hidden;
}

.img{
margin: 0;
padding: 0;
border: none;
}

.image-with-overlay img {
  width: 100%;
  height: auto;
  display: block;
  padding-left: 10px;
}

.overlay {
  position: absolute;
  bottom: 20px;
  left: 30px;
  padding: 10px;
}

.text {
  color: white;
  font-size: 35px;
  margin-bottom: 15px;
  font-weight: bold;
}

.button {
  padding: 10px 30px;
  background-color: white;
  color: rgb(3, 89, 163);
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
}
</style>