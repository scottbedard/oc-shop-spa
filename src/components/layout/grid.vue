<style lang="scss">
    ._v-global.v-grid {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
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
