<style lang="scss" scoped>@import 'core';
    .loading {
        color: #666;
        font-weight: 300;
        text-align: center;
    }

    .list {
        display: flex;
        flex-wrap: wrap;
        margin: -24px -20px;

        > div {
            flex-basis: auto;
            padding: 24px 20px;
            transition: width 150ms ease-in-out;
            width: 100%;
            @include bp(tablet) { width: 50% }
            @include bp(desktop) { width: 33.3333% }
        }

        .v-card {
            padding: 0;
            transition: transform 250ms ease-in-out;

            &:hover {
                transform: translateY(-4px);
            }
        }

        a {
            display: block;
            padding: 24px 20px;

            &:hover {
                text-decoration: none;
            }

            h2 {
                font-weight: 300;
                margin: 0;
            }
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
                <div v-for="category in categories" :key="category.id">
                    <v-card>
                        <router-link :to="{ name: 'category', params: { slug: category.slug }}">
                            <h2>{{ category.name }}</h2>
                            <p>{{ category.description_plain }}</p>
                        </router-link>
                    </v-card>
                </div>
            </div>
        </transition>
    </v-page>
</template>

<script>
    import Shop from 'oc-shop-api';

    export default {
        created() {
            this.fetchCategories();
        },
        data() {
            return {
                categories: [],
                isLoading: false,
                total: 0,
            };
        },
        methods: {
            fetchCategories() {
                this.isLoading = true;

                Shop.getCategories()
                    .then(this.onFetchComplete)
                    .catch(this.onFetchFailed);
            },
            onFetchComplete(response) {
                this.total = response.data.total;
                this.categories = response.data.results;
                this.isLoading = false;
            },
            onFetchFailed() {
                // @todo: display error state
            },
        },
    };
</script>
