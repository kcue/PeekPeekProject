<template>
  <nav>
    <div class="nav-backdrop"></div>
    <a href="/"><img id="logo" src="../assets/images/logo.png"/></a>
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
      <button class="primary-button">&nbsp;</button>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default class Navigation extends Vue {
}
</script>

<style lang="scss">
nav {
  position: fixed;
  top: 25px;
  right: 10px;
  transition: all 1s;
  z-index: 10000;

  @include medium-screen-landscape {
    top: 40px;
    right: 20px;
  }

  .nav-backdrop {
    background-color: rgba(#FFF, 0.8);
    border-radius: 50px;

    position: absolute;
    height: 45px;
    width: 100vw;
    z-index: -1;
  }

  #logo {
    position: fixed;
    top: 25px;
    left: 50px;
    width: 45px;

    @include medium-screen-landscape {
      top: 40px;
      left: 70px;
    }
  }

  button.primary-button {
    display: inline-block;
    position: relative;
    width: 32px;

    @include small-screen-landscape {
      width: 10vw;
      min-width: 110px;
      max-width: 140px; 
    }

    @include small-screen-landscape {
      margin-left: 30px;
    }

    &:after {
      display: block;
      font-family: "Font Awesome 5 Free";
      font-weight: 400;
      font-size: 1.4em;
      content: "\f0e0";
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      padding: 9px;

      @include small-screen-landscape {
        padding: 10px;
        font-family: "Open Sans";
        font-size: 1em;
        font-weight: 700;
        content: "Contact Us";
        padding: 10px;
      }
    }
  }

  .nav-buttons {
    margin-left: 20px;

    li {
      display: inline-block;
      margin: 10px 15px;
      text-transform: uppercase;

      @include small-screen-landscape {
        margin: 10px 30px;
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
