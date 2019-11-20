<template>
  <section>
    <div class="container" id="contact-section-container">
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

@Component({
  components: {
    ContactForm
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
    const contactSection: HTMLElement = document.getElementById('contact-section')!;
    window.scrollTo({
      "top": (contactSection.offsetTop) ? contactSection.offsetTop : contactSection.offsetLeft,
      "left": contactSection.offsetLeft,
      "behavior": "smooth"
    })
    document.body.style.width = '100%';
    document.documentElement.style.overflow = 'hidden';
  }

  exitForm() {
    this.showContactForm = false;
    document.documentElement.style.overflow = 'auto';
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
    margin: 50px auto 0;
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
