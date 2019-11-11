<template>
  <div id="app">
    <Navigation id="floating-nav" />
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
export default class App extends Vue {}
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

  @include large-screen-landscape {
    font-size: 16px;
  }

  @include extra-large-screen-landscape {
    font-size: 18px;
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

/* Global Styles */
body {
  min-width: $site-min-width;
  min-height: $site-min-height;
  background-color: $main-background-color;
  font-family: $base-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

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
      opacity: 0.8;
    }
  }
}
</style>
