import { Vue } from "vue-property-decorator";
import { TweenMax, ScrollToPlugin } from "gsap/all";

const common = {  
  getViewportSize: () => {
    var e: any = window;
    var a: any = "inner";
    if (!("innerWidth" in window)) {
        a = "client";
        e = document.documentElement || document.body;
    }
    return { width : e[a + "Width"] , height : e[a + "Height"] }
  },

  initScrollTo: () => {
    Vue.prototype.$scrollmagic.handleScrollTo = function (target) {
      var viewport: any = common.getViewportSize();
      var offsetX: any = (viewport.width - target.offsetWidth) / 2;
      var offsetY: any = (viewport.height - target.offsetHeight) / 2;
      TweenMax.to(window, 0.5, {
        scrollTo: {
          x: target,
          offsetX: offsetX,
          y: target,
          offsetY: offsetY
        }
      });
    }
  },

  appScrollTo: (selector) => {
    var elem: any = (typeof selector === "string") ? document.querySelector(selector) : selector;
    if (elem != undefined) {
      Vue.prototype.$scrollmagic.scrollTo(elem);
    }
  }
}

export default common;