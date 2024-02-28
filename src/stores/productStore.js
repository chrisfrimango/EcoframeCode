import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useProductStore = defineStore({
  id: "EcommerceApp",
  state: () => ({
    currentAccount: null,
    loggedIn: false,
    accounts: [],
    cart:[],
    originalProducts: [],
    filteredProducts: [],
    discount: 10,
    productId: null,
    checkoutCart: [],
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
            description:
              "Embrace style with a conscience in our recycled plastic frames, stylishly repurposing waste materials to combat plastic pollution and elevate your look.",
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
            description:
              "Crafted from sustainable bamboo, our eco-conscious eyewear not only reduces carbon footprint but also promotes reforestation efforts for a greener tomorrow.",
          },
          {
            id: uuidv4(),
            modelName: "Square",
            brand: "Versace",
            price: 4200,
            image: "https://picsum.photos/200/300",
            color: "Black",
            rating: 5,
            description:
              "Our upcycled metal frames offer durability and style while minimizing environmental impact by repurposing materials, making a statement in sustainability",
          },
          {
            id: uuidv4(),
            modelName: "Cat eye",
            brand: "Tom Ford",
            price: 5200,
            image: "https://picsum.photos/200/300",
            color: "Grey",
            rating: 4,
            description:
              "Experience eco-friendly elegance with our bio-based acetate frames, derived from renewable resources to provide chic alternatives to traditional plastics, embodying both style and sustainability.",
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
            description:
              "Fashion meets sustainability with our carbon-neutral sunglasses featuring plant-based lenses, contributing to a brighter future while making a bold statement.",
          },
          {
            id: 1111,
            modelName: "Rimless",
            brand: "Versace",
            price: 1200,
            image: "https://picsum.photos/200/300",
            color: "Red",
            rating: 3,
            description:
              "Support ethical production practices and empower communities with our fair trade sunglasses, where style meets social responsibility.",
          },
          {
            id: uuidv4(),
            modelName: "Rim",
            brand: "Versace",
            price: 1000,
            image: "https://picsum.photos/200/300",
            color: "Gold",
            rating: 5,
            description:
              "Combat marine plastic pollution in style with our ocean-friendly sunglasses made from reclaimed fishing nets, turning waste into fashionable accessories.",
          },
          {
            id: uuidv4(),
            modelName: "Rim2",
            brand: "Versace",
            price: 1500,
            image: "https://picsum.photos/200/300",
            color: "Grey",
            rating: 4,
            onSale: true,
            description:
              "From production to delivery, our zero-waste eyewear packaging uses recycled materials, ensuring sustainability every step of the way.",
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
            description:
              "Harness renewable energy for innovative functionality with our solar-powered smart glasses, leading the way in eco-friendly eyewear.",
          },
          {
            id: uuidv4(),
            modelName: "Wraparound",
            brand: "Tom Ford",
            price: 2500,
            image: "https://picsum.photos/200/300",
            color: "Brown",
            rating: 3,
            description:
              "Choose compostable eyewear crafted from biodegradable materials to reduce landfill waste without compromising on style.",
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
            description:
              "Experience compassion in fashion with our cruelty-free eyewear, crafted without animal-derived materials for a truly ethical choice.",
          },
          {
            id: uuidv4(),
            modelName: "Tom ford",
            brand: "Tom Ford",
            price: 2000,
            image: "https://picsum.photos/200/300",
            color: "Yellow",
            rating: 1,
            description:
              "Offset emissions and contribute to climate action with our carbon-negative eyewear brands supporting reforestation projects for a sustainable future.",
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
            description:
              "Less is more when it comes to sustainability; embrace minimalist designs with maximum environmental impact.",
          },
          {
            id: uuidv4(),
            modelName: "Browline",
            brand: "Oakley",
            price: 1000,
            image: "https://picsum.photos/200/300",
            color: "Yellow",
            rating: 3,
            description:
              "Preserve precious resources with our water-saving production methods used in crafting eco-conscious eyewear, making sustainability a priority.",
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
            description:
              "For truly zero-waste fashion choices, opt for our packaging-free eyewear options, minimizing environmental impact without sacrificing style.",
          },
          {
            id: uuidv4(),
            modelName: "Sheild",
            brand: "Prada",
            price: 4200,
            image: "https://picsum.photos/200/300",
            color: "Black",
            rating: 1,
            description:
              "Invest in environmental education and conservation initiatives with community-driven eyewear brands, making a positive impact beyond fashion.",
          },
        ],
      },
      {
        category: "All Products",
      },
    ],
  }),
  actions: {
    //lägger till användar
    createNewAccount(values) {
      this.accounts.push(values);
      console.log(this.accounts);

      this.saveToSession("accounts", this.accounts);
    },

    validateLogin(values) {
      const accounts = this.getAccountsFromSession();
      const user = accounts.find(
        (account) =>
          account.email === values.email && account.password === values.password
      );
      if (user) {
        return user;
      }
      return false;
    },

    saveLoggedInToSession() {
      sessionStorage.setItem("loggedIn", JSON.stringify(this.loggedIn));
    },

    getLoggedInFromSession() {
      const loggedIn = sessionStorage.getItem("loggedIn");
      return loggedIn ? JSON.parse(loggedIn) : false;
    },

    logout() {
      this.loggedIn = false;
      this.saveLoggedInToSession();
      this.currentAccount = null;
    },

    // Hämtar produkter som är på rea
    getProductsOnSale() {
      return this.products
        .filter((category) => category.category !== "All Products")
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
      if (findCategory === "All Products") {
        return this.products
          .filter((category) => category.category !== "All Products")
          .flatMap((category) => category.products);
      }
      const category = this.products.find(
        (category) => category.category === findCategory
      );
      //om kategorin är all products renderas products
      return category ? category.products : [];
    },
    // Hämtar produkten med ett specifikt id
    getProductById(productId) {
      return this.products
        .flatMap((category) => category.products)
        .find((product) => product.id === productId);
    },

    // Lägger till en produkt i varukorgen
    addToCart(product) {
      const item = this.cart.find((item) => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },

    updateItemQuantity(itemId, amount) {
      const itemIndex = this.cart.findIndex((item) => item.id === itemId);
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
    // Töm varukorgen
    clearCart() {
      this.cart = [];
    },

    // skapa ordernummer
    createOrderNumber() {
      return Math.floor(Math.random() * 1000000);
    },

    // createOrder() {

    //   this.checkoutCart = this.cart;
    //   this.cart = [];
    // },

    saveCurrentAccountToSession() {
      sessionStorage.setItem(
        "currentAccount",
        JSON.stringify(this.currentAccount)
      );
    },
    getCurrentAccountFromSession() {
      const currentAccount = sessionStorage.getItem("currentAccount");
      return currentAccount ? JSON.parse(currentAccount) : [];
    },
    getAccountsFromSession() {
      const accounts = sessionStorage.getItem("accounts");
      return accounts ? JSON.parse(accounts) : [];
    },

    saveCartToSession() {
      sessionStorage.setItem("cart", JSON.stringify(this.cart));
    },
    restoreCartFromSession() {
      const cartFromSession = sessionStorage.getItem("cart");
      if (cartFromSession) {
        this.cart = JSON.parse(cartFromSession);
      }
    },

    //filter

    initializeOriginalProducts() {
      this.originalProducts = this.products.flatMap(
        (category) => category.products
      );
    },
    applyFilters(filters) {
      console.log("Applying filters with: ", filters);

      if (!this.originalProducts || this.originalProducts.length === 0) {
        console.error("No original products to filter from");
        return;
      }

      this.filteredProducts = this.originalProducts.filter((product) => {
        const matchesCategory = filters.category
          ? product.category === filters.category
          : true;
        const matchesBrand = filters.brands.length
          ? filters.brands.includes(product.brand)
          : true;
        const matchesColor = filters.color
          ? product.color === filters.color
          : true;
        const matchesPrice = filters.price
          ? product.price >= filters.price.min &&
            product.price <= filters.price.max
          : true;
        const matchesRating = filters.rating
          ? product.rating >= filters.rating
          : true;

        return (
          matchesCategory &&
          matchesBrand &&
          matchesColor &&
          matchesPrice &&
          matchesRating
        );
      });
      console.log("Filtered products: ", this.filteredProducts);
    },

    //filte
    //filter
    initializeOriginalProducts() {
      this.originalProducts = this.products.flatMap(category => category.products);

      console.log(this.originalProducts);
    },
    applyFilters(filters) {
      console.log("Applying filters with: ", filters);

      if (!this.originalProducts || this.originalProducts.length === 0) {
        console.error("No original products to filter from");
        return;
      }

      this.filteredProducts = this.originalProducts.filter(product => {
        console.log("Filtering product:", product);

        const matchesCategory = filters.category ? product.category === filters.category : true;
        console.log("Matches category:",
        matchesCategory);

        const matchesBrand = filters.brands.length ? filters.brands.includes(product.brand) : true;
        console.log("Matches brand:",
        matchesBrand);

        const matchesColor = filters.color ? product.color === filters.color : true;
        console.log("Matches color:",
        matchesColor);

        const matchesPrice = filters.price ?
        (product.price >= filters.price.min && product.price <= filters.price.max) : true;
        console.log("Matches Price:",
        matchesPrice);

        const matchesRating = filters.rating ? product.rating >= filters.rating : true;
        console.log("Matches rating:",
        matchesRating);
        return (
          matchesCategory &&
          matchesBrand &&
          matchesColor &&
          matchesPrice &&
          matchesRating
        );
      });
      console.log("Filtered products: ", this.filteredProducts);
    },
    clearFilters() {
      this.filteredProducts = [...this.originalProducts];
      this.filtersActive = false;
    },
    getFilteredProducts(category, colour, price, rating) {
      let result = this.products.flatMap((category) => category.products);
      if (category)
        result = result.filter((product) => product.category === category);
      if (colour)
        result = result.filter((product) => product.colour === colour);
      if (price)
        result = result.filter(
          (product) => product.price >= price[0] && product.price <= price[1]
        );
      if (rating)
        result = result.filter((product) => product.rating === rating);
      return result;
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
        const itemTotal = item.price * item.quantity || 0;
        return total + itemTotal;
      }, 0);
    },

    // totala antalet produkter i varukorgen
    cartQuantity: (state) => {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
  },
});
