<template>
  <section>
    <div class="container" id="why-section-container">
      <div class="group">
        <h1 class="heading">Why</h1>
        <h2 class="subheading">Modern Challenge</h2>
        <h2 class="alt-subheading">Modern Solution</h2>
      </div>
      <div class="why-cards group">
        <div class="why-cards-container">
          <FeatureCard v-for="(item, index) in cardData" :key="index" :id="'feature-card-' + index" :class="'feature-card ' + item.layoutClasses">
            <div slot="title" class="card-title-group">
              <h5 class="subheading small">{{ item.subtitle }}</h5>
              <h4 class="alt-subheading">{{ item.title }}</h4>
            </div>
            <div slot="content" class="feature-content">
              <div class="column">
                <h6 class="column-title">{{ item.columnTitle1 }}</h6>
                <p class="column-body">{{ item.columnBody1 }}</p>
              </div>
              <div class="column">
                <h6 class="column-title">{{ item.columnTitle2 }}</h6>
                <p class="column-body">{{ item.columnBody2 }}</p>
              </div>
              <div class="column">
                <h6 class="column-title">{{ item.columnTitle3 }}</h6>
                <p class="column-body">{{ item.columnBody3 }}</p>
                <a class="button primary-button" target="_blank" :href="item.btnLink">{{ item.btnText }}</a>
              </div>
            </div>
            <div slot="img" class="feature-img" :style="{ backgroundImage: `url(${imagePath(item.img)})` }"></div>
          </FeatureCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FeatureCard from "@/components/FeatureCard.vue";

@Component({
  components: {
    FeatureCard
  }
})
export default class WhySection extends Vue {
  data() {
    return {
      imagePath: function (name:string): any {
        return require("../assets/images/" + name)
      }, 
      cardData: [
        {
          layoutClasses: "",
          subtitle: "Case Study",
          title: "Education",
          columnTitle1: "Problem",
          columnBody1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo mi et sapien hendrerit posuere. Nunc at nisi nisi. Donec at pulvinar magna. Aliquam mollis sapien eget sapien tempor fermentum. Etiam tincidunt sapien nunc. Suspendisse potenti. Suspendisse in eros ultrices, porta quam et, condimentum enim.",
          columnTitle2: "Solution",
          columnBody2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo mi et sapien hendrerit posuere. Nunc at nisi nisi. Donec at pulvinar magna. Aliquam mollis sapien eget sapien tempor fermentum. Etiam tincidunt sapien nunc.",
          columnTitle3: "Results",
          columnBody3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo mi et sapien hendrerit posuere. Nunc at nisi nisi. Donec at pulvinar magna.",
          btnLink: "http://vr.peekpeek.com/UCI_ARC/",
          btnText: "New Solution",
          img: "feature-shop.jpg",
        },
        {
          layoutClasses: "",
          subtitle: "Case Study",
          title: "Hotel",
          columnTitle1: "Problem",
          columnBody1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo mi et sapien hendrerit posuere. Nunc at nisi nisi. Donec at pulvinar magna. Aliquam mollis sapien eget sapien tempor fermentum. Etiam tincidunt sapien nunc. Suspendisse potenti. Suspendisse in eros ultrices, porta quam et, condimentum enim.",
          columnTitle2: "Solution",
          columnBody2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo mi et sapien hendrerit posuere. Nunc at nisi nisi. Donec at pulvinar magna. Aliquam mollis sapien eget sapien tempor fermentum. Etiam tincidunt sapien nunc.",
          columnTitle3: "Results",
          columnBody3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo mi et sapien hendrerit posuere. Nunc at nisi nisi. Donec at pulvinar magna.",
          btnLink: "http://vr.peekpeek.com/UCI_ARC/",
          btnText: "New Solution",
          img: "feature-hotel.jpg",
        },
        {
          layoutClasses: "",
          subtitle: "Case Study",
          title: "Brand Solution",
          columnTitle1: "Problem",
          columnBody1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo mi et sapien hendrerit posuere. Nunc at nisi nisi. Donec at pulvinar magna. Aliquam mollis sapien eget sapien tempor fermentum. Etiam tincidunt sapien nunc. Suspendisse potenti. Suspendisse in eros ultrices, porta quam et, condimentum enim.",
          columnTitle2: "Solution",
          columnBody2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo mi et sapien hendrerit posuere. Nunc at nisi nisi. Donec at pulvinar magna. Aliquam mollis sapien eget sapien tempor fermentum. Etiam tincidunt sapien nunc.",
          columnTitle3: "Results",
          columnBody3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo mi et sapien hendrerit posuere. Nunc at nisi nisi. Donec at pulvinar magna.",
          btnLink: "http://vr.peekpeek.com/UCI_ARC/",
          btnText: "New Solution",
          img: "feature-can.jpg",
        }
      ]
    };
  }
}
</script>

