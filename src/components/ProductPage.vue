<template>
  <BContainer fluid>
    <BRow>
      <BCol sm="12" md="6" class="columns">
        <img src="../assets/sunwear.png" alt="">
      </BCol>
      <BCol sm="12" md="6" class="columns">
        <BRow class="product-info breadcrumb">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb no-padding">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Library</a></li>
              <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
          </nav>
        </BRow>
        <BRow class="product-info">
          <h2 class="no-padding">Modelname</h2>
          <h2 class="no-padding">Price</h2>

          <p class="no-padding">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quas deleniti quod vel magnam nostrum. Id commodi blanditiis porro fugit, ab, fugiat necessitatibus similique, culpa asperiores veniam excepturi unde! Optio.</p>

          <h4 class="no-padding">Color: Black</h4>

          <button type="button" class="btn btn-primary">Add To Cart</button>

          <ul style="padding-top: 1rem;">
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </BRow>

      </BCol>
    </BRow>
    <BRow>
      <BCol>

      </BCol>
    </BRow>
  </BContainer>
</template>

<style>


.columns {
  height: 600px;
  padding: 0;

}
.product-info {
  margin: 0 5rem 0 5rem;

}
.breadcrumb {
  padding-top: 2rem;
}

.no-padding {
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;
}

.btn {
  width: 150px;
}

@media (max-width: 520px) {
  .product-info {
    margin: 0 2rem 0 2rem;
  }
}
</style>

<script>





</script>
