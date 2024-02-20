import { BContainer } from 'bootstrap-vue-next';
<template>
  <BContainer class="pb-2 pt-2">
    <nav class="navbar navbar-expand-lg navbar-light w-100">
      <div class="container-fluid">
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
        <!-- Ikonerna för mindre skärmar -->
        <div class="d-flex d-lg-none ms-auto">
          <div class="d-flex">
            <router-link class="nav-link text-dark me-2" to="/"
              ><i class="fas fa-search"></i
            ></router-link>
            <router-link class="nav-link text-dark me-2" to="/"
              ><i class="fas fa-heart"></i
            ></router-link>
            <router-link class="nav-link text-dark me-2" to="/"
              ><i class="fas fa-shopping-cart"></i
            ></router-link>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav me-auto">
            <router-link class="nav-link me-5" to="/shop">Shops</router-link>
            <router-link class="nav-link me-5" to="/">Info</router-link>
            <router-link class="nav-link me-5" to="/">Blog</router-link>
            <router-link class="nav-link me-5" to="/">About Us</router-link>
            <router-link class="nav-link me-3" to="/">Contact</router-link>
          </div>
          <!-- Ikonerna för större skärmar-->
          <div class="navbar-nav ms-auto d-none d-lg-flex">
            <router-link class="nav-link text-dark" to="/"
              ><i class="fas fa-search"></i
            ></router-link>
            <router-link class="nav-link text-dark" to="/"
              ><i class="fas fa-heart"></i
            ></router-link>
            <router-link class="nav-link text-dark" to="/cart"
              ><i class="fas fa-shopping-cart"></i
            ></router-link>
          </div>
        </div>
      </div>
    </nav>
  </BContainer>
</template>
