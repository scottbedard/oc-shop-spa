<style lang="scss" scoped>@import 'core';
    // backdrop
    .v-mobile-nav-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1;
    }

    // content
    .v-mobile-nav-content {
        $duration: 250ms;
        background: #fefefe;
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
        height: 100%;
        left: 0;
        max-width: 70%;
        position: fixed;
        top: 0;
        transform: translateX(-100%);
        transition: box-shadow $duration ease-in-out, transform $duration ease-in-out;
        width: 320px;
        z-index: 2;
    }

    .is-active .v-mobile-nav-content {
        box-shadow: 4px 0px 10px 0px rgba(0, 0, 0, 0.5);
        transform: translateX(0%);
    }
</style>

<template>
    <div class="v-mobile-nav" :class="{ 'is-active': isActive }">
        <!-- Backdrop -->
        <transition name="fade" mode="out-in">
            <div
                v-if="isActive"
                class="v-mobile-nav-backdrop"
                @click.stop="onBackdropClicked">
            </div>
        </transition>

        <!-- Content -->
        <div class="v-mobile-nav-content">
            Hello from the mobile nav!
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            onBackdropClicked() {
                this.$emit('close');
            },
        },
        props: {
            isActive: {
                type: Boolean,
            },
        },
    };
</script>
