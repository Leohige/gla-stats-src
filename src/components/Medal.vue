<template>
    <img :id="`image-${uuid}-${character}`" class="character-medal" :src="getImageUrl()">

</template>

<script>
    export default {
        props: {
            character: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                uuid: Math.random(),
                tooltip: ''
            }
        },
        methods: {
            getImageUrl() {
                if (process.env.NODE_ENV == 'production') {
                    return new URL(`../gla-wiki/assets/${this.character.toLowerCase()}.png`, window.location.href).href
                } else {
                    return new URL(`../assets/images/characters_medal/${this.character.toLowerCase()}.png`, import.meta.url).href
                }
            }
        }
    }
</script>
