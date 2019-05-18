<template>
    <div>
        <div v-bind:key="item.id" v-for="item in cardsList" class="card">
            <h1>{{item.num}}</h1>
            <div class="separator"></div>
            <h3>{{item.words}}</h3>
            <h2>Lower Text</h2>
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

</style>