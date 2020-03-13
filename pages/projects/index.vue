<template>
  <div class="container">
    <h1 class="projectpage-title" v-rellax="{
      // Rellax Options
      // See: https://github.com/dixonandmoe/rellax#features
      speed: -2,
    }">projets</h1>

    <ul class="project-list">
      <li v-for="(project, index) in projects" :key="index" >
        <div class="project" :style="{ backgroundColor: project.data.color }">
          <nuxt-link :to="`/projects/${project.uid}`" class="project-phone">
            <img v-bind:class="{'project-phone-img':true, 'project-phone-img-desk':(project.data.phonemockupisdesk === true)}" :src="project.data.phonemockup.url" />
            <span class="project-phone-type">{{ Dom.RichText.asText(project.data.name) }} - {{ Dom.RichText.asText(project.data.type) }}</span>
            <span class="project-more"><span class="project-more-symbol">+</span><span class="project-more-text">voir le projet</span></span>
          </nuxt-link>
        </div>
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
                console.log('payload ouiouioui');
                return generatePageData('project_page', context.payload)
            } else {
                return initApi().then(api => {

                    return api
                        .query(Prismic.Predicates.at('document.type', 'project'))
                        .then(response => {
                            return generatePageData('project_page', response.results);

                        })
                });

            }
        },
    }
</script>

<style lang="scss">
  .projectpage-title {
    font-size: 100px;
    margin-top: 130px;
    margin-left: 190px;
  }
  .project-list {
    display: flex;
    justify-content: space-around;
    margin: 100px 10%;
    flex-wrap: wrap;

    li {
      width: 50%;
      display: flex;
      justify-content: center;
      &:nth-of-type(odd) {
        margin-top: 300px;
      }
    }
  }

  .project {
    height: 550px;
    width: 382px;
    background-color: #4BD079;
    transform: rotate(23deg);
    position: relative;
    transition: all .8s ease;

    &:hover {
      //transform: scale(1.075) rotate(22deg);
      height: 580px;
      width: 400px;

      .project-more-symbol {
        transform: translate(-45%, -35%) rotate(-203deg);
      }
    }

    &-phone {
      display: block;
      width: 100%;

      &-type {
        position: absolute;
        right: 0;
        transform: rotate(68deg) translate(75%, 80px);
        font-size: 20px;
      }

      &-img {
        position: absolute;
        left: 30%;
        top: 30%;
        transform: translate(-50%, -50%) rotate(-23deg);
        max-width: 640px;

        &-desk {
          transform: translate(-50%, -20%) rotate(-23deg);
        }
      }
    }

  &-more {
     width: 60px;
     height: 60px;
     position: absolute;
     right: -5px;
     bottom: -5px;
     background-color: #212121;

    &-symbol {
      color: white;
      position: absolute;
      font-size: 60px;
      font-family: GTWalsheim-Regular;
      left: 45%;
      top: 40%;
      transform: translate(-50%, -50%) rotate(-23deg);
      transition: all .6s ease;
    }

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

  @media all and (max-width: 1700px) {
    .project-list {
      margin: 100px 5%;
    }
  }

  @media all and (max-width: 1500px) {
    .project-list {
      margin: 100px 2%;
    }
  }

  @media all and (max-width: 1280px) {
    .projectpage-title {
      font-size: 70px;
      margin-top: 40px;
      margin-left: 60px;
    }
    .project-list {
      flex-direction: column;
      align-items: center;
      margin-top: 0;

      li {
        width: 100%;
        margin-top: 300px;
        &:nth-of-type(odd) {
          margin-top: 300px;
        }
      }
    }
  }

  @media all and (max-width: 600px) {
    .projectpage-title {
      font-size: 50px;
      margin-top: 40px;
      margin-left: 40px;
    }
    .project-list {

      li {
        margin-top: 200px;
        &:nth-of-type(odd) {
          margin-top: 200px;
        }
      }
    }
  }
</style>
