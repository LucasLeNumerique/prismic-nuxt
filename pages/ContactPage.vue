<template>
    <div>
        <div v-for="item in data.headline2" :key="item.id">
            <h2 class="md-display-1" v-if="item.type === 'heading2'"> {{item.text}}</h2>
        </div>
        <div v-for="item in data['contact-datas']" :key="item.id">
            <h2 class="first-title" v-if="item.type === 'heading3'"> {{item.text}} </h2>
            <h3 class="second-title" v-if="item.type === 'heading4'"> {{item.text}} </h3>
            <p class="mail" v-if="item.type === 'heading5'"> {{item.text}} </p>
        </div>
        <div class="member-card">
            <md-card v-for="card in data['contact-cards']" :key="card.id">
            <md-card-media-cover md-solid>
                <md-card-media md-ratio="1:1">
                <img :src="card['card-photo'].url" alt="Skyscraper">
                </md-card-media>

                <md-card-area>
                <md-card-header>
                    <span class="md-title">{{card['card-title'][0].text}}</span>
                    <span class="md-subhead">{{card['phone-number'][0].text}}</span>
                    <span class="md-subhead">{{card['email-member'][0].text}}</span>
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
        <div class="build" v-if="data.credit[0].type === 'paragraph'"> {{data.credit[0].type.text}} </div>
    </div>
</template>

<script>
 
export default {
    name: 'ContactPage',
    props: ['data']
}
</script>

<style lang="css">
    .first-title {
        margin-top: 80px;
        font-size: 40px;
    }
    .second-title {
        font-size: 25px;
    }
    .mail {
        color: #E19F3B !important;
    }
    .build {
        text-align: center;
        font-style: italic;
        color: grey;
    }
</style>
