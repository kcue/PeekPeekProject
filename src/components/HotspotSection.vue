<template>
    <section class="peek-section wide-peek-section" id="hotspot-section">
        <img class="hotspot-skyline" src="../assets/images/city-with-infopoints.png"/>
        <div class="hotspot-titles">
            <h4 class="subtitle" id="space"><b>It's not just the place</b></h4>
            <h2 class="wide-title" id="story">Tell me about <br>your story</h2>
            <h4 class="subtitle" id="spotlights"><b>with the hotspots!</b></h4>
        </div>
    </section>
</template>



<style lang="scss" scoped>
#hotspot-section {
    display: flex;
    
    .hotspot-skyline {
        width: 60%;
        object-fit: contain;
        position: relative;
        bottom: 0;
        left: 450px;
        max-height: 80%;
    }

    .hotspot-titles {
        margin-top: 500px;
        z-index: 100;

        #space {
            align-self: baseline;
        }
        
        #spotlights {
            align-self: flex-end;
        }

        h2 {
            margin: 0;
        }

        h4 {
            margin-top: 5px;
            margin-bottom: 5px;
        }
    }
    #space{
        color: silver;
    }

    #spotlights{
        color: silver;
    }

    .hotspot-titles-parallax-margin {
        width: 25vh;
        align-items: flex-end;
    }
}


</style>