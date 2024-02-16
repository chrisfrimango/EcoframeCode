import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useProductStore = defineStore({
  id: "EcommerceApp",
  state: () => ({
    products: [
      {
        id: uuidv4(),
        modelName: "Avaitor",
        brand: "Rayban",
        price: 1200,
        image: "https://picsum.photos/200/300",
        category: "Sunglasses",
      },
      {
        id: uuidv4(),
        modelName: "Wayfarer",
        brand: "Oakley",
        price: 1500,
        image: "https://picsum.photos/200/300",
        category: "New Arrivals",
      },
      {
        id: uuidv4(),
        modelName: "Clubmaster",
        brand: "Prada",
        price: 2200,
        image: "https://picsum.photos/200/300",
        category: "Sunglasses",
      },
      {
        id: uuidv4(),
        modelName: "Round",
        brand: "Gucci",
        price: 3200,
        image: "https://picsum.photos/200/300",
        category: "Popular",
      },
      {
        id: uuidv4(),
        modelName: "Square",
        brand: "Versace",
        price: 4200,
        image: "https://picsum.photos/200/300",
        category: "Sunglasses",
      },
      {
        id: uuidv4(),
        modelName: "Cat eye",
        brand: "Tom Ford",
        price: 5200,
        image: "https://picsum.photos/200/300",
        category: "Sunglasses",
      },
      {
        id: uuidv4(),
        modelName: "Oversized",
        brand: "Rayban",
        price: 1300,
        image: "https://picsum.photos/200/300",
        category: "Kids",
      },
      {
        id: uuidv4(),
        modelName: "Browline",
        brand: "Oakley",
        price: 1000,
        image: "https://picsum.photos/200/300",
        category: "Kids",
      },
      {
        id: uuidv4(),
        modelName: "Sport",
        brand: "Gucci",
        price: 1800,
        image: "https://picsum.photos/200/300",
        category: "Sunglasses",
      },
      {
        id: uuidv4(),
        modelName: "Rimless",
        brand: "Versace",
        price: 1200,
        image: "https://picsum.photos/200/300",
        category: "Popular",
      },
      {
        id: uuidv4(),
        modelName: "Wraparound",
        brand: "Tom Ford",
        price: 2500,
        image: "https://picsum.photos/200/300",
        category: "New Arrivals",
      },
      {
        id: uuidv4(),
        modelName: "Sheild",
        brand: "Prada",
        price: 4200,
        image: "https://picsum.photos/200/300",
        category: "Sunglasses",
      },
    ],
  }),
  actions: {
    // campain price function

    getUniqueCategories() {
      const categories = this.products.filter((product) => product.category);
      return Array.from(new Set(categories));
    },
  },
});
