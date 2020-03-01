<template>
  <div class="project-images" :style="{ backgroundColor: color }">
    <div class="project-images-phonemockup">
      <span class="project-images-phonemockup-img">
        <img :src="phonemockup" v-scroll-reveal/>
        <span class="project-images-phonemockup-img-skills">
          {{ skills }}
        </span>
      </span>
    </div>
    <div class="project-images-deskmockup" v-scroll-reveal>
      <img :src="deskmockup" />
    </div>
  </div>
</template>

<script>
    export default {
        props: [
            'color',
            'skills',
            'deskmockup',
            'phonemockup'
        ]
    };
</script>

<style lang="scss">
  .project-images {
    padding-top: 80px;
    display: flex;
    justify-content: flex-end;
    position: relative;

    &-phonemockup {
      width: 35%;
      position: absolute;
      left: -20px;
      top: 0;
      transform: translateY(-37%);

      &-img {
        display: block;

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
