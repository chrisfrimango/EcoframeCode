<template>
  <BContainer class="pb-2 pt-2">
    <nav class="navbar navbar-expand-lg navbar-light w-100">
      <div class="container-fluid">
        <!-- Hamburgerikon för mobilvy -->
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
        <div class="d-flex ms-auto d-lg-none">
          <router-link class="nav-link text-dark me-2" to="/"
            ><i class="bi bi-search"></i
          ></router-link>
          <router-link class="nav-link text-dark me-2" to="/"
            ><i class="bi bi-heart"></i
          ></router-link>
          <router-link class="nav-link text-dark" to="/cart"
            ><i class="bi bi-cart"></i
          ></router-link>
        </div>
        <!-- Större skärmar -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link class="nav-item nav-link" to="/shop"
              >Shops</router-link
            >
            <router-link class="nav-item nav-link" to="/">Info</router-link>
            <router-link class="nav-item nav-link" to="/">Blog</router-link>
            <router-link class="nav-item nav-link" to="/">About Us</router-link>
            <router-link class="nav-item nav-link" to="/">Contact</router-link>
          </ul>
          <!-- Ikonerna för större skärmar -->
          <div class="d-none d-lg-flex align-items-center">
            <router-link class="nav-link text-dark me-2" to="/"
              ><i class="bi bi-search"></i
            ></router-link>
            <router-link class="nav-link text-dark me-2" to="/"
              ><i class="bi bi-heart"></i
            ></router-link>
            <router-link class="nav-link text-dark" to="/cart"
              ><i class="bi bi-cart"></i
            ></router-link>
          </div>
        </div>
      </div>
    </nav>
  </BContainer>
</template>

<style scoped>
.navbar {
  width: 100%;
  background-color: white;
  padding-left: 0;
  padding-right: 0;
}

.navbar-nav .nav-link {
  padding-left: 15px;
  padding-right: 15px;
}

.navbar-toggler {
  border-color: rgba(0, 0, 0, 0.1);
}

.navbar-collapse {
  background-color: white;
  padding: 0;
}

@media (max-width: 991px) {
  .navbar {
    padding-left: 15px;
    padding-right: 15px;
  }
  .navbar-collapse {
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    width: calc(100% - 30px);
    border-top: 1px solid #ccc;
  }
}
</style>
