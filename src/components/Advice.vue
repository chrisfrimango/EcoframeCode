<template>
  <BContainer fluid>
    <BRow id="order-container">
      <BCol sm="12" lg="6" class="no-padding" v-if="imagePosition === 'left'" v-show="!this.switch">
        <img src="../assets/eye-check.png" alt="Image" />
      </BCol>
      <BCol sm="12" lg="6" class="no-padding" id="text-content" v-show="!this.switch">
        <div id="text-box">
          <h2>{{ heading }}</h2>
          <p>
            {{ textContent }}
          </p>
          <b-button variant="primary" @click="showAdvice">Read more</b-button>
        </div>
      </BCol>
      <BCol sm="12" lg="6" class="no-padding" v-if="imagePosition === 'right'" v-show="!this.switch">
        <img src="../assets/eye-close-up.png" alt="Image" />
      </BCol>
      <BCol v-show="this.switch">
        <h2 class="px-3">{{ heading }}</h2>
        <p class="px-3">{{ moreAdvice }}</p>
      </BCol>
    </BRow>
  </BContainer>
</template>

<style scoped>
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

<script>
export default {
  data() {
    return {
      switch: false
    }
  },
  methods: {
    showAdvice() {
      this.switch = !this.switch
    }
  },
  props: {
    imagePosition: String,
    textContent: String,
    heading: String,
    moreAdvice: String,
  },
};
</script>
