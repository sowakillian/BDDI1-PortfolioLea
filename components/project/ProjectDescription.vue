import axios from 'axios'
<template>
  <div class="project-description">
    <div class="project-description-pitch">
      <div class="project-description-title" :style="{ color: color }">
        pitch
      </div>
      <div v-html="pitch" class="project-description-text">

      </div>
    </div>
    <div class="project-description-solution">
      <div class="project-description-title" :style="{ color: `${color}` }">
        solution
      </div>
      <div class="project-description-text">
        <p v-html="solution"></p>
        <div v-if="projectlink_text" class="project-description-text-more">
          <svg xmlns="http://www.w3.org/2000/svg" width="51.62" height="35.679" viewBox="0 0 51.62 35.679">
            <g id="Calque_2" data-name="Calque 2" transform="translate(51.62 33.364) rotate(180)">
              <g id="Calque_1" data-name="Calque 1" transform="translate(0 0)">
                <path id="Tracé_1" data-name="Tracé 1" d="M43.89,1.54,62.25,16.659,43.89,32.641" transform="translate(-13.63 -1.54)" fill="none" :stroke="`${color}`" stroke-linejoin="round" stroke-width="6"/>
                <line id="Ligne_16" data-name="Ligne 16" x1="48.62" transform="translate(0 15.202)" fill="none" :stroke="`${color}`" stroke-miterlimit="10" stroke-width="6"/>
              </g>
            </g>
          </svg>
          <p v-html="projectlink_text" :style="{ color: `${color}` }"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: [
            'pitch',
            'solution',
            'color',
            'projectlink_text',
        ]
    };
</script>

<style lang="scss">
  .project-description {
    display: flex;
    padding: 130px 8%;
    justify-content: space-between;
     background-color: white;

    &-title {
      font-size: 50px;
      margin-bottom: 45px;
    }

    &-pitch {
      margin-bottom: 230px;
      width: 45%;
    }



    &-text {
      font-size: 28px;
      font-family: GTWalsheim-Regular;
      line-height: 40px;

      &-marginTop {
        margin-top: 20px;
      }

      &-more {
        margin-top: 40px;
        svg {
          transform: rotate(180deg);
          width: 48px;
          margin-right: 24px;
        }
        display: flex;
        font-family: GTWalsheim-Bold;
      }
    }

    &-solution {
      margin-top: 55px;
      width: 40%;
    }

    @media all and (max-width: 1600px) {
      &-text {
        font-size: 20px;
        line-height: 30px;
      }
    }

    @media all and (max-width: 767px) {
      flex-direction: column;
      padding: 50px 6%;

      &-title {
        margin-bottom: 20px;
        font-size: 35px;
      }

      &-pitch, &-solution {
        width: 100%;
      }

      &-pitch {
        margin-bottom: 0;
      }

      &-solution {
        margin-top: 40px;
        margin-bottom: 0;
      }

      &-solution {
        padding-left: 0;
      }
    }

  }
</style>
