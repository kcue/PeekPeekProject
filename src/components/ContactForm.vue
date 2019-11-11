<template>
  <div id="form-container">
   

    <div class="form-page" id="third-page">
      <h2 class="heading">Awesome!</h2>
      <p>We will be working hard to create a customized estimation for you very soon. 
      <br/>
        For now, we just need a little bit of information
        in order to reach out to you.
      </p>
      <div class="form-content-container">
        <div class="name form-element">
          <input placeholder="Name" type="text" v-model="formData.contact.name"/>
        </div>
        <div class="radio-container">
          <div class="industry-form-element">
            <p>Industry</p>
            <input type="radio" id="industry-hospitality" value="hospitality" v-model="formData.contact.industry">
            <label for="industry-hospitality">Hospitality</label>
            <input type="radio" id="industry-restaurant" value="restaurant" v-model="formData.contact.industry">
            <label for="industry-restaurant">Restaurant</label>
            <input type="radio" id="industry-campus" value="campus" v-model="formData.contact.industry">
            <label for="industry-campus">Campus</label>
            <input type="radio" id="industry-other" value="other" v-model="formData.contact.industry">
            <label for="industry-other">Other</label>
           <!-- <span>{{industry}}</span>  -->
          </div>
          <div class="location-form-element">
            <p>Area</p>
            <input type="radio" id="location-los-angeles" value="Los Angeles" v-model="formData.contact.location">
            <label for="location-los-angeles">Los Angeles</label>
            <input type="radio" id="location-orange-county" value="Orange County" v-model="formData.contact.location">
            <label for="location-orange-county">Orange County</label>
            <input type="radio" id="location-riverside" value="Riverside" v-model="formData.contact.location">
            <label for="location-campus">Riverside</label>
            <input type="radio" id="location-other" value="other" v-model="formData.contact.location">
            <label for="location-other">Other</label>
          </div>
        </div>
        <div class="email form-element">
          <input placeholder="Email" type="text" v-model="formData.contact.email"/>
        </div>

        <div class="phone form-element">
          <input placeholder="Phone" type="text" v-model="formData.contact.phone"/>
        </div>

        <div class="inquiry form-element">
          <textarea placeholder="Inquiry" type="text" v-model="formData.contact.inquiry"/>
        </div>
      </div>

      <button id="submit-button" @click="printForm">Submit</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import $ from 'jquery';

@Component
export default class Form extends Vue {
  data() {
    return {
      buttonData: {
        industryPage: ['Hospitality', 'Restaurant', 'Campus', 'Other'],
        locationPage: ['Los Angeles', 'Orange County', 'Riverside', 'Other']
      },
      formData: {
        
        contact: {
          name: '',
          email: '',
          phone: '',
          industry: '',
          location: '',
          inquiry: '',
        }
      }
    }
  }

  printForm() {
    let formData = {
      
      'contact': {
        name: this.$data.formData.contact.name,
        email: this.$data.formData.contact.email,
        phone: this.$data.formData.contact.phone,
        industry: this.$data.formData.contact.industry,
        location: this.$data.formData.contact.location,
        inquiry: this.$data.formData.contact.inquiry,
      }
    }
    console.log(formData);
       //email the completed form to peekpeekTest@gmail.com
      //  var data = {
      // service_id: 'gmail',
      //   template_id: 'customer_info',
      //     user_id: 'user_fff9Opb1hmekqqBL26773',
      //       template_params: {
      //       'name' : `${formData.contact.name}`,
      //       'email' : `${formData.contact.email}`,
      //       'phone' : `${formData.contact.phone}`,
      //       'industry' : `${formData.contact.industry}`,
      //       'location' : `${formData.contact.location}`,
      //       'inquiry' : `${formData.contact.inquiry}`
      //       }
      //       };

      //       let request = new XMLHttpRequest();
      //       request.open('POST', 'https://api.emailjs.com/api/v1.0/email/send');
      //       request.setRequestHeader('Content-Type', 'application/json');
      //       request.onreadystatechange = function() {
      //         if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      //           console.log('All good');
      //         } else {
      //           console.log('Status: ' + this.status)
      //           console.log(this.response);
      //         }
      //       }
      //       request.send(JSON.stringify(data));
             
            // $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            // type: 'POST',
            // data: JSON.stringify(data),
            // contentType: 'application/json'
            // }).fail(function(error: any) {
            // alert('Oops... ' + JSON.stringify(error));
            // });
            //console.log('printForm started');
    this.$parent.$data.showContactForm = false;
  }

  
}
</script>

<style lang="scss" scoped>
#form-container {
  // background-image: url("../assets/images/possible-bg.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-color: #FFF;

  #submit-button {
    background: #FBF6F0;
    color: #16a4a9;
    border: 3px solid white;
  }
  
  .form-page {
    width: 100%;
    height: calc(100% - 4vh);
    position: absolute;
    top: 2vh;

    transition: left 1s ease;

    display: flex;
    flex-direction: column;

  }

  #third-page {
    width: 50vw;
    margin-left: 25vw;
    margin-right: 25vw;

    p {
      color: black;
      margin-top: 1vh;
      margin-bottom: 1vh;
    }

    button {
      margin-bottom: 5vh;
      width: 30%;
      align-self: center;
      cursor: pointer;
    }


    .form-content-container {
      display: flex;
      flex-direction: column;
      flex: 1;
      .form-element
      .radio-container{
      }
      .form-element{
        margin-top: 1vh;
        margin-bottom: 1vh;
      }
  
    }
  }
  
}
</style>
