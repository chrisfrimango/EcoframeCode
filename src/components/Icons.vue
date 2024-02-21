<template>
  <div class="image-container">
    <div class="image-wrapper">
      <div class="image-circle">
        <img src="@/assets/outlined-glasses.png" alt="Black outlined glasses">
      </div>
      <p class="infoText">Original Products</p>
    </div>
    <div class="image-wrapper">
      <div class="image-circle">
        <img src="@/assets/outlined-award.png" alt="Black outlined award">
      </div>
      <p class="infoText">Lifetime Warranty</p>
    </div>
    <div class="image-wrapper">
      <div class="image-circle">
        <img src="@/assets/outlined-delivery-truck.png" alt="Black outlined deliverytruck">
      </div>
      <p class="infoText" >Fast delivery</p>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  display: flex;
  justify-content: space-between;
  gap:210px;
  padding-bottom: 30px;
  padding-top:30px;
}

.image-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.image-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%; 
  overflow: hidden;
  background-color: rgb(240, 237, 237);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.image-circle:hover{
transform: scale(1.1);
border: 1px solid rgb(3, 89, 163);
}


.image-circle img {
  max-width: 60%; 
  max-height: 70%; 
}

.infoText {
font-size: 20px;
}

@media screen and (max-width: 768px) {
.image-container {
display:flex;
flex-direction:row;
gap:20px;
}
.image-circle {
width:100px;
height: 100px;
}
.infoText {
font-size: 16px;
}
}
</style>