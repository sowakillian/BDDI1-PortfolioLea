<template>
  <div class="container">
    <project-header :title="title" :type="type"/>
    <project-description :pitch="pitch" :solution="solution" />
    <project-images />
    <project-back />
  </div>
</template>

<script>
    import ProjectHeader from '~/components/project/ProjectHeader.vue';
    import ProjectDescription from '~/components/project/ProjectDescription.vue';
    import ProjectBack from '~/components/project/ProjectBack.vue';
    import ProjectImages from '~/components/project/ProjectImages.vue'
    import Prismic from 'prismic-javascript'
    import { initApi, generatePageData } from '@/prismic.config'

    export default {
        components: {
            ProjectHeader,
            ProjectDescription,
            ProjectBack,
            ProjectImages
        },

        asyncData(context) {
            if (context.payload) {
                return generatePageData('project', context.payload.data)
            } else {
                return initApi().then(api => {
                    return api
                        .query(Prismic.Predicates.at('my.project.uid', context.params.slug))
                        .then(response => {
                            return generatePageData('project', response.results[0].data)
                        })
                })
            }
        }
    }
</script>

<style>

</style>
