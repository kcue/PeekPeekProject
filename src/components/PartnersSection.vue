<template>
    <section class="peek-section" id="partners-section">
        <div class="partners-section-text">
            <div class="partners-section-titles">
                <h2 class="title" id="branding"><b>Customized branding</b> with PeekPeek</h2>
                <p class="main-text" id="examples">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Debitis vitae dicta harum, accusamus ab, atque saepe optio nostrum nesciunt, facilis consequatur nemo dolorum pariatur provident ducimus expedita? 
                    Pariatur, quidem necessitatibus.
                </p>
            </div>
            <a class="link">Check out our case studies</a>
        </div>
        <div class="partners-section-icons">
            <img src="../assets/images/sample-logo.png"/>
            <img src="../assets/images/sample-logo.png"/>
            <img src="../assets/images/sample-logo.png"/>
            <img src="../assets/images/sample-logo.png"/>
            <img src="../assets/images/sample-logo.png"/>
            <img src="../assets/images/sample-logo.png"/>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PartnersSection extends Vue {
    
}
</script>

<style lang="scss" scoped>
#partners-section {
    display: flex;
    flex-direction: row;

    .partners-section-text, .partners-section-icons {
        display: flex;
        width: 50%;
    }

    .partners-section-text {
        margin-top: 5vh;

        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;

        .main-text {
            text-align: left;
        }

        .title {
            font-weight: normal;
            text-align: left;
        }

        a {
            margin-bottom: 15vh;
            text-decoration: underline;
        }
    }

    .partners-section-icons {
        flex-wrap: wrap;
        margin-top: 85px;

        img {
            max-width: 50%;
            max-height: 33%;
            object-fit: contain;
        }
    }   
}
</style>