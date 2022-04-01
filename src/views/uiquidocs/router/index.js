export default {
  name: 'index',
  component: () => import(/* webpackChunkName: "uiquidocs" */ '../views/Index.vue'),
  meta: { requiresAuth: false },
  children: [
    // {
    //   path:'diseno',
    //   name: 'diseno',
    //   component:  () => import(/* webpackChunkName: "diseno" */ "../views/BasicDesign.vue"),
      
    // },
  ],
};