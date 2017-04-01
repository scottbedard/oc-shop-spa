<template>
    <v-page>
        <transition name="fade" mode="out-in">
            <v-loading v-if="isLoading">Loading category...</v-loading>
            <div v-else>
                <h1>{{ category.name }}</h1>
                <p>{{ category.description_plain }}</p>
            </div>
        </transition>
    </v-page>
</template>

<script>
    import Shop from 'oc-shop-api';

    export default {
        created() {
            this.fetchCategory();
        },
        data() {
            return {
                category: {},
                isLoading: false,
            };
        },
        methods: {
            fetchCategory() {
                this.isLoading = true;

                Shop.findCategory(this.$route.params.slug)
                    .then(this.onFetchComplete)
                    .catch(this.onFetchFailed);
            },
            onFetchComplete(response) {
                this.category = response.data;
                this.isLoading = false;
            },
            onFetchFailed(error) {
                // @todo: add an error state
            },
        },
    };
</script>
