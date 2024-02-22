<script setup>
import Cta from "@/components/Cta.vue";
import Categories from "../components/Categories.vue";
import OurAdviceView from "./OurAdviceView.vue";
import Icons from "@/components/Icons.vue";
import DisplayProductCategory from "@/components/DisplayProductCategory.vue"
</script>

<template>
  <Cta />
  <Icons />
  <DisplayProductCategory />
  <Categories category-to-display="Sunwear" />
  <Categories category-to-display="Popular" />
  <Categories category-to-display="New Arrivals" />
  <OurAdviceView />
</template>
