
<template>
  <div class="project-header" :style="{ backgroundImage: `url('${background}')` }">
    <div class="project-header-content" v-rellax="{
      // Rellax Options
      // See: https://github.com/dixonandmoe/rellax#features
      speed: -3,
    }">
      <span class="project-header-content-title"><span class="imcoming">{{ title }} - <span class="project-header-content-title-type">{{ type }}</span></span></span>
        <span class="project-header-content-year"><span class="project-header-content-year-p">{{ year }}</span></span>
    </div>
  </div>
</template>

<script>
    export default {

        props: [
            'title',
            'type',
            'year',
            'background',
        ],

        data () {
           return {
              bgSize: 100
           }
        },

        methods: {
            toggleTitleTransition(typeTransition) {
                const el = document.querySelector('.imcoming');
                const pageOverlay = document.querySelector('.page-overlay');
                const year = document.querySelector('.project-header-content-year-p');

                if (typeTransition === 'addClass') {
                    console.warn('classAdded');
                   //el.classList.add('imcoming-ok');
                   // year.classList.add('imcoming-ok');
                    //pageOverlay.classList.add('page-overlay-ciao');
                } else {
                    console.warn('otherTransition')
                      // el.classList.remove('imcoming-ok');
                      //year.classList.remove('imcoming-ok');
                }
            },
            increaseBackgroundSize() {
                window.addEventListener('scroll', function(e) {
                    console.warn('bgSize', this.bgSize);
                    this.bgSize++;
                });
            }
        },

        mounted() {
            this.toggleTitleTransition('addClass');
            //this.increaseBackgroundSize();

        },


        destroyed() {
            this.toggleTitleTransition('removeClass');
        }

    }

</script>

<style lang="scss">

  .project-header {

    .imcoming-ok {
      transform: translateY(0px);
      opacity: 1;
    }

    height: 100vh;
    width: 100%;
    padding: 0 5% 0 5%;
    margin-top: -120px;
    display: flex;
    align-items: center;
    background-color: slategray;
    background-image: url("../../assets/images/projects/labfive-bg.jpg");
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;

    &-content {
      color: white;
      position: relative;
      width: 100%;
      &-title {
        width: 100%;
        font-size: 80px;
        overflow: hidden;
        display: block;
        height: 90px;
        position: relative;

        & > * {
          position: absolute;
          //transform: translateY(90px);
          transform: translateY(0px);
          opacity: 1;
          transition: all 1.5s ease;
          left: 0;
          width: 100%;
        }



        &-type {
          font-family: GTWalsheim-Regular;
        }
      }

      &-year {
        display: block;
        overflow: hidden;
        font-size: 40px;
        margin-top: 20px;
        font-family: GTWalsheim-Regular;
        position: relative;
        height: 50px;

        &-p {
          position: absolute;
          //transform: translateY(50px);
          transform: translateY(0);
          opacity: 1;
          transition: all 1.5s ease;
          left: 0;
          width: 100%;
        }
      }

    }

    @media all and (max-width: 980px) {
      &-content {
        &-title {
          font-size: 60px;
          height: 80px;
        }
      }
    }

    @media all and (max-width: 600px) {
      &-content {
        text-align: center;
        margin: 0 auto;
        transform: translate3d(0px, 0px, 0px) !important;
        
        &-year {
          overflow: visible;
        }
        &-title {
          overflow: visible;
          font-size: 40px;
          height: auto;
          
          & > * {
            position: relative;
          }
        }

        p {
          font-size: 20px;
        }
      }
    }
  }
</style>
