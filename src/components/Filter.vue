<template>
  <div class="container filter-wrapper">
    <button class="btn btn-light d-block d-md-none mb-3" @click="toggleShowFilters" style="width: 60%; margin: 0 auto; background-color: white;">
      {{ showFilters ? 'Hide Filters' : 'Show Filters' }}
    </button>

    <div v-show="showFilters" class="filter-content px-2 py-3">
      <div class="filter-title mb-4">
        <h2 class="text-primary">Filters</h2>
      </div>

      <!-- Kategorival -->
      <div v-if="isMobileView" class="mb-4">
        <select class="form-select mb-4" v-model="selectedCategory">
          <option value="" disabled selected>Select Category</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>

      <!-- Färgfilter -->
      <div class="card mb-4">
        <div class="card-header">Colour</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="colour in colours" :key="colour">
            <input type="radio" class="me-2" v-model="selectedColour" :value="colour" :name="colour"> {{ colour }}
          </li>
        </ul>
      </div>

      <!-- Prisfilter -->
      <div class="card mb-4">
        <div class="card-header">Price</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="price in prices" :key="price">
            <input type="radio" class="me-2" v-model="selectedPrice" :value="price" :name="price"> {{ price }}
          </li>
        </ul>
      </div>

      <!-- Betygsfilter -->
      <div class="card mb-4">
        <div class="card-header">Rating</div>
        <div class="card-body">
          <div v-for="rating in ratings" :key="rating" class="mb-2">
            <input type="radio" class="me-2" v-model="selectedRating" :value="rating" :name="`rating-${rating}`">
            <span v-for="star in 5" :key="`star-${rating}-${star}`" class="star" :class="{ 'text-warning': star <= rating, 'text-secondary': star > rating }">★</span>
            {{ rating }}
          </div>
        </div>
      </div>

      <!-- knappar -->
      <div class="d-flex justify-content-between mb-4">
        <button class="btn btn-secondary me-3" @click="clearFilters">Clear Filters</button>
        <button class="btn btn-success" @click="applyFilters">Show Products</button>
      </div>
    </div>

    <!-- Antal matchande produkter -->
    <div v-if="filtersApplied">
      <div v-if="filteredProducts.length > 0">
        <h3>Matching Products: ({{ filteredProducts.length }})</h3>
      </div>
      <div v-else>
        <p>No matching products found.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import { useProductStore } from '@/stores/productStore';

export default {
  data() {
    return {
      showFilters: true,
      isMobileView: window.innerWidth < 768,
      selectedCategory: '',
      selectedColour: '',
      selectedPrice: '',
      selectedRating: 0,
      showResults: true,
      filtersApplied: false,

    };
  },
  computed: {
    categories() {
      const store = useProductStore();
      return store.getCategories();
    },
    colours() {
      return ['Black', 'Brown', 'Light', 'Blue', 'Yellow'];
    },
    prices() {
      return ['Under 1000 SEK', '1000 - 3000 SEK', 'Over 3000 SEK'];
    },
    ratings() {
      return [5, 4, 3, 2, 1];
    },
    filteredProducts() {
      const store = useProductStore();
      let filtered = store.products.flatMap(category => category.products);

      console.log("Initial products:", filtered);

      if (this.selectedCategory) {
        filtered = store.getCategory(this.selectedCategory);

        console.log("After category filter:", filtered);
      }

      if (this.selectedColour) {
        filtered = filtered.filter(product => product.colour === this.selectedColour);

        console.log("After colour filter:", filtered);
      }

      if (this.selectedPrice) {
        const priceRange = this.selectedPrice.match(/\d+/g);
        if (priceRange) {
          const minPrice = priceRange[0];
          const maxPrice = priceRange[1] || Infinity;
          filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);

          console.log("After price filter:", filtered);
        }
      }

      if (this.selectedRating) {
        filtered = filtered.filter(product => product.rating === this.selectedRating);

        console.log("After rating filter:", filtered);
      }

      return filtered;
    },
  },
  methods: {
    toggleShowFilters() {
      this.showFilters = !this.showFilters;
    },
    adjustView() {
      this.isMobileView = window.innerWidth < 768;
    },
    clearFilters() {
      console.log("Clearing filters:", this.selectedCategory, this.selectedColour, this.selectedPrice, this.selectedRating);

      this.selectedCategory = '';
      this.selectedColour = '';
      this.selectedPrice = '';
      this.selectedRating = 0;
       this.showResults = false;
      this.filtersApplied = false;
    },
    applyFilters() {
        console.log("Filters applied:", {
        category: this.selectedCategory,
        colour: this.selectedColour,
        price: this.selectedPrice,
        rating: this.selectedRating,
      });
      this.showResults = false;
      this.filtersApplied = false;
  }
  },
  mounted() {
    const route = useRoute();

    watch(() => route.params, (newValue, oldValue) => {
      if (newValue.category !== oldValue.category) {
        this.selectedCategory = newValue.category || '';

        console.log("Route changed. New category:", this.selectedCategory);
      }
    }, { deep: true });

    window.addEventListener('resize', this.adjustView);
    this.selectedCategory = route.params.category || '';
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.adjustView);
  },
}
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
