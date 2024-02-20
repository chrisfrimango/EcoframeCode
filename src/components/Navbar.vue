<template>
  <BContainer class="pb-2 pt-2">
    <nav class="navbar navbar-expand-lg navbar-light w-100">
      <div class="container-fluid">
        <!-- Mobilvy -->
        <div class="d-flex justify-content-between w-100 d-lg-none">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-flex">
            <router-link class="nav-link text-dark me-2" to="/"><i class="bi bi-search"></i></router-link>
            <router-link class="nav-link text-dark me-2" to="/"><i class="bi bi-heart"></i></router-link>
            <router-link class="nav-link text-dark" to="/cart"><i class="bi bi-cart"></i></router-link>
          </div>
        </div>
        <!-- Större skärmar -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li><router-link class="nav-item nav-link" to="/">Home</router-link></li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Glasses
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#" @click.prevent="navigate('/shop/sunwear')">Sunwear</a></li>
                <li><a class="dropdown-item" href="#" @click.prevent="navigate('/shop/popular')">Popular</a></li>
                <li><a class="dropdown-item" href="#" @click.prevent="navigate('/shop/new-arrivals')">New Arrivals</a></li>
                <li><a class="dropdown-item" href="#" @click.prevent="navigate('/shop/kids')">Kids</a></li>
              </ul>
            </li>
            <li><router-link class="nav-item nav-link" to="/">About Us</router-link></li>
            <li><router-link class="nav-item nav-link" to="/">Contact</router-link></li>
          </ul>
          <form class="d-none d-lg-flex flex-row align-items-center me-auto" @submit.prevent="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div class="d-none d-lg-flex align-items-center">
            <router-link class="nav-link text-dark me-2" to="/"><i class="bi bi-search"></i></router-link>
            <router-link class="nav-link text-dark me-2" to="/"><i class="bi bi-heart"></i></router-link>
            <router-link class="nav-link text-dark" to="/cart"><i class="bi bi-cart"></i></router-link>
          </div>
        </div>
      </div>
    </nav>
  </BContainer>
</template>

<script>
export default {
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
    search() {
      // sökfunktion här
      console.log("Search function");
    }
  }
}
</script>

<style scoped>
.container-fluid {
  padding-left: 5px;
  padding-right: 5px;
}
.navbar-toggler {
  border: none;
}
.nav-link{
  margin-right: 5px;
}
.dropdown-menu .dropdown-item {
  padding-left: 20px;
}
.dropdown-menu {
  border: none;
  box-shadow: 0 3px 5px rgba(0,0,0,.1);
}
.form-control {
  height: 30px;
  padding: 0 10px;
}
.btn-outline-success {
  height: 30px;
  padding: 0 12px;
  line-height: 30px;
}
@media (max-width: 991px) {
  .container-fluid {
    padding-left: 5px;
    padding-right: 5px;
  }
  .navbar-nav {
    position: static;
  }
  .navbar-collapse.collapsing,
  .navbar-collapse.show {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1000;
  }
  .d-flex,
  .navbar-toggler {
    position: relative;
    order: initial;
    padding-right:2px;
  }
}

</style>
