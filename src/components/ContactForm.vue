<template>
  <div id="form-container" >
    <div class="nav-bar">
      <h2> 
        <span class="industry" @click="scrollToIndustry($event)">Industry</span>
        <span class="location" @click="scrollToLocation($event)">Location</span>
        <span class="awesome" @click="scrollToCustomerInformation($event)">Awesome!</span>
      </h2>
    </div>
    <!-- <i class="far fa-times-circle closed" id="close-button" @click="exitForm"></i> -->
    
    <div class="container" id="form-viewport">
      <!-- INDUSTRY -->
      <div class="form-page" id="first-page">
          <div class="form-buttons-container">
              
              <div class="button-container">
                <div class="form-button" v-for="item in buttonData.industryPage"
                  @click="scrollToLocation($event)" :key="item.id">
                    <span >{{item}} </span>
                </div>
              </div>
          </div>
      </div>

      <!-- LOCATION -->
      <div class="form-page" id="second-page">
          <div class="form-buttons-container">
            <div class="button-container">
              <div class="form-button" v-for="item in buttonData.locationPage"
               @click="scrollToCustomerInformation($event)" :key="item.id">
                  <span>{{item}}</span>
              </div>
            </div>
          </div>
      </div>

      <!-- AWESOME -->
      <div class="form-page" id="third-page">
        <div class="form-content-container">
          <p>We will be working hard to create a customized estimation for you very soon.</p>
          <p>For now, we just need a little bit of information in order to reach out to you.</p>
          <div class = "fill-ins">
            <div class="personal-info"> 
              <div class="name form-element">
                <input placeholder="Name" type="text" v-model="formData.contact.name"/>
              </div>
              <div class="email form-element">
                <input placeholder="Email" type="email" v-model="formData.contact.email"/>
              </div>
              <div class="phone form-element">
                  <input placeholder="Phone" type="text" v-model="formData.contact.phone"/>
              </div>
            </div>
            <div class="inquiry-container">
              <div class="inquiry form-element">
                <textarea placeholder="Inquiry" type="text" v-model="formData.contact.inquiry"/>
              </div>
            </div>
          </div>
          <button class="primary-button" id="submit-button" @click="printForm">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

function  clearNavDecoration (l1, l2, len) : void {
  var i;
  for(i=0;i<len;i++){
    l1[i].style['border-bottom'] = 'none'; l1[i].style.color = '#00b7c9';
    l2[i].style['border-bottom'] = 'none'; l2[i].style.color = '#00b7c9';
  }
}

function addNavDecoration (l1): void {
  var i;
  for(i=0;i<l1.length;i++){
    l1[i].style['border-bottom'] = '.15em solid #002c30'; l1[i].style.color= '#002c30';
  }
}

@Component({})
export default class Form extends Vue {
  exitForm() {
    this.$emit('exitForm');
  }
 
  data() {
    return {
      buttonData: {
        industryPage: [
          'Hospitality',
          'Restaurant',
          'Campus',
          'Other'
        ],
        locationPage: [
          'Los Angeles',
          'Orange County',
          'Riverside', 
          'Other'
        ]
      },
      formData: {
        industry: '',
        location: '',
        contact: {
          name: '',
          email: '',
          phone: '',
          inquiry: '',
        }
      }
    }
  }

  getIMGURL(blob){
    return require('../assets/images/'+blob)
  }
    
  sendMessage(){
    let form_data = {
      Industry: this.$data.formData.industry,
      Location: this.$data.formData.location,
      Name: this.$data.formData.contact.name,
      Email: this.$data.formData.contact.email,
      Phone: this.$data.formData.contact.phone,
      Inquiry: this.$data.formData.contact.inquiry
    }
    let save = {
      data: [
        form_data
      ]
    }
    Vue.axios.post('https://sheetdb.io/api/v1/o508ssejo24qk', save);
  }

  printForm() {
    let formData = {
      'industry': this.$data.formData.industry,
      'location': this.$data.formData.location,
      'contact': {
        name: this.$data.formData.contact.name,
        email: this.$data.formData.contact.email,
        phone: this.$data.formData.contact.phone,
        inquiry: this.$data.formData.contact.inquiry,
      }
    }
    console.log(formData);
    this.sendMessage();
    this.$emit('exitForm');
  }
  
  scrollToIndustry(event:MouseEvent) {
    let target: HTMLElement = <HTMLElement> event.srcElement!;
    let targetHTML = target.tagName === 'SPAN' ? target.innerHTML : target.children[0].innerHTML;
    this.$data.formData.industry = targetHTML;
    // Change Heading style
    var locs = document.getElementsByClassName("location"), 
      indus = document.getElementsByClassName("industry"), 
      awes = document.getElementsByClassName("awesome"),
      i;
    clearNavDecoration(locs,awes,locs.length);
    addNavDecoration(indus);

    document.getElementById('first-page')!.style.left = '0%';
    document.getElementById('second-page')!.style.left = '100%';
    document.getElementById('third-page')!.style.left = '200%';
  }

