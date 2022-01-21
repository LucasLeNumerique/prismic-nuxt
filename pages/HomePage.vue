<template>
    <div>
        <!-- <div v-for="item in data.headline1" :key="item.id">
            <h1 class="md-display-2" v-if="item.type === 'heading1'"> {{item.text}}</h1>
        </div> -->
        <div v-for="item in data['main-content']" :key="item.id">
            <h2 class="md-display-1" v-if="item.type === 'heading2'"> {{item.text}}</h2>
            <p class="about-contain" v-if="item.type === 'paragraph'"> {{item.text}}</p>
        </div>
        <div class="list-detail">
            <md-list class="list">
                <!-- <hr> -->
                <md-list-item class="list-details">{{data.members}} Membres </md-list-item>
                <md-list-item class="list-details">{{data.sponsor}} Sponsors</md-list-item>
                <md-list-item class="list-details">{{data.trophees}} Trophées</md-list-item>
            </md-list>
        </div>
        <div>
            <h2 class="md-display-1">{{data['member-section'][0].text}}</h2>
            <div class="member-card">
                <md-card v-for="card in data['member-list']" :key="card.id">
                <md-card-media-cover md-solid>
                    <md-card-media md-ratio="1:1">
                    <img :src="card['member-image'].url" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                    <md-card-header>
                        <span class="md-title">{{card['member-name'][0].text}}</span>
                        <span class="md-subhead">{{card['member-role'][0].text}}</span>
                    </md-card-header>

                    <!-- <md-card-actions>
                        <md-button class="md-icon-button">
                        <md-icon>favorite</md-icon>
                        </md-button>

                        <md-button class="md-icon-button">
                        <md-icon>share</md-icon>
                        </md-button>
                    </md-card-actions> -->
                    </md-card-area>
                </md-card-media-cover>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'HomePage',
    props: ['data'],
    async asyncData({ $prismic, params, error }) {
    // const document = await $prismic.api.query('')
    // let home = await $prismic.api.getSingle('homepage')
    // console.log(JSON.parse(JSON.stringify(home.data['main-content'])))
    // if (home) {
    //   return {
    //     data: home.data,
    //   } 
    // } else {
    //   error({ statusCode: 404, message: 'Page not found' })
    // }
  }
}
</script>

<style lang="css">
    .md-display-1 {
        text-align: center;
        color: #C06714 !important;
    }
    .about-contain {
        margin: auto 120px;
        text-align: justify;
    }
    .list-detail {
        text-align: center;
        position: relative;
        margin-top: 20px;
        border-bottom: solid;
        border-bottom-color: #E19F3B;
    }
    /* .list-detail:before {
        content : "";
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left    : 0;
        bottom  : 0;
        height  : 1px;
        width   : 20%;  
    } */
    .list-detail > .list {
        display: inline-block;
    }
    .list-details {
        border-top: solid;
        border-top-color: #E19F3B;
    }
    .list-details > div {
        font-size: 25px;
        color: #C06714 !important;
    }
    .md-headline {
        color: #C06714 !important;
    }

    .member-card {
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>