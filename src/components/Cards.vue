<template>
    <div>
        <div v-bind:key="item.id" v-for="item in cardsList" class="card">
            <div class="num">{{item.num}}</div>
            <div class="separator"></div>
            <div class="card-words">{{item.words}}</div>
            <div class="lower-words">Lower Text</div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "Cards",
    props: ["cardsList"]
}
</script>

<style scoped>

.card {
    /*pointer-events: auto;*/
    /*position: absolute;*/
    border: 0 none rgb(216, 221, 228);
    background-color: rgb(254, 255, 254);
    border-radius: 10px;
    overflow: visible;
    /*z-index: 1;*/
    box-shadow: rgba(0, 0, 0, 0.18) 0 2px 15px;
    width: 311px;
    height: 266px;
    /*top: 4px;*/
    /*left: 0;*/
}
.num {
    /*pointer-events: auto;*/
    /*position: absolute;*/
    color: rgb(0, 0, 0);
    padding: 8px;
    display: inline;
    font-family: "Libre Franklin",sans-serif;
    font-size: 100px;
    font-style: normal;
    overflow-wrap: break-word;
    font-weight: 700;
    overflow: visible;
    /*z-index: 4;*/
    width: 285px;
    height: 93px;
    /*top: 10px;*/
    /*left: 10px;*/
}
.separator {
    /*pointer-events: auto;*/
    /*position: absolute;*/
    background-color: rgb(143, 143, 148);
    border-radius: 24px;
    border: 0 none rgb(216, 221, 228);
    overflow: visible;
    /*z-index: 2;*/
    width: 62px;
    height: 7px;
    /*top: 146px;*/
    /*left: 21px;*/
}
    .card-words {
        letter-spacing: -1.16165px;
        font-family: "Libre Franklin",sans-serif;
    }
    .lower-words {
        font-weight: 700;
        font-size: 27px;
        color: rgb(4, 125, 131);
        font-family: "Libre Franklin",sans-serif;

    }

</style>