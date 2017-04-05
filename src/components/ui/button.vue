<style lang="scss" scoped>@import 'core';
    button {
        appearance: none;
        border: 1px solid $vue-green;
        background-color: #fff;
        color: $vue-green;
        padding: 12px 20px;
        border-radius: 3px;
        transition: all 150ms ease-in-out;

        &:active {
            transform: translateY(2px);
        }

        &:focus {
            outline: 0;
        }

        &:hover {
            background-color: $vue-green;
            color: #fff;
        }
    }
</style>

<template>
    <button @click="onClick">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        methods: {
            onClick(e) {
                this.$emit('click', e);
            },
        },
    };
</script>
