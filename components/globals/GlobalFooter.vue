
<template>
  <div class="global-footer" :style="{ backgroundColor: footerBg }">
    {{ footerDatas }}
  </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {

        computed: mapState(['footerBg']),

        props: [
            'footerDatas',
        ]
    }
</script>

<style lang="scss">
  .global-footer {
    font-size: 20px;
    text-align: center;
    padding: 140px 10% 45px 10%;
    line-height: 30px;
  }
</style>
