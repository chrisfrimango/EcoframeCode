import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useProductStore = defineStore({
  id: "EcommerceApp",
  state: () => ({
    accounts: [],
    cart: [],
    checkoutCart: [],
    // cart: [ {
    //   id: uuidv4(),
    //   modelName: "Avaitor",
    //   brand: "Rayban",
    //   price: 1200,
    //   image: "https://picsum.photos/200/300",
    //   color: "Black",
    //   rating: 4,
    //   quantity:1,
    // },],
    discount: 10,
    productId: null,
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
            color: "Grey",
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
            color: "Grey",
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
            color: "Yellow",
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

      // this.saveToSession("accounts", this.accounts);
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

    // saveToSession(id, data) {
    //   sessionStorage.setItem(id, JSON.stringify(data));
    // },
    // getDataFromSession(id) {
    //   const dataFromSession = sessionStorage.getItem(id);
    //   if (dataFromSession) {
    //     const data = JSON.parse(dataFromSession);
    //     return data;
    //   }
    // },

    //filter
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
