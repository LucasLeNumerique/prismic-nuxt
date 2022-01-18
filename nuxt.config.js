// Truncated nuxt.config.js example file

import smConfig from "./sm.json";
import { getStoriesPaths } from "slice-machine-ui/helpers/storybook";

export default {
  // ...
  modules: [["@nuxtjs/prismic", {
    endpoint: smConfig.apiEndpoint || "",
  }], ["nuxt-sm"]],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"]
  },
  storybook: {
    // This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
    stories: [...getStoriesPaths().map(path => path.replace("../", "~/"))]
  },
  // This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
  ignore: [...getStoriesPaths().map(path => path.replace("../", "~/"))],
  generate: {
    fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA
  }
}
