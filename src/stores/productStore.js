import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useProductStore = defineStore({
  id: "EcommerceApp",
  state: () => ({
    cart:[],
    originalProducts: [],
    filteredProducts: [],
    discount: 10,
    productId: null,
    // cart:[ {
    //   id: uuidv4(),
    //   modelName: "Avaitor",
    //   brand: "Rayban",
    //   price: 1200,
    //   image: "https://picsum.photos/200/300",
    //   color: "Black",
    //   rating: 4,
    //   quantity:1,
    // },],
    products: [
      {
        category: "Sunwear",
        products: [
          {
            id: uuidv4(),
            modelName: "Avaitor",
            brand: "Rayban",
            price: 1200,
            image: "https://picsum.photos/200/300",
            color: "Black",
            rating: 4,
          },
          {
            id: uuidv4(),
            modelName: "Clubmaster",
            brand: "Prada",
            price: 2200,
            image: "https://picsum.photos/200/300",
            color: "Brown",
            rating: 3,
            onSale: true,
          },
          {
            id: uuidv4(),
            modelName: "Square",
            brand: "Versace",
            price: 4200,
            image: "https://picsum.photos/200/300",
            color: "Black",
            rating: 5,
          },
          {
            id: uuidv4(),
            modelName: "Cat eye",
            brand: "Tom Ford",
            price: 5200,
            image: "https://picsum.photos/200/300",
            color: "Light",
            rating: 4,
          },
        ],
      },
      {
        category: "Popular",
        products: [
          {
            id: uuidv4(),
            modelName: "Round",
            brand: "Gucci",
            price: 3200,
            image: "https://picsum.photos/200/300",
            color: "Blue",
            rating: 4,
            onSale: true,
          },
          {
            id: 1111,
            modelName: "Rimless",
            brand: "Versace",
            price: 1200,
            image: "https://picsum.photos/200/300",
            color: "Red",
            rating: 3,
          },
          {
            id: uuidv4(),
            modelName: "Rim",
            brand: "Versace",
            price: 1000,
            image: "https://picsum.photos/200/300",
            color: "Gold",
            rating: 5,
          },
          {
            id: uuidv4(),
            modelName: "Rim2",
            brand: "Versace",
            price: 1500,
            image: "https://picsum.photos/200/300",
            color: "Light",
            rating: 4,
            onSale: true,
          },
        ],
      },
      {
        category: "New",
        products: [
          {
            id: uuidv4(),
            modelName: "Wayfarer",
            brand: "Oakley",
            price: 1500,
            image: "https://picsum.photos/200/300",
            color: "Black",
            rating: 2,
          },
          {
            id: uuidv4(),
            modelName: "Wraparound",
            brand: "Tom Ford",
            price: 2500,
            image: "https://picsum.photos/200/300",
            color: "Brown",
            rating: 3,
          },
          {
            id: uuidv4(),
            modelName: "Wrap",
            brand: "Tom Ford",
            price: 2300,
            image: "https://picsum.photos/200/300",
            color: "Black",
            rating: 5,
            onSale: true,
          },
          {
            id: uuidv4(),
            modelName: "Tom ford",
            brand: "Tom Ford",
            price: 2000,
            image: "https://picsum.photos/200/300",
            color: "Light",
            rating: 1,
          },
        ],
      },
      {
        category: "Kids",
        products: [
          {
            id: uuidv4(),
            modelName: "Oversized",
            brand: "Rayban",
            price: 1300,
            image: "https://picsum.photos/200/300",
            color: "Green",
            rating: 4,
          },
          {
            id: uuidv4(),
            modelName: "Browline",
            brand: "Oakley",
            price: 1000,
            image: "https://picsum.photos/200/300",
            color: "Yellow",
            rating: 3,
          },
          {
            id: uuidv4(),
            modelName: "Sport",
            brand: "Gucci",
            price: 1800,
            image: "https://picsum.photos/200/300",
            color: "Red",
            rating: 5,
            onSale: true,
          },
          {
            id: uuidv4(),
            modelName: "Sheild",
            brand: "Prada",
            price: 4200,
            image: "https://picsum.photos/200/300",
            color: "Black",
            rating: 1,
          },
        ],
      },
    ],
  }),
  actions: {
    // Hämtar produkter som är på rea
    getProductsOnSale() {
      return this.products
        .flatMap((category) => category.products)
        .filter((product) => product.onSale);
    },
    // Uppdaterar priset på en produkt som är på rea
    updateProductSalesPrice(productId) {
      const product = this.getProductsOnSale().find(
        (product) => product.id === productId
      );

      if (product) {
        const newPrice = product.price - (product.price * this.discount) / 100;
        product.salesPrice = newPrice;
        return newPrice;
      }
      return null;
    },
    // Hämtar alla kategorier
    getCategories() {
      return this.products.map((category) => category.category);
    },

    // Hämtar alla produkter i en kategori
    getCategory(findCategory) {
      const category = this.products.find(
        (category) => category.category === findCategory
      );
      return category ? category.products : [];
    },
    // Hämtar produkten med ett specifikt id
    getProductById(productId) {
      return this.products
        .flatMap((category) => category.products)
        .find((product) => product.id === productId);
    },

    updateItemQuantity(itemId, amount) {
      const itemIndex = this.cart.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) {
        let newQuantity = this.cart[itemIndex].quantity + amount;
        if (newQuantity < 0) {
          newQuantity = 0;
        }
        this.cart[itemIndex].quantity = newQuantity;

        if (this.cart[itemIndex].quantity === 0) {

        }
        this.cart = [...this.cart];
      }
    },

    // Ta bort en produkt från varukorgen
    removeItemFromCart(itemId) {
      const index = this.cart.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },

    //sessionstorage för varukorg
    saveCartToSession() {
      sessionStorage.setItem('cart', JSON.stringify(this.cart));
    },
    restoreCartFromSession() {
      const cartFromSession = sessionStorage.getItem('cart');
      if (cartFromSession) {
        this.cart = JSON.parse(cartFromSession);
      }
    },

    //filter
    initializeOriginalProducts() {
      this.originalProducts = this.products.flatMap(category => category.products);
    },
    applyFilters(filters) {
      console.log('Applying filters with: ', filters);

      if (!this.originalProducts || this.originalProducts.length === 0) {
        console.error('No original products to filter from');
        return;
      }

      this.filteredProducts = this.originalProducts.filter(product => {
        const matchesCategory = filters.category ? product.category === filters.category : true;
        const matchesBrand = filters.brands.length ? filters.brands.includes(product.brand) : true;
        const matchesColor = filters.color ? product.color === filters.color : true;
        const matchesPrice = filters.price ?
        (product.price >= filters.price.min && product.price <= filters.price.max) : true;
        const matchesRating = filters.rating ? product.rating >= filters.rating : true;

        return matchesCategory && matchesBrand && matchesColor && matchesPrice && matchesRating;
      });
      console.log('Filtered products: ', this.filteredProducts);
    },
    clearFilters() {
      this.filteredProducts = [...this.originalProducts];
      this.filtersActive = false;
    },
  },

  getters: {
    cartItemCount: (state) => {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },

    getCartItems: (state) => {
      return state.cart;
    },

    // totala priset för varukorgen
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => {
        const itemTotal = (item.price * item.quantity) || 0;
        return total + itemTotal;
      }, 0);
    },
  },
});
