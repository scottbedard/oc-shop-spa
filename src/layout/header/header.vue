<style lang="scss" scoped>@import 'core';
    $duration: 200ms;

    header {
        height: 60px;
        position: relative;
    }

    .v-header-title {
        font-size: 22px;
        font-weight: 300;
        position: absolute;
        right: 50%;
        transform: translateX(50%) translateY(-50%);
        top: 50%;
        transition: right $duration ease-in-out, transform $duration ease-in-out;

        @include bp(tablet) {
            right: 20px;
            transform: translateX(0%) translateY(-50%);
        }
    }

    .v-hamburger {
        transform: translateX(0%);
        transition: transform $duration ease-in-out;

        @include bp(tablet) {
            transform: translateX(-100%);
        }
    }

    .v-desktop-nav {
        left: 0;
        top: 0;
        transform: translateY(-100%);
        transition: transform $duration ease-in-out;

        @include bp(tablet) {
            transform: translateY(0%);
        }
    }
</style>

<template>
    <header>
        <!-- Mobile nav and hamburger -->
        <v-mobile-nav
            :is-active="mobileNavIsActive"
            @close="onMobileNavClosed"
        />

        <v-hamburger
            :is-active="mobileNavIsActive"
            @click="onHamburgerClicked"
        />

        <!-- Desktop nav -->
        <v-desktop-nav
        />

        <!-- Title -->
        <router-link class="v-header-title" to="/">oc-shop-plugin</router-link>
    </header>
</template>

<script>
    export default {
        created() {
            // close the mobile nav when the window is resized
            window.addEventListener('resize', () => this.mobileNavIsActive = false);
        },
        data() {
            return {
                mobileNavIsActive: false,
            };
        },
        components: {
            'v-desktop-nav': require('./nav/desktop'),
            'v-hamburger': require('./hamburger/hamburger'),
            'v-mobile-nav': require('./nav/mobile'),
        },
        methods: {
            onHamburgerClicked() {
                this.mobileNavIsActive = ! this.mobileNavIsActive;
            },
            onMobileNavClosed() {
                this.mobileNavIsActive = false;
            },
        },
    };
</script>
