<template>
  <div id="app">
    <Navigation id="floating-nav" />
    <div id="stage-curtain"></div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";

@Component({
  components: {
    Navigation
  }
})
export default class App extends Vue {
  transitionDelay: number = 300 /* ms */;

  created() {
    // initialize scroll to element
    Vue.prototype.common.initScrollTo();

    // add delay before transitioning to a different router page
    this.$router.beforeEach((to, from, next) => {
      document.getElementById("stage-curtain")!.classList.remove("open");
      setTimeout(() => {
        next();
      }, this.transitionDelay);
    });

    // add delay 
    this.$router.afterEach((to, from) => {
      setTimeout(() => {
        document.getElementById("stage-curtain")!.classList.add("open");
      }, this.transitionDelay);
    });
  }

  mounted() {
    // initial transition on first visit
    setTimeout(() => {
      document.getElementById("stage-curtain")!.classList.add("open");
    }, this.transitionDelay);
  }
}
</script>

<style lang="scss">
@import "@/assets/css/regular.scss";

/* Reset */
html {
  box-sizing: border-box;
  font-size: 12px;

  @include small-screen-landscape {
    font-size: 14px;
  }

  @include medium-screen-landscape {
    font-size: 15px;
  }

  @include large-screen-landscape {
    font-size: 16px;
  }

  @include extra-large-screen-landscape {
    font-size: 18px;
  }

  @include high-res-screen-landscape {
    font-size: 26px;
  }

  @include ultra-high-res-screen-landscape {
    font-size: 32px;
  }
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: inherit;
  color: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

// use this class when you need to disable scrollbars
.noscroll {
  overflow: hidden;
}

// don't make scrollmagic triggers visible
.trigger {
  min-height: 0;
}

// Vue transition wrapper fade effects
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

@include medium-screen-landscape {
  // fix for scrollbar display issues
  html.no-scrollbar {
    -ms-overflow-style: none; /* IE 11 */
    scrollbar-width: none; /* Firefox 64 */

    &::-webkit-scrollbar {
      display: none; /* Safari */
    }
  } 
}

/* Global Styles */
body {
  min-width: $site-min-width;
  min-height: $site-min-height;
  background-color: $main-background-color;
  font-family: $base-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overscroll-behavior: none;

  #stage-curtain {
    background-color: $main-background-color;
    pointer-events: none;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    transition: opacity 0.3s;
    opacity: 1;
    z-index: 500;

    &.open {
      opacity: 0;
    }
  }

  .heading {
    font-size: 4.2em;
    line-height: 1.1em;
    font-weight: 700;
    color: $heading-color;
  }

  .alt-heading {
    font-size: 3.5em;
    line-height: 1.1em;
    font-weight: 700;
    color: $alt-heading-color;
  }

  .subheading {
    font-size: 1.8em;
    font-weight: 700;
    color: $subheading-color;
  }

  .alt-subheading {
    font-size: 1.8em;
    font-weight: 700;
    color: $alt-heading-color;
  }

  .primary-description {
    font-size: 1em;
    line-height: 1.5em;
    font-weight: 400;
    color: $primary-description-color;
    margin-top: 1em;
  }

  span.line {
    display: inline-block;
  }

  button, a.button {
    display: inline-block;
    width: 170px;
    padding: 10px 10px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 0.85em;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: opacity 0.5s;
    outline: none;

    @include medium-screen-landscape {
      margin-left: 0px;
      margin-right: 10px;
    }

    @include large-screen-landscape {
      margin-left: 0px;
      margin-right: 20px;
      width: 190px;
    }

    @include high-res-screen-landscape {
      padding: 15px 10px;
      width: 240px;
    }

    @include ultra-high-res-screen-landscape {
      width: 290px;
    }

    &.primary-button {
      background-color: $primary-button-background-color;
      color: $primary-button-text-color;
    }

    &.secondary-button {
      background-color: $secondary-button-background-color;
      color: $secondary-button-text-color;
    }

    &:hover {
      opacity: 0.75;
    }
  }
}
</style>
