<style lang="scss" scoped>@import 'core';
    input {
        appearance: none;
        border-radius: 3px;
        border: 1px solid #ccc;
        outline: 0;
        padding: 12px 20px;
        width: 100%;

        // hide number spinners
        &[type=number]::-webkit-inner-spin-button,
        &[type=number]::-webkit-outer-spin-button {
            appearance: none;
            margin: 0;
        }
    }
</style>

<template>
    <input :value="value" @input="onInput" />
</template>

<script>
    export default {
        methods: {
            onInput(e) {
                this.$emit('input', e.target.value);
            },
        },
        props: [
            'value',
        ],
    };
</script>
