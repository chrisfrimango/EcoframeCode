<script setup>
import Cta from "@/components/Cta.vue";
import Categories from "../components/Categories.vue";
import ImageTextSection from "@/components/ImageTextSection.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Cta />
  <Icons />
  <DisplayPeople />
  <Categories />
  <ImageTextSection image-position="left" />
  <ImageTextSection image-position="right" />
  <Footer />
</template>
