import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectView from "../views/ProjectView/ProjectView.vue";
import SingleProject from "../views/Project/SingleProject.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: HomeView,
    },
    children: [
      {
        path: "",
        name: "home",
        component: ProjectView,
      },
      {
        path: ":name",
        name: "SingleProject",
        component: SingleProject,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    components: {
      default: AboutView,
    },
  },
  {
    path: "/project",
    name: "project",
    components: {
      default: require("../views/Project/SingleProject.vue"),
    },
    props: (prop) => {
      console.log({ prop });
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
