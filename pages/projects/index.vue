<template>
  <div class="container">
    <h1>projets</h1>

    <ul class="project-list">
      <li class="project" :style="{ backgroundColor: project.data.color }" v-for="(project, index) in projects" :key="index">
        <nuxt-link :to="`/projects/${project.uid}`" class="project-phone">
          <img class="project-phone-img" :src="project.data.phonemockup.url" />
          <span class="project-more"><span class="project-more-text">voir le projet</span></span>
        </nuxt-link>
      </li>
    </ul>

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

<style lang="scss">
  h1 {
    font-size: 100px;
    margin-top: 130px;
    margin-left: 190px;
  }
  .project-list {
    display: flex;
    justify-content: space-around;
    margin: 100px 10%;

    li:nth-of-type(odd) {
      margin-top: 300px;
    }
  }

  .project {
    height: 550px;
    width: 382px;
    background-color: #4BD079;
    transform: rotate(23deg);
    position: relative;

    &-phone {
      display: block;
      width: 100%;

      &-img {
        position: absolute;
        left: 30%;
        top: 30%;
        transform: translate(-50%, -50%) rotate(-23deg);
        max-width: 640px;
      }
    }

  &-more {
     width: 60px;
     height: 60px;
     position: absolute;
     right: -5px;
     bottom: -5px;
     background-color: #212121;

  &-text {
     color: #212121;
     position: absolute;
     transform: rotate(-23deg);
     bottom: -30px;
     font-size: 18px;
     display: inline-block;
     white-space: nowrap;
   }
  }
  }
</style>
