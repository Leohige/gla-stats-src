<template>
    <div :id="`element-${uuid}`">
        <slot />
    </div>
    <div :id="`tooltip-${uuid}`" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
        {{ text }}
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "",
        },
        placement: {
            type: String,
            default: "top",
        },
    },
    data() {
        return {
            uuid: Math.random(),
            tooltip: "",
        };
    },
    mounted() {
        const targetEl = document.getElementById(`tooltip-${this.uuid}`);
        const triggerEl = document.getElementById(`element-${this.uuid}`);

        this.tooltip = new Tooltip(targetEl, triggerEl, {
            placement: this.placement
        });
    },
}
</script>
