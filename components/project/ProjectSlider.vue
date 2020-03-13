
<template>
  <ul>
    <li v-for="(project, index) in projects">
      <div class="project-slider-item" :style="{ backgroundColor: project.data.color }">
        <nuxt-link :to="`/projects/${project.uid}`" class="project-slider-item-phone">
          <img v-bind:class="{'project-slider-item-phone-img':true, 'project-slider-item-phone-img-desk':(project.data.phonemockupisdesk === true)}" :src="project.data.phonemockup.url" />
          <span class="project-slider-item-phone-type">{{ $prismic.asText(project.data.name) }} - {{ $prismic.asText(project.data.type) }}</span>
          <span class="project-slider-item-more"><span class="project-slider-item-more-symbol">+</span><span class="project-slider-item-more-text">voir le projet</span></span>
        </nuxt-link>
      </div>
    </li>
  </ul>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
      computed: mapState(['projects']),
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

       &-desk {
         transform: translate(-50%, -20%) rotate(-23deg);
       }
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
