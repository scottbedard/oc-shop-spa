<style lang="scss" scoped>@import 'core';
    .v-login {
        form > div {
            padding: 12px 0;
        }
    }

    .v-login-loading {
        min-height: 240px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        span {
            padding: 24px 20px;
        }
    }
</style>

<template>
    <div class="v-login">
        <h2>Returning customers</h2>
        <transition name="fade" mode="out-in">
            <!-- Loading state -->
            <div v-if="isLoading" class="v-login-loading">
                <v-spinner />
                <span>Authenticating...</span>
            </div>

            <!-- Login form -->
            <form v-else @submit.prevent="onSubmit">
                <div>
                    <label for="email">Email</label>
                    <v-input
                        v-model="email"
                        id="email"
                        name="email"
                        type="email"
                        required
                    />
                </div>
                <div>
                    <label for="password">Password</label>
                    <v-input
                        v-model="password"
                        id="password"
                        name="password"
                        type="password"
                        required
                    />
                </div>
                <div>
                    <v-button>Sign in</v-button>
                </div>
            </form>
        </transition>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState({
                isLoading: state => state.user.loginForm.isLoading,
            }),
            email: {
                get() {
                    return this.$store.state.user.loginForm.email;
                },
                set(value) {
                    this.$store.commit('user/setLoginEmail', value);
                },
            },
            password: {
                get() {
                    return this.$store.state.user.loginForm.password;
                },
                set(value) {
                    this.$store.commit('user/setLoginPassword', value);
                },
            },
        },
        methods: {
            onSubmit() {
                this.$store.dispatch('user/authenticate');
            },
        },
    };
</script>
