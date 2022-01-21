<template>
<div>
    <div>

      <ul class="card-container">
        <li v-for="(item, index) in document.results" :key="item.data.id">
          <md-card md-with-hover>
            <md-card-area>
              <md-card-media>
                <img :src="item.data['background-image'].url" alt="People">
              </md-card-media>

              <md-card-header>
                <div class="md-title">{{ item.data['headline2'].map(i => i.text).join('') }}</div>
<!--                <div class="md-subhead">Subtitle here</div>-->
              </md-card-header>

              <md-card-content>
                <p>
                  {{ item.data['resume'].map(i => i.text).join('')}}
                </p>
              </md-card-content>
            </md-card-area>

            <md-card-actions md-alignment="right">
              <a v-bind:href="'./article/' + item.uid">
                <md-button>Learn more</md-button>
              </a>

            </md-card-actions>
          </md-card>
        </li>
      </ul>

    </div>
</div>

</template>

<script>

export default {
  name: "list_article",

  async asyncData({ $prismic, error }) {
    const document = await $prismic.api.query($prismic.predicates.at('document.type','article'))

    // console.log(document.results)
    // document.results.forEach(item => console.log(item.data))

    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 50px;
}

ul {
  list-style-type : none;
}

li {
  margin: auto;
}

.md-card {
  width: 420px;
  margin: 20px auto;
  display: inline-block;
  vertical-align: top;
}
</style>
