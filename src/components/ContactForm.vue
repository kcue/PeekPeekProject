<template>
  <div id="form-container" >
    <div class="nav-bar">
      <h2> 
        <span class="nav" id="industry" data-target="first-page" 
          @click="pageScrollTo('industry')"
          >Industry</span>
        <span class="nav" id="location" data-target="second-page" 
          @click="pageScrollTo('location')"
          >Location</span>
        <span class="nav" id="awesome" data-target="third-page"
          @click="pageScrollTo('awesome')"
          >Awesome!</span>
      </h2>
    </div>
    
    <div id="form-viewport">
      <!-- INDUSTRY -->
      <div class="form-page" id="first-page">
          <div class="form-buttons-container">
              <div class="button-container">

                <div class="form-button" v-for="item in buttonData.industryPage"
                  @click="buttonClickHandler($event)" :key="item.id">
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
               @click="buttonClickHandler($event)" :key="item.id">
                  <span>{{item}}</span>
              </div>
            </div>
          </div>
      </div>

      <!-- AWESOME -->
      <div class="form-page" id="third-page">
        <div class="form-content-container">
          <p>We will be working hard to create a customized estimation for you very soon. For now, we just need a little bit of information in order to reach out to you.</p>
          <div class = "fill-ins">
            <div class="personal-info"> 
              <div class="name form-element" v-bind:class="{error: showNameErr}">
                <input maxlength="200" placeholder="Name" type="text" v-on:input="validName" v-model="formData.contact.name"/>
                <p v-if="showNameErr">Please enter a name.</p>
              </div>
              <div class="email form-element" v-bind:class="{error: showEmailErr}">
                <input maxlength="200" placeholder="Email" type="email" v-on:input="validEmail" v-model="formData.contact.email"/>
                <p v-if="showEmailErr">Please enter a valid email.</p>
              </div>
              <div class="phone form-element" v-bind:class="{error: showPhoneErr}">
                <input maxlength="50" placeholder="Phone" type="text" v-on:input="validPhone" v-model="formData.contact.phone"/>
                <p v-if="showPhoneErr">Please enter a valid phone no.</p>
              </div>
            </div>
            <div class="inquiry-container">
              <div class="inquiry form-element" v-bind:class="{error: showInquiryErr}">
                <textarea maxlength="2000" placeholder="Inquiry" type="text" v-on:keyup="countDown" v-model="formData.contact.inquiry"/>
                <p v-if="showInquiryErr">Please enter an inquiry.</p>
                <p id="remaining-characters" v-else>Chararcters remaining: {{remChars}}</p>
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

@Component({})
export default class Form extends Vue {
  showNameErr: boolean = false;
  showEmailErr: boolean = false;
  showPhoneErr: boolean = false;
  showInquiryErr: boolean = false;
  maxChars = 2000; 
  remChars = 2000;

  exitForm() {
    this.$emit('exitForm');
  }

