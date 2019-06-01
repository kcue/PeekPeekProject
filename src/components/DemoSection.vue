<template>
    <section class="peek-section super-wide-peek-section" id="demo-section">
        <div class="demo-section-frames" id="demo-section-frames">
            <DemoCard v-for="(item, index) in cardData" :key="index" :id="'demo-card-' + index">
                <iframe slot="iframe" :src="item.iframe" style="display: none;"></iframe>
                <h6 slot="title">{{item.title}}</h6>
                <p slot="subtitle">{{item.subtitle}}</p>
                <img slot="img" :src="imagePath(item.img)"/> 
            </DemoCard>
        </div>
        <div class="demo-section-text">
            <div class="demo-section-titles">
                <h2 class="title" id="special">Something <b>special</b></h2>
                <h4 class="subtitle" id="everysingleone">for every single one of you</h4>
            </div>
        </div>
        <div class="demo-section-text-parallax-margin"></div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DemoCard from '@/components/DemoCard.vue';
import { TweenMax, TimelineMax } from 'gsap';

let scenes = [];

@Component({
    components: {
        DemoCard,
    }
})
export default class DemoSection extends Vue {
    mounted() {
        window.addEventListener('resize', ()=> {
            for (let i = 0; i < scenes.length; ++i)
            {
                scenes[i].destroy(true);
            }
            scenes = [];
            this.demoAnimations();
        })
        scenes = []; 
        this.demoAnimations();

        let cards = document.getElementById("demo-section-frames").children;
        console.log(cards);
        for (let i = 0; i < cards.length; ++i)
        {
            console.log("Here")
            cards[i].classList.add(i % 2 === 0 ? "demo-section-even": "demo-section-odd");
            cards[i].addEventListener("click", /*function(cards[i].id)
            }*/
            event => {
                // console.log(event.srcElement);
                // console.log(event.srcElement.classList);
                // const targetElement = event.srcElement.classList.value === '' ? event.srcElement.parentElement : event.srcElement;
                const targetElement = event.srcElement.className.toString().includes("demo-section-frame") ? event.srcElement : event.srcElement.parentElement;
                console.log(targetElement);
            });
        }
    }

    data() {
        return {
            imagePath: function (name:string): any {
                return require('../assets/images/' + name + '.png')
            }, 
            cardData: [
            {
                iframe: "http://panosensing.com/temp/peekpeek/LB_Rec_Center/v3.html",
                title: "University of California, Irvine",
                subtitle: "Anteater Recreational Center Tour",
                img: "uci-arc",
            },
            {
                iframe: "http://panosensing.com/temp/peekpeek/LB_Rec_Center/v3.html",
                title: "Cal State Long Beach",
                subtitle: "Wellness Center Tour",
                img: "csulb-wellness",
            },
            {
                iframe: "http://panosensing.com/temp/peekpeek/LB_Rec_Center/v3.html",
                title: "Fish on Tap",
                subtitle: "Restaurant Tour",
                img: "fish-on-tap",
            },
            {
                iframe: "http://panosensing.com/temp/peekpeek/LB_Rec_Center/v3.html",
                title: "West Covina Estates",
                subtitle: "Home Tour",
                img: "west-covina",
            }
        ]
        }
    }

    demoAnimations(){
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let demos = document.getElementsByClassName("flippety");

        for (let i = 0; i < demos.length; ++i) {
            Vue.prototype.$scrollmagic.addScene(new Vue.prototype.$scrollmagic.scene({
                triggerElement: `#${demos[i].id}`,
                duration: demos[i].clientWidth * 1.25,
                offset: demos[i].clientWidth * .3,
                triggerHook: 'onEnter',
                reverse: false,
            }).setTween(`#${demos[i].id}`, {y: i % 2 === 0 ? -window.innerHeight * 0.85 : window.innerHeight * 0.85, ease: Sine.easeNone})
            )
        }
    }
    
    getParentSection(elementName: string): string {
        const element = document.getElementById(elementName);
        let result = element.parentElement;
        while (result !== null) {
            if (result.tagName === 'SECTION') {
                break;
            }
            result = result.parentElement;
        }
        return result.id;
  }

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
        margin-left: 30px;
        display: flex;
        width: 78.75vh; // 175vh * 0.45

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
        width: 140vh; // 175vh * 55% + 43.75vh (175vh * 50% / 2)
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-left: 20px;


        .demo-section-frame:nth-child(odd) {
            border-radius: 10px 10px 0 0;
            margin: auto 10px -85vh 10px;
            
            img {
                margin: auto auto 0 auto;
            }
        }

        .demo-section-frame:nth-child(even) {
            border-radius: 0 0px 10px 10px;
            margin: -85vh 10px auto 10px;

            img {
                margin: 0 auto auto auto;
            }

            h6, p {
                order: 2;
            }

        }

        .demo-section-frame {
            box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.5);
            width: 40%;
            height: 85%;
            background: white;
            cursor: pointer;

            display: flex;
            flex-direction: column;

            img {
                max-width: 100%;
                height: 85%;
                object-fit: cover;
            }

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
        }
    }  

    .demo-section-text-parallax-margin {
        width: 43.75vh;
    }
}
</style>