
<template>
  <div>
  <div class="project-slider">
    <div class="mySlides fade" v-for="(project, index) in projects">
      <div class="project-slider-item" :style="{ backgroundColor: project.data.color }">
        <nuxt-link :to="`/projects/${project.uid}`" class="project-slider-item-phone">
          <img v-bind:class="{'project-slider-item-phone-img':true, 'project-slider-item-phone-img-desk':(project.data.phonemockupisdesk === true)}" :src="project.data.phonemockup.url" />
          <span class="project-slider-item-phone-type">{{ $prismic.asText(project.data.name) }} - {{ $prismic.asText(project.data.type) }}</span>
          <span class="project-slider-item-more"><span class="project-slider-item-more-symbol">+</span><span class="project-slider-item-more-text">voir le projet</span></span>
        </nuxt-link>
      </div>
    </div>
  </div>

    <div class="project-slider-nav">
      <a class="project-slider-prev" @click="moveSlide(-1)"><img src="~/assets/images/icon-back.svg"></a>
      <span class="project-slider-nav-numbers"><span class="project-slider-nav-number-current">01 </span>/<span class="project-slider-nav-number-total"> 03</span></span>
      <a class="project-slider-next" @click="moveSlide(1)"><img src="~/assets/images/icon-back.svg"></a>
    </div>

  <div style="text-align:center">
    <span class="dot" v-for="(project, index) in projects" @click="currentSlide(index)"></span>
  </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  let slideIndex = 1;

  export default {
      computed: mapState(['projects']),

      mounted() {
          this.showSlides(slideIndex);
      },

      methods: {

          currentSlide (n) {
            this.showSlides(slideIndex = n)
          },

          moveSlide (n) {
              this.showSlides(slideIndex += n);
          },

          showSlides (n) {
              let i;
              let slides = document.getElementsByClassName("mySlides");
              const dots = document.getElementsByClassName("dot");
              const currentSlide = document.querySelector(".project-slider-nav-number-current");
              const totalSlides = document.querySelector(".project-slider-nav-number-total");
              if (n > slides.length) {slideIndex = 1}
              if (n < 1) {slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                  slides[i].style.visibility = "hidden";
                  slides[i].style.opacity = 0;
              }
              for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
              }
              console.warn(currentSlide)
              currentSlide.innerHTML = `0${n-1} `;
              totalSlides.innerHTML = ` 0${slides.length} `;
              slides[slideIndex-1].style.visibility = "visible";
              slides[slideIndex-1].style.opacity = 1;
              dots[slideIndex-1].className += " active";
          }
      }

  }
</script>

<style lang="scss">

  .mySlides {
    visibility: hidden;
    opacity: 0;
    transition: all 2s ease;
    position: absolute;
  }
  .project-slider {
    overflow: hidden;
    height: 900px;
    display: flex;
    width: 650px;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 100px;

    &-nav {
      display:flex;
      align-items: center;

      &-numbers {
        margin: 0 30px;
        font-size: 20px;
      }
    }

    &-prev, &-next {
      width: 35px;
      &:hover {
        cursor: pointer
      }
      img {
        max-width: 100%;
      }
    }

    &-next {
      img {
        transform: rotate(180deg);
      }
    }
  }
 .project-slider-item {
   height: 550px;
   width: 382px;
   background-color: #4BD079;
   transform: rotate(23deg);
   position: relative;

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
       pointer-events: none;

       img {
         pointer-events: none;
       }

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
