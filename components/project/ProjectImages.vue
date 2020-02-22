<template>
  <div class="project-images" :style="{ backgroundColor: color }">
    <div class="project-images-phonemockup">
      <span class="project-images-phonemockup-img">
        <img src="~/assets/images/projects/labfive-phonemockup.png">
        <span class="project-images-phonemockup-img-skills">
          Adobe XD / Photoshop / Illustrator
        </span>
      </span>
    </div>
    <div class="project-images-deskmockup">
      <img src="~/assets/images/projects/labfive-deskscreen.png">
    </div>
  </div>
</template>

<script>
    export default {
        props: [
            'color'
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
          right: -50%;
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
  }
</style>
