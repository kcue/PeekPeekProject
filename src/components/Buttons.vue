<template>
    <div>
        <div v-bind:key="item.id" v-for="item in buttonList">
            <button :id="item.id" type="button">{{item.label}}</button>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Buttons",
        props: ["buttonList"]
    }
</script>