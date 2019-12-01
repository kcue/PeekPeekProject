<template>
  <section>
    <div class="container" id="case-studies-section-container">
      <DemoGroup v-bind:is-homepage="true" />
      <div class="demo-section-text">
        <h2 class="heading">
          <span class="line">Every single&nbsp;</span>
          <span class="line">one of you&nbsp;</span>
          <span class="line">is special</span>
        </h2>
        <p class="primary-description">
          <span class="line">Take a peek at how we bring the&nbsp;</span>
          <span class="line">following industries to life</span>
        </p>
        <p class="primary-description">
          <span class="line">Check out these real WebTours and&nbsp;</span>
          <span class="line">see how they're setting the standard</span>
        </p>
        <a href="/why" id="study-button" class="button primary-button">Check out case studies</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DemoGroup from "@/components/DemoGroup.vue";

@Component({
  components: {
    DemoGroup,
  }
})
export default class CaseStudiesSection extends Vue {
}
</script>

<style lang="scss">
#case-studies-section {
  padding: 50px 0;

  @include medium-screen-landscape {
    width: auto;
    margin-right: 100px;
    padding: 0;
  }
}

#case-studies-section-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include medium-screen-landscape {
    height: 100%;
    flex-direction: row;
  }

  .demo-section-text {
    text-align: left;
    min-width: 320px;
    width: 70%;
    margin: 10% 0 100px;

    @include medium-screen-landscape {
      width: 500px;
      flex: 1 0 500px;
      white-space: initial;
      margin: 0 0 0 4em;
    }

    .primary-description {
      width: 70%;
    }

    .heading {
      margin-bottom: 0.7em;
    }
  }

  #study-button {
    margin-top: 3em;
    margin-left: 0;

    @include medium-screen-landscape {
      width: 200px;
    }
  }
}
</style>