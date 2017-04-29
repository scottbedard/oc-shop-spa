<style lang="scss">
    ._v-global.v-grid {
        display: flex;
        flex-wrap: wrap;
        flex: 1;

        &.v-padded {
            margin: -10px;

            .v-grid-cell {
                padding: 10px;
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
                'v-grid',
                data.staticClass || '',
                props.padded ? 'v-padded' : '',
            ]}>
                { children }
            </TagName>;
        },
        functional: true,
        props: {
            tagName: {
                default: 'div',
                type: String,
            },
            padded: {
                default: false,
                type: Boolean,
            },
        },
    };
</script>
