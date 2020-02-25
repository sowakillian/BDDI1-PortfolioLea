
<template>
  <div v-scroll-reveal class="home-about" id="lea">
    <h2>/éa</h2>
    <div class="home-about-content">
      <div v-html="description" class="home-about-presentation">
      </div>
      <div class="home-about-photo">
        <div class="home-about-photo-img">
          <img src="~/assets/images/photo-lea.png">
          <span class="home-about-photo-img-cv"><img src="~/assets/images/icon-pdf.png"><span>Voir mon CV</span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: [
            'description'
        ]
    }
</script>

<style lang="scss">
  .home-about {
    padding: 0 10%;
    width: 100%;
    margin: 165px 0 290px 0;

    &-content {
      display: flex;
      font-size: 28px;
      font-family: GTWalsheim-Regular;
      line-height: 40px;

      & > * {
        width: 50%;
      }
    }

    &-presentation {
      &-red {
        color: #FF4E50;
      }
      &-bold {
        font-family: GTWalsheim-Bold;
        display: block;
      }

      p {
        margin-bottom: 50px;
      }
    }

    &-photo {
      &-img {
        transform: translate(20%, -15%);
        position: absolute;

        img {
          max-width: 100%;
        }

        &-cv {
          display:flex;
          position: absolute;
          left: 0;
          top: 50%;
          color: #FF4E50;
          font-family: GTWalsheim-Bold;

          img {
            display: block;
            margin-right: 15px;
          }
        }
      }
    }

    h2 {
      font-size: 100px;
      margin-bottom: 110px;
    }

    @media all and (max-width: 1700px) {
      &-content {
        li {
          font-size: 30px;
          &:first-of-type {
            font-size: 20px;
          }
        }
      }
    }

    @media all and (max-width: 1280px) {
      margin: 100px 0 100px 0;
      &-content {
        font-size: 22px;
      }
    }

    @media all and (max-width: 980px) {
    &-content {
      flex-direction: column;

      & > * {
        width: 100%;
      }
    }

    &-photo {
      &-img {
        position: relative;
        transform: translate(35%, 0%);
      }
    }

  }

    @media all and (max-width: 767px) {
      margin: 80px 0 0px 0;
    }

    @media all and (max-width: 600px) {
      h2 {
        font-size: 50px;
        margin-bottom: 70px;
      }

    }
  }
</style>
