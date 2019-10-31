<template>
  <section>
    <div class="container" id="contact-section-container">
      <div class="contact-section-interlude">
        <h2>So, your turn</h2>
      </div>
      <div class="contact-section-main">
        <h2>Tell me</h2>
        <h2>your story</h2>
        <button class="primary-button" @click="onContactButtonClick">Contact Us</button>
      </div>
      <transition name="fade">
        <div class="transition-container" v-if="showContactForm">
          <div class="contact-form-overlay" @click="exitForm"></div>
          <ContactForm class="contact-form"></ContactForm>
        </div>
      </transition>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContactForm from "@/components/ContactForm.vue";

@Component({
  components: {
    ContactForm
  }
})
export default class ContactSection extends Vue {
  showContactForm: boolean = false;

  onContactButtonClick() {
    console.log("clicked button");
  }

  exitForm() {
    this.showContactForm = false;
  }
}
</script>

<style lang="scss" scoped>
#contact-section-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .contact-section-interlude {
    h2 {
      font-size: 1.8em;
      font-weight: 700;
      color: $subheading-color;
      text-align: center;
    }
  }

  .contact-section-main {
    h2 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 4.2em;
      line-height: 1.1em;
      font-weight: 700;
      color: $heading-color;
      text-align: center;
    }
  }

  button {
    display: block;
    margin: 50px auto 0;
  }

  /* TODO: FIX CONTACT FORM */
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
