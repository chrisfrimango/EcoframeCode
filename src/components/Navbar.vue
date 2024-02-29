<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";
import { computed } from "vue";
import { useProductStore } from "../stores/productStore";
const router = useRouter();
const productStore = useProductStore();
const cartItemCount = computed(() => productStore.cartItemCount);

const searchQuery = ref("");
const activeDropdown = ref(null);
const windowWidth = ref(window.innerWidth);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWindowWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
});

const categories = ref(productStore.getCategories());

const goToAllProductPage = (category) => {
  router.push({ name: "Shop", params: { category } });
};

const handleDropdownToggle = (dropdownId) => {
  if (activeDropdown.value && activeDropdown.value !== dropdownId) {
    let prevDropdown = document.getElementById(activeDropdown.value);
    let bsDropdown = new bootstrap.Dropdown(prevDropdown);
    bsDropdown.hide();
  }
  activeDropdown.value = dropdownId;
};
</script>

<template>
  <BContainer class="pb-2 pt-2 custom-space">
    <nav class="navbar navbar-expand-lg navbar-light w-100">
      <div class="container-fluid custom-space">
        <!-- Mobile View -->
        <div class="d-flex justify-content-between w-100 d-lg-none">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-flex">
            <router-link class="nav-link text-dark me-1 d-block d-lg-none" to="/MyAccount"
              ><i class="bi bi-person icon-large"></i
            ></router-link>
            <router-link class="nav-link text-dark me-1" to="/"
              ><i class="bi bi-heart icon-large"></i
            ></router-link>
            <router-link class="nav-link text-dark position-relative" to="/cart"
              ><i class="bi bi-cart icon-large"></i
              ><span v-if="cartItemCount > 0" class="cart-item-count">{{
                cartItemCount
              }}</span></router-link
            >
          </div>
        </div>
        <!-- Desktop View -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <router-link class="nav-item nav-link" to="/">Home</router-link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click.native.prevent="handleDropdownToggle('navbarDropdown')"
              >
                Glasses
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li v-for="category in categories" :key="category.id">
                  <router-link
                    @click.prevent="goToAllProductPage(category)"
                    class="dropdown-item"
                    to="/shop"
                    >{{ category }}</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link class="nav-item nav-link" to="/about-us">About us</router-link>
            </li>
            <li>
              <router-link class="nav-item nav-link" to="/customersupport"
                >Contact</router-link>
            </li>

            <li class="nav-item dropdown" v-if="windowWidth < 992">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="customerSupportDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click.native.prevent="handleDropdownToggle('customerSupportDropdown')">
                Customer Support
              </a>
              <ul class="dropdown-menu" aria-labelledby="customerSupportDropdown">
                <li>
                  <router-link class="dropdown-item" to="/">FAQs</router-link>
                </li>
                <li>
                  <router-link
                    class="dropdown-item"
                    to="/CustomerSupport/Contact"
                    >Contact</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/"
                    >Terms of Purchase and Delivery</router-link
                  >
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown" v-if="windowWidth < 992">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="accountDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click.native.prevent="handleDropdownToggle('accountDropdown')"
              >
                Account
              </a>
              <ul class="dropdown-menu" aria-labelledby="accountDropdown">
                <li>
                  <router-link class="dropdown-item" to="/">Login</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="createaccount"
                    >Create Account</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
          <form
            class="d-none d-lg-flex flex-row align-items-center me-auto"
            @submit.prevent="search"
          >
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="searchQuery"
              @keyup.enter="search"
            />
          </form>
          <div class="d-none d-lg-flex align-items-center">
            <router-link class="nav-link text-dark me-1 d-block d-lg-none"  to="/MyAccount"
              ><i class="bi bi-person icon-large" ></i
            ></router-link>
            <router-link class="nav-link text-dark me-1" to="/"
              ><i class="bi bi-heart icon-large" ></i
            ></router-link>
            <router-link class="nav-link text-dark position-relative" to="/cart"
              ><i class="bi bi-cart icon-large position-relative"
                ><h6>
                  <BBadge
                    v-if="productStore.cartQuantity > 0"
                    variant="danger"
                    pill
                    text-indicator
                  >
                    {{ productStore.cartQuantity }}
                    <span class="visually-hidden">unread messages</span>
                  </BBadge>
                </h6>
              </i></router-link>
          </div>
        </div>
      </div>
    </nav>
  </BContainer>
</template>

<style scoped>
.custom-space {
  padding-left: 0 !important;
}

.container-fluid {
  padding-left: 5px;
  padding-right: 5px;
}

.icon-large {
  font-size: 20px;
  margin-left: 15px;
}

.navbar-toggler {
  border: none;
  outline: none !important;
}

.navbar-toggler:focus {
  outline: none !important;
  box-shadow: none !important;
}

.nav-link {
  margin-right: 5px;
}

.dropdown-menu .dropdown-item {
  padding-left: 20px;
}

.dropdown-menu {
  border: none;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
}

.form-control {
  height: 30px;
  padding: 0 10px;
  border-radius: 0;
  font-size: 0.8rem;
}

.form-control::placeholder {
  font-size: 0.8rem;
}

.form-control:-ms-input-placeholder {
  font-size: 0.8rem;
}

.btn-outline-success {
  height: 30px;
  padding: 0 12px;
  line-height: 30px;
}
.navbar-collapse .navbar-nav .nav-link {
  padding-left: 20px;
}

.cart-item-count {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
}

@media (max-width: 991px) {
  .container-fluid {
    padding-left: 5px;
    padding-right: 5px;
  }
  .navbar-nav {
    position: static;
  }
  .navbar-collapse.collapsing,
  .navbar-collapse.show {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1000;
  }
  .d-flex,
  .navbar-toggler {
    position: relative;
    order: initial;
    padding-right: 2px;
  }
}
</style>
