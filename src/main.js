import Vue from 'vue';
import VueRouter from 'vue-router';

// set up our global plugins and utilities
import './app/boot';

// once vuex is installed, install our shop module
import store from './app/store';
import shop from 'oc-shop-api';
import data from './app/initial_data';
shop.sync(store, { cart: data.cart });

// set up the router
import routes from './app/routes';

const router = new VueRouter({
    base: __dirname,
    mode: 'history',
    routes,
});

// send the pageview to google analytics
router.afterEach(route => {
    // ga('set', 'page', route.path);
    // ga('send', 'pageview');
});

// instantiate our application and mount it to the dom
/* eslint-disable no-new */
new Vue({
    render: h => h(require('./root')),
    el: '#app',
    router,
    store,
});
