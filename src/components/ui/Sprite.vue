<template>
    <img class="item-sprite" :src="getImageUrl()">
</template>

<script>
export default {
    props: {
        item: {
            type: String,
            default: ''
        }
    },
    methods: {
        getImageUrl() {
            if (process.env.NODE_ENV == 'production') {
                return new URL(`../gla-wiki/assets/${this.item.toLowerCase()}.png`, window.location.href).href
            } else {
                return new URL(`../../assets/images/items/${this.item.toLowerCase()}.png`, import.meta.url).href
            }
        }
    }
}
</script>
