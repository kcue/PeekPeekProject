import Vue from "vue";
import Component from "vue-class-component";
import App from "./App.vue";
import router from "./router";
import Common from "@/mixins/common"
import VueScrollmagic from "vue-scrollmagic";
import _ from 'lodash';

// make lodash globally available as $_
Object.defineProperty(Vue.prototype, '$_', { value: _ });

Vue.config.productionTip = false;

// instantiate scrollmagic
Vue.use(VueScrollmagic, {
  vertical: false,
  globalSceneOptions: {},
  loglevel: 2,
  refreshInterval: 100
});

// global mixin
// for component-specific mixins, set in its corresponding component
Vue.mixin(Common);

Component.registerHooks([
    "beforeRouteEnter",
    "beforeRouteLeave",
    "beforeRouteUpdate",
]);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

