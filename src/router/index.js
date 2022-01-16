import Vue from "vue";
import VueRouter from "vue-router";

import Uiquidocs from '@/views/uiquidocs/views/Index.vue'
import Videos from "@/views/videos/Index.vue";
import Diccionario from "@/views/diccionario/Index.vue";
import About from "@/views/about/Index.vue";
import Guias from "@/views/guias/Index.vue"


Vue.use(VueRouter);


const router = new VueRouter({
  mode: "history",
  
  routes: [
    {
      path: "/",
      name: "index",
      component: Uiquidocs,
    },
    {
      path: "/videos",
      name: "videos",
      component: Videos,
    },
    {
      path: '/diccionario',
      name: 'diccionario',
      component: Diccionario 
    },
    {
      path: '/guias',
      name: 'guias',
      component: Guias
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }

  ]
});

export default router;
