export default [
    //
    // home
    //
    {
        name: 'home',
        path: '/',
        component: require('src/pages/home/home'),
    },

    //
    // cart
    //
    {
        name: 'cart',
        path: '/cart',
        component: require('src/pages/cart/cart'),
    },

    //
    // category
    //
    {
        name: 'category',
        path: '/categories/:slug',
        component: require('src/pages/categories/show/show'),
    },

    //
    // categories
    //
    {
        name: 'categories',
        path: '/categories',
        component: require('src/pages/categories/list/list'),
    },

    //
    // logout
    //
    {
        name: 'logout',
        path: '/logout',
        component: require('src/pages/logout/logout'),
    },

    //
    // products
    //
    {
        name: 'product',
        path: '/product/:slug',
        component: require('src/pages/products/show/show'),
    },

    //
    // stripe checkout
    //
    {
        name: 'stripe-checkout',
        path: '/checkout',
        component: require('src/pages/stripe_checkout/stripe_checkout'),
    },
];
