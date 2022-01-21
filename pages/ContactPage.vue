<template>
    <div>
        <h2 class="md-display-1"> {{data.headline2[0].text}}</h2>
    </div>
</template>

<script>
 
export default {
    name: 'ContactPage',
    props: ['data']
}
</script>