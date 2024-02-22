import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopView from "../views/ShopView.vue";
import CartView from "../views/CartView.vue";
import CustomerSupportView from "../views/CustomerSupportView.vue";
import SalesView from "../views/SalesView.vue";
import ProductPageViewTEST from "../views/ProductPageViewTEST.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import Sunwear from '@/components/Sunwear.vue'
import Popular from '@/components/Popular.vue'
import NewArrivals from '@/components/NewArrivals.vue'
import Kids from '@/components/Kids.vue'

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
      component: ProductPageViewTEST,
    },
    {
      path: "/sales",
      name: "Sales",
      component: SalesView,
    },
    {
      path: "/shop",
      name: "Shop",
      component: ShopView,
    },
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
      path: '/shop/sunwear',
      name: 'Sunwear',
      component: Sunwear,
    },
    {
      path: '/shop/popular',
      name: 'Popular',
      component: Popular,
    },
    {
      path: '/shop/new-arrivals',
      name: 'NewArrivals',
      component: NewArrivals,
    },
    {
      path: '/shop/kids',
      name: 'Kids',
      component: Kids,
    },
  ],
});

export default router;
