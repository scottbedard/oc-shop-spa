<style lang="scss" scoped>@import 'core';
    a,
    button {
        appearance: none;
        border: 1px solid $vue-green;
        background-color: #fff;
        display: inline-block;
        color: $vue-green;
        border-radius: 3px;
        transition: all 150ms ease-in-out;

        &:active {
            transform: translateY(2px);
        }

        &:disabled {
            border-color: #ccc;
            color: #ccc;
        }

        &:focus {
            outline: 0;
        }

        &:hover {
            text-decoration: none;
        }

        &:not(:disabled):hover {
            background-color: $vue-green;
            color: #fff;
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
    <router-link v-if="to" :class="[sizeClass]" :to="to" @click="onClick">
        <slot></slot>
    </router-link>

    <button v-else @click="onClick" :class="[sizeClass]">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        computed: {
            sizeClass() {
                return `size-${ this.size }`;
            },
        },
        methods: {
            onClick(e) {
                this.$emit('click', e);
            },
        },
        props: {
            size: {
                default: 'medium',
                type: String,
                validator: size => ['small', 'medium'].indexOf(size) > -1,
            },
            to: {
                default: null,
            },
        },
    };
</script>
