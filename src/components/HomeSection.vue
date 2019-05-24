<template>
    <section class="peek-section" id="home-section">
        <div class="home-pic"><img src='../assets/images/tinyWorld.png'/></div>
        <div class="home-section-headers">
            <h1>It's all about you.</h1>
            <div class=separator></div>
            <div class="home-section-buttons">
                <button>Watch video</button>
                <button>Take a peek</button>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default class HomeSection extends Vue {
    
}
</script>

<style lang="scss" scoped>
.home-pic {
    width: 40%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    img {
        height: 80%;
        position: absolute;
        right: 0;
    }
}

.home-section-headers {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 50px;

    h1 {
        margin: 20px auto 0 auto;
    }

    .separator {
        width: 40%;
        height: 4px;
        border-radius: 2px;
        background-color: #8f8f94;
        margin: 20px 0 20px 0;
    }
}

.home-section-buttons {
    margin-top: 10px;

    button {
        float: left;
        margin-right: 25px;
    }
}
</style>
