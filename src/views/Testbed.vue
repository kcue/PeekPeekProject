<template>
    <div class="home">
        <h1>Testbed!</h1>
        <HelloWorld msg="This is your Testbed Page!"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Testbed extends Vue {}
</script>
