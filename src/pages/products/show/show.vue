<style lang="scss" scoped>@import 'core';
    .add-to-cart-inputs {
        margin-bottom: 24px;
        max-width: 320px;
    }
</style>

<template>
    <v-page>
        <transition name="fade" mode="out-in">
            <v-loading v-if="isLoading">Loading product...</v-loading>
            <div v-else>
                <h1>{{ product.name }}</h1>
                <p>{{ product.description_plain }}</p>
                <p>{{ product.base_price | money }}</p>

                <div class="add-to-cart-inputs">
                    <v-inventory-selector v-model="selectedInventory" :product="product" />
                    <div class="quantity">
                        <label for="quantity">Quantity</label>
                        <v-input
                            v-model="quantity"
                            id="quantity"
                            min="0"
                            type="number"
                            :max="maxQuantity"
                        />
                    </div>
                </div>

                <v-button
                    :disabled="! isAddable"
                    @click="onAddToCartClicked">
                    Add to cart
                </v-button>
            </div>
        </transition>
    </v-page>
</template>

<script>
    import ShopRepository from 'oc-shop-api/repository';

    export default {
        created() {
            this.fetchProduct();
        },
        data() {
            return {
                isLoading: false,
                product: {},
                quantity: 1,
                selectedInventory: null,
            };
        },
        components: {
            'v-inventory-selector': require('./inventory_selector/inventory_selector'),
        },
        computed: {
            isAddable() {
                return Boolean(this.selectedInventory);
            },
            maxQuantity() {
                return this.selectedInventory
                    ? this.selectedInventory.quantity
                    : null;
            },
        },
        methods: {
            fetchProduct() {
                this.isLoading = true;
                ShopRepository.findProduct(this.$route.params.slug)
                    .then(this.onFetchComplete)
                    .catch(this.onFetchFailed);
            },
            onAddComplete(response) {
                console.log ('did it', response);
            },
            onAddFailed() {
                // @todo: add an error state
            },
            onAddToCartClicked() {
                this.$store.dispatch('shop/addToCart', this.selectedInventory.id, this.quantity)
                    .then(this.onAddComplete)
                    .catch(this.onAddFailed);
            },
            onFetchComplete(response) {
                this.isLoading = false;
                this.product = response.data;
            },
            onFetchFailed(error) {
                // @todo: add an error state
            },
        },
        watch: {
            selectedInventory(selectedInventory) {
                if (selectedInventory && this.quantity > selectedInventory.quantity) {
                    this.quantity = selectedInventory.quantity;
                }
            },
        },
    };
</script>
