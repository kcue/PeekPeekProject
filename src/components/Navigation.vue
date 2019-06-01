<template>
    <nav>
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
    z-index: 10;

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
    top: 0;
    height: 96px;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.01);
    z-index: -1;
    filter: blur(2px);
}
</style>
