<template>
  <div class="container">
    <h1>projets</h1>
    <article class="post" v-for="(project, index) in projects" :key="index">
      <header>
        <h1>
          <nuxt-link :to="`/projects/${project.uid}`">{{ Dom.RichText.asText(project.data.name) }}</nuxt-link>
        </h1>
      </header>
    </article>
  </div>
</template>

<script>
    import Prismic from 'prismic-javascript'
    import PrismicDOM from 'prismic-dom'
    import { initApi, generatePageData } from '@/prismic.config'

    export default {
        data() {
            return {
                Dom: PrismicDOM
            }
        },
        asyncData(context) {
            if (context.payload) {
                return generatePageData('project_page', context.payload)
            } else {
                return initApi().then(api => {
                    return api
                        .query(Prismic.Predicates.at('document.type', 'project'))
                        .then(response => {
                            return generatePageData('project_page', response.results)
                        })
                })
            }
        }
    }
</script>
