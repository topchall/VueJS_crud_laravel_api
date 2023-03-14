import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home";
import gallery from "./components/Gallery";
import About from "./components/About";
import Login from "./components/login";
import edit from "./components/edit";
import Delete from "./components/delete";
import Registration from "./components/registration.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },

  {
    path: "/edit/:id",
    name: "edit",
    component: edit
  },
  {
    path: "/delete/:id",
    name: 'delete',
    component: Delete
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/gallery",
    name: "gallery",
    component: gallery
  },

  {
    path: "/registration",
    name: "registration",
    component: Registration
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;