
<template>
  <div class="project-header" :style="{ backgroundImage: `url('${background}')` }">
    <div class="project-header-content">
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

        methods: {
            toggleTitleTransition(typeTransition) {
                const el = document.querySelector('.imcoming');
                const year = document.querySelector('.project-header-content-year-p');

                if (typeTransition === 'addClass') {
                    console.warn('classAdded');
                   el.classList.add('imcoming-ok');
                    year.classList.add('imcoming-ok');
                } else {
                    console.warn('otherTransition')
                       el.classList.remove('imcoming-ok');
                      year.classList.remove('imcoming-ok');
                }
            }
        },

        mounted() {
            this.toggleTitleTransition('addClass');
        },

        destroyed() {
            console.warn('test');
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
          transform: translateY(90px);
          opacity: 0;
          transition: all 1.5s ease;
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
          transform: translateY(50px);
          opacity: 0;
          transition: all 1.5s ease;
        }
      }

    }

    @media all and (max-width: 980px) {
      &-content {
        &-title {
          font-size: 60px;
        }
      }
    }

    @media all and (max-width: 600px) {
      &-content {
        text-align: center;
        margin: 0 auto;
        &-title {
          font-size: 40px;
        }

        p {
          font-size: 20px;
        }
      }
    }
  }
</style>
