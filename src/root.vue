<!-- Pull in our global style sheet -->
<style lang="scss" src="global"></style>

<template>
    <div id="app">
        <v-header></v-header>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        components: {
            'v-header': require('./layout/header/header'),
        },
    };
</script>
