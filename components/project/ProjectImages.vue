<template>
  <div class="project-images" :style="{ backgroundColor: color }">
    <div class="project-images-phonemockup">
      <span v-bind:class="{'project-images-phonemockup-img-desk':(phonemockupisdesk)}" class="project-images-phonemockup-img">
        <img :src="phonemockup"/>
        <span class="project-images-phonemockup-img-skills">
          {{ skills }}
        </span>
      </span>
    </div>
    <div v-if="template === 'evenement'" class="project-images-levenement">
      <div class="project-images-levenement-video">

      </div>
      <div class="project-images-levenement-images">
        <img :src="imgright1"/>
        <img :src="imgright2"/>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        props: [
            'color',
            'skills',
            'deskmockup',
            'phonemockup',
            'phonemockupisdesk',
            'template',
            'imgright1',
            'imgright2'
        ],

    };
</script>

<style lang="scss">
  .project-images {
    display: flex;
    position: relative;
    padding: 0 8%;
    margin-bottom: 300px;

    &-phonemockup {
      width: 35%;
      position: absolute;
      left: -20px;
      top: 0;
      transform: translateY(-37%);

      &-img {
        display: block;

        &-desk {
          transform: translateY(-15%);

          .project-images-phonemockup-img-skills {
            transform: translateX(-15%);
          }
        }

        &-skills {
          position: absolute;
          top: 28%;
          white-space: nowrap;
          transform: translateX(-20%);
          font-size: 30px;
        }
        img {
          max-width: 100%;
        }

      }
    }

    &-deskmockup {
      width: 76%;
      img {
        max-width: 100%;
        display: block;
        margin-left: auto;
      }
    }

    &-levenement {
      margin-top: 160px;
      display: flex;
      width: 100%;
      transform: translateY(140px);

      &-video {
        width: 100%;
        height: 100%;
        margin-right: 42px;
        background-color: black
      }

      &-images {
        display: flex;
        flex-direction: column;

        img {
          &:first-of-type {
            margin-bottom: 28px;
          }
        }
      }
    }

    @media all and (max-width: 1280px) {
    &-phonemockup {

      &-img {

        &-skills {
          font-size: 22px;
        }

      }
    }
  }

    @media all and (max-width: 767px) {
      display: block;
      margin-top: 100px;
      &-deskmockup {
        width: 100%;
        margin-top: -260px;
      }
      &-phonemockup {
        position: static;
        transform: translateY(-250px);
        width: 60%;
        margin: 0 auto;
        left: 0;
        &-img {

          &-skills {
            font-size: 22px;
            transform: translateX(-50%);
            left: 50%;
            bottom: 0;
            top: initial;
          }

        }
      }
    }

    @media all and (max-width: 480px) {
      &-phonemockup {
        &-img {
          &-skills {
            font-size: 16px;
          }
        }
      }
    }
  }
</style>
