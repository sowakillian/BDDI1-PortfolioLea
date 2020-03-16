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
      <div v-html="solution" class="project-description-text">

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: [
            'pitch',
            'solution',
            'color'
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
    }

    &-solution {
      margin-top: 95px;
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
      padding: 80px 6%;

      &-title {
        margin-bottom: 20px;
        font-size: 35px;
      }

      &-solution {
        padding-left: 0;
      }
    }

  }
</style>
