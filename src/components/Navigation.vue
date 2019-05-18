<template>
    <header>
        <ul>
            <li>Who</li>
            <li>What</li>
            <li>Why</li>
            <li class="space">  </li>
            <div class="blue-btns">Contact Us</div>
        </ul>

    </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";


@Component
export default class Navigation extends Vue {
}
</script>


<style lang="scss" scoped>

</style>

<style scoped>
    header {
        position: fixed;
        top:0;
        right: 0;
        z-index: 10;
        background: transparent;
    }
    ul {
        /* margin: 30px auto; */
        padding: 0 20px;
        text-align: center;
        display: flex;
        flex-flow: nowrap;
        justify-content: space-between;
        background: transparent;
    }

    li {
        flex: 1 1 auto;
        display: inline-block;
        color: #17a4a9;
        font-family: 'Libre Franklin', sans-serif;
        font-size: 24px;
        font-weight: 300;
        letter-spacing: -0.6px;
        text-transform: uppercase;
        padding: 8px;
        background: transparent;

    }

    li:hover {

    }
    li:not(.space):not(.contact){
        padding-left: 40px;
    }

    li:not(.space):not(.contact)::after {
        display:block;
        content: '';
        border-bottom: solid 2px #17a4a9;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }

    li:not(.space):hover::after {
        transform: scaleX(0.90);
    }
</style>