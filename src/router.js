import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import PostDetails from "./components/PostDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/post-details/:id",
      name: "post-details",
      component: PostDetails,
    },
  ],
});

export default router;
