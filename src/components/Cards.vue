<template>
    <div>
        <div v-bind:key="item.id" :id="item.id" v-for="item in cardsList">
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
