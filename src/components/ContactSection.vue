<template>
  <section class="peek-section" id="contact-section">
    <div class="contact-section-interlude">
      <p>So,</p>
      <p>your turn</p>
    </div>
    <div class="contact-section-main">
      <h1>Tell me</h1>
      <h1>your story</h1>
      <button><a href="https://www.peekpeek.com/contact">Contact Us</a></button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ContactSection extends Vue {}
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: white
  }
#contact-section {
  justify-content: center;

  .contact-section-interlude {
    margin-top: 100px;

    p {
      font-size: 5.5vh;
      text-align: left;
    }
  }

  .contact-section-main {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      margin-top: 0;
      margin-bottom: 0;
      text-align: center;
    }

    button {
      font-size: 4vh;
      width: 300px;
      margin: 20px auto 20px auto;
    }
  }
}
</style>
