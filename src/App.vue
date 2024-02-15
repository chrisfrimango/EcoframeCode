<script setup>
import { RouterView } from "vue-router";
import Navbar from './components/Navbar.vue';
</script>

<template>
  <main>
    <header>
      <Navbar />
    </header>

    <RouterView />
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  min-height: 100vh;
  max-width: 1300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
}
</style>
