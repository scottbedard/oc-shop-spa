<style lang="scss" scoped>@import 'core';
    .v-desktop-nav {
        align-items: center;
        display: inline-flex;
        height: 100%;
        padding: 0 20px;
    }

    a {
        font-size: 14px;
        position: relative;
        // font-weight: 400;

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
        <router-link
            v-for="category in categories"
            :key="category.id"
            :to="`/categories/${ category.slug }`">
            {{ category.name }}
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            let data = document.querySelector('meta[name="bedard.shop"]').content;

            return {
                categories: JSON.parse(data).categories,
            };
        },
    };
</script>
