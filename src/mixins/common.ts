import { Vue, Component } from "vue-property-decorator";
import { TweenMax, ScrollToPlugin } from "gsap/all";

@Component({})
export default class Common extends Vue {
  created(): void {
    Vue.prototype.$scrollmagic.handleScrollTo = function (target) {
      TweenMax.to(window, 0.5, {
        scrollTo: {
          x: target,
          y: target
        }
      });
    }
  }
  
  appScrollTo(selector): void {
    var elem: Object = document.querySelector(selector);
    Vue.prototype.$scrollmagic.scrollTo(elem);
  }
}
