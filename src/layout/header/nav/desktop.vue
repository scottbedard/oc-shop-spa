<style lang="scss" scoped>@import 'core';
    .v-desktop-nav {
        align-items: center;
        display: inline-flex;
        height: 100%;
        padding: 0 20px;
    }

    a {
        font-size: 16px;
        font-weight: 300;
        position: relative;

        &:not(:last-child) {
            margin-right: 20px;
        }

        &:after {
            background-color: $vue-green;
            border-radius: 1px;
            content: "";
            display: block;
            height: 2px;
            margin-top: 4px;
            position: absolute;
            top: 100%;
            transition: width 250ms ease-in-out;
            width: 0%;
        }

        &.is-active,
        &:hover {
            text-decoration: none;

            &:after {
                width: 100%;
            }
        }
    }
</style>

<template>
    <div class="v-desktop-nav">
        <router-link :to="{ name: 'home' }">
            Home
        </router-link>
        <router-link :to="{ name: 'categories' }">
            Categories
        </router-link>

        <router-link :to="{ name: 'cart' }">
            Cart ({{ items }})
        </router-link>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                items: 'shop/itemCount',
            }),
        },
    };
</script>
