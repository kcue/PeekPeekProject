<template>
    <div id="form-container">
        <div class="form-page" id="first-page">
            <h2>Industry</h2>
            <div class="form-buttons-container">
                <div class="form-button" v-for="item in buttonData.industryPage" @click="scrollToLocation($event)" :key="item.id">
                    <span>{{item}}</span>
                </div>
            </div>
        </div>

        <div class="form-page" id="second-page">
            <h2>Location</h2>
            <div class="form-buttons-container">
                <div class="form-button" v-for="item in buttonData.locationPage" @click="scrollToCustomerInformation($event)" :key="item.id">
                    <span>{{item}}</span>
                </div>
            </div>
        </div>

        <div class="form-page" id="third-page">
            <h2>Awesome!</h2>
            <p>We will be working hard to create a customized estimation for you very soon. 
            <br/>
                For now, we just need a little bit of information
                in order to reach out to you.
            </p>
            <div class="form-content-container">
                <div class="name form-element">
                    <input placeholder="Name" type="text"/>
                </div>

                <div class="email form-element">
                    <input placeholder="Email" type="text"/>
                </div>

                <div class="phone form-element">
                    <input placeholder="Phone" type="text"/>
                </div>

                <div class="inquiry form-element">
                    <textarea placeholder="Inquiry" type="text"/>
                </div>
            </div>

            <button>Submit</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Form extends Vue {
    data() {
        return {
            buttonData: {
                industryPage: ['Hospitality', 'Restaurant', 'Campus', 'Other'],
                locationPage: ['Los Angeles', 'Orange County', 'Riverside', 'Other']
            }
        }
    }

    scrollToLocation(event) {
        console.log(event);
        let target = event.srcElement;
        target = target.tagName === 'SPAN' ? target.innerHTML : target.children[0].innerHTML;
        console.log(`You clicked: ${target}`)
        document.getElementById('first-page')!.style.left = '-100%';
        document.getElementById('second-page')!.style.left = '0';
        document.getElementById('third-page')!.style.left = '100%';
    }

    scrollToCustomerInformation(event) {
        console.log(event);
        document.getElementById('first-page')!.style.left = '-200%';
        document.getElementById('second-page')!.style.left = '-100%';
        document.getElementById('third-page')!.style.left = '0';
    }
}
</script>

<style lang="scss" scoped>
#form-container {
    background-color: black;
    
    .form-page {
        width: 100%;
        height: calc(100% - 4vh);
        position: absolute;
        top: 2vh;

        transition: left 1s ease;

        display: flex;
        flex-direction: column;

        h2 {
            font-size: 6vh;
            margin-top: 3vh;
            margin-bottom: 0;
        }

        .form-buttons-container {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;

            .form-button {
                background: grey;
                border-radius: 50%;
                height: 20vh;
                width: 20vh;

                display: flex;
                flex-direction: column;
                justify-content: center;

                cursor: pointer;

                span {
                    font-size: 3vh;
                }
            }
        }
    }

    .form-page:nth-child(1) {
        left: 0%;
    }

    .form-page:nth-child(2) {
        left: 100%;
    }

    .form-page:nth-child(3) {
        left: 200%;
    }

    .form-button, h2, p, span {
        color: white;
    }

    #third-page {
        width: 50vw;
        margin-left: 25vw;
        margin-right: 25vw;

        p {
            margin-top: 2vh;
            margin-bottom: 2vh;
            font-size: 2vh;
            line-height: 3vh;
        }

        button {
            margin-bottom: 5vh;
            width: 30%;
            align-self: center;
            cursor: pointer;
        }

        .form-content-container {
            display: flex;
            flex-direction: column;
            flex: 1;

            .form-element {
                display: flex;
                flex-direction: row;
                margin-bottom: 2%;

                display: flex;
                justify-content: center;

                input, textarea {
                    width: 70%;
                    border-radius: 2vh;
                    border: none;
                    font-size: 105%;
                    padding-left: 1vw;
                }
            }

            .form-element:first-child {
                margin-top: 2%;
            }
            .form-element:not(:last-child) {
                height: 10%;
            }
            .form-element:last-child {
                height: 24%;

                textarea {
                    padding-top: 1vh;
                    resize: none;
                }
            }
        }
    }
    
}
</style>
