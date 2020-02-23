
<template>
  <div class="project-slider-item">
    <nuxt-link to="/projects/blog"><span class="project-slider-item-more"><span class="project-more-symbol">+</span><span class="project-slider-item-more-text">voir le projet</span></span></nuxt-link>
  </div>
</template>


<style lang="scss">
 .project-slider-item {
   height: 550px;
   width: 382px;
   background-color: #4BD079;
   transform: rotate(23deg);
   position: relative;

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
       bottom: -30px;
       font-size: 18px;
       display: inline-block;
       white-space: nowrap;
     }
   }
 }
</style>
