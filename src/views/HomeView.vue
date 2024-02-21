<script setup>
import Cta from "@/components/Cta.vue";
import Categories from "../components/Categories.vue";
import OurAdviceView from "./OurAdviceView.vue";
</script>

<template>
  <Cta />
  <Icons />
  <DisplayPeople />
  <Categories category-to-display="Sunwear" />
  <Categories category-to-display="Popular" />
  <Categories category-to-display="New Arrivals" />
  <OurAdviceView />
</template>
