<template>
  <div class="container">

    <home-header />
    <home-about :description="description"/>
    <home-contact :coordonnees="coordonnees" :socials="socials" :localisation="localisation" />

  </div>
</template>

<script>
import HomeHeader from '~/components/home/HomeHeader.vue'
import HomeAbout from "../components/home/HomeAbout";
import HomeContact from "../components/home/HomeContact";
import Prismic from 'prismic-javascript'
import { initApi, generatePageData } from '@/prismic.config'

export default {
  components: {
    HomeHeader,
      HomeAbout,
      HomeContact
  },

    asyncData(context) {
        if (context.payload) {
            console.warn("payloaaaad frero");
            return generatePageData('homepage', context.payload.data)
        } else {
            return initApi().then(api => {
                return api
                    .query(Prismic.Predicates.at('document.type', 'homepage'))
                    .then(response => {
                        console.log(response);
                        return generatePageData('homepage', response.results[0].data)
                    })
            })
        }
    }


}
</script>

<style lang="scss">

</style>
