<style lang="scss" scoped>@import 'core';

</style>

<template>
    <v-page>
        <transition name="fade" mode="out-in">
            <v-loading v-if="isLoading">Loading product...</v-loading>
            <div v-else>
                <h1>{{ product.name }}</h1>
                <p>{{ product.description_plain }}</p>
                <p>{{ product.base_price | money }}</p>

                <v-inventory-selector :product="product" />

                <v-button @click="onAddToCartClicked">
                    Add to cart
                </v-button>
            </div>
        </transition>
    </v-page>
</template>

<script>
    import Shop from 'oc-shop-api';

    export default {
        created() {
            this.fetchProduct();
        },
        data() {
            return {
                isLoading: false,
                product: {},
            };
        },
        components: {
            'v-inventory-selector': require('./inventory_selector/inventory_selector'),
        },
        methods: {
            fetchProduct() {
                this.isLoading = true;
                Shop.findProduct(this.$route.params.slug)
                    .then(this.onFetchComplete)
                    .catch(this.onFetchFailed);
            },
            onAddToCartClicked() {
                console.log ('ok');
            },
            onFetchComplete(response) {
                this.isLoading = false;
                this.product = response.data;
            },
            onFetchFailed(error) {
                // @todo: add an error state
            },
        },
    };
</script>
