<style lang="scss" scoped>@import 'core';
    // $hamburger-hover-opacity: 0.7 !default;
    $hamburger-hover-transition-duration: 0.25s !default;
    $hamburger-hover-transition-timing-function: ease-in-out;
    // $hamburger-layer-border-radius: 4px !default;
    $hamburger-layer-color: #666;
    $hamburger-layer-height: 2px;
    // $hamburger-layer-spacing: 6px !default;
    $hamburger-layer-width: 36px;
    // $hamburger-padding-x: 15px !default;
    // $hamburger-padding-y: 15px !default;

    @import 'hamburgers/_sass/hamburgers/hamburgers';

    .v-hamburger {
        left: 0;
        outline: 0;
        position: fixed;
        top: 3px;
        z-index: 3;
    }

    button {
        outline: none;

        // &.is-active {
        //     .hamburger-inner,
        //     .hamburger-inner:before,
        //     .hamburger-inner:after {
        //         background-color: #fff;
        //     }
        // }
    }
</style>

<template>
    <div class="v-hamburger">
        <button
            class="hamburger hamburger--vortex"
            type="button"
            :class="{ 'is-active': isActive }"
            @click.prevent="onClick">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    </div>
</template>

<script>
    export default {
        methods: {
            onClick() {
                this.$emit('click');
            },
        },
        props: {
            isActive: {
                type: Boolean,
            },
        },
    };
</script>
