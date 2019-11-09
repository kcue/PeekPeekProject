<template>
  <section>
    <h2 class="alt-heading">{{ headingTitle }}</h2>
    <div id="works-container">
      <DemoGroup />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import DemoGroup from "@/components/DemoGroup.vue";

@Component({
  components: {
    DemoGroup
  }
})
export default class WorksSection extends Vue {
  @Prop() private headingTitle!: string;
}
</script>

<style lang="scss">
#works-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 0;

  h2 {
    line-height: 2em;
  }

  #works-container {
    display: flex;
    flex: 1 0 auto;

    #demo-group {
      margin-left: 0;
      width: 100%;
    }
  }
}

@include medium-screen-landscape {
  #works-section {
    min-height: 600px;
    max-height: 700px;
    height: 100vh;

    #demo-group #demo-cards {
      width: 90%;
      margin: 0 5%;

      .demo-card {
        height: 80%;
      }
    }
  }
}

@include large-screen-landscape {
  #works-section {
    max-height: 1000px;
  }
}
</style>
