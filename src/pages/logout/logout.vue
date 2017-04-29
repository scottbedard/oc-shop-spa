<template>
    <v-page></v-page>
</template>

<script>
    export default {
        created() {
            this.logout().then(this.redirectToHome);
        },
        methods: {
            logout() {
                return this.$store.dispatch('user/logout');
            },
            redirectToHome() {
                this.$router.replace({ name: 'home' });
            },
        },
    };
</script>
