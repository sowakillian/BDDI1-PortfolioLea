<template>
  <div class="container">
    <project-header :color="color" :title="title" :type="type" :year="year" :background="background"/>
    <project-description :pitch="pitch" :solution="solution" :color="color"/>
    <project-images :color="color" :skills="skills" :phonemockup="phonemockup" :deskmockup="deskmockup"/>
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
    import axios from 'axios'

    export default {

        pageTransition: {
            afterEnter(el) {
                console.warn('test');
            }
        },

        layout (context) {
            return 'project'
        },

        components: {
            ProjectHeader,
            ProjectDescription,
            ProjectBack,
            ProjectImages
        },

        asyncData(context) {
            if (context.payload) {
                return generatePageData('project', context.payload.data);

            } else {
                return initApi().then(api => {
                    return api
                        .query(Prismic.Predicates.at('my.project.uid', context.params.slug))
                        .then(response => {
                            return generatePageData('project', response.results[0].data)
                        })
                })
            }
        },

    }
</script>

<style>

</style>
