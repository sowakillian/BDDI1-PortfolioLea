
<template>
  <div v-scroll-reveal class="home-contact" id="contact">
    <h2>contact</h2>
    <div class="home-contact-content">
      <div v-html="coordonnees" class="home-contact-infos">
      </div>

      <div v-html="socials" class="home-contact-medias">
      </div>

      <div v-html="localisation" class="home-contact-place">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: [
            'coordonnees',
            'socials',
            'localisation'
        ]
    }
</script>


<style lang="scss">
  .home-contact {
    width: 100%;
    padding: 0 10%;

    &-content {
      display: flex;
      justify-content: space-between;

      li {
        font-size: 40px;
        font-family: GTWalsheim-Regular;
        line-height: 70px;
        &:first-of-type {
          font-size: 25px;
          font-family: GTWalsheim-Bold;
          margin-bottom: 20px;
        }
      }
    }

    h2 {
      font-size: 100px;
      margin-bottom: 110px;
    }

    @media all and (max-width: 1280px) {
     &-content {
       li {
         font-size: 30px;
         &:first-of-type {
           font-size: 20px;
         }
       }
     }
    }

    @media all and (max-width: 980px) {
      &-content {
        flex-direction: column;

        li:first-of-type {
          margin-bottom: 0;
        }
        & > * {
          margin-bottom: 50px;
          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }

    }

    @media all and (max-width: 600px) {
      h2 {
        font-size: 50px;
        margin-bottom: 70px;
      }

    }
  }
</style>
