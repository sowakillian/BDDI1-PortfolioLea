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

Descriptions of each custom types datas :
Project custom type (m = mandatory)
- slug (m, String) : id of the project (used into the link)
- color (m, Color) : color of project titles and background under images part
- year (m, String) : year and type of project (school, professionnal etc..)
- skills (m, String) : skills used, displayed in project page
- name (m, String) : name of the project, used in hp and project page
- type (m, String) : type of skills (UX, UI, dev etc..)
- pitch (m, String)
- solution (m, String)
- deskmockup (m, Image, 1461 x 840px)
- phonemockup (m, Image, 676 x 846px)
- phonemockupisdesk (Boolean) : used to know if it's a phone mockup or a desk mockup
- background (m, Image, 1920 x 1080px)

## How to deploy on preprod ?

The project is automatically deployed on a Netlify server
Each push on branch "develop" is deployed on preprod.

Preprod link : https://portfolio-leapradel.netlify.com/


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
