import axios from 'axios'
import {initApi} from "./prismic.config";
const Prismic = require('prismic-javascript')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' },
      { rel: 'stylesheet', type: 'text/css', href: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css' }
    ]
  },

  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      };

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/reset.scss',
    '@/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-scroll-reveal', ssr: false },
    { src: '~/plugins/vue-rellax', ssr: false },
    { src: '~/plugins/vue-smooth-scroll', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '~/modules/crawler',
    '~/modules/static',
  ],
  prismic: {
    endpoint: 'https://leapradel-portfolio.cdn.prismic.io/api/v2',
  },


  generate: {
    routes: function() {
      // Fetch content for the homepage and generate it
      const homepage = initApi().then(api => {
        return api
          .query(Prismic.Predicates.at('document.type', 'homepage'))
          .then(response => {
            return response.results.map(payload => {
              return {
                route: '/',
                payload
              }
            })
          })
      });

      // Fetch all the blog posts to generate the Blog page
      const projectPage = initApi().then(api => {
        return api
          .query(Prismic.Predicates.at('document.type', 'project'))
          .then(response => {
            return [{
              route: `/projects`,
              payload: response.results
            }]
          })
      });

      // Fetch again all the blog posts, but this time generating each post's page
      const projectItems = initApi().then(api => {
        return api
          .query(Prismic.Predicates.at('document.type', 'project'))
          .then(response => {
            return response.results.map(payload => {
              return {
                route: `/projects/${payload.uid}`,
                payload
              }
            })
          })
      });

      // Here I return an array of the results of each promise using the spread operator.
      // It will be passed to each page as the `payload` property of the `context` object,
      // which is used to generate the markup of the page.
      return Promise.all([homepage, projectPage, projectItems]).then(values => {
        return [...values[0], ...values[1], ...values[2]]
      })
    }
  },
  modules: [
    '@nuxtjs/prismic',
  ],
  /*
  ** Nuxt.js modules
  */
  /*



  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: ['vue-slick'],
    extend (config, ctx) {
      config.module.rules.push(
        {
          test: /\.mov$/,
          loader: 'file-loader'
        }
      )
    }
  },

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  }
}
