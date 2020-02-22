
<template>
  <div class="home-about" id="lea">
    <h2>/éa</h2>
    <div class="home-about-content">
      <div v-html="description" class="home-about-presentation">
      </div>
      <div class="home-about-photo">
        <img src="~/assets/images/photo-lea.png">
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
      img {
        transform: translate(20%, -15%);
        position: absolute;
      }
    }

    h2 {
      font-size: 100px;
      margin-bottom: 110px;
    }
  }
</style>
