<template>
    <img class="character-medal" :src="getImageUrl()">
</template>

<script>
export default {
    props: {
        character: {
            type: String,
            default: ''
        }
    },
    methods: {
        getImageUrl() {
            if (process.env.NODE_ENV == 'production') {
                return new URL(`../gla-wiki/assets/${this.character.toLowerCase()}.png`, window.location.href).href
            } else {
                return new URL(`../../assets/images/characters_medal/${this.character.toLowerCase()}.png`, import.meta.url).href
            }
        }
    }
}
</script>
