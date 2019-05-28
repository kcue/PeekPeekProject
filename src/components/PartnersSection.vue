<template>
    <section class="peek-section wide-peek-section" id="partners-section">
        <div class="partners-section-text">
            <div class="partners-section-titles">
                <h2 class="title" id="branding"><b>Customized branding</b> with PeekPeek</h2>
                <p class="main-text" id="examples">
                    PeekPeek was created to help companies enhance the way that they present themselves through digital means. 
                    PeekPeek’s WebTour technology converts prospects to customers by allowing them to virtually visit and experience 
                    a company’s physical location. Surpassing other 3D technologies, WebTour seamlessly integrates customized design, 
                    digital assets, and interactive features to dramatically augment the experience of users.
                </p>
            </div>
            <a class="link">Check out our case studies</a>
        </div>
        <div class="partners-section-icons">
            <div class="partners-section-icon-container media" id="Waterford">
                <img src="../assets/images/City Square Waterford.png"/>
            </div>
            <div class="partners-section-icon-container media" id="Felixstowe">
                <img src="../assets/images/Felixstowe Chamber.png"/>
            </div>
            <div class="partners-section-icon-container media" id="Paypal">
                <img src="../assets/images/Paypal.png"/>
            </div>
            <div class="partners-section-icon-container media" id="UCI">
                <img src="../assets/images/UCI.png"/>
            </div>
            <div class="partners-section-icon-container media" id="Hilton">
                <img src="../assets/images/Hilton.png"/>
            </div>
            <div class="partners-section-icon-container media" id="Pierce">
                <img src="../assets/images/Pierce College.png"/>
            </div>
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
    // background-color: #4792f8;


    .partners-section-text, .partners-section-icons {
        display: flex;
        width: 50%;
    }

    .partners-section-text {
        margin-top: 5vh;
        margin-left: 20px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;

        .main-text {
            font-size: 2.8vh;
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
        margin-top: 9vh;
        margin-bottom: 2.5vh;

        .partners-section-icon-container {
            width: 50%;
            max-height: 32%;
            padding-top: 1vh;
            padding-bottom: 1vh;
            display: flex;
            justify-content: center;

            img {
                max-height: 100%;
                max-width: 100%;
                object-fit: contain;
            }
        }        
    }   
}
</style>