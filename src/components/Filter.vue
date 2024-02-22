<template>
  <div class="container filter-wrapper">
    <button class="btn btn-light d-block d-md-none mb-3" @click="toggleShowFilters" style="width: 60%; margin: 0 auto; background-color: white;">
      {{ showFilters ? 'Hide Filters' : 'Show Filters' }}
    </button>

    <div v-show="showFilters" class="filter-content px-2 py-3">
      <div class="filter-title mb-4">
        <h2 class="text-primary">Filters</h2>
      </div>

      <div class="row mb-4 product-cards">
        <div class="col-12 col-md-6">
          <router-link to="/shop/sunwear" class="card text-center">
            <img src="@/assets/sunwear.png" alt="Sunwear" class="img-fluid">
            <div class="card-body">
              <p class="card-text">Sunwear</p>
            </div>
          </router-link>
        </div>
        <div class="col-12 col-md-6">
          <router-link to="/shop/optical" class="card text-center">
            <img src="@/assets/sunwear.png" alt="Optical" class="img-fluid">
            <div class="card-body">
              <p class="card-text">Optical</p>
            </div>
          </router-link>
        </div>
      </div>

      <div class="additional-filters">
        <div class="card mb-4">
          <div class="card-header">Colour</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex align-items-center">
              <input type="checkbox" class="me-2" v-model="selectedColours" value="Black">
              Black
            </li>
            <li class="list-group-item d-flex align-items-center">
              <input type="checkbox" class="me-2" v-model="selectedColours" value="Brown">
              Brown
            </li>
            <li class="list-group-item d-flex align-items-center">
              <input type="checkbox" class="me-2" v-model="selectedColours" value="Beige">
              Light
            </li>
            <li class="list-group-item d-flex align-items-center">
              <input type="checkbox" class="me-2" v-model="selectedColours" value="Beige">
              Blue
            </li>
             <li class="list-group-item d-flex align-items-center">
              <input type="checkbox" class="me-2" v-model="selectedColours" value="Beige">
              Yellow
            </li>
          </ul>
        </div>

        <div class="card mb-4">
          <div class="card-header">Price</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex align-items-center">
              <input type="checkbox" class="me-2" v-model="selectedPrices" value="Under 1000 SEK">
              Under 1000 SEK
            </li>
            <li class="list-group-item d-flex align-items-center">
              <input type="checkbox" class="me-2" v-model="selectedPrices" value="1000 - 3000 SEK">
              1000 - 3000 SEK
            </li>
            <li class="list-group-item d-flex align-items-center">
              <input type="checkbox" class="me-2" v-model="selectedPrices" value="Over 3000 SEK">
              Over 3000 SEK
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="card-header">Rating</div>
          <div class="card-body">
            <div v-for="rating in [5, 4, 3, 2, 1]" :key="rating" class="d-flex align-items-center mb-2">
              <div class="flex-grow-1">
                <span v-for="star in 5" :key="`star-${rating}-${star}`" class="star" :class="{ 'text-warning': star <= rating, 'text-secondary': star > rating }">★</span>
              </div>
              <div class="ms-2">{{ ratingCounts[5 - rating] }} reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFilters: true,
      isMobileView: window.innerWidth < 768,
      ratingCounts: [589, 461, 203, 50, 18],
      selectedColours: [],
      selectedPrices: [],
      selectedRatings: [],
    };
  },
  computed: {
    products() {
      const store = useProductStore();
      return store.products;
    },
    filteredProducts() {
      return this.products.filter((product) => {
        const colourMatch = this.selectedColours.length ? this.selectedColours.includes(product.color) : true;
        const priceMatch = this.selectedPrices.length ? this.selectedPrices.some((range) => {
          if (range === 'Under 1000 SEK') return product.price < 1000;
          if (range === '1000 - 3000 SEK') return product.price >= 1000 && product.price <= 3000;
          if (range === 'Over 3000 SEK') return product.price > 3000;
          return false;
        }) : true;
        const ratingMatch = this.selectedRatings.length ? this.selectedRatings.includes(product.Rating) : true;
        return colourMatch && priceMatch && ratingMatch;
      });
    },
  },
  methods: {
    toggleShowFilters() {
      this.showFilters = !this.showFilters;
    },
    adjustView() {
      this.isMobileView = window.innerWidth < 768;
    }
  },
  mounted() {
    window.addEventListener('resize', this.adjustView);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.adjustView);
  },
  watch: {

    selectedColours() {
      this.filteredProducts = this.computeFilteredProducts();
    },
    selectedPrices() {
      this.filteredProducts = this.computeFilteredProducts();
    },
    selectedRatings() {
      this.filteredProducts = this.computeFilteredProducts();
    },
  },
};
</script>
<style scoped>
.card img {
  width: 100%;
  height: 80px;
}

@media (max-width: 991px) {
  .card img {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
  .filter-wrapper {
    width: 60%;
    margin: 0 auto;
  }
  .btn {
    width: 100%;
  }
  .product-cards .card {
    margin-bottom: 15px;
  }
}
</style>
