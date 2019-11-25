<template>

		<div id="form-container" >
        <!-- <img class="oval" :src="formSVG" />  -->
        <div class="nav-bar">
          <h2> 
            <span class="industry" @click="scrollToIndustry($event)">Industry</span>
            <span class="location" @click="scrollToLocation($event)">Location</span>
            <span class="awesome" @click="scrollToCustomerInformation($event)">Awesome!</span>
          </h2>
        </div>
        <i class="far fa-times-circle closed" id="close-button" @click="exitForm"></i>
				<div class="form-page" id="first-page">
						<div class="form-buttons-container">
								
                <div class="button-container">
  								<div class="form-button" v-for="item in buttonData.industryPage"
                    @click="scrollToLocation($event)" :key="item.id" 
                  >
  										<span >{{item}} </span>
  								</div>
                </div>
						</div>
				</div>

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

				<div class="form-page" id="third-page">
            <div class="form-content-container">
             
  						<p>We will be working hard to create a customized estimation for you very soon. 
  						<br/>
  								For now, we just need a little bit of information
  								in order to reach out to you.
  						</p>
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
                <div class="inquiry">
    							<div class="inquiry form-element">
    									<textarea placeholder="Inquiry" type="text" v-model="formData.contact.inquiry"/>
    							</div>
                </div>
              </div>
              <button class = "primary-button"id="submit-button" @click="printForm">Submit</button>
						</div>

						
				</div>
		</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
