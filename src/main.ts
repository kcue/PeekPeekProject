import Vue from "vue";
import Component from "vue-class-component";
import App from "./App.vue";
import router from "./router";

import axios from "axios";
import VueAxios from "vue-axios";
import VueScrollmagic from "vue-scrollmagic";
import anime from "animejs";

import _ from "lodash";
import common from "@/shared/common"

import VueAnalytics from "vue-analytics";

Vue.use(VueAnalytics, {
  id: 'UA87364832-1',
});

// axios is for API interaction
Vue.use(VueAxios, axios);

// make lodash available as $_
Object.defineProperty(Vue.prototype, '$_', { value: _ });

// set common methods as globally available
Object.defineProperty(Vue.prototype, "common", { value: common });

Vue.config.productionTip = false;

// instantiate scrollmagic
Vue.use(VueScrollmagic, {
  vertical: false,
  globalSceneOptions: {},
  loglevel: 2,
  refreshInterval: 100
});

// instantiate animejs -- $anime
Object.defineProperty(Vue.prototype, "$anime", { value: anime });

// vue-router hooks
Component.registerHooks([
    "beforeRouteEnter",
    "beforeRouteLeave",
    "beforeRouteUpdate",
]);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

