
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
    max-width: 80%;
    margin: 140px auto 45px auto;
    line-height: 30px;
  }
</style>
