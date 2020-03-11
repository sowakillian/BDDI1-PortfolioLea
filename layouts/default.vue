<template>
  <div>
    <CursorFx class="cursor" color="#FF4E50" color-hover="#f1c40f" hide-outside inside-size="20px"/>
    <global-header :navColor="navColor"  />
    <nuxt />

    <global-footer />
  </div>
</template>

<script>
import GlobalFooter from '~/components/globals/GlobalFooter.vue';
import GlobalHeader from '~/components/globals/GlobalHeader.vue';

export default {

    data() {
        return {
            navColor: "black"
        }
    },

  components: {
    GlobalHeader,
    GlobalFooter,
  }
}
</script>

<style>
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

.cursor {
  z-index: 1000;
  position: relative;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
