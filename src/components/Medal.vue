<template>
    <img :id="`image-${uuid}-${character}`" class="character-medal" :src="getImageUrl()">
    <div :id="`tooltip-${uuid}-${character}`" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
        {{ character }}
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
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
                    return new URL(`../assets/${this.character}.png`, window.location.href).href
                } else {
                    return new URL(`../assets/images/characters_medal/${this.character}.png`, import.meta.url).href
                }
            }
        },
        mounted() {
            const targetEl = document.getElementById(`tooltip-${this.uuid}-${this.character}`);
            const triggerEl = document.getElementById(`image-${this.uuid}-${this.character}`);

            this.tooltip = new Tooltip(targetEl, triggerEl, { placement: 'bottom' });
        }
    }
</script>
