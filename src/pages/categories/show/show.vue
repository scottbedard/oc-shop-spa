<style lang="scss" scoped>@import 'core';
    .products {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -20px -24px;
        width: 100%;

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

            a {
                display: block;
                padding: 24px 20px;

                &:hover {
                    text-decoration: none;
                }
            }

            h2 {
                margin: 0;
            }

            .money {
                margin: 0;
                text-align: right;
            }
        }
    }
</style>

<template>
    <v-page>
        <transition name="fade" mode="out-in">
            <v-loading v-if="isLoading">Loading category...</v-loading>
            <div v-else>
                <h1>{{ category.name }} ({{ productCount }} of {{ total }})</h1>
                <p>{{ category.description_plain }}</p>

                <!-- Empty -->
                <p v-if="isEmpty">This category is empty.</p>

                <!-- Products -->
                <div v-else class="products">
                    <div v-for="product in products">
                        <v-card>
                            <router-link :to="{ name: 'product', params: { slug: product.slug }}">
                                <h2>{{ product.name }}</h2>
                                <p>{{ product.description_plain }}</p>
                                <p class="money">{{ product.base_price | money }}</p>
                            </router-link>
                        </v-card>
                    </div>
                </div>
            </div>
        </transition>
    </v-page>
</template>

<script>
    import ShopRepository from 'oc-shop-api/repository';

    export default {
        created() {
            this.fetchCategory();
        },
        data() {
            return {
                category: {},
                isLoading: false,
                products: [],
                total: 0,
            };
        },
        computed: {
            isEmpty() {
                return this.productCount === 0;
            },
            productCount() {
                return this.products.length;
            },
        },
        methods: {
            fetchCategory() {
                this.isLoading = true;

                let category = ShopRepository.findCategory(this.$route.params.slug)
                    .then(this.onCategoryFetchComplete);

                let products = ShopRepository.getProducts({ categories: this.$route.params.slug })
                    .then(this.onProductsFetchComplete);

                Promise.all([category, products])
                    .then(this.onFetchComplete)
                    .catch(this.onFetchFailed);
            },
            onCategoryFetchComplete(response) {
                this.category = response.data;
            },
            onProductsFetchComplete(response) {
                this.total = response.data.total;
                this.products = response.data.results;
            },
            onFetchComplete(response) {
                this.isLoading = false;
            },
            onFetchFailed(error) {
                // @todo: add an error state
            },
        },
    };
</script>
