<style lang="scss">@import 'core';
    ._v-global.v-grid-cell {
        flex-basis: auto;
        width: 100%;

        @for $i from 1 through 12 {
            &.mobile-#{ $i } {
                width: #{ $i / 12 * 100% };
            }
        }

        @each $breakpoint, $value in $breakpoints {
            @include bp($breakpoint) {
                @for $i from 1 through 12 {
                    &.#{ $breakpoint }-#{ $i } {
                        width: #{ $i / 12 * 100% };
                    }
                }
            }
        }
    }
</style>

<script>
    export default {
        render(h, { children, data, props }) {
            const TagName = props.tagName;

            return <TagName class={[
                '_v-global',
                'v-grid-cell',
                data.staticClass || '',
                props.mobile ? `mobile-${props.mobile}` : null,
                props.largePhone ? `large-phone-${props.largePhone}` : null,
                props.tablet ? `tablet-${props.tablet}` : null,
                props.desktop ? `desktop-${props.desktop}` : null,
            ]}>
                { children }
            </TagName>;
        },
        functional: true,
        props: {
            desktop: {
                default: null,
            },
            largePhone: {
                default: null,
            },
            mobile: {
                default: 12,
            },
            tablet: {
                default: null,
            },
            tagName: {
                default: 'div',
                type: String,
            },
        },
    };
</script>
