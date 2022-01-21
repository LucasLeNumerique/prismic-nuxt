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
        <article-page :document="article_data" v-if="page === 'article'"/>
        <contact-page :data="contact_data" v-if="page === 'contact'"/>

        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul class="footer-links">
                  <li v-on:click="thepage('home')"><a href="#">Home Page</a></li>
                  <li v-on:click="thepage('article')"><a href="#">Articles</a></li>
                  <li v-on:click="thepage('contact')"><a href="#">Contact Us</a></li>

<!--                  <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>-->
<!--                  <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>-->
                </ul>
              </div>
            </div>
            <hr>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy; 2022
<!--                  All Rights Reserved by-->
<!--                  <a href="#">Scanfcode</a>.-->
                </p>
              </div>

              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                  <li><a class="facebook" href="#"><img class="fill" :src="footer_data['social-one'].url" alt=""></a></li>
                  <li><a class="twitter" href="#"><img class="fill" :src="footer_data['social-two'].url" alt=""></a></li>
<!--                  <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>-->
<!--                  <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>-->
                </ul>
              </div>
            </div>
          </div>
        </footer>

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
      let contact = await $prismic.api.getSingle('contact')
      let footer = await $prismic.api.getSingle('footer')
      console.log(footer.data)
      let document = await $prismic.api.query($prismic.predicates.at('document.type','article'))
      console.log(JSON.parse(JSON.stringify(contact.data.headline2[0].type)))
      if (home) {
        return {
          page: 'home',
          logo: menu.data.logo,
          home_data: home.data,
          article_data: document,
          contact_data: contact.data,
          footer_data: footer.data,
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

  .site-footer
  {
    background-color:#26272b;
    padding:45px 0 20px;
    font-size:15px;
    line-height:24px;
    color:#737373;
  }
  .site-footer div {
    max-width: 80%;
    margin: auto;
  }
  .site-footer img {
    filter: brightness(0) invert(1);;
    width: 70%;
    height: 70%;
    margin-top: 15%;
    vertical-align: initial;
  }
  .site-footer hr
  {
    border-top-color:#bbb;
    opacity:0.5;
    max-width: 80%;
  }
  .site-footer hr.small
  {
    margin:20px 0
  }
  .site-footer h6
  {
    color:#fff;
    font-size:16px;
    text-transform:uppercase;
    margin-top:5px;
    letter-spacing:2px
  }
  .site-footer a
  {
    color:#737373;
  }
  .site-footer a:hover
  {
    /*color:#3366cc;*/
    text-decoration:none;
  }
  .footer-links
  {
    padding-left:0;
    list-style:none
  }
  .footer-links li
  {
    display:block
  }
  .footer-links a
  {
    color:#737373
  }
  .footer-links a:active,.footer-links a:focus,.footer-links a:hover
  {
    /*color:#3366cc;*/
    text-decoration:none;
  }
  .footer-links.inline li
  {
    display:inline-block
  }
  .site-footer .social-icons
  {
    text-align:right
  }
  .site-footer .social-icons a
  {
    width:40px;
    height:40px;
    line-height:40px;
    margin-left:6px;
    margin-right:0;
    border-radius:100%;
    background-color:#33353d
  }
  .copyright-text
  {
    margin:0
  }
  @media (max-width:991px)
  {
    .site-footer [class^=col-]
    {
      margin-bottom:30px
    }
  }
  @media (max-width:767px)
  {
    .site-footer
    {
      padding-bottom:0
    }
    .site-footer .copyright-text,.site-footer .social-icons
    {
      text-align:center
    }
  }
  .social-icons
  {
    padding-left:0;
    margin-bottom:0;
    list-style:none
  }
  .social-icons li
  {
    display:inline-block;
    margin-bottom:4px
  }
  .social-icons li.title
  {
    margin-right:15px;
    text-transform:uppercase;
    color:#96a2b2;
    font-weight:700;
    font-size:13px
  }
  .social-icons a{
    background-color:#eceeef;
    color:#818a91;
    font-size:16px;
    display:inline-block;
    line-height:44px;
    width:44px;
    height:44px;
    text-align:center;
    margin-right:8px;
    border-radius:100%;
    -webkit-transition:all .2s linear;
    -o-transition:all .2s linear;
    transition:all .2s linear
  }
  .social-icons a:active,.social-icons a:focus,.social-icons a:hover
  {
    color:#fff;
    background-color:#29aafe
  }
  .social-icons.size-sm a
  {
    line-height:34px;
    height:34px;
    width:34px;
    font-size:14px
  }
  .social-icons a.facebook:hover
  {
    background-color:#3b5998
  }
  .social-icons a.twitter:hover
  {
    background-color:#ea4c89
  }
  .social-icons a.linkedin:hover
  {
    background-color:#007bb6
  }
  .social-icons a.dribbble:hover
  {
    background-color:#ea4c89
  }
  @media (max-width:767px)
  {
    .social-icons li.title
    {
      display:block;
      margin-right:0;
      font-weight:600
    }
  }

</style>