// import $ from 'jquery';
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
@Component
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
                  'Other'],
								locationPage: [
                  'Los Angeles',
                  'Orange County',
                  'Riverside', 
                  'Other']
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
      axios.post('https://sheetdb.io/api/v1/o508ssejo24qk', save);
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
		  //email the completed form to peekpeekTest@gmail.com
		  // var data = {
			// service_id: 'gmail',
			// template_id: 'customer_info',
			// user_id: 'user_fff9Opb1hmekqqBL26773',
			// 	template_params: {
			// 	'name' : `${formData.contact.name}`,
			// 	'email' : `${formData.contact.email}`,
			// 	'phone' : `${formData.contact.phone}`,
			// 	'industry' : `${formData.industry}`,
			// 	'location' : `${formData.location}`,
			// 	'inquiry' : `${formData.contact.inquiry}`
			// 	}
			// };
			// let request = new XMLHttpRequest();
			// request.open('POST', 'https://api.emailjs.com/api/v1.0/email/send');
			// request.setRequestHeader('Content-Type', 'application/json');
			// request.onreadystatechange = function() {
			// 		if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
			// 				console.log('All good');
			// 		} else {
			// 				console.log('Status: ' + this.status)
			// 				console.log(this.response);
			// 		}
			// }
			// request.send(JSON.stringify(data));
		 
			// $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
			// type: 'POST',
			// data: JSON.stringify(data),
			// contentType: 'application/json'
			// }).fail(function(error: any) {
			// alert('Oops... ' + JSON.stringify(error));
			// });
			//console.log('printForm started');
      this.$emit('exitForm');
    }
	
		scrollToIndustry(event:MouseEvent){
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
      let targetHTML = target.tagName === 'SPAN' ? target.innerHTML : target.children[0].innerHTML;    
       if(target.classList.contains("form-button")||target.parentElement.classList.contains("form-button")) {
        var sel_locs_button = document.getElementById("first-page").getElementsByClassName("selected"); 
        if(sel_locs_button.length>0){
          sel_locs_button[0].classList.remove("selected")
        }
       this.$data.formData.industry = targetHTML;

      }
      if (target.classList.contains("form-button")) {
        target.classList.add("selected");
      }else if(target.parentElement.classList.contains("form-button")){
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
      if(target.classList.contains("form-button")||target.parentElement.classList.contains("form-button")) {
        var sel_locs_button = document.getElementById("second-page").getElementsByClassName("selected"); 
        if(sel_locs_button.length>0){
          sel_locs_button[0].classList.remove("selected")
        }
        this.$data.formData.location = targetHTML;
      }
      if (target.classList.contains("form-button")) {
        target.classList.add("selected");
      }else if(target.parentElement.classList.contains("form-button")){
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

<style lang="scss" scoped>
#form-container {
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: url("../assets/images/contactform-bg.svg") center no-repeat;
    background-size: 80% 80%;
		#close-button {
      display: flex;
      flex-direction: row;
      justify-content: left;
      margin-left: 8vw;
      @include medium-screen-landscape{
        margin-left:25vw;
      }
      width: 100vw;
      height: 2em;
      cursor: pointer;
      z-index: 100;
      &:before {
        content: "\f057";
        font-size: 2em;
        font-style: normal;
      }
    }
    .nav-bar{
        display: flex;
        flex-direction: column;
        font-size: 2vw;
        margin-top: 23vh;
        .industry{
          color: $heading-color;
          border-bottom: .15em solid $heading-color;
        }
        @include medium-screen-landscape{
          margin-top: 20vh;
          font-size: 1.3vw;
        }
        @include large-screen-landscape{
          margin-top: 12vh;
        }
        width: 100%;
        z-index: 2;
        h2 {
        color: $alt-heading-color;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 3vh;
        font-weight: bold;

        span{
          cursor: pointer;
          margin-right: 2vw;
          padding-bottom: 1vh;
        }        
      }
    }
		.form-page {
			width: 100%;
			position: absolute;
      height: calc(100% - 4vh);
			top: 2vh;
			transition: left 1s ease;
			display: flex;
			flex-direction: column;
			justify-content: center;
			
			.form-buttons-container {
        height: 100%;
				display: flex;
				flex-direction: column;
        justify-content: center;
        align-items: center;
				flex-wrap: wrap;
    

				.button-container {
          display: flex;
          flex-wrap: wrap;
          max-width: 75vw;
          margin-top: 4vh;
          @include medium-screen-landscape{
            max-width: 60vw;
            height:50vh;
          }
          height: 15vh;
          .form-button{
						z-index: 2;
						color: $secondary-button-text-color;
            font-size:2vw;
						font-weight: bold;
						height: 10vh;
						width: 14vw;
						display: flex;
						flex-direction: row;
						justify-content: center;
            text-align: center;
						cursor: pointer;
            @include medium-screen-landscape{
              font-size: inherit;
              width:10vw;
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
            &:nth-child(odd){
              display: flex;
              flex-direction: column;
              align-self:flex-start; 
              @include medium-screen-landscape{
                margin-top: 10vh;
              }
            }
            &:nth-child(even){
              display: flex;
              flex-direction: column;
              align-self:flex-end; 
              @include medium-screen-landscape{
               margin-bottom: 15vh;
              }
            }
					}
        }
			}
      .form-content-container {
        display: flex;
        height: 50vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        *{
          z-index: 2;
        }
        #submit-button{
          width: 17vw;
          padding: 4px 10px;
          font-size: 8px;
          @include medium-screen-landscape{
            width: 12vw;
            padding: 10px 10px;
            font-size: 15px;
          }
        }
        p{
          color: darkgrey;
          margin-bottom: 2vh;
          font-weight: lighter;
          font-size: 8px;
          @include medium-screen-landscape{
            font-size: inherit;
            margin-bottom: 3vh;
          }
        }
        .fill-ins {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-bottom: 1vh;
          width: 70%;
          @include medium-screen-landscape{
            margin-bottom: 5vh;
            max-width: 60vw;
          }
          @include large-screen-landscape{
            max-width: 40vw;
          }

          .personal-info{
            width:40%;
            margin-right: 1vw;
          }
          .inquiry{
            width: 40%
          }
          .inquiry.form-element{
            width: 100%;
            height: 100%;
          }
        }
        .form-element {
          display: flex;
          flex-direction: row;
          margin-bottom: 1vh;
          display: flex;
          justify-content: center;
            input, textarea {
              display: flex;
              z-index: 2;
              width: 100%;
              border-radius: 2vh;
              border: none;
              font-size: 70%;
              padding-left: 1vw;
              font-family: Arial;
              @include medium-screen-landscape{
                font-size: 100%;
              }
            }
        }
    	}
    }
  	#first-page{
  			left: 0%;
  	}
  	#second-page {
  			left: 100%;
  	}
    #third-page{
  			left: 200%;
  	}
  

    

}
</style>