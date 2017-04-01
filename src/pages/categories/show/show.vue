<template>
    <v-page>
        <transition name="fade" mode="out-in">
            <v-loading v-if="true">
                Loading category...
            </v-loading>
            <div v-else>

            </div>
        </transition>
    </v-page>
</template>
