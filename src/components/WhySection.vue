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
          columnBody1: "UCI Paul Merage is a top-rated Business school in the United States, located in Irvine, Orange County. As the school continues to rank high in the charts, its popularity and influence have extended far beyond the Southern California region. To attract global talent, UCI Paul Merage is looking for creative ways to stand out among other elite universities and acquire more students.",
          columnTitle2: "Solution",
          columnBody2: "PeekPeek deigned a Custom 360° Walkthrough Experience with an intuitive interface to attract the incoming Generation Z students. The WebTour not only functions as a navigational supplement but also as an educational tool for the students as they walk through the virtual walls of the buildings. The Spotlight feature highlights key information about the building and programs that make UCI Paul Merage standout in front of its competitors.",
          columnTitle3: "Results",
          columnBody3: "By filming and bringing the entire School online, students can experience and familiarize themself with the campus. Also, PeekPeek tracks traffic data via Google Analytics and provides precise metrics to UCI’s marketing team.",
          btnLink: "http://vr.peekpeek.com/uci_business",
          btnText: "New Solution",
          img: "feature-education.jpg",
        },
        {
          layoutClasses: "",
          subtitle: "Case Study",
          title: "Hotel",
          columnTitle1: "Problem",
          columnBody1: "Millennium Biltmore Hotel is an iconic building in Downtown Los Angeles. It is known for hosting the early Academy Awards. It has also hosted many well-known celebrity figures, such as President John F Kennedy, The Beatles and many more. But as skyscrapers are rising tall in Downtown Los Angeles, the eight-story Biltmore Hotel was shying away from its competitors. The main revenue stream came from rentals of its ballrooms and event halls.",
          columnTitle2: "Solution",
          columnBody2: "With the rise of 360° Technology, PeekPeek was commissioned to create a Virtual Tour for the entire building. Our mission was to highlight the different suites-styles and 11 gorgeous ballrooms of various sizes. With ultra-high resolution, PeekPeek captured the excellence of the space and translated it into accurately crafted digital versions. Our Multi-View function allows viewers to see various setups to accommodate for different types of events.",
          columnTitle3: "Results",
          columnBody3: "PeekPeek’s WebTour has grown to become one of the favorite tools of the Millennium sales team. With the remarkable 360 presentation, event planners can see the venue and learn about each ballroom. It saves time and effort for both the Sales team and their wonderful guests. The ROI on this 360 virtual tour is usually recouped in a single booking.",
          btnLink: "http://vr.peekpeek.com/millennium_biltmore_la",
          btnText: "New Solution",
          img: "feature-hotel.jpg",
        },
        {
          layoutClasses: "",
          subtitle: "Case Study",
          title: "Brand Solution",
          columnTitle1: "Problem",
          columnBody1: "The city of Corona in California has a hidden getaway for many Hollywood celebrities. Drake, Kobe Bryant and Justin Bieber are all big fans of the SC Village Paintball and Air-Soft field. Over 100 acres of excitement, SC Village has been providing premium paintball and air-soft experience in Southern California. It is gaining popularity among professionals and amateurs due to the variety of fields and set-ups they offer.",
          columnTitle2: "Solution",
          columnBody2: "PeekPeek’s 360° virtual tour provides a sneak peek into the different fields they offer.  The WebTour is embedded on their homepage where players can easily check out the different types of playgrounds that match their skill level and interest. The “Book Now” button converts viewers to players within seconds.",
          columnTitle3: "Results",
          columnBody3: "This marketing tool is especially useful when companies are looking to book an event by providing them with a sneak peek rather than requiring a physical visit. At a fraction of the cost of a regular website, this 360 virtual tour offers tremendous ROI and has booked over 100 events in the short span of 2 years!",
          btnLink: "http://vr.peekpeek.com/scvillage/",
          btnText: "New Solution",
          img: "feature-brand.jpg",
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
          max-width: 500px;
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

    @include high-res-screen-landscape {
      width: 75%;

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

            @include high-res-screen-landscape {
              max-height: 500px;
            }
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

                  @include high-res-screen-landscape {
                    max-width: 240px;
                  }
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
