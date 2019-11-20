<template>
  <nav>
    <router-link to="/"><img id="logo" src="../assets/images/logo.png"/></router-link>
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

@Component({
})
export default class Navigation extends Vue {
  scrollToContact() {
    const contactSection: HTMLElement = document.getElementById('contact-section')!;
    console.log(this);
    this.appScrollTo("#contact-section");
    // this.testFunc();
    
    // const contactSectionComponent: any = this.$parent.$children[this.$parent.$children.length - 1];
    // if (window.scrollX === contactSection.offsetLeft) {
    //   contactSectionComponent.onContactButtonClicked();
    // } else {
    //   setTimeout(() => {
    //     contactSectionComponent.onContactButtonClicked();
    //   }, 1750)
    // }
  }

  mounted() {

  }
}
</script>

<style lang="scss">
nav {
  background-color: rgba(#FFF, 0.85);
  transition: all 1s;
  position: fixed;
  top: 25px;
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
    width: 35px;

    @include small-screen-landscape {
      margin-left: 2.5em;
      width: 45px;
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
      max-width: 140px; 
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
        padding: 8px;
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
        margin: 5px 30px;
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
