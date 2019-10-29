<template>
    <div id="app">
        <Navigation id="floating-nav"/>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Navigation from '@/components/Navigation.vue';

    @Component({
        components: {
            Navigation,
        }
    })

    export default class App extends Vue {
    }
</script>


<style lang="scss">
    /* Reset */
    html {
        box-sizing: border-box;
        font-size: 16px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
        margin: 0;
        padding: 0;
        font-weight: inherit;
    }

    a {
        text-decoration: none;
    }

    ol, ul {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    button {
        cursor: pointer;
    }

    /* Global Styles */
    body {
        background-color: $main-background-color;
        font-family: $base-font-family;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        // margin: 0;
        // padding: 0;
        // border: 0;
        // height: 100vh;
        // width: auto;
        // display: flex;
        // overscroll-behavior-y: none;
        // overflow-x: auto;
        // overflow-y: hidden;

        #app {}

        p, h1, h2, h4, h6, span, a, button {
            font-family: $base-font-family;
            color: $heading-color;
        }
    }
</style>