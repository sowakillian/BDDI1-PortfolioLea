
<template>
  <div class="home-contact" id="contact">
    <h2>contact</h2>
    <div class="home-contact-content">
      <ul v-html="coordonnees" class="home-contact-infos">
      </ul>

      <ul v-html="socials" class="home-contact-medias">
      </ul>

      <ul v-html="localisation" class="place">
      </ul>
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
  }
</style>
