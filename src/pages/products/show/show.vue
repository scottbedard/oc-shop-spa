<style lang="scss" scoped>@import 'core';
    .add-to-cart-inputs {
        margin-bottom: 24px;
        max-width: 320px;
    }

    .loading-message {
        align-items: center;
        display: flex;

        span {
            font-size: 14px;
            padding-left: 20px;
            font-weight: 300;
            color: $vue-green;
        }
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
                            v-model.number="quantity"
                            id="quantity"
                            min="0"
                            type="number"
                            :max="maxQuantity"
                        />
                    </div>
                </div>

                <transition name="fade" mode="out-in">
                    <div v-if="isAdding" class="loading-message">
                        <v-spinner size="small" />
                        <span>Adding to cart...</span>
                    </div>
                    <v-button
                        v-else
                        :disabled="! isAddable"
                        @click="onAddToCartClicked">
                        Add to cart
                    </v-button>
                </transition>
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
                isAdding: false,
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
                    .catch(this.onFetchFailed)
                    .then(() => this.isLoading = false);
            },
            onAddComplete(response) {
                console.log ('Added to cart');
            },
            onAddFailed() {
                // @todo: add an error state
            },
            onAddToCartClicked() {
                this.isAdding = true;

                let inventoryId = this.selectedInventory.id;
                let quantity = this.quantity;

                this.$store.dispatch('shop/addToCart', { inventoryId, quantity })
                    .then(this.onAddComplete)
                    .catch(this.onAddFailed)
                    .then(() => this.isAdding = false);
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
