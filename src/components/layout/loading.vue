<style lang="scss" scoped>@import 'core';
    .v-loading {
        color: #666;
        font-weight: 300;
        text-align: center;
    }
</style>

<template>
    <div class="v-loading">
        <v-spinner />
        <p><slot></slot></p>
    </div>
</template>
