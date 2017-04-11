<style lang="scss" scoped>@import 'core';
    input {
        appearance: none;
        border-radius: 3px;
        border: 1px solid #ccc;
        outline: 0;
        width: 100%;

        // hide number spinners
        &[type=number]::-webkit-inner-spin-button,
        &[type=number]::-webkit-outer-spin-button {
            appearance: none;
            margin: 0;
        }

        //
        // sizes
        //
        &.size-small {
            height: 36px;
            line-height: 36px;
            padding: 0 20px;
        }

        &.size-medium {
            height: 48px;
            line-height: 48px;
            padding: 0 20px;
        }
    }
</style>

<template>
    <input
        :class="[sizeClass]"
        :value="value"
        @input="onInput"
    />
</template>

<script>
    export default {
        computed: {
            sizeClass() {
                return `size-${ this.size }`;
            },
        },
        methods: {
            onInput(e) {
                this.$emit('input', e.target.value);
            },
        },
        props: {
            size: {
                default: 'medium',
                type: String,
                validator(size) {
                    return [
                        'small',
                        'medium',
                    ].indexOf(size) > -1;
                },
            },
            value: {},
        },
    };
</script>
