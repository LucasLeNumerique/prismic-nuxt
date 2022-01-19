// Truncated nuxt.config.js example file

import smConfig from "./sm.json";
import { getStoriesPaths } from "slice-machine-ui/helpers/storybook";

export default {
  // ...
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{ description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons' }
    ]
  },
  modules: [["@nuxtjs/prismic", {
    endpoint: smConfig.apiEndpoint || "",
  }], ["nuxt-sm"]],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"],
    build: {
      /*
      ** Run ESLint on save
      */
      vendor: ['vue-material'],
      extend (config, { isDev, isClient }) {
        if (isDev && isClient) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          })
        }
      }
    }
  },
  plugins: [
    { src: '~/plugins/vue-material' }
  ],
  storybook: {
    // This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
    stories: [...getStoriesPaths().map(path => path.replace("../", "~/"))]
  },
  // This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
  ignore: [...getStoriesPaths().map(path => path.replace("../", "~/"))],
  generate: {
    fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA
  },
  css: [
    { src: 'vue-material/dist/vue-material.min.css', lang: 'css' },
    { src: 'vue-material/dist/theme/default.css', lang: 'css' } // include vue-material theme engine
  ]
}
