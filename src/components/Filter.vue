<template>
  <div class="container">
    <!-- Mobilvy: Filterknapp -->
    <button
      class="btn btn-light d-block d-lg-none mb-3"
      @click="toggleShowFilters"
      style="background-color: white;">
      {{ showFilters ? 'Dölj Filter' : 'Visa Filter' }}
    </button>

    <!-- Filterinnehåll -->
    <div v-show="showFilters" class="filter-content px-2 py-3" style="background-color: white;">
      <div class="filter-title mb-4">
        <h2 class="text-primary">Filter</h2>
      </div>

      <div class="product-cards mb-4">
        <div class="row g-2">
          <div class="col-6 col-md-6" v-for="n in 6" :key="`product-${n}`">
            <div class="card h-100 text-center">
              <img src="@/assets/color-lens.png" class="rounded-circle mx-auto d-block mt-3 img-fluid" alt="Produktbild" style="width: 100px; height: 100px; object-fit: cover;">
              <div class="card-body">
                <p class="card-text">Contact lenses</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="filter-section mb-4" v-for="(filter, index) in filters" :key="index">
        <div class="card">
          <div class="card-header">{{ filter.title }}</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="(option, oIndex) in filter.options" :key="`option-${oIndex}`">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" :value="option" :id="`filter-${index}-${oIndex}`">
                <label class="form-check-label" :for="`filter-${index}-${oIndex}`">
                  Lorem ipsum
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="rating-filter mb-4">
        <div class="card">
          <div class="card-header text-primary">Rating</div>
          <div class="card-body">
            <div v-for="rating in 5" :key="rating" class="d-flex align-items-center mb-2">
              <div class="flex-grow-1">
                <span v-for="star in 5" :key="`star-${rating}-${star}`" class="star" :class="{ 'text-warning': star <= (6-rating), 'text-secondary': star > (6-rating) }">★</span>
              </div>
              <div class="ms-2">{{ ratingCounts[6 - rating] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterComponent',
  data() {
    return {
      showFilters: window.innerWidth <= 768,
      filters: [
        { title: 'Availability', options: [1, 2, 3, 4, 5] },
        { title: 'Price', options: [1, 2, 3, 4, 5] },
        { title: 'Brand', options: ['Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E'] }
      ],
      ratingCounts: [0,18,50,203,461,589],
    }
  },
  methods: {
    toggleShowFilters() {
      this.showFilters = !this.showFilters;
    }
  },
  mounted() {
    this.adjustFiltersVisibility();
    window.addEventListener('resize', this.adjustFiltersVisibility);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.adjustFiltersVisibility);
  },
  methods: {
    adjustFiltersVisibility() {
      this.showFilters = window.innerWidth > 768;
    },
    toggleShowFilters() {
      this.showFilters = !this.showFilters;
    }
  }
}
</script>

<style scoped>
.rounded-circle {
  max-width: 100px;
  height: auto;
  object-fit: cover;
  padding: 5px;
  background-color: white;
}
.card-header {
  color: #007bff;
  font-size: 20px;
}
.star {
  cursor: pointer;
  font-size: 20px;
}
.text-warning {
  color: #ffc107;
}
.text-secondary {
  color: #6c757d;
}
</style>
