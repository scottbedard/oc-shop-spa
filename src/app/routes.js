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
    // products
    //
    {
        name: 'product',
        path: '/product/:slug',
        component: require('src/pages/products/show/show'),
    },
];
