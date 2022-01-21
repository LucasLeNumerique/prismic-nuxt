<template>
    <article>

      <h2>{{ document.data.headline2.map(item => item.text).join('') }}</h2>

      <div v-for="(item, index) in document.data['article-content']" :key="index">
        <h3 v-if="item.type === 'heading3'">
          {{ item.text }}
        </h3>

        <p :key="index" v-if="item.type === 'paragraph'">
          {{ item.text }}
        </p>
      </div>

    </article>

</template>

<script>

export default {
  name: "list_article",

  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID('article', params.uid)
    console.log(document.data.headline2.map(item => item.text).join(''))
    // console.log(document)
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style scoped>

article {
  margin: 50px auto;
  width: 60%;
}

article h2 {
  margin: 50px auto;
  text-align: center;
  font-size: 36px;
}

article h3 {
  margin: 50px auto;
  text-align: center;
  font-size: 30px;
}

article p {
  font-size: 24px;
  line-height : normal;
}

</style>
