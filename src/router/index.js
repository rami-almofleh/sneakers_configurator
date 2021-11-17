import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("../views/HomeView.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Guard
// Check if current route confirms the selected step route
router.beforeEach((to, from, next) => {
  next();
});

export default router;
