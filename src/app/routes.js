export default [
    {
        name: 'home',
        path: '/',
        component: require('src/pages/home/home'),
    },

    {
        name: 'category',
        path: '/categories/:slug',
        component: require('src/pages/categories/show/show'),
    },

    {
        name: 'categories',
        path: '/categories',
        component: require('src/pages/categories/list/list'),
    },

];
