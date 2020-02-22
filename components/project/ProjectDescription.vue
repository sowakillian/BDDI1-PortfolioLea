import axios from 'axios'
<template>
  <div class="project-description">
    <div class="project-description-pitch">
      <div class="project-description-title">
        pitch
      </div>
      <div v-html="pitch" class="project-description-text">

      </div>
    </div>
    <div class="project-description-solution">
      <div class="project-description-title">
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
            'solution'
        ]
    }
</script>

<style lang="scss">
  .project-description {
    display: flex;
    padding: 130px 8%;

    &-title {
      font-size: 50px;
      margin-bottom: 45px;
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
      padding-left: 5%;
    }

  }
</style>
