import Vuex from 'vuex';

import user from './user';

export default new Vuex.Store({
    modules: {
        user,
    },
    strict: process.env.NODE_ENV !== 'production',
});
