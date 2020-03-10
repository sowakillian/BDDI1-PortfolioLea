
<template>
  <slider ref="slider" :options="options">
    <slider-item>
      <div class="project-slider-item" style="background-color: #4BD079;">
        <nuxt-link :to="`/projects/labfive`" class="project-slider-item-phone">
          <img class="project-slider-item-phone-img" src="~/assets/images/projects/labfive-phonemockup.png" />
          <span class="project-slider-item-phone-type">LabFive - UI Design</span>
          <span class="project-slider-item-more"><span class="project-slider-item-more-symbol">+</span><span class="project-slider-item-more-text">voir le projet</span></span>
        </nuxt-link>
      </div>
    </slider-item>

    <slider-item>
      <div class="project-slider-item" style="background-color: #B4B2FA;">
        <nuxt-link :to="`/projects/lecerf`" class="project-slider-item-phone">
          <img class="project-slider-item-phone-img" src="~/assets/images/projects/lecerf-phonemockup.png" />
          <span class="project-slider-item-phone-type">LabFive - UI Design</span>
          <span class="project-slider-item-more"><span class="project-slider-item-more-symbol">+</span><span class="project-slider-item-more-text">voir le projet</span></span>
        </nuxt-link>
      </div>
    </slider-item>

    <slider-item>
      <div class="project-slider-item" style="background-color: #FF5A5A;">
        <nuxt-link :to="`/projects/labfive`" class="project-slider-item-phone">
          <img class="project-slider-item-phone-img" src="~/assets/images/projects/labfive-phonemockup.png" />
          <span class="project-slider-item-phone-type">LabFive - UI Design</span>
          <span class="project-slider-item-more"><span class="project-slider-item-more-symbol">+</span><span class="project-slider-item-more-text">voir le projet</span></span>
        </nuxt-link>
      </div>
    </slider-item>
  </slider>
</template>

<script>
  export default {
      data () {
          return {
              options: {
                  effect: 'fade',
                  loop: true,
                  autoplay:5000,
                  speed: 1500
              }
          }
      }

  }
</script>

<style lang="scss">
 .project-slider-item {
   height: 550px;
   width: 382px;
   background-color: #4BD079;
   transform: rotate(23deg);
   position: relative;
   margin-top: 100px;

   &-phone {
     display: block;
     width: 100%;

     &-type {
       position: absolute;
       right: 0;
       transform: rotate(68deg) translate(75%, 80px);
       font-size: 20px;
       color: black;
     }

     &-img {
       position: absolute;
       left: 30%;
       top: 30%;
       transform: translate(-50%, -50%) rotate(-23deg);
       max-width: 640px;
     }
   }

   &-more {
     width: 60px;
     height: 60px;
     position: absolute;
     right: -5px;
     bottom: -5px;
     background-color: #FF4E50;

     &-symbol {
       color: white;
       position: absolute;
       font-size: 60px;
       font-family: GTWalsheim-Regular;
       left: 45%;
       top: 40%;
       transform: translate(-50%, -50%) rotate(-23deg);
     }

     &-text {
       color: #FF4E50;
       position: absolute;
       transform: rotate(-23deg);
       bottom: -40px;
       left: 0px;
       font-size: 18px;
       display: inline-block;
       white-space: nowrap;
     }
   }
 }
</style>
