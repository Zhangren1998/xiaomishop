import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    name: "List",
    path: "/list",
    component: () => import("../views/List.vue"),
  },
  {
    meta: {
      needLogin: true,
    },
    name: "User",
    path: "/user",
    component: () => import("../views/User.vue"),
  },
  {
    meta: {
      needLogin: true,
      needFixed: true,
    },
    name: "Cart",
    path: "/cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    name: "Login",
    path: "/login",
    meta: {
      tabHide: true,
    },
    component: () => import("../views/user/Login.vue"),
  },
  {
    name: "Reg",
    path: "/reg",
    meta: {
      tabHide: true,
    },
    component: () => import("@/views/user/Reg.vue"),
  },
  {
    meta: {
      needLogin: true,
    },
    name: "News",
    path: "/news",
    component: () => import("../views/News.vue"),
  },
  {
    name: "Detail",
    path: "/product/:id",
    meta: {
      tabHide: true,
    },
    component: () => import("../views/Detail.vue"),
  },
  {
    name: "xiaoXi",
    path: "/xiaoXi",
    meta: {
      tabHide: true,
    },
    component: () => import("../views/xiaoXi.vue"),
  },
];
const isLoged = () => {
  if (sessionStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (isLoged()) {
      next();
    } else {
      next({
        path: "login",
        query: {
          redirect: to.fullPath,
        },
      });
    }
  } else {
    next();
  }
});
export default router;
