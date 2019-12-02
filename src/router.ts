import Vue from "vue";
import Router from "vue-router";

import Home from "./views/HomePage.vue";
import Who from "./views/WhoPage.vue";
import What from "./views/WhatPage.vue";
import Why from "./views/WhyPage.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/who",
      name: "who",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Who,
    },
    {
      path: "/what",
      name: "what",
      component: What,
        
    },
    {
      path: "/why",
      name: "why",
      component: Why,
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition;
    } else { 
      return { x: 0, y: 0 }
    }
  }
});
