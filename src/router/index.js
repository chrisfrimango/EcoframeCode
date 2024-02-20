import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopView from "../views/ShopView.vue";
import CartView from "../views/CartView.vue";
import CustomerSupportView from "../views/CustomerSupportView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/customersupport",
      name: "CustomerSupport",
      component: CustomerSupportView,
    },
    {
      path: "/shop",
      name: "Shop",
      component: ShopView,
    },
    {
      path: "/cart",
      name: "Cart",
      component: CartView,
    },
  ],
});

export default router;
