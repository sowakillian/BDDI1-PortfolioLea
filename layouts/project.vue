<template>
  <div>
    <div class="page-overlay"></div>
    <global-header :navColor="navColor" />
    <nuxt />
    <global-footer />
  </div>
</template>

<script>
    import GlobalFooter from '~/components/globals/GlobalFooter.vue'
    import GlobalHeader from '~/components/globals/GlobalHeader.vue'

    export default {

        data() {
            return {
                navColor: "white"
            }
        },

        components: {
            GlobalHeader,
            GlobalFooter,
        }
    }
</script>

<style lang="scss">
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .page-overlay {
    position: fixed;
    background-color: white;
    top: 0;
    left: 0;
    width: 0;
    height: 200vh;
    z-index: 3;

    &-ciao {
        transform: translateX(100%);
      transition: all 2s ease;
     }
  }

</style>
