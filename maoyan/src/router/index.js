import Vue from "vue";
//引入 路由 的文件
import VueRouter from "vue-router";
import Movie from "../views/home/Movie.vue";

//使用插件
Vue.use(VueRouter);

//定义路由表
const routes = [
  //重定向
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Movie",
    component: Movie,
    //配置子路由
    children: [
      { path: "/home", redirect: "/home/reying" },
      {
        path: "reying",
        name: "reying",
        component: () =>
          import(/* webpackChunkName: "reying" */ "../views/home/Reying.vue"),
      },
      {
        path: "yingyuan",
        name: "yingyuan",
        component: () =>
          import(
            /* webpackChunkName: "yingyuan" */ "../views/home/Yingyuan.vue"
          ),
      },
      {
        path: "daiying",
        name: "daiying",
        component: () =>
          import(/* webpackChunkName: "daiying" */ "../views/home/Daiying.vue"),
      },
      {
        path: "jingdian",
        name: "jingdian",
        component: () =>
          import(
            /* webpackChunkName: "jingdian" */ "../views/home/Jingdian.vue"
          ),
      },
      {
        path: "search",
        name: "search",
        component: () =>
          import(
            /* webpackChunkName: "Search" */ "../views/home/Search.vue"
          ),
      },
    ],
  },
  {
    path: "/video",
    name: "Video",
    //路由懒加载 当触发点击跳转到这一页时，才加载这一页的组件
    component: () =>
      import(/* webpackChunkName: "video" */ "../views/Video.vue"),
  },
  {
    path: "/minivideo",
    name: "MiniVideo",
    component: () =>
      import(/* webpackChunkName: "minivideo" */ "../views/MiniVideo.vue"),
  },
  {
    path: "/show",
    name: "Show",
    component: () => import(/* webpackChunkName: "show" */ "../views/Show.vue"),
  },
  {
    path: "/me",
    name: "Me",
    component: () => import(/* webpackChunkName: "me" */ "../views/Me.vue"),
  },
  {
    path: "/item/:id",
    name: "Item",
    component: () => import(/* webpackChunkName: "item" */ "../views/Item.vue"),
  },
  {
    path: "/city",
    name: "City",
    component: () => import(/* webpackChunkName: "City" */ "../views/City.vue"),
  },
];

//创建 路由对象
const router = new VueRouter({
  routes,
});

//将路由对象输出
export default router;
