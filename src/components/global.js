// These components are registered globally, and can be used
// anywhere within our application without importing them.
export default {
    //
    // layout
    //
    'v-card': require('./layout/card'),
    'v-grid-cell': require('./layout/grid_cell'),
    'v-grid': require('./layout/grid'),
    'v-loading': require('./layout/loading'),
    'v-page': require('./layout/page'),

    //
    // ui
    //
    'v-button': require('./ui/button'),
    'v-input': require('./ui/input'),
    'v-select': require('./ui/select'),
    'v-spinner': require('./ui/spinner'),
};
