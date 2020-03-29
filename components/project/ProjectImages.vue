<template>
  <div class="project-images" :style="{ backgroundColor: color }">
    <div class="project-images-phonemockup">
      <span v-bind:class="{'project-images-phonemockup-img-desk':(phonemockupisdesk), 'project-images-phonemockup-img-icecream':(template === 'icecream')}" class="project-images-phonemockup-img">
        <img :src="phonemockup"/>
        <span class="project-images-phonemockup-img-skills">
          {{ skills }}
        </span>
      </span>
    </div>
    <div v-if="template === 'evenement'" class="project-images-levenement">
      <div class="project-images-levenement-video">
        <video autoplay loop src="http://sowakillian.fr/portfolio-lea/videos/video-levenement-c.mov"></video>
      </div>
      <div class="project-images-levenement-images">
        <img :src="imgright1"/>
        <img :src="imgright2"/>
      </div>
    </div>

    <div v-if="template === 'icecream'" class="project-images-icecream">
      <div class="project-images-icecream-video" >
        <video autoplay loop src="http://sowakillian.fr/portfolio-lea/videos/video-icecream-c.mp4"></video>
      </div>
      <div class="project-images-icecream-images">
        <img :src="imgright1"/>
        <img :src="imgright2"/>
      </div>
    </div>

    <div v-if="template === 'labfive'" class="project-images-labfive">
      <div class="project-images-deskmockup" >
        <img :src="deskmockup"/>
      </div>

      <div class="project-images-labfive-bottom">
        <div class="project-images-labfive-bottom-phonevideo">
          <video autoplay loop src="http://sowakillian.fr/portfolio-lea/videos/video-labfive-c.mp4"></video>
        </div>
        <div class="project-images-labfive-bottom-imgright2">
          <img :src="imgright2"/>
        </div>
      </div>
    </div>

    <div v-if="template === 'lecerf'" class="project-images-lecerf">
      <div class="project-images-deskmockup" >
        <img :src="deskmockup"/>
      </div>

      <div class="project-images-lecerf-video">

      </div>
    </div>

    <div v-if="template === 'millet'" class="project-images-millet">
      <div class="project-images-millet-video" >
        <video autoplay loop src="http://sowakillian.fr/portfolio-lea/videos/video-millet-c.mov"></video>
      </div>

      <div class="project-images-millet-img">
        <img :src="imgright1"/>
      </div>
    </div>

    <div v-if="template === 'spacex'" class="project-images-spacex">
      <div class="project-images-spacex-video" >
        <video autoplay loop src="http://sowakillian.fr/portfolio-lea/videos/video-spacex-c.mov"></video>
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

        &-icecream {
          transform: translateY(0%);



          .project-images-phonemockup-img-skills {
            transform: translateX(-5%);
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
      margin-bottom: 30px;
      width: 85%;
      transform: translateX(110px);
      margin-left: auto;
      img {
        max-width: 100%;
      }
    }

    &-millet {
      display: flex;
      margin-top: 40px;
      width: 100%;

      &-video {
        max-width: 1200px;
        video {
          max-width: 100%;
        }
        margin-top: 200px;
        transform: translateY(100px);
      }

      &-img{
        width: 594px;
        transform: translateX(130px);
        img {
          max-width: 100%;
        }
      }
    }

    &-levenement {
      margin-top: 160px;
      display: flex;
      width: 100%;
      transform: translateY(140px);

      &-video {
        width: 100%;
        margin-right: 42px;
        video {
          max-width: 100%;
        }
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

    &-spacex {
      margin-top: 160px;
      width: 100%;
      display: flex;
      justify-content: center;
      transform: translateY(140px);

      &-video {
        max-width: 1200px;
        background-color: black;


        video {
          max-width: 100%;
        }
      }
    }

    &-lecerf {
      width: 100%;
      &-deskmockup {
        margin-bottom: 30px;
        width: 85%;
        transform: translateX(110px);
        margin-left: auto;
        img {
          max-width: 100%;
        }
      }

      &-video {
        background-color: black;
        width: 100%;
        transform: translateY(160px);
        margin-top: -160px;

        video {
          max-width: 100%;
        }
      }
    }

    &-labfive {
      width: 100%;
      margin-top: 110px;
      margin-bottom: 80px;

      &-deskmockup {
        margin-bottom: 30px;
        width: 85%;
        transform: translateX(110px);
        margin-left: auto;
        img {
          max-width: 100%;
        }
      }

      &-bottom {
        display: flex;
        justify-content: space-around;
        &-phonevideo {
          width: 400px;
          height: 800px;
          background-color: black;
          transform: translateY(160px);
          video {
            max-width: 100%;
          }
        }
      }
    }

    &-icecream {
      display: flex;
      margin-top: 160px;
      width: 100%;
      justify-content: center;
      transform: translateY(140px);
      &-video {
        display: flex;
        width: 710px;
        margin-right: 32px;
          video {
            max-width: 100%;
          }

      }
      &-images {
        img {
          width: 100%;
          &:first-of-type {
            margin-bottom: 32px;
          }
        }
        display: flex;
        flex-direction: column;
      }
    }

    @media all and (max-width: 1440px) {
      &-icecream {
        margin-top: 70px;
      }
    }

    @media all and (max-width: 1280px) {
      &-millet {
        &-video {
          margin-top: 60px;
        }
        &-img {
          display: none;
        }
      }

      &-icecream {
        margin-top: 50px;
      }
    &-phonemockup {

      &-img {

        &-skills {
          font-size: 22px;
        }

      }
    }
  }

    @media all and (max-width: 980px) {
      &-millet {
        &-video {
          margin-top: 20px;
        }
      }

      &-icecream {
        margin-top: 0px;
      }
    }

    @media all and (max-width: 767px) {
      display: block;
      margin-top: 100px;
      &-deskmockup {
        width: 100%;
        margin-top: -260px;
        transform: translateX(0);
      }
      &-phonemockup {
        position: static;
        transform: translateY(-250px);
        width: 60%;
        margin: 0 auto;
        left: 0;
        &-img {

          &-desk {
            .project-images-phonemockup-img-skills {
              transform: translateX(-50%);
            }
          }

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
      padding-top: 100px;
      margin-bottom: 80px;

      &-lecerf {
        &-video {
          display: none;
        }
      }
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
