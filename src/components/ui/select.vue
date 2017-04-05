<style lang="scss" scoped>@import 'core';
    .v-select-inner {
        position: relative;
    }

    select {
        appearance: none;
        padding: 12px 40px 12px 20px;
        border: 1px solid #ccc;
        color: #666;
        width: 100%;
        cursor: pointer;
    }

    .fa {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
    }
</style>

<template>
    <div class="v-select">
        <div class="v-select-inner">
            <select @input="onInput">
                <slot></slot>
            </select>
            <i class="fa fa-angle-down"></i>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            onInput(e) {
                this.$emit('input', e.target.value);
            },
        },
        props: {
            value: {
                required: true,
            },
        },
    };
</script>