<style lang="scss">
$card-base-height: 200px;
$overlap-y: 5%;

#why-section {
  position: relative;
  padding-bottom: 50px;

  #why-section-container {
    min-width: $site-min-width;
    width: 90%;
    margin: 0 auto;
    
    .group:not(.why-cards) {
      margin-bottom: 3em;
    }

    @include medium-screen-landscape {
      width: 92%;
      margin-top: 10%;

      .group {
        &:not(.why-cards) {
          min-width: 150px;
          max-width: 380px;
          width: 35%;
        }
        
        &.why-cards {
          margin-top: -18em;
        }
      }
    }

    @include large-screen-landscape {
      width: 88%;

      .group.why-cards {
        margin-top: -20em;
      }
    }

    h1 {
      padding-top: 2em;
      margin-bottom: 0.4em;

      @include medium-screen-landscape {
        padding-top: 1.5em;
      }
    }

    h2 {
      line-height: 1.1em;
    }

    h1, h2 {
      margin-left: 5%;

      @include small-screen-landscape {
        margin-left: 0;
      }
    }

    .why-cards {
      .why-cards-container {
        width: 95%;
        min-width: $site-min-width;
        margin: 1.5em auto 0;
        white-space: initial;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;

        .feature-card {
          width: 65%;
          min-width: $site-min-width;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 0;
          
          &:not(:first-child) {
            margin-top: -1.5em;
          }
          
          &:nth-child(even) {
            align-self: flex-start;
          }

          .feature-img {
            align-self: flex-start;
            background-position: 50% 50%;
            background-size: cover;
            border-radius: 5px;
            box-shadow: 0px 0px 20px rgba(#000, 0.1);
            width: 95%;
            min-height: 220px;
            max-height: 350px;
            height: 30vw;
          }

          .text-container {
            align-self: flex-end;
            background-color: #FFF;
            white-space: normal;
            box-shadow: -10px 0px 20px rgba(#000, 0.1);
            border-radius: 5px;
            min-width: 250px;
            width: 95%;
            padding: 1em 1.5em 3em;
            margin-top: -2em;
            
            .card-title-group {
              .subheading.small {
                text-transform: uppercase;
                font-size: 0.8em;
                font-weight: 600;
                margin-bottom: 0.2em;
              }
              
              .alt-subheading {
                line-height: 1.2em;
              }
            }

            .feature-content {
              display: flex;
              flex-direction: column;
              
              @include large-screen-landscape {
                flex-direction: row;
              }
              
              .column {
                flex: 1 1 0;
                margin-top: 1.5em;
                margin-right: 0.5em;
                color: $primary-description-color;
                
                .column-title {
                  font-weight: 700;
                  font-size: 1.4em;
                  line-height: 1.4em;
                  margin-bottom: 0.5em;

                  @include small-screen-landscape {
                    font-size: 1.2em;
                    line-height: 1.2em;
                  }
                  
                  @include medium-screen-landscape {
                    font-size: 1.1em;
                  }
                  
                  @include large-screen-landscape {
                    font-size: 0.9em;
                  }
                }
                
                .column-body {
                  font-weight: 400;
                  font-size: 1.1em;
                  line-height: 1.6em;

                  @include small-screen-landscape {
                    font-size: 1em;
                  }
                  
                  @include medium-screen-landscape {
                    font-size: 0.9em;
                  }

                  @include large-screen-landscape {
                    font-size: 0.8em;
                  }
                }
                
                .button {
                  width: 100%;
                  min-width: 120px;
                  max-width: 170px;
                }
              }
            }
          }

          .button {
            margin: 2em 0 0;
          }
        }
      }
    }
  }  
}
</style>
