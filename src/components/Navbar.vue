<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Ikonerna för mindre skärmar -->
      <div class="d-flex d-lg-none ms-auto">
        <div class="d-flex">
          <router-link class="nav-link text-dark me-2" to="/search"><i class="fas fa-search"></i></router-link>
          <router-link class="nav-link text-dark me-2" to="/favorites"><i class="fas fa-heart"></i></router-link>
          <router-link class="nav-link text-dark me-2" to="/cart"><i class="fas fa-shopping-cart"></i></router-link>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav me-auto">
          <router-link class="nav-link" to="/shops">Shops</router-link>
          <router-link class="nav-link" to="/offers">Offers</router-link>
          <router-link class="nav-link" to="/warranty">Warranty</router-link>
          <router-link class="nav-link" to="/medical">Medical</router-link>
          <router-link class="nav-link" to="/info">Info</router-link>
          <router-link class="nav-link" to="/blog">Blog</router-link>
          <router-link class="nav-link" to="/about-us">About Us</router-link>
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </div>
        <!-- Ikonerna för större skärmar-->
        <div class="navbar-nav ms-auto d-none d-lg-flex">
          <router-link class="nav-link text-dark" to="/search"><i class="fas fa-search"></i></router-link>
          <router-link class="nav-link text-dark" to="/favorites"><i class="fas fa-heart"></i></router-link>
          <router-link class="nav-link text-dark" to="/cart"><i class="fas fa-shopping-cart"></i></router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
