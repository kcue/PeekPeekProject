<template>
  <nav>
    <router-link to="/"><img id="logo" src="../assets/images/logo.png" @click="common.appScrollTo('#home-section');" /></router-link>
    <ul class="nav-buttons">
      <li>
        <span class="nav-item"><router-link to="/who">WHO</router-link></span>
      </li>
      <li>
        <span class="nav-item"><router-link to="/what">WHAT</router-link></span>
      </li>
      <li>
        <span class="nav-item"><router-link to="/why">WHY</router-link></span>
      </li>
      <li>
        <button class="primary-button" @click="scrollToContact">&nbsp;</button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Navigation extends Vue {
  scrollToContact() {
    Vue.prototype.common.appScrollTo("#contact-section");
    
    let contactBtn: HTMLElement = document.querySelector(".contact-section-main button") as HTMLElement;
    setTimeout(() => {
      contactBtn.click();
    }, 500);
  }
}
</script>

<style lang="scss">
nav {
  background-color: rgba(#FFF, 0.7);
  transition: all 1s;
  position: fixed;
  top: 0;
  z-index: 10000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  min-width: $site-min-width;

  #logo {
    display: inherit;
    margin: 10px 0 10px 2em;
    width: 2.5em;

    @include small-screen-landscape {
      margin-left: 2.5em;
      // width: 45px;
    }
  }

  button.primary-button {
    display: inline-block;
    position: relative;
    width: 32px;
    margin: 0;

    @include small-screen-landscape {
      width: 10vw;
      min-width: 110px;
      max-width: 160px; 
    }

    @include large-screen-landscape {
      width: 12vw;
      max-width: 220px;
    }

    &:after {
      display: block;
      font-family: "Font Awesome 5 Free";
      font-weight: 400;
      font-size: 1.4em;
      content: "\f0e0";
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      pointer-events: none;


      @include small-screen-landscape {
        font-family: "Open Sans";
        font-size: 1em;
        font-weight: 700;
        content: "Contact Us";
      }
    }
  }

  .nav-buttons {
    margin-left: 20px;

    li {
      display: inline-block;
      margin: 5px 15px;
      text-transform: uppercase;

      @include small-screen-landscape {
        margin: 5px 2em;
      }

      span {
        font-size: 0.85em;
        font-weight: 700;
        color: $heading-color;
        text-transform: uppercase;

        &::after {
          display: block;
          content: "";
          border-bottom: solid 2px $heading-color;
          transform: scaleX(0);
          transition: transform 250ms ease-in-out;
        }

        &:hover::after {
          transform: scaleX(0.9);
        }
      }
    }
  }
}
</style>
