<template>
  <nav class="navbar">
    <div class="navbar-links">
      <router-link to="/shops">Shops</router-link>
      <router-link to="/offers">Offers</router-link>
      <router-link to="/warranty">Warranty</router-link>
      <router-link to="/medical">Medical</router-link>
      <router-link to="/info">Info</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/about-us">About Us</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="navbar-icons">
      <router-link to="/search"><i class="fas fa-search"></i></router-link>
      <router-link to="/favorites"><i class="fas fa-heart"></i></router-link>
      <router-link to="/login">Log In</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-links, .navbar-icons {
  display: flex;
  gap: 20px;
}
</style>
