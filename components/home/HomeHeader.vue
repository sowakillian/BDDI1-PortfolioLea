
<template>
  <div class="home-header">
    <span class="home-header-marquee">
      Web/Graphic design
    </span>
    <div class="home-header-content">
      <div class="home-header-title">
        <h1>/éa Prade/</h1>
        <span>DIGITAL</span>
      </div>
      <div class="projects-slider">
        <project-slider />
      </div>
    </div>
  </div>
</template>

<script>
  import ProjectSlider from '~/components/project/ProjectSlider.vue';

  export default {
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

    &-marquee {
      font-size: 600px;
      display: inline-block;
      white-space: nowrap;
      animation: defilement-rtl 70s infinite linear;
      color: white;
      position: absolute;
      padding-right: 2em;                   /* un peu d'espace pour la transition */
      left: 0;
      top: 20%;
    }

    @keyframes defilement-rtl {
      0% {
        transform: translate3d(0,0,0);      /* position initiale à droite */
      }
      100% {
        transform: translate3d(-100%,0,0);  /* position finale à gauche */
      }
    }

    &-title {
      h1 {
        font-size: 150px;
      }

      span {
        font-size: 30px;
        color: #FF4E50;
        font-family: 'GTWalsheim-Regular';
      }
    }

    &-content {
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: space-around;
      z-index: 2;
      position: relative;
    }
  }
</style>
