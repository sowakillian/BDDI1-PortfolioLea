# portfolio-lea

> This project is the portfolio of Lea Pradel, graphic design student at @Gobelins

## Description of the project

Dynamic portfolio to present Lea Pradel and these realisations.
- Front-end environment : NuxtJS (VueJS), Javascript
- Back-end environment : Prismic
- Deployment environment : Netlify


## How to setup the project in local ?

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## How to edit the datas ?

- Connect on Prismic : https://leapradel-portfolio.prismic.io/
- Choose a project/template, edit it and publish it.
All modifications are automatically changed in preprod

## How to deploy on preprod ?

The project is automatically deployed on a Netlify server
Each push on branch "develop" is deployed on preprod.

Preprod link : https://portfolio-leapradel.netlify.com/


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