  mounted() {
    document.getElementById("industry").click();
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

  countDown(){
    this.remChars = this.maxChars - this.$data.formData.contact.inquiry.length;
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

    Vue.axios.post('https://sheetdb.io/api/v1/i6cc5br98ofm9', save);
    // Vue.axios.get('https://sheetdb.io/api/v1/i6cc5br98ofm9').then(response => (console.log(response)))
  }

	printForm() {
    // validate before sending
    if (this.validate()) {
      // console.log(formData);
      this.sendMessage();
      this.$emit('exitForm');
    } else {
      alert("Please fill up the required items.");
    }
  }

  // Validation Methods
  validate() {
    this.validName(); 
    this.validEmail();
    this.validPhone();
    this.validInquiry();
    let result = !(this.showNameErr || this.showEmailErr || this.showPhoneErr || this.showInquiryErr);

    return result;
  }

  validName() {
    let re = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u;
    this.showNameErr = (!re.test(this.$data.formData.contact.name.toLowerCase())) || (this.$data.formData.contact.name.length === 0) || (this.$data.formData.contact.name.length > 100);
  }

  validEmail() {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.showEmailErr = !re.test(this.$data.formData.contact.email.toLowerCase());
  }

  validPhone() {
    this.showPhoneErr = (this.$data.formData.contact.phone.length == 0) || (this.$data.formData.contact.phone.length > 50);
  }

  validInquiry() {
    this.showInquiryErr = (this.$data.formData.contact.inquiry.length == 0) || (this.$data.formData.contact.inquiry.length > 2000);
  }
  
  pageScrollTo(elemId) {
    // validate current page before scrolling
    let currentPage = document.querySelector(".form-page.active");
    if (elemId !== "industry") {  // do not validate when initializing the form
      if (currentPage.id === "first-page") {
        if (this.$data.formData.industry.length === 0) {
          alert("Please select an industry.");
          return;
        }
      } else if (currentPage.id === "second-page") {
        if (this.$data.formData.location.length == 0) {
          alert("Please select a location.");
          return;
        }
      }
    }

    let target: HTMLElement = document.getElementById(elemId);

    document.querySelectorAll(".nav-bar span").forEach(navBarText => {
      navBarText!.classList.remove("active");
    });
    target.classList.add("active");

    document.querySelectorAll(".form-page").forEach(formPage => {
      let translateValue: string = "0%";
      if (elemId === "location") {
        translateValue = "-100%"
      } else if (elemId === "awesome") {
        translateValue = "-200%"
      }
      (<HTMLElement> formPage)!.style.transform = "translateX(" + translateValue + ")";
      (<HTMLElement> formPage)!.classList.remove("active");
    });
    document.getElementById(target.dataset.target).classList.add("active");
  }

  buttonClickHandler(event:MouseEvent) {
    let target: HTMLElement = <HTMLElement> event.srcElement!;
    let targetText = target.innerText;    
    
    // determine which button was selected then add the selected classname
    var selButtons = document.querySelectorAll(".form-page.active .selected");
    if (selButtons.length > 0) {
      (<HTMLElement> selButtons[0]).classList.remove("selected");
    }
    if (target.classList.contains("form-button")) {
      target.classList.add("selected");
    } else if (target.parentElement.classList.contains("form-button")) {
      target.parentElement.classList.add("selected");
    }

    let toAlert = false;
    var formPage = document.querySelector(".form-page.active");
    if (formPage.id === "first-page") {
      this.$data.formData.industry = targetText;  // update formData object with the value selected
      this.pageScrollTo("location");                   // scroll to the next page
    } else if (formPage.id == "second-page") {
      this.$data.formData.location = targetText;
      this.pageScrollTo("awesome");
    }
  }
}
</script>

<style lang="scss">
#form-container {
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  .nav-bar {
    width: 100%;
    margin-bottom: 1em;    
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
        transition: all 0.3s ease;
        cursor: pointer;
        margin: 0 0.5em;
        line-height: 1.7em;
        border-bottom: 0.15em solid transparent;

        &.active {
          color: $heading-color;
          border-color: $heading-color;
        }

        &:hover {
          color: $heading-color;
        }
      }        
    }
  }
  
  #form-viewport {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: hidden;
    width: 100%;
    height: auto;

    @include small-screen-landscape {
      width: 85%;
    }
  }

  .form-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 0 auto;
    transition: transform 0.5s ease-out, opacity 0.25s ease-out;
    opacity: 0;

    &.active {
      opacity: 1;
    }
    
    .form-buttons-container {
      display: flex;

      @include large-screen-landscape {
        width: 100%;
      }

      .button-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 1em;
        grid-row-gap: 1em;
        justify-items: center;
        width: 100%;
        margin: 0 auto;

        @include medium-screen-landscape {
          grid-row-gap: 0.5em;
        }

        @include large-screen-landscape {
          display: flex; 
        }

        .form-button {
          transition: all 0.5s ease;
          color: $secondary-button-text-color;
          font-size: 1em;
          font-weight: 700;
          height: 20vw;
          width: 30vw;
          min-height: 100px;
          min-width: 150px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          cursor: pointer;

          @include medium-screen-landscape{
            font-size: inherit;
            width: 10vw;
            height: 12vh;
          }

          @include large-screen-landscape {
            width: 25%;
          }

          @include high-res-screen-landscape {
            height: 20vh;
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
          //For non mobile use specified button layout
          @include large-screen-landscape {
            &:nth-child(odd) {
              align-self: flex-start;
              margin-bottom: 10%;
            }

            &:nth-child(even) {
              align-self: flex-end;
            }
          }
         
        }
      }
    }

    .form-content-container {
      width: 100%;
      // margin-top: 1em;
      display: flex;
      flex-direction: column;
      align-items: center;

      & > p {
        color: $secondary-description-color;    // @TODO CHANGE THIS
        font-weight: 400;
        font-size: 0.9em;
        text-align: center;
        white-space: initial;
      }

      .fill-ins {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 1em 0;
        width: 90%;

        @include medium-screen-landscape {
          flex-direction: row;
          margin: 2em 0;
          width: 80%;
        }

        @include high-res-screen-landscape {
          margin: 1em 0 1.5em;
          width: 90%;
        }

        p {
          font-size: 0.8em;
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

            @include medium-screen-landscape {
              font-size: 0.8em;
            }
          }

          &.error {
            input, textarea {
              border-color: $form-error-color;
              background-color: rgba($form-error-color, 0.2);
            }

            p {
              color: $form-error-color;
              text-align: right;
              font-weight: 400;
              line-height: 1.6em;
            }
          }
        }

        .personal-info, .inquiry-container {
          @include medium-screen-landscape {
            width: 49%;
          }
        }

        .personal-info {
          width: 100%;
          margin-right: 2%;
          padding-bottom: 2%;

          & .form-element:nth-child(even) {
            margin: 2% 0;
          }

          @include medium-screen-landscape {
            padding-bottom: 0%;
          }
        }

        .inquiry-container {
          width: 100%;

          .form-element {
            width: 100%;
            height: 100%;

            textarea {
              height: 10em;

              @include medium-screen-landscape {
                height: 100%;
              }
            }

            #remaining-characters {
              color: $subheading-color;
              text-align: right;
            }
          }
        }
      }
    }
  }
}
</style>