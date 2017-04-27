<style lang="scss" scoped>@import 'core';
    .items {
        width: 100%;

        @include bp(tablet) {
            display: table;
        }
    }

    .header {
        font-weight: bold;
    }

    .footer {
        > div {
            padding: 12px 0;
        }
    }
</style>

<style lang="scss">@import 'core';
    .cart-page {
        @include bp(tablet) {
            .row {
                display: table-row;
                line-height: 36px;

                &:not(:last-child) > .cell {
                    border-bottom: 1px solid #e6e6e6;
                }
            }

            .cell {
                display: table-cell;
            }

            .quantity,
            .remove {
                width: 100px;
                text-align: center;
            }
        }
    }
</style>

<template>
    <v-page class="cart-page">
        <h1>Cart</h1>

        <div v-if="cartIsEmpty" class="empty-message">
            Your cart is empty.
        </div>

        <div v-else class="items">
            <!-- Header -->
            <div class="row">
                <div class="header cell product">Product</div>
                <div class="header cell price">Price</div>
                <div class="header cell quantity">Quantity</div>
                <div class="header cell remove">Remove</div>
            </div>

            <!-- Items -->
            <v-item
                v-for="item in cart.items"
                :item="item"
                :key="item.id"
            />

            <!-- Footer -->
            <div class="footer row">
                <div class="cell product"></div>
                <div class="cell price">{{ cartTotal | money }}</div>
                <div class="cell quantity">
                    <v-button class="checkout-link" size="small" :to="{ name: 'stripe-checkout' }">
                        Checkout
                    </v-button>
                </div>
                <div class="cell remove"></div>
            </div>
        </div>
    </v-page>
</template>

<script>
    import { mapGetters, mapState } from 'vuex';

    export default {
        components: {
            'v-item': require('./item/item'),
        },
        computed: {
            ...mapGetters({
                cartIsEmpty: 'shop/cartIsEmpty',
                cartTotal: 'shop/cartTotal',
            }),
            ...mapState({
                cart: state => state.shop.cart,
            }),
        },
    };
</script>
