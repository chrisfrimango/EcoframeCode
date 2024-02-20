<script setup>
import Advice from "@/components/Advice.vue";
import { ref } from "vue";

const textContentLeft = ref(
  "Our advice is to always wear sunglasses when you are outside, even when it is cloudy. The sun's rays can still reach your eyes and cause damage."
);
const textContentRight = ref(
  "If you are experiencing any eye problems, it is important to get your eyes checked. We offer a free eye test, so book an appointment today."
);
</script>

<template>
  <Advice image-position="left" :text-content="textContentLeft" />
  <Advice image-position="right" :text-content="textContentRight" />
</template>
