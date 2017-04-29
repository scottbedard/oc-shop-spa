<style lang="scss" scoped>@import 'core';
    $duration: 200ms;

    header {
        height: 60px;
        position: relative;
        border-bottom: 1px solid #e0e0e0;
        margin-bottom: 24px;
    }

    .v-header-title {
        display: flex;
        font-size: 22px;
        font-weight: 300;
        position: absolute;
        right: 50%;
        top: 50%;
        transform: translateX(50%) translateY(-50%);
        transition: right $duration ease-in-out, transform $duration ease-in-out;

        @include bp(tablet) {
            right: 20px;
            transform: translateX(0%) translateY(-50%);
        }

        > a {
            margin-left: 20px;
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

    .user {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;
        justify-content: flex-end;
        text-align: right;

        > div,
        > a {
            display: block;
            flex-basis: auto;
            width: 100%;
        }

        > a {
            font-size: 12px;
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
        <div class="v-header-title">
            <div v-if="isAuthenticated" class="user">
                <div>Signed in as {{ user.email }}</div>
                <router-link :to="{ name: 'logout' }">Sign out</router-link>
            </div>
            <a href="https://github.com/scottbedard/oc-shop-plugin">
                <i class="fa fa-github"></i>
            </a>
        </div>
    </header>
</template>

<script>
    import { mapGetters, mapState } from 'vuex';

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
        computed: {
            ...mapGetters({
                isAuthenticated: 'user/isAuthenticated',
            }),
            ...mapState({
                user: state => state.user.model,
            }),
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
