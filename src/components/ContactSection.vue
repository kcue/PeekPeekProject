<template>
    <section class="peek-section" id="contact-section">
        <div class="contact-section-interlude">
            <p>So, </p>
            <p>your turn</p>
        </div>
        <div class="contact-section-main">
            <h1>Tell me</h1>
            <h1>your story</h1>
            <button @click="onContactButtonClicked">Contact Us</button>
        </div>
        <div v-if="showContactForm" class="contact-form-overlay" @click="exitForm"></div>
        <Form v-if="showContactForm" class="contact-form"></Form>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Form from '@/components/Form.vue';

@Component({
    components: {
        Form,
    }
})
export default class ContactSection extends Vue {
    showContactForm: boolean = false;

    onContactButtonClicked() {
        this.showContactForm = true;
        document.getElementById('first-page')!.style.left = '0';
        document.getElementById('second-page')!.style.left = '100%';
        document.getElementById('third-page')!.style.left = '200%';
    }

    exitForm() {
        this.showContactForm = false;
    }
}
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


    .contact-form-overlay {
        background-color: black;
        opacity: 0.75;

        width: 100vw;
        height: 100vh;
        
        position: fixed;
        top: 0;
        left: 0;

        z-index: 19;
    }
}

button {
    font-size: 4vh;
    width: 300px;
    margin: 20px auto 20px auto;
}

</style>
