import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useProductStore = defineStore({
  id: "EcommerceApp",
  state: () => ({
    cart: [],
    discount: 10,
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
            Rating: 4,
          },
          {
            id: uuidv4(),
            modelName: "Clubmaster",
            brand: "Prada",
            price: 2200,
            image: "https://picsum.photos/200/300",
            color: "Brown",
            Rating: 3,
          },
          {
            id: uuidv4(),
            modelName: "Square",
            brand: "Versace",
            price: 4200,
            image: "https://picsum.photos/200/300",
            color: "Black",
            Rating: 5,
          },
          {
            id: uuidv4(),
            modelName: "Cat eye",
            brand: "Tom Ford",
            price: 5200,
            image: "https://picsum.photos/200/300",
            color: "Light",
            Rating: 4,
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
            Rating: 4,
          },
          {
            id: uuidv4(),
            modelName: "Rimless",
            brand: "Versace",
            price: 1200,
            image: "https://picsum.photos/200/300",
            color: "Red",
            Rating: 3,
          },
          {
            id: uuidv4(),
            modelName: "Rim",
            brand: "Versace",
            price: 1000,
            image: "https://picsum.photos/200/300",
            color: "Gold",
            Rating: 5,
          },
          {
            id: uuidv4(),
            modelName: "Rim2",
            brand: "Versace",
            price: 1500,
            image: "https://picsum.photos/200/300",
            color: "Light",
            Rating: 4,
          },
        ],
      },
      {
        category: "New Arrivals",
        products: [
          {
            id: uuidv4(),
            modelName: "Wayfarer",
            brand: "Oakley",
            price: 1500,
            image: "https://picsum.photos/200/300",
            color: "Black",
            Rating: 2,
          },
          {
            id: 627467264726746,
            modelName: "Wraparound",
            brand: "Tom Ford",
            price: 2500,
            image: "https://picsum.photos/200/300",
            color: "Brown",
            Rating: 3,
            // sale: function () {
            //   return this.price - (this.price * 10) / 100;
            // },
          },
          {
            id: uuidv4(),
            modelName: "Wrap",
            brand: "Tom Ford",
            price: 2300,
            image: "https://picsum.photos/200/300",
            color: "Black",
            Rating: 5,
          },
          {
            id: uuidv4(),
            modelName: "Tom ford",
            brand: "Tom Ford",
            price: 2000,
            image: "https://picsum.photos/200/300",
            color: "Light",
            Rating: 1,
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
            Rating: 4,
          },
          {
            id: uuidv4(),
            modelName: "Browline",
            brand: "Oakley",
            price: 1000,
            image: "https://picsum.photos/200/300",
            color: "Yellow",
            Rating: 3,
          },
          {
            id: uuidv4(),
            modelName: "Sport",
            brand: "Gucci",
            price: 1800,
            image: "https://picsum.photos/200/300",
            color: "Red",
            Rating: 5,
          },
          {
            id: uuidv4(),
            modelName: "Sheild",
            brand: "Prada",
            price: 4200,
            image: "https://picsum.photos/200/300",
            color: "Black",
            Rating: 1,
          },
        ],
      },
    ],
  }),
  actions: {
    setPriceAfterDiscount(id) {
      const item = this.products.find((item) => item.id === id);
      if (item) {
        const newprice = item - price - (item.price * this.discount) / 100;
        return newprice;
      }
    },
    getCategory(findCategory) {
      const category = this.products.find(
        (category) => category.category === findCategory
      );
      return category ? category.products : [];
    },
    updateItemQuantity(itemId, amount) {
      const item = this.cart.find((item) => item.id === itemId);
      if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) {
          this.removeItemFromCart(itemId);
        }
      }
    },
    // Ta bort en produkt från varukorgen
    removeItemFromCart(itemId) {
      const index = this.cart.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
  },

  getters: {
    getCartItems: (state) => {
      return state.cart;
    },
    // totala priset för varukorgen
    cartTotal: (state) => {
      return state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    // getDiscountedPrice: (state) => (id) => {
    //   const product = state.products
    //     .flatMap(category => category.products)
    //     .find(product => product.id === id);
    //   if (product) {
    //     return product.sale
    //   }
    //   return null;
    // },
  },
});