  scrollToLocation(event: MouseEvent) {
    let target: HTMLElement = <HTMLElement> event.srcElement!;
    let  targetHTML = target.tagName === 'SPAN' ? target.innerHTML : target.children[0].innerHTML;    
    if (target.classList.contains("form-button") || target.parentElement.classList.contains("form-button")) {
      var sel_locs_button = document.getElementById("first-page").getElementsByClassName("selected"); 
      if (sel_locs_button.length > 0) {
        sel_locs_button[0].classList.remove("selected")
      }
      this.$data.formData.industry = targetHTML;
    }
    if (target.classList.contains("form-button")) {
      target.classList.add("selected");
    } else if (target.parentElement.classList.contains("form-button")) {
      target.parentElement.classList.add("selected");
    }
    var locs = document.getElementsByClassName("location"), 
        indus = document.getElementsByClassName("industry"), 
        awes = document.getElementsByClassName("awesome"),
        i;
    clearNavDecoration(indus,awes,indus.length);
    addNavDecoration(locs);

    document.getElementById('first-page')!.style.left = '-100%';
    document.getElementById('second-page')!.style.left = '0';
    document.getElementById('third-page')!.style.left = '100%';
  }

  scrollToCustomerInformation(event: MouseEvent) {

    let target: HTMLElement = <HTMLElement> event.srcElement!;
    let targetHTML = target.tagName === 'SPAN' ? target.innerHTML : target.children[0].innerHTML;
    if (target.classList.contains("form-button") || target.parentElement.classList.contains("form-button")) {
      var sel_locs_button = document.getElementById("second-page").getElementsByClassName("selected"); 
      if (sel_locs_button.length > 0) {
        sel_locs_button[0].classList.remove("selected")
      }
      this.$data.formData.location = targetHTML;
    }
    if (target.classList.contains("form-button")) {
      target.classList.add("selected");
    } else if (target.parentElement.classList.contains("form-button")) {
      target.parentElement.classList.add("selected");
    }
    
    var locs = document.getElementsByClassName("location"), 
        indus = document.getElementsByClassName("industry"), 
        awes = document.getElementsByClassName("awesome"),
        i;
    clearNavDecoration(indus,locs,indus.length);
    addNavDecoration(awes);
    
    document.getElementById('first-page')!.style.left = '-200%';
    document.getElementById('second-page')!.style.left = '-100%';
    document.getElementById('third-page')!.style.left = '0';
  }
}
</script>

<style lang="scss">
#form-container {
  background: url("../assets/images/contactform-bg.svg") center no-repeat;
  background-size: contain;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  #close-button {
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin-left: 8vw;
    width: 100vw;
    height: 2em;
    cursor: pointer;
    z-index: 100;

    @include medium-screen-landscape{
      margin-left: 25vw;
    }
    
    &:before {
      content: "\f057";
      font-size: 2em;
      font-style: normal;
    }
  }

  .nav-bar {
    width: 100%;
    margin-top: 2em;

    h2 {
      font-size: 1.3em;
      color: $alt-heading-color;
      display: flex;
      flex-direction: row;
      justify-content: center;
      font-weight: bold;

      @include medium-screen-landscape {
        font-size: 1.5em;
      }

      span {
        cursor: pointer;
        margin: 0 0.5em;
        line-height: 1.7em;

        &.active {
          color: $heading-color;
          border-bottom: 0.15em solid $heading-color;
        }
      }        
    }
  }
  
  #form-viewport {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow: hidden;
    width: 85%;
  }

  .form-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 0 auto;
    
    .form-buttons-container {
      width: 100%;
      height: 70%;
      max-height: 200px;

      .button-container {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .form-button {
          transition: all 0.5s ease;
          color: $secondary-button-text-color;
          font-size: 1em;
          font-weight: 700;
          height: 10vh;
          width: 14vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          cursor: pointer;

          @include medium-screen-landscape{
            font-size: inherit;
            width: 10vw;
            height: 14vh;
          }

          @for $i from 1 through 4 {
            &:nth-child(#{$i}) {
              background: url('../assets/images/blob-#{$i}.svg') no-repeat center;
              background-size: contain;
             
              &:hover, &.selected {
                background: url('../assets/images/blob-#{$i}-selected.svg') no-repeat center;
                background-size: contain;
                color:$contact-choice-selected-color;
              }
            }
          }

          &:nth-child(odd) {
            align-self: flex-start;
            margin-bottom: 14vh;
          }

          &:nth-child(even) {
            align-self: flex-end;
            margin-top: 14vh;
          }
        }
      }
    }

    .form-content-container {
      width: 100%;
      margin-top: 1em;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        color: $secondary-description-color;    // @TODO CHANGE THIS
        font-weight: 400;
        font-size: 0.9em;
      }

      .fill-ins {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 2em 0;
        width: 95%;

        .personal-info {
          width: 49%;
          margin-right: 2%;

          & .form-element:nth-child(even) {
            margin: 0.5em 0;
          }
        }

        .inquiry-container {
          width: 49%;

          .form-element {
            width: 100%;
            height: 100%;

            textarea {
              height: 100%;
            }
          }
        }

        .form-element {
          input, textarea {
            width: 100%;
            border-radius: 1em;
            border: 1px solid $form-border-color;
            outline: none;
            padding: 2% 5%;
            font-size: 0.9em;
            line-height: 1.2em;
            color: $secondary-description-color;
            font-weight: 400;

            @include medium-screen-landscape{
              font-size: 0.8em;
            }
          }
        }
      }
    }
  }
}
</style>