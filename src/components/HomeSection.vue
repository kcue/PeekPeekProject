<template>
  <section class="peek-section" id="home-section">
    <div class="home-pic">
      <img src="../assets/images/main-globe.png" />
    </div>
    <div class="home-section-headers">
      
      <div class="primary">
      	<h1 id="minimize-text">Pictures are worth <br/> a thousand words.<br/></h1>
        <h1 id="degree">360 &deg <br/>Virtual Tours:</h1>
        <h1 id="millions"> Millions</h1>
        <div class="separator"></div>
        <div class="home-section-buttons">
          <button>
            <a target="_blank" href="https://www.youtube.com/watch?v=s4EEhXH_pz0">Watch video
            </a>
          </button>
          <button>
            <a target="_blank" href="https://www.peekpeek.com/industries">Take a peek </a>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class HomeSection extends Vue {
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.splashScreen();
      }
    };
  }

  splashScreen() {
    document.getElementsByClassName("home-pic")[0].classList.add("collapsed");
    document.getElementById("minimize-text")!.classList.add("minimize");
    document.getElementsByClassName("secondary")[0].classList.remove("hidden");
  }
}
</script>

<style lang="scss" scoped>
 a {
    text-decoration: none;
    color: white;
 }

.home-pic {
  width: 120%;
  position: relative;
  display: flex;
  justify-content: left;
  flex-direction: column;
  img {
	height: 100%;
    object-fit: contain;
  }

}

.collapsed {
  height: auto !important;
  width: 50% !important;
}



.home-section-headers {
  min-width: 30%;
  display: flex;
  justify-content: center;
  text-align: left;

  flex-direction: column;
  margin-left: 50px;

  .separator {
  	width: 40%;
    height: 4px;
    border-radius: 2px;
    background-color: #8f8f94;
    margin: 20px 0 20px 0;
  }
  .primary h1 {
	margin-top:-5%;
	color: cadetblue;
	margin-bottom: 0%; //todo: resolve conflicting bottom margins (degree has large margin w/o this line)
	}
	#degree, #millions{
		font-size: 40px;
	}
}

@keyframes min {
	0% {font-size: 40px;}
	100% {font-size: 20px;}
}

#minimize-text{
	margin-bottom: 5%;
	font-size:20px;
}

.minimize {
	margin-bottom:5%;
	animation-name: min;
	animation-duration: 2s;
	
}

/*

todo add animation in ts script

*/

#degree{
	font-size:50px;
}

#millions {
	color:black;
}
#degree,#millions{
	
	display:inline;
	
}


.home-section-buttons {
  margin-top: 10px;
  button{
	float: left;
    margin-right: 25px;
  }
}


</style>
