import Vue from "vue";
import VueRouter from "vue-router";
import MainIndex from "@/views/index/Index"

Vue.use(VueRouter);


const router = new VueRouter({
  mode: "history",
  
  routes: [
    {
      path: "/",
      name: "index",
      component: MainIndex,
    }
  ]
});

export default router;
