<style lang="scss" scoped>@import 'core';
    .v-item {
        transition: opacity 150ms ease-in-out;
    }

    .cell {
        padding: 12px 0;
    }

    .is-loading {
        opacity: 0.5;
    }

    .quantity {
        input {
            text-align: center;
        }
    }
</style>

<template>
    <div class="v-item row" :class="{ 'is-loading': isLoading }">
        <div class="cell product">
            <span>{{ name }}</span>
        </div>
        <div class="cell price">{{ basePrice | money }}</div>
        <div class="cell quantity">
            <v-input
                v-model="quantity"
                min="0"
                size="small"
                type="number"
                :max="max"
            />
        </div>
        <div class="cell remove">
            <a href="#" @click.prevent="onRemoveClicked">
                <i class="fa fa-times"></i>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inventory: this.item.inventory,
                isLoading: false,
                quantity: this.item.quantity,
            };
        },
        computed: {
            basePrice() {
                return this.item.product.base_price;
            },
            name() {
                return this.item.product.name;
            },
            max() {
                return this.inventory ? this.inventory.quantity : null;
            },
        },
        methods: {
            onQuantityChanged(quantity) {
                this.isLoading = true;

                const payload = {
                    inventoryId: this.item.inventory_id,
                    quantity: this.quantity,
                };

                this.$store.dispatch('shop/updateQuantity', payload)
                    .then(this.onUpdateComplete)
                    .catch(this.onUpdateFailed)
                    .then(() => this.isLoading = false);
            },
            onRemoveClicked() {
                if (! this.isLoading) {
                    this.isLoading = true;

                    this.$store.dispatch('shop/removeFromCart', this.item.id)
                        .then(this.onRemoveComplete)
                        .catch(this.onRemoveFailed)
                        .then(() => this.isLoading = false);
                }
            },
            onRemoveComplete() {
                console.log ('all done');
            },
            onRemoveFailed(err) {
                // @todo: provide an error state
                console.error(err);
            },
            onUpdateComplete() {
                console.log ('done');
            },
            onUpdateFailed(err) {
                // @todo: provide an error state
                console.error(err);
            },
        },
        props: [
            'item',
        ],
        watch: {
            quantity: 'onQuantityChanged',
        },
    };
</script>
