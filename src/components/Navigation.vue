<template>
    <ul class="nav-buttons">
        <li><span class="nav-item">Who</span></li>
        <li><span class="nav-item">What</span></li>
        <li><span class="nav-item">Why</span></li>
        <li><button>Contact Us</button></li>
    </ul>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {
    
}
</script>

<style lang="scss" scoped>
.nav-buttons {
    z-index: 10;

    li {
        display: inline-block;
        margin: 10px 25px;

        text-transform: capitalize;

        span {
            font-size: 20px;
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
</style>
