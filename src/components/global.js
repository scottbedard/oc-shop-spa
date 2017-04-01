// These components are registered globally, and can be used
// anywhere within our application without importing them.
export default {
    //
    // layout
    //
    'v-card': require('./layout/card'),
    'v-loading': require('./layout/loading'),
    'v-page': require('./layout/page'),

    //
    // ui
    //
    'v-spinner': require('./ui/spinner'),
};
