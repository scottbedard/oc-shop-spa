<style lang="scss" scoped>@import 'core';
    .loading {
        color: #666;
        font-weight: 300;
        text-align: center;
    }

    .list {
        display: flex;

        > a {

        }
    }
</style>

<template>
    <v-page class="categories-page">
        <h1>Categories</h1>
        <transition name="fade" mode="out-in">
            <v-loading v-if="isLoading">
                Loading categories...
            </v-loading>
            <div class="list" v-else>
                <router-link
                    v-for="category in categories"
                    :to="{ name: 'category', params: { slug: category.slug }}">
                    {{ category.name }}
                </router-link>
            </div>
        </transition>
    </v-page>
</template>

<script>
    import Shop from 'oc-shop-api';

    export default {
        created() {
            Shop.getCategories()
                .then(this.onFetchComplete)
                .catch(this.onFetchFailed);
        },
        data() {
            return {
                categories: [],
                isLoading: false,
            };
        },
        methods: {
            onFetchComplete(response) {
                this.categories = response.data;
                this.isLoading = false;
            },
            onFetchFailed() {
                // @todo: display error state
            },
        },
    };
</script>
