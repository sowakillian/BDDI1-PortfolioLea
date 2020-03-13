
<template>
  <div class="global-footer">
    {{ footerDatas }}
  </div>
</template>

<script>
    import {generatePageData, initApi} from "../../prismic.config";
    import Prismic from 'prismic-javascript'
    import PrismicDOM from 'prismic-dom'

    export default {
        props: [
            'footerDatas',
        ]
    }
</script>

<style lang="scss">
  .global-footer {
    font-size: 20px;
    text-align: center;

    margin: 140px 0 45px 0;
  }
</style>
