<template>
  <h1>Hellooow!</h1>
</template>

<script>
export default { 
  name: 'IndexPage',
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.query('')
    console.log(document)
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
