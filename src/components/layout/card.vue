<style lang="scss" scoped>@import 'core';
    .v-card {
        display: block;
        border-radius: 3px;
        padding: 24px 20px;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    }
</style>

<template>
    <div class="v-card">
        <slot></slot>
    </div>
</template>
