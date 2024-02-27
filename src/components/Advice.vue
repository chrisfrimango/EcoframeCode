<script setup>
import { ref } from "vue";

const props = defineProps({
  imagePosition: String,
  textContent: String,
  heading: String,
  fullTextContent: String,
});

const buttonclicked = ref(false);
</script>

<template>
  <BContainer fluid>
    <BRow id="order-container">
      <BCol
        sm="12"
        lg="6"
        class="no-padding"
        v-if="imagePosition === 'left' && buttonclicked === false"
      >
        <img src="../assets/eye-check.png" alt="Image" />
      </BCol>
      <BCol
        sm="12"
        lg="6"
        class="no-padding"
        id="text-content"
        v-if="buttonclicked === false"
      >
        <div id="text-box">
          <h2>{{ heading }}</h2>
          <p>
            {{ textContent }}
          </p>
          <BButton @click="buttonclicked = true">Read more</BButton>
        </div>
      </BCol>
      <BCol
        sm="12"
        lg="6"
        class="no-padding"
        v-if="imagePosition === 'right' && buttonclicked === false"
      >
        <img src="../assets/eye-close-up.png" alt="Image" />
      </BCol>
      <BCol class="m-5 p-5" v-if="buttonclicked === true">
        <h2 class="p-2">{{ heading }}</h2>
        <p class="p-2">
          {{ fullTextContent }}
        </p>
        <BButton class="pt-2" @click="buttonclicked = false">Close</BButton>
      </BCol>
    </BRow>
  </BContainer>
</template>

<style scoped>
.custom-height {
  height: 30rem;
}
.no-padding {
  padding: 0;
}
img {
  width: 100%;
}
#text-box {
  padding: 5rem;
}
@media (max-width: 992px) {
  #text-content {
    order: 1;
  }
}
</style>
