
<template>
  <div class="project-header" :style="{ backgroundImage: `url('${background}')` }">
    <div class="project-header-content">
      <span class="project-header-content-title">{{ title }} - <span class="project-header-content-title-type">{{ type }}</span></span>
      <p>{{ year }}</p>
    </div>
  </div>
</template>

<script>
    export default {
        props: [
            'title',
            'type',
            'year',
            'background',
        ]
    }

</script>

<style lang="scss">

  .project-header {
    height: 100vh;
    width: 100%;
    padding: 0 5% 0 5%;
    margin-top: -120px;
    display: flex;
    align-items: center;
    background-color: slategray;
    background-image: url("../../assets/images/projects/labfive-bg.jpg");
    background-size: cover;
    background-position: center center;

    &-content {
      color: white;
      &-title {
        font-size: 80px;

        &-type {
          font-family: GTWalsheim-Regular;
        }
      }

      p {
        font-size: 40px;
        margin-top: 20px;
        font-family: GTWalsheim-Regular;
      }

    }

    @media all and (max-width: 980px) {
      &-content {
        &-title {
          font-size: 60px;
        }
      }
    }

    @media all and (max-width: 600px) {
      &-content {
        text-align: center;
        margin: 0 auto;
        &-title {
          font-size: 40px;
        }

        p {
          font-size: 20px;
        }
      }
    }
  }
</style>
