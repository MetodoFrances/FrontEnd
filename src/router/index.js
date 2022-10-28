import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "root",
    redirect: { name: "sign-in" }
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("../security/pages/sign-in.component.vue")
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("../security/pages/sign-up.component.vue")
  }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition;
      else return { left: 0, top: 0 };
    },
});


router.beforeEach((to, from, next) => {
  const publicPages = ["/sign-in", "/sign-up"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = JSON.parse(localStorage.getItem("auth"));
  //console.log(loggedIn);
  if (authRequired && !loggedIn) {
    next("/sign-in");
  } else {
    next();
  }
});

export default router;