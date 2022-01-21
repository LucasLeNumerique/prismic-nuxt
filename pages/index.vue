<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar :style="'background-image: url('+home_data['background-image'].url+');'" class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">

            <span class="md-title">
              <img :src="logo.url" :width="logo.dimensions.width" :height="logo.dimensions.height" alt="">
            </span>
          </div>
          <div v-for="item in home_data.headline1" :key="item.id">
            <h1 class="md-display-2" v-if="item.type === 'heading1'"> {{item.text}}</h1>
          </div>
        </div>

        <div class="md-toolbar-row md-toolbar-section-end">
          <md-tabs class="md-primary">
            <md-tab v-on:click="thepage('home')" id="tab-home" md-label="Accueil"></md-tab>
            <md-tab v-on:click="thepage('article')" id="tab-pages" md-label="Articles"></md-tab>
            <md-tab v-on:click="thepage('contact')" id="tab-posts" md-label="Contact"></md-tab>
            <!-- <md-tab id="tab-favorites" md-label="Favorites"></md-tab> -->
          </md-tabs>
        </div>
      </md-app-toolbar>
        
      <md-app-content>
        <home-page :data="home_data" v-if="page === 'home'"/>
        <article-page v-if="page === 'article'"/>
        <contact-page v-if="page === 'contact'"/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import HomePage from './HomePage.vue';
import ArticlePage from './ArticlePage.vue';
import ContactPage from './ContactPage.vue';



export default { 
  name: 'IndexPage',
  components: {
    HomePage,
    ContactPage,
    ArticlePage
  },
  methods: {
    thepage (newpage) {
        this.page = newpage
        console.log(this.page)
      // return this.page;
    }
  },
  
    async asyncData({ $prismic, params, error }) {
      let home = await $prismic.api.getSingle('homepage')
      let menu = await $prismic.api.getSingle('menu')
      console.log(JSON.parse(JSON.stringify(home.data['background-image'])))
      if (home) {
        return {
          page: 'home',
          logo: menu.data.logo,
          home_data: home.data
        } 
      } else {
        error({ statusCode: 404, message: 'Page not found' })
      }
  }
}
</script>


<style lang="css" >
  .md-app {
    height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

  .md-display-2 {
    text-align: center;
    color: #E19F3B !important;
  }
   
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>