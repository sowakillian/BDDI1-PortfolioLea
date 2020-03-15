
<template>
  <div class="home-header">
    <div class="home-header-overlay" v-bind:class="{ 'home-header-overlay-hidden': isOverlayHidden }">
      <div class="home-header-overlay-title">
        //
      </div>
    </div>
    <span class="home-header-marquee">
      Web/Graphic design
    </span>
    <div class="home-header-content">
      <div class="home-header-title" v-rellax="{
      // Rellax Options
      // See: https://github.com/dixonandmoe/rellax#features
      speed: -3,
    }">
        <div class="home-header-title-h1">/éa Prade/</div>
        <span>DIGITAL DESIGNER</span>
      </div>
      <div class="projects-slider">

      </div>
    </div>
  </div>
</template>

<script>
  import ProjectSlider from '~/components/project/ProjectSlider.vue';
  import { mapState } from 'vuex';

  export default {

      computed: mapState(['isOverlayHidden']),

      components: {
          ProjectSlider
      },

  }

</script>

<style lang="scss">
  .home-header {
    height: 100vh;
    width: 100%;
    padding: 0 5% 0 5%;
    font-size: 30px;
    position: relative;
    margin-top: -120px;

    &-overlay {
      width: 100%;
      height: 100vh;
      position: fixed;
      background-image: url("../../assets/background-header.jpg");
      background-color: white;
      left: 0;
      top: 0;
      z-index: 400;
      display: none;


      &-title {
        font-size: 150px;
        position: absolute;
        top: 50%;
        left: 5%;
        transform: translateY(-50%);
      }


      &-hidden {
        transition: all 3s ease;
        opacity: 0;
        visibility: hidden;
        //background-image: none;
        //background-color: transparent;
        //pointer-events: none;
      }
    }

    &-marquee {
      font-size: 600px;
      white-space: nowrap;
      will-change: transform;
      animation: marquee 32s linear infinite;
      color: white;
      position: absolute;       /* un peu d'espace pour la transition */
      top: 20%;
    }

    @keyframes marquee {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    &-title {
      &-h1 {
        font-size: 150px;
      }

      span {
        letter-spacing: calc((200 / 1000) * 1em);
        font-size: 30px;
        color: #FF4E50;
        font-family: 'GTWalsheim-Regular';
        width: 100%;
        text-align: right;
        padding-right: 70px;
        display: block;
      }
    }

    &-content {
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;

      .projects-slider {
        width: 40%;
        height: 900px;
      }


    }

    @media all and (max-width: 1750px) {
      &-title {
        &-h1 {
          font-size: 110px;
        }
      }
    }

    @media all and (max-width: 1600px) {
      &-title {
        &-h1 {
          font-size: 100px;
        }
      }
    }

    @media all and (max-width: 1280px) {
      &-marquee {
        font-size: 300px;
      }
      &-title {
        &-h1 {
          font-size: 70px;
        }
      }
    }

    @media all and (max-width: 980px) {
      padding: 0;

      &-marquee {
        top: 10%;
      }
      &-content {
        flex-direction: column;
        justify-content: center;

        .projects-slider {
          width: 100%;
          transform: scale(0.8);

        }
      }

      &-title {
        margin-top: 200px;
        transform: translate3d(0px, 0px, 0px) !important;
        &-h1 {
          font-size: 60px;
        }
      }
    }

    @media all and (max-width: 420px) {
      padding: 0;

      &-title {
        &-h1 {
          font-size: 40px;
        }

        span {
          font-size: 20px;
        }
      }
    }
  }
</style>
