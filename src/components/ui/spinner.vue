<!--
    The style block is last in this component because @each loops
    break some syntax highlighters. Doing it this way saves our
    <template> and <script> blocks from fubared highlighting.
-->

<template>
    <!--
        Note: Do not change the bizarre indentation of the template.
              It is done this way to prevent whitespace bugs from
              shifting the line segments away from each other.
    -->
    <div class="v-material-spinner v-material-spinner-active" :style="{ height: sizePixels, width: sizePixels }">
        <div class="v-material-spinner-layer" :class="[ colorClass ]">
            <div class="v-material-spinner-circle-clipper v-material-spinner-left">
                <div class="v-material-spinner-circle" :style="{ borderWidth: strokeWidth }"></div>
            </div><div class="v-material-spinner-gap-patch">
                <div class="v-material-spinner-circle" :style="{ borderWidth: strokeWidth }"></div>
            </div><div class="v-material-spinner-circle-clipper v-material-spinner-right">
                <div class="v-material-spinner-circle" :style="{ borderWidth: strokeWidth }"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            colorClass() {
                return `v-material-spinner-color-${ this.color }`;
            },
            sizePixels() {
                return `${ this.sizeValue }px`;
            },
            sizeValue() {
                switch (this.size) {
                case 'small': return 24;
                case 'medium': return 60;
                case 'large': return 84;
                default: return this.convertToNumber(this.size);
                }
            },
            strokeWidth() {
                let stroke = this.convertToNumber(this.stroke);

                return `${ stroke }px`;
            },
        },
        methods: {
            convertToNumber(value) {
                return Number(String(value).replace(/\D/g, ''));
            },
        },
        props: {
            color: {
                default: 'vue-green',
                type: String,
            },
            size: {
                default: 'medium',
            },
            stroke: {
                default: '3px',
            },
        },
    };
</script>

<style lang="scss" scoped>@import 'core';
    .v-material-spinner {
        display: inline-block;
        position: relative;

        &.v-material-spinner-active {
            animation: container-rotate 1568ms linear infinite;
        }
    }

    .v-material-spinner-layer {
        border-color: $vue-green;
        height: 100%;
        opacity: 0;
        position: absolute;
        width: 100%;
    }

    %v-material-spinner-layer {
        animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0.0, 0.2, 1) infinite both;
        opacity: 1;
    }

    .v-material-spinner-active .v-material-spinner-layer {
        @extend %v-material-spinner-layer;
    }

    @each $name, $color in $colors {
        .v-material-spinner-color-#{ $name } { border-color: $color }
        .v-material-spinner-active .v-material-spinner-layer.v-material-spinner-color-#{ $name } {
            @extend %v-material-spinner-layer;
        }
    }

    .v-material-spinner-gap-patch {
        border-color: inherit;
        height: 100%;
        left: 45%;
        overflow: hidden;
        position: absolute;
        top: 0;
        width: 10%;
    }

    .v-material-spinner-gap-patch .v-material-spinner-circle {
        left: -450%;
        width: 1000%;
    }

    .v-material-spinner-circle-clipper {
        border-color: inherit;
        display: inline-block;
        height: 100%;
        overflow: hidden;
        position: relative;
        width: 50%;

        .v-material-spinner-circle {
            animation: none;
            border-bottom-color: transparent !important;
            border-color: inherit;
            border-radius: 50%;
            border-style: solid;
            bottom: 0;
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
            width: 200%;
        }

        &.v-material-spinner-left .v-material-spinner-circle {
            border-right-color: transparent !important;
            left: 0;
            transform: rotate(129deg);
        }

        &.v-material-spinner-right .v-material-spinner-circle {
            border-left-color: transparent !important;
            left: -100%;
            transform: rotate(-129deg);
        }
    }

    .v-material-spinner-active .v-material-spinner-circle-clipper.v-material-spinner-left .v-material-spinner-circle {
        animation: left-spin 1333ms cubic-bezier(0.4, 0.0, 0.2, 1) infinite both;
    }

    .v-material-spinner-active .v-material-spinner-circle-clipper.v-material-spinner-right .v-material-spinner-circle {
        animation: right-spin 1333ms cubic-bezier(0.4, 0.0, 0.2, 1) infinite both;
    }

    @keyframes fill-unfill-rotate {
        12.5% { transform: rotate(135deg) }
        25%   { transform: rotate(270deg) }
        37.5% { transform: rotate(405deg) }
        50%   { transform: rotate(540deg) }
        62.5% { transform: rotate(675deg) }
        75%   { transform: rotate(810deg) }
        87.5% { transform: rotate(945deg) }
        to    { transform: rotate(1080deg) }
    }

    @keyframes container-rotate {
        to { transform: rotate(360deg) }
    }

    @keyframes left-spin {
        from { transform: rotate(130deg) }
        50% { transform: rotate(-5deg) }
        to { transform: rotate(130deg) }
    }

    @keyframes right-spin {
        from { transform: rotate(-130deg) }
        50% { transform: rotate(5deg) }
        to { transform: rotate(-130deg) }
    }

    @keyframes fade-out {
        from { opacity: 1 }
        to { opacity: 0 }
    }
</style>
