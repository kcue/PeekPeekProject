<template>
  <section>
    <div class="container" id="contact-section-container">
      <contactSectionSVG id="contactSectionSVG" style="" />
      <div class="contact-section-interlude">
        <h2 class="subheading">{{ interludeText }}</h2>
      </div>
      <div class="contact-section-main">
        <h2 class="heading">{{ headingTextLine1 }}</h2>
        <h2 class="heading">{{ headingTextLine2 }}</h2>
        <button class="primary-button" @click="onContactButtonClick">{{ contactUsButtonText }}</button>
      </div>
      <transition name="fade">
        <div class="modal-backdrop" v-on:click.self="exitForm" v-if="showContactForm">
          <ContactForm @exitForm="exitForm" class="contact-form" ></ContactForm>
        </div>
      </transition>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ContactForm from "@/components/ContactForm.vue";

import contactSectionSVG from "@/assets/images/contact-rings.svg?inline";

@Component({
  components: {
    ContactForm,
    contactSectionSVG,
  }
})
export default class ContactSection extends Vue {
  @Prop() private interludeText!: string;
  @Prop() private headingTextLine1!: string;
  @Prop() private headingTextLine2!: string;
  @Prop() private contactUsButtonText!: string;

  showContactForm: boolean = false;
  onContactButtonClick() {
    this.showContactForm = true;
    Vue.prototype.common.appScrollTo("#contact-section");
    document.body.classList.add("noscroll");
  }

  exitForm() {
    this.showContactForm = false;
    document.body.classList.remove("noscroll");
  }

  mounted() {
    // Animate Background Rings 
    // NOTE: something is wrong with path points for ring_1.
    // consider reworking SVG files, but not animating works visually more
    // thus, we are not animating ring_1
    const duration: number = 10000;
    Vue.prototype.$anime({
      targets: "#ring_2",
      d: [
        { value: document.getElementById("ring_3").getAttribute("d") },
        { value: document.getElementById("ring_2").getAttribute("d") },
      ],
      // direction: 'alternate',
      easing: "linear",
      duration: duration,
      loop: true
    });
    Vue.prototype.$anime({
      targets: "#ring_3",
      d: [
        { value: document.getElementById("ring_4").getAttribute("d") },
        { value: document.getElementById("ring_3").getAttribute("d") },
      ],
      // direction: 'alternate',
      easing: "linear",
      duration: duration,
      loop: true
    });
    Vue.prototype.$anime({
      targets: "#ring_4",
      d: [
        { value: document.getElementById("ring_2").getAttribute("d") },
        { value: document.getElementById("ring_4").getAttribute("d") },
      ],
      // direction: 'alternate',
      easing: "linear",
      duration: duration,
      loop: true
    });

    (<any> window).contactFormResize = Vue.prototype.$_.debounce(this.contactFormResize, 1000);
    window.addEventListener("resize", (<any> window).contactFormResize);
  }

  beforeDestroy() {
    document.body.classList.remove("noscroll");

    window.removeEventListener("resize", (<any> window).contactFormResize);
    (<any> window).contactFormResize = undefined;
  }

  contactFormResize() {
    if (this.showContactForm) {
      Vue.prototype.common.appScrollTo("#contact-section");
    }
  }
}
</script>

<style lang="scss" scoped>
#contact-section-container {
  min-height: $site-min-height;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  #contactSectionSVG {
    transform: scale(1);
    height: 100%;
    width: 100%;
    padding: 2%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    visibility: hidden;

    @include small-screen-landscape {
      visibility: visible;
    }
  }

  .contact-section-interlude {
    h2 {
      text-align: center;
    }
  }

  .contact-section-main {
    h2 {
      margin-top: 0;
      margin-bottom: 0;
      text-align: center;
    }
  }

  button {
    display: block;
    margin: 3em auto 0;
  }

  .modal-backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    
    &:before {
      content: "";
      display: block;
      position: absolute;
      height: 75%;
      width: 100%;
      z-index: -1;
      background: url("../assets/images/contactform-bg.svg") center no-repeat;
      background-size: cover;

      @include medium-screen-landscape {
        height: 70%;
        width: 85%;
        background-size: contain;
      }

      @include high-res-screen-landscape {
        height: 80%;
      }
    }
    
    .contact-form {
      width: 100vw;
      height: auto;

      @include medium-screen-landscape {
        width: 80vw;
      }

      @include large-screen-landscape {
        min-width: 800px;
        max-width: 950px;
        min-height: 500px;
        width: 60vw;
      }

      @include high-res-screen-landscape {
        max-width: 1250px;
      }
    }
  }
}
</style>
