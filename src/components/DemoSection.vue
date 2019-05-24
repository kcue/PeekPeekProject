<template>
    <section class="peek-section" id="demo-section">
        <div class="demo-section-text">
            <div class="demo-section-titles">
                <h2 class="title" id="special">Something <b>special</b></h2>
                <h4 class="subtitle" id="everysingleone">for every single one of you</h4>
            </div>
            <p class="main-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Debitis vitae dicta harum, accusamus ab, atque saepe optio nostrum nesciunt, facilis consequatur nemo dolorum pariatur provident ducimus expedita? 
                Pariatur, quidem necessitatibus.
            </p>
        </div>
        <div class="demo-section-frames">
            <div class="demo-section-frame media" id="demo-frame-one">
                <h6>Cal State Long Beach</h6>
                <p>Interactive tour</p>
                <img src="../assets/images/csulb.jpg"/>
            </div>
            <div class="demo-section-frame media" id="demo-frame-two">
                <h6>Cal State Long Beach</h6>
                <p>Interactive tour</p>
                <img src="../assets/images/csulb.jpg"/>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DemoSection extends Vue {
    
}
</script>

<style lang="scss" scoped>
#demo-section {
    display: flex;
    flex-direction: row;

    .demo-section-text, .demo-section-icons {
        display: flex;
    }

    .demo-section-text {
        margin-top: 5vh;
        display: flex;
        width: 35%;

        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;

        .main-text {
            text-align: left;
            margin-bottom: 15vh;
        }

        .title, .subtitle {
            font-weight: normal;
            text-align: left;
            margin: 0;
        }
    }

    .demo-section-frames {
        width: 65%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-end;

        .demo-section-frame {
            width: 40%;
            height: 85%;
            background: white;
            box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.18);
            border-radius: 10px 10px 0 0;

            display: flex;
            flex-direction: column;

            h6 {
                font-size: 28px;
                padding-top: 15px !important;
            }

            h6, p {
                text-align: left;
                margin-bottom: 10px;
                margin-top: 0;
                padding: 0 15px;
            }

            img {
                max-width: 100%;
                height: 85%;
                object-fit: cover;
                margin: auto auto 0 auto;
            }
        }
    }   
}
</style>