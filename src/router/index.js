import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Project from "../views/Project.vue";
import Team from "../views/Team.vue";
import Login from "../views/Login.vue";

import { isLoggedIn } from "@/utils";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.name !== "Login" && !isLoggedIn()) next({ name: "Login" });
  else next();
});

export default router;
