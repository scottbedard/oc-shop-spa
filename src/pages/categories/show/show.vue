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
                <h1>{{ category.name }} ({{ productCount }})</h1>
                <p>{{ category.description_plain }}</p>

                <!-- Empty -->
                <p v-if="isEmpty">This category is empty.</p>

                <!-- Products -->
                <div v-else class="products">
                    <div v-for="product in category.products">
                        <v-card>
                            <h2>{{ product.name }}</h2>
                            <p>{{ product.description_plain }}</p>
                            <p class="money">{{ product.base_price | money }}</p>
                        </v-card>
                    </div>
                </div>
            </div>
        </transition>
    </v-page>
</template>

<script>
    import Shop from 'oc-shop-api';

    export default {
        created() {
            this.fetchCategory();
        },
        data() {
            return {
                category: {},
                isLoading: false,
            };
        },
        computed: {
            isEmpty() {
                return this.productCount === 0;
            },
            productCount() {
                if (! Array.isArray(this.category.product_count) || ! this.category.product_count.length) {
                    return 0;
                }

                return this.category.product_count[0].count;
            },
        },
        methods: {
            fetchCategory() {
                this.isLoading = true;

                const params = {
                    with: [
                        'product_count',
                        'products',
                    ],
                };

                Shop.findCategory(this.$route.params.slug, params)
                    .then(this.onFetchComplete)
                    .catch(this.onFetchFailed);
            },
            onFetchComplete(response) {
                this.category = response.data;
                this.isLoading = false;
            },
            onFetchFailed(error) {
                // @todo: add an error state
            },
        },
    };
</script>
