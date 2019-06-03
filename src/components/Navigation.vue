<template>
    <nav>
        <div class="nav-backdrop"></div>
        <img id="logo" src="../assets/images/117-peek-teal.png">
        <ul class="nav-buttons">
            <li><span class="nav-item">Who</span></li>
            <li><span class="nav-item">What</span></li>
            <li><span class="nav-item">Why</span></li>
            <li><button>Contact Us</button></li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {
    
}
</script>

<style lang="scss" scoped>
nav {
    transition: all 1s;
    z-index: 11;

    #logo {
        margin: 2vh 0 2vh 0;
        padding: 0 3vh 0 3vh;
        position: fixed;
        top: 0;
        left: 0;
        width: 6vh;
    }

    .nav-buttons {
        li {
            display: inline-block;
            margin: 10px 25px;

            text-transform: capitalize;

            span {
                font-size: 2.4vh;
                color: #16a4a9;
                text-transform: uppercase;
            }
        }

        span::after {
            display: block;
            content: '';
            border-bottom: solid 2px #17a4a9;
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
        }

        span:hover::after {
            transform: scaleX(0.90);
        }
    }
}

.nav-backdrop {
    position: absolute;
    border-radius: 50px;
    top: 23px;
    height: 50px;
    width: 100vw;
    background-color: rgba(251, 246, 240, .8);
    z-index: -1;
}

</style>
