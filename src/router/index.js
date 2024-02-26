import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopView from "../views/ShopView.vue";
import CartView from "../views/CartView.vue";
import CustomerSupportView from "../views/CustomerSupportView.vue";
import SalesView from "../views/SalesView.vue";
import ProductPageView from "../views/ProductPageView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import MoreAdviceView from "@/views/MoreAdviceView.vue";
import OrderConfirmationView from "@/views/OrderConfirmationView.vue";

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
      path: "/product/:productId",
      name: "ProductPage",
      component: ProductPageView,
    },
    {
      path: "/sales",
      name: "Sales",
      component: SalesView,
    },
    // {
    //   path: "/shop",
    //   name: "Shop",
    //   component: ShopView,
    // },
    {
      path: "/shop/:category",
      name: "Shop",
      component: ShopView,
    },
    {
      path: "/cart",
      name: "Cart",
      component: CartView,
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: CheckoutView,
    },
    {
      path: "/orderconfirmation",
      name: "OrderConfirmation",
      component: OrderConfirmationView,
    },
    {
      path: "/Advice",
      name: "Advice",
      component: MoreAdviceView,
    },
  ],
});

export default router;
