<template>
  <div class="layout-basic">
    <global-header  />
    <nuxt />

    <global-footer :footerDatas="footer" />
  </div>
</template>

<script>
import GlobalFooter from '~/components/globals/GlobalFooter.vue';
import GlobalHeader from '~/components/globals/GlobalHeader.vue';
import { mapState } from 'vuex';

export default {

    computed: mapState(['footer']),

  components: {
    GlobalHeader,
    GlobalFooter,
  },

}
</script>

<style>

  .layout-basic {
    z-index: 2;
    position: relative;
  }
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
