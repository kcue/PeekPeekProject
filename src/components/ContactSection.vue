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
      <transition oname="fade">
        <div class="transition-container" v-if="showContactForm">
            <div class="modal-backdop" @click="exitForm"></div>
            <ContactForm class="contact-form"></ContactForm>
          
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
    console.log("clicked button");
    this.showContactForm = true;
    Vue.prototype.common.appScrollTo("#contact-section");
    document.body.style.overflow = 'hidden';
  }

  exitForm() {
    this.showContactForm = false;
    document.body.style.overflow = "auto";
  }

  mounted() {
    // Animate Background Rings 
    // NOTE: something is wrong with path points for ring_1.
    // consider reworking SVG files, but not animating works visually more
    // thus, we are not animating ring_1
    const duration: number = 10000;
    Vue.prototype.$anime({
      targets: '#ring_2',
      d: [
        { value: document.getElementById('ring_3').getAttribute('d') },
        { value: document.getElementById('ring_2').getAttribute('d') },
      ],
      // direction: 'alternate',
      easing: 'linear',
      duration: duration,
      loop: true
    });
    Vue.prototype.$anime({
      targets: '#ring_3',
      d: [
        { value: document.getElementById('ring_4').getAttribute('d') },
        { value: document.getElementById('ring_3').getAttribute('d') },
      ],
      // direction: 'alternate',
      easing: 'linear',
      duration: duration,
      loop: true
    });
    Vue.prototype.$anime({
      targets: '#ring_4',
      d: [
        { value: document.getElementById('ring_2').getAttribute('d') },
        { value: document.getElementById('ring_4').getAttribute('d') },
      ],
      // direction: 'alternate',
      easing: 'linear',
      duration: duration,
      loop: true
    });
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
    padding: 5vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
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
  .modal-backdop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    // background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 19;
  }
  .transition-container{
    z-index: 18;
  }
  .contact-form {
    position: fixed;
    width: 100vw;
    height: 80vh;
    left: 0;
    top: 10vh;
    border-radius: 2vh;
    z-index: 20;
  }
}
</style>
