import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: HomeView,
    },
  },
  {
    path: "/about",
    name: "about",
    components: {
      default: AboutView,
      header: require("../components/Header/NavHeader.vue").default,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
