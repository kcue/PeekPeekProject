<template>
    <section class="peek-section super-wide-peek-section" id="partners-section">
        <div class="partners-section-text">
            <h2 class="wide-title" id="branding"><b>Trusted by</b> </h2>
            <div class="main-text wide-text" id="examples">
                <button id="learn-button"><a target="_blank" href="">Learn More</a></button>
                
            </div>
        </div>
        <div class="partners-section-text-padding"></div>
        <div class="partners-section-icons">
            <div class="partners-section-icon-container media" id="Paypal">
                <img src="../assets/images/Paypal.png"/>
            </div>
            <div class="partners-section-icon-container media" id="UCI">
                <img src="../assets/images/UCI.png"/>
            </div>
            <div class="partners-section-icon-container media" id="Hilton">
                <img src="../assets/images/Hilton.png"/>
            </div>
            <div class="partners-section-icon-container media" id="Pierce">
                <img src="../assets/images/Pierce College.png"/>
            </div>
        </div>
        <div class="partners-section-icons-padding"></div>
    </section>
</template>



<style lang="scss" scoped>
    #learn-button #branding{
        height: 80px;
        
    }
#partners-section {
    display: flex;
    flex-direction: row;
    .partners-section-text, .partners-section-icons {
        display: flex;
    }
    .partners-section-text {
        width: 80vh;
        margin-top: 5vh;
        margin-left: 20px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        .wide-text {
            font-size: 2.8vh;
            text-align: left;
        }
        .wide-title {
            font-weight: normal;
            text-align: left;
        }
        
        a {
            font-size: 2vh;
            margin-top: 2vh;
            margin-bottom: 15vh;
            text-decoration: underline;
            text-align: left
        }
    }
    .partners-section-text-padding {
        width: 50vh;
    }
    .partners-section-icons {
        width: 102.5vh;
        flex-wrap: wrap;
        margin-top: 9vh;
        margin-bottom: 2.5vh;
        .partners-section-icon-container {
            width: 50%;
            max-height: 32%;
            padding-top: 1vh;
            padding-bottom: 1vh;
            display: flex;
            justify-content: center;
            img {
                max-height: 100%;
                max-width: 100%;
                object-fit: contain;
            }
        }        
    }   
    .partners-section-icons-padding {
        width: 30vh;
    }
}
</style>